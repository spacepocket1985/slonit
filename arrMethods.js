const mySlice = (arr, start = 0, end = arr.length) => {
  if (start < 0) start += arr.length;
  if (end < 0) end += arr.length;

  start = Math.max(0, Math.min(start, arr.length));
  end = Math.max(0, Math.min(end, arr.length));

  const result = [];

  for (let i = start; i < end; i++) {
    result.push(arr[i]);
  }

  return result;
};

const myIndexOf = (arr, item, from = 0) => {
  if (from < 0) from += arr.length;
  from = Math.max(0, Math.min(from, arr.length));

  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }

  return -1;
};

const myIncludes = (arr, item, from = 0) => {
  if (from < 0) from += arr.length;
  from = Math.max(0, Math.min(from, arr.length));

  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }

  return false;
};
