function printListLoop(list) {
  let localList = list;
  while (localList !== null) {
    console.log(localList.value);
    localList = localList.next;
  }
}

function printListRecursion(list) {
  let localList = list;
  console.log(localList.value);
  if (localList.next) printListRecursion(localList.next);
}

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
printListLoop(list);
printListRecursion(list);