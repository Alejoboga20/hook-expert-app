import { renderHook } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('useCounter Tests', () => {
  test('should return default values', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(0);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });
});
