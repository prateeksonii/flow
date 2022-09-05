export const selectionSort = (list: Number[]) => {
  for (let index = 0; index < list.length - 1; index++) {
    let minElement = list[index]!;
    let minIndex = index;

    for (let subIndex = index + 1; subIndex < list.length; subIndex++) {
      if (list[subIndex]! < minElement) {
        minElement = list[subIndex]!;
        minIndex = subIndex;
      }
    }

    let temp = list[index]!;
    list[index] = list[minIndex]!;
    list[minIndex] = temp;
  }
};
