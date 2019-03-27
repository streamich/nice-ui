import {useEffect} from 'react';

const defaultTarget = typeof window === 'object' ? window : {};

const useEvent = (name, handler, target: any = defaultTarget, options?) => {
  useEffect(() => {
    (target.addEventListener || target.on)(name, handler, options);
    return () => {
      (target.removeEventListener || target.off)(name, handler, options);
    };
  }, [name, handler, target, JSON.stringify(options)]);
};

export default useEvent;
