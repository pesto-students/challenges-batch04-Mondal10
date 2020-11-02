function chunkArrayInGroups(array, chunkSize) {
  if (!array.length) return [];

  const initialChunk = array.slice(0, chunkSize);
  const remaining = array.slice(chunkSize);

  // recursively call to chunk-up the remaining elements
  return [initialChunk, ...chunkArrayInGroups(remaining, chunkSize)];
}

export {
  chunkArrayInGroups,
};
