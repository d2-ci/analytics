import { useState, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
const initialSize = {
  width: 0,
  height: 0
};
export const useParentSize = ({
  elementRef,
  renderCounter,
  availableWidth
}) => {
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
      console.log('jj onResize use clientWidth', el.clientWidth);
      setSize({
        width: el.clientWidth,
        height: el.clientHeight
      });
    };
    onResize(el);
    if (renderCounter) {
      console.log('jj renderCounter, reset w to 0');
      setSize(initialSize);
    }
    const observer = new ResizeObserver(onResize);
    observer.observe(el);
    return () => observer.disconnect();
  }, [elementRef, renderCounter]);
  useEffect(() => {
    console.log('jj availWidth setSize ', availableWidth);
    setSize(prevSize => ({
      ...prevSize,
      width: availableWidth || prevSize.width
    }));
  }, [availableWidth]);
  return size;
};