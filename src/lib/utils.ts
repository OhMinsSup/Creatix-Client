export const getScrollTop = () => {
  if (!document.body) return 0;
  const scrollTop = document.documentElement
    ? document.documentElement.scrollTop || document.body.scrollTop
    : document.body.scrollTop;
  return scrollTop;
};

export const getScrollBottom = () => {
  if (!document.body) return 0;
  const { scrollHeight } = document.body;
  const { innerHeight } = window;
  const scrollTop = getScrollTop();
  return scrollHeight - innerHeight - scrollTop;
};

export function detectJSDOM() {
  if (typeof navigator === 'undefined') return false;
  return navigator.userAgent.includes('jsdom');
}

export const getCurrentScrollPercentage = () => {
  const scroll =
    ((window.scrollY + window.innerHeight) / document.body.clientHeight) * 100;
  return scroll;
};
