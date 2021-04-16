import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('useCounter Tests', () => {
  test('should return default values', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(0);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });

  test('should return counter seted value', () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.counter).toBe(10);
  });

  test('should increment the counter by 1', () => {
    const initialCounter = 0;
    const { result } = renderHook(() => useCounter(initialCounter));
    const { increment } = result.current;
    act(() => increment());
    const { counter } = result.current;
    expect(counter).toBe(initialCounter + 1);
  });

  test('should decrement the counter by 1', () => {
    const initialCounter = 0;
    const { result } = renderHook(() => useCounter(initialCounter));
    const { decrement } = result.current;
    act(() => decrement());
    const { counter } = result.current;
    expect(counter).toBe(initialCounter - 1);
  });

  test('should reset the counter', () => {
    const initialCounter = 0;
    const { result } = renderHook(() => useCounter(initialCounter));
    const { reset } = result.current;
    act(() => reset());
    const { counter } = result.current;
    expect(counter).toBe(initialCounter);
  });
});
