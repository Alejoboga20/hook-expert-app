import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

const defaultUrl = 'https://www.breakingbadapi.com/api/quotes/1';

describe('useFetch tests', () => {
  test('should return default values', () => {
    const { result } = renderHook(() => useFetch(defaultUrl));
    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test('should have data, loading false, error false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(defaultUrl)
    );

    await waitForNextUpdate();
    const { data, loading, error } = result.current;

    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });
});
