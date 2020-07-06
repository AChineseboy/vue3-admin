import { hasClass } from '@/utils/dom';

export default (el, setEl = el) => {
  let parent = el.value.parentNode;
  let padding = 20;
  while (!hasClass(parent, 'zm-menu')) {
    if (!hasClass(parent, 'zm-menu-children')) {
      padding += 20;
    }
    parent = parent.parentNode;
  }
  // eslint-disable-next-line no-param-reassign
  setEl.value.style.paddingLeft = `${padding}px`;
};
