// Print Buffer GraphQL input types relevant to createPost
const { execFileSync } = require('child_process');
const KEY = require('./env')('BUFFER_API_KEY');
const gql = async (query, variables = {}) => (await (await fetch('https://api.buffer.com', { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + KEY }, body: JSON.stringify({ query, variables }) })).json());
const tn = t => t ? (t.kind === 'NON_NULL' ? tn(t.ofType) + '!' : t.kind === 'LIST' ? '[' + tn(t.ofType) + ']' : t.name) : '';
(async () => {
  const m = await gql(`{ __schema { mutationType { fields { name args { name type { kind name ofType { kind name ofType { kind name ofType { kind name } } } } } type { kind name ofType { kind name } } } } } }`);
  const cp = m.data.__schema.mutationType.fields.filter(f => /post/i.test(f.name));
  cp.forEach(f => console.log('MUTATION', f.name, f.args.map(a => a.name + ':' + tn(a.type)).join(', '), '->', tn(f.type)));
  const seen = new Set(); const queue = (process.argv[2] || 'CreatePostInput').split(',');
  while (queue.length) {
    const n = queue.shift(); if (seen.has(n)) continue; seen.add(n);
    const t = (await gql(`query($n:String!){ __type(name:$n){ kind name enumValues{name} inputFields{ name type { kind name ofType { kind name ofType { kind name ofType { kind name } } } } } fields{ name } possibleTypes{name} } }`, { n })).data.__type;
    if (!t) continue;
    console.log(`\n${t.kind} ${t.name}`);
    (t.inputFields || []).forEach(f => { console.log('  ', f.name, tn(f.type)); const base = tn(f.type).replace(/[\[\]!]/g, ''); if (!/^(String|Int|Boolean|Float|ID|DateTime)$/.test(base) && seen.size < 40) queue.push(base); });
    if (t.enumValues) console.log('   enum:', t.enumValues.map(e => e.name).join(' '));
    if (t.possibleTypes) console.log('   types:', t.possibleTypes.map(e => e.name).join(' '));
  }
})().catch(e => console.error(e.message));
