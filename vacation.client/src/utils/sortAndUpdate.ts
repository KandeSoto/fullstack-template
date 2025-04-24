export function updateAndSortList<T extends object>(
  list: T[],
  newItem: T,
  idKey: keyof T,
  descriptionKey: keyof T
): T[] {
  const id = newItem[idKey];
  const existing = list.find(item => item[idKey] === id);

  const sortedList = existing
    ? list.map(item => (item[idKey] === id ? { ...item, ...newItem } : item))
    : [...list, newItem];

  return sortedList.sort((a, b) => {
    const descA = String(a[descriptionKey]).toLowerCase();
    const descB = String(b[descriptionKey]).toLowerCase();

    const nameComparison = descA.localeCompare(descB);
    return nameComparison === 0 ? Number(a[idKey]) - Number(b[idKey]) : nameComparison;
  });
}
