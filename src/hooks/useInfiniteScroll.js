import { useEffect, useRef } from "react";

const useInfiniteScroll = (callback, loading) => {
  const observerRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (loading) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          callback();
        }
      },
      {
        threshold: 1,
      }
    );

    if (bottomRef.current) {
      observerRef.current.observe(bottomRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [callback, loading]);

  return bottomRef;
};

export default useInfiniteScroll;
