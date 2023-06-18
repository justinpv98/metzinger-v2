export function throttle(cb: Function, delay = 200) {
  let previousTime = 0;

  return (...args: any[]) => {
    let now = new Date().getTime();

    if (now - previousTime > delay) {
      previousTime = now;

      return cb(...args);
    }
  };
}
