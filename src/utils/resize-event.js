/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
function resizeHandle(entries) {
  // eslint-disable-next-line no-restricted-syntax
  for (const entrie of entries) {
    entrie.target.__resizeListeners__.forEach((listener) => {
      listener(entries);
    });
  }
}
function defaultListener() {
  throw new Error('Listener callback is required');
}
export function addResizeEvent(el, callback = defaultListener) {
  if (!el.__resizeListeners__) {
    el.__resizeListeners__ = [];
    el.__resizeObserver__ = new ResizeObserver(resizeHandle);
    el.__resizeObserver__.observe(el);
  }
  el.__resizeListeners__.push(callback);
}
export function removeResizeEvent(el, callback) {
  console.log(el, callback);
}
