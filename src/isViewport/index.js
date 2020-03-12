HTMLElement.prototype.isOneHundredPercentOfElementInViewport = function() {
  const rect = this.getBoundingClientRect()

  const windowHeight = (window.innerHeight || document.documentElement.clientHeight)
  const windowWidth = (window.innerWidth || document.documentElement.clientWidth)

  return (rect.top >= 0 && rect.left >= 0 && rect.right <= windowWidth && rect.bottom <= windowHeight)
}

HTMLElement.prototype.isAnyPartOfElementInViewport = function() {
  const rect = this.getBoundingClientRect()

  const windowHeight = (window.innerHeight || document.documentElement.clientHeight)
  const windowWidth = (window.innerWidth || document.documentElement.clientWidth)

  const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0)
  const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0)

  return (vertInView && horInView)
}