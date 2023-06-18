import { throttle } from './functionUtils';


describe('throttle', () => {
  let callback: jest.Mock;
  let throttledCallback: (...args: any[]) => void;
  let originalDateNow: () => number;

  beforeEach(() => {
    jest.useFakeTimers();
    callback = jest.fn();
    throttledCallback = throttle(callback, 200);
    originalDateNow = Date.now;
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
    Date.now = originalDateNow;
  });

  test('should call the callback immediately for the first invocation', () => {
    throttledCallback();

    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('should not call the callback if invoked within the throttle delay', () => {
    throttledCallback();
    throttledCallback();

    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('should call the callback after the throttle delay has passed', () => {
    throttledCallback();
    jest.advanceTimersByTime(201);
    throttledCallback();

    expect(callback).toHaveBeenCalledTimes(2);
  });

  test('should pass the arguments to the callback', () => {
    const args = ['arg1', 'arg2'];
    throttledCallback(...args);
    jest.advanceTimersByTime(201);
    throttledCallback(...args);

    expect(callback).toHaveBeenCalledWith(...args);
  });
});
