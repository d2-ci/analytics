import { useState, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
const initialState = {
  width: 0,
  height: 0
};
export const useParentSize = function (elementRef, renderCounter) {
  let initialSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : initialState;
  const [size, setSize] = useState({
    width: initialSize.width || 0,
    height: initialSize.height || 0
  });
  useEffect(() => {
    const el = elementRef.current && elementRef.current.parentElement;

    if (!el) {
      return;
    }

    const onResize = () => {
      setSize({
        width: el.clientWidth,
        height: el.clientHeight
      });
    };

    onResize(el);

    if (renderCounter) {
      setSize(initialState);
    }

    const observer = new ResizeObserver(onResize);
    observer.observe(el);
    return () => observer.disconnect();
  }, [elementRef, renderCounter]);
  return size;
};