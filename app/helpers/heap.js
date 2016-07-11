var Heap = function() {
  const arr = [];
  const that = {};

  const comp = function(a, b) {
    return a[0] > b[0]
  };

  const parent = function(n) {
    return (n === 0 ? -1 : Math.floor((n-1) / 2));
  };

  const leftChild = function(n) {
    return n * 2 + 1;
  };

  const rightChild = function(n) {
    return n * 2 + 2;
  };

  const swap = function(firstNode, secondNode) {
    const temp = arr[firstNode];
    arr[firstNode] = arr[secondNode];
    arr[secondNode] = temp;
    return;
  };

  const bubbleUp = function(p) {
    const parentValue = parent(p);
    if (parentValue === -1) {
      return;
    } else if (comp(arr[p], arr[parentValue])) {
      swap(p, parentValue);
      bubbleUp(parentValue);
      return;
    }
  };

  const bubbleDown = function(p) {
    const c = leftChild(p);
    var index = p;

    [0,1].forEach(function(i) {
      if ((c + i) < arr.length) {
        if (comp(arr[c+i], arr[index])) {
          index = c + i;
        }
      }
    });

    if (index != p) {
      swap(p, index);
      bubbleDown(index);
    }
    return;
  }

  that.push = function(element) {
    arr.push(element);
    bubbleUp(arr.length - 1);
    return;
  };

  that.pop = function() {
    if (arr.length === 0) {
      return "Can't call pop on an empty heap";
    }
    const max = arr[0];
    arr[0] = arr[arr.length - 1];
    arr.pop();
    bubbleDown(0);
    return max;
  };

  that.size = function() {
    return arr.length;
  };

  that.heap = function() {
    return arr;
  }

  return that;
}

module.exports = Heap;
