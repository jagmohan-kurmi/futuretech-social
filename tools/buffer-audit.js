const { execFileSync } = require('child_process'); const fs = require('fs');
const KEY = execFileSync('reg',['query','HKCU\\Environment','/v','BUFFER_API_KEY']).toString().match(/REG_SZ\s+(\S+)/)[1];
const gql = async (query, variables = {}) => { const r = await fetch('https://api.buffer.com', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + KEY }, body: JSON.stringify({ query, variables }) }); const j = await r.json(); if (j.errors) console.log('ERR', JSON.stringify(j.errors).slice(0, 400)); return j.data; };
(async () => {
  const org = (await gql('query { account { organizations { id name } } }')).account.organizations[0];
  const chans = (await gql(`query($o:OrganizationId!){ channels(input:{organizationId:$o}){ id name displayName service isQueuePaused } }`, { o: org.id })).channels;
  const out = { org, channels: [] };
  for (const c of chans) {
    const ch = { ...c, sent: [], scheduled: 0, drafts: 0 };
    let after = null;
    for (let page = 0; page < 10; page++) {
      const d = await gql(`query($o:OrganizationId!,$c:[ChannelId!],$a:String){ posts(first:50, after:$a, input:{organizationId:$o, filter:{status:[sent], channelIds:$c}}){ pageInfo{endCursor hasNextPage} edges{ node{ id text dueAt sentAt metricsUpdatedAt metrics{ type name value unit } assets{ __typename } } } } }`, { o: org.id, c: [c.id], a: after });
      if (!d) break;
      ch.sent.push(...d.posts.edges.map(e => e.node));
      if (!d.posts.pageInfo.hasNextPage) break; after = d.posts.pageInfo.endCursor;
    }
    for (const [st, k] of [['scheduled', 'scheduled'], ['draft', 'drafts']]) {
      const d = await gql(`query($o:OrganizationId!,$c:[ChannelId!]){ posts(first:50, input:{organizationId:$o, filter:{status:[${st}], channelIds:$c}}){ edges{ node{ id dueAt } } } }`, { o: org.id, c: [c.id] });
      ch[k] = d ? d.posts.edges.length : 'n/a';
    }
    out.channels.push(ch);
    console.log(`${c.service} ${c.displayName}: sent=${ch.sent.length} scheduled=${ch.scheduled} drafts=${ch.drafts}`);
  }
  fs.writeFileSync('buffer_audit.json', JSON.stringify(out, null, 1));
})().catch(e => console.error(e.message));
