export const filterObj = (obj, exclude=[]) => {
  let newObj = {};
  const keys = Object.keys(obj);
  keys.forEach(key => {
    if (!_.includes(exclude, key)) {
      newObj[key] = JSON.parse(JSON.stringify(obj[key]));
    }
  });

  return newObj;
}

