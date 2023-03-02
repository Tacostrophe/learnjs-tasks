function printListBackwardLoop(list) {
  let localList = list;
  let container = [];
  while (localList !== null) {
    container.push(localList.value);
    localList = localList.next;
  }
  while (container.length > 0) {
    console.log(container.pop());
  }
}

function printListBackwardRecursion(list) {
  let localList = list;
  if (localList.next) printListBackwardRecursion(localList.next);
  console.log(localList.value);
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
printListBackwardLoop(list);
printListBackwardRecursion(list);