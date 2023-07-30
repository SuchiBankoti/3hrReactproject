class Arrayy {
  constructor(...arr) {
    this.arr = arr;
  }
  map = (fn) => {
    let temp = new Array(this.arr.length);
    for (let i = 0; i < this.arr.length; i++) {
      temp[i] = fn(this.arr[i], i);
    }
    return temp;
  };
  filter = (fn) => {
    let count = 0;
    let newArr = new Array(this.arr.length);
    for (let i = 0; i < this.arr.length; i++) {
      if (fn(this.arr[i])) {
        newArr[count++] = this.arr[i];
        // count++;
      }
    }
    let temp = new Array(count);
    for (let i = 0; i < temp.length; i++) {
      temp[i] = newArr[i];
    }
    return temp;
  };
}
const arr = new Arrayy(1, 2, 3);
const result = arr.map((e) => {
  return e + 1;
});
console.log(result);
const filteredArr = arr.filter((e) => e !== 1);
console.log(filteredArr);
