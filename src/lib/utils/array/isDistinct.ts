export const isDistinct = <T>(collection: Array<T>) => {
  const unique = [...new Set(collection)];

  return unique.length === collection?.length;
};
