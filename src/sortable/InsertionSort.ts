export function InsertionSort(list: Array<any>): Array<any> {
  const length: number = list.length

  for (let i = 1; i < length; i++) {
    if (list[i] < list[0]) {
      // move current element to the first position
      list.unshift(list.splice(i,1)[0])
    } 
    else if (list[i] > list[i-1]) {
      // maintain element position
      continue
    } 
    else {
      // find where element should go
      for (let j = 1; j < i; j++) {
        if (list[i] > list[j - 1] && list[i] <= list[j]) {
          // move element
          list.splice(j, 0, list.splice(i,1)[0])
        }
      }
    }
  }
  return list
}