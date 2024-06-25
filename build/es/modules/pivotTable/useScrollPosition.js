import debounce from 'lodash/debounce';
import { useState, useCallback, useEffect } from 'react';
export const useScrollPosition = function (containerRef) {
  let debounceWait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0
  });
  const onScroll = useCallback(debounce(() => {
    const scroll = {
      x: containerRef.current.scrollLeft,
      y: containerRef.current.scrollTop
    };
    setScrollPosition(scroll);
  }, debounceWait));
  useEffect(() => {
    const currentRef = containerRef.current;

    if (!currentRef) {
      return;
    }

    currentRef.addEventListener('scroll', onScroll);
    return () => {
      currentRef.removeEventListener('scroll', onScroll);
    };
  }, [containerRef, onScroll]);
  return scrollPosition;
};