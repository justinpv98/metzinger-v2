import { fireEvent, renderHook } from "@testing-library/react";
import useScrollPosition from "./useScrollPosition";

describe("useScrollPosition", () => {
  let originalScroll: () => void;

  beforeAll(() => {
    originalScroll = window.scrollTo;
    window.scrollTo = jest.fn();
  });

  afterAll(() => {
    window.scrollTo = originalScroll;
  });

  it("should return the initial scroll position", () => {
    const { result } = renderHook(() => useScrollPosition());
    expect(result.current).toBe(0);
  });

  it("should update scroll position on scroll", () => {
    const { result } = renderHook(() => useScrollPosition());

    fireEvent.scroll(window, { target: { pageYOffset: 100 } });
    expect(result.current).toBe(100);

    fireEvent.scroll(window, { target: { pageYOffset: 200 } });
    expect(result.current).toBe(200);
  });
});
