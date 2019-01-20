export default (obj = {}) => ([
  (craic, drink) => (obj[craic] || (obj[craic] = [])).push(drink) && (() => obj[craic].sort(fn => fn === drink ? 1 : -1).pop() && 'eff off'),
  (craic, msg) => (obj[craic] || []).forEach(fn => fn(msg))
])
