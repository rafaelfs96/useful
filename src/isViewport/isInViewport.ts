export function isInViewport(element: HTMLElement, part: string = 'any'): boolean {
  const rect: DOMRect = element.getBoundingClientRect()

  const windowHeight: number = (window.innerHeight || document.documentElement.clientHeight)
  const windowWidth: number = (window.innerWidth || document.documentElement.clientWidth)

  if('any' === part) {
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0)
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0)

    return (vertInView && horInView)

  } else if ('complete' === part) {
    return (rect.top >= 0 && rect.left >= 0 && rect.right <= windowWidth && rect.bottom <= windowHeight)
  } else return null
}
