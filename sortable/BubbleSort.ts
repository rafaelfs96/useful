export function BubbleSort(list: Array<any>): Array<any> {
  let swapped: boolean
  const length: number = list.length - 1
  do {
    swapped = false
    for(let i = 0; i < length; i++) {
      if(list[i] > list[i + 1]) {
        const temp = list[i]
        list[i] = list[i + 1]
        list[i + 1] = temp
        swapped = true
      }
    }
  } while(swapped)

  return list
}