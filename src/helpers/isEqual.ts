type isEqualObject = Record<string | number | symbol, unknown>;

export const isEqual = (firstObj: isEqualObject, secondObj: isEqualObject): boolean => {
  const firstObjKeys = Object.keys(firstObj);
  const secondObjKeys = Object.keys(secondObj);

  if (firstObjKeys.length !== secondObjKeys.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = firstObj[key];
    const val2 = secondObj[key];

    const areObjects = isObject(val1) && isObject(val2);

    if ((areObjects && !isEqual(val1, val2)) || (!areObjects && val1 !== val2)) {
      return false;
    }
  }

  return true;
};

function isObject(object: isEqualObject) {
  return object != null && typeof object === 'object';
}
