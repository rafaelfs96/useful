export function MergeSort(list: Array<any>): Array<any> {
  const length: number = list.length

  // an array of length == 1 is technically a sorted list
  if(length === 1) return list

  // get mid item
  const middleIndex: number = Math.ceil(length / 2)

  // split current list into two: left and right list
  let leftList: Array<any> = list.slice(0, middleIndex)
  let rightList: Array<any> = list.slice(middleIndex, length)

  leftList = MergeSort(leftList)
  rightList = MergeSort(rightList)

  return Merge(leftList, rightList)
}

function Merge(leftList: Array<any>, rightList: Array<any>): Array<any> {
  const sorted: Array<any> = []

  while(leftList.length > 0 && rightList.length > 0) {
    const leftItem = leftList[0]
    const rightItem = rightList[0]

    if(leftItem > rightItem) {
      sorted.push(rightItem)
      rightList.shift()
    } else {
      sorted.push(leftItem)
      leftList.shift()
    }
  }

  // if left list has items, add what is left to the results
  while(leftList.length !== 0) {
    sorted.push(leftList[0])
    leftList.shift()
  }

  // if right list has items, add what is left to the results
  while(rightList.length !== 0) {
    sorted.push(rightList[0])
    rightList.shift()
  }

  // merge the left and right list
  return sorted
}