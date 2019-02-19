const isPrimitive = val => {
  return val == null || /^[sbn]/.test(typeof val);
};

const objectLooksLike = (a, b) => {
  if ((a === null && b === null) || (a === undefined && b === undefined)) {
    return true;
  }
  return Boolean(
    a &&
      b &&
      Object.keys(b).every(bKey => {
        const bVal = b[bKey];
        const aVal = a[bKey];
        if (typeof bVal === 'function') {
          return bVal(aVal);
        }
        return isPrimitive(bVal) ? bVal === aVal : objectLooksLike(aVal, bVal);
      }),
  );
};

module.exports = objectLooksLike;
