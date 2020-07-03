export default (el, setEl = el) => {
  let parent = el.value.parentNode;
  let padding = 20;
  let i = 0;
  while (i < 10000 && parent.className !== 'zm-menu') {
    if (parent.className !== 'menu') {
      padding += 20;
    }
    parent = parent.parentNode;
    i += 1;
  }
  // eslint-disable-next-line no-param-reassign
  setEl.value.style.paddingLeft = `${padding}px`;
};
