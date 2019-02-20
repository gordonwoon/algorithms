const recursiveMap = obj => {
  if(!Array.isArray(obj)) return obj;
  let res = [];
  for (data of obj) {
    res = res.concat(recursiveMap(data))
  }
  return res;
}
