export function isInViewport(element: HTMLElement, part: string = 'any'): boolean {
  const rect: DOMRect = element.getBoundingClientRect()

  const windowHeight: number = (window.innerHeight || document.documentElement.clientHeight)
  const windowWidth: number = (window.innerWidth || document.documentElement.clientWidth)

  let result: boolean

  switch(part) {
    case 'any':
      const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0)
      const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0)
  
      result = (vertInView && horInView)
      break
    
    case 'complete':
      result = (rect.top >= 0 && rect.left >= 0 && rect.right <= windowWidth && rect.bottom <= windowHeight)
      break

    default:
      result = null
  }

  return result
}
