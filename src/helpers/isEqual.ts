type isEqualObject = Record<string | number | symbol, unknown>;

export const isEqual = (firstObj: isEqualObject, secondObj: isEqualObject): boolean => {
  const firstObjKeys = Object.keys(firstObj);
  const secondObjKeys = Object.keys(secondObj);

  if (firstObjKeys.length !== secondObjKeys.length) {
    return false;
  }

  for (const key of firstObjKeys) {
    const val1 = firstObj[key] as isEqualObject;
    const val2 = secondObj[key] as isEqualObject;

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
