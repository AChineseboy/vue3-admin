export function addClass(el, cls) {
  const clses = cls.split(' ');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < clses.length; i++) {
    el.classList.add(clses[i]);
  }
}

export function removeClass(el, cls) {
  const clses = cls.split(' ');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < clses.length; i++) {
    el.classList.remove(clses[i]);
  }
}

export function hasClass(el, cls) {
  return el.classList.contains(cls);
}
