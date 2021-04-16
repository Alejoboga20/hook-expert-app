import { act, renderHook } from '@testing-library/react-hooks';
import useForm from '../../hooks/useForm';

describe('useForm test', () => {
  const initialFormValues = {
    name: 'Alejo',
    email: 'alejo@email.com'
  };

  const newFormValues = {
    name: 'name',
    value: 'new name'
  };

  test('should return a default form', () => {
    const { result } = renderHook(() => useForm(initialFormValues));
    const [values] = result.current;
    expect(values).toEqual(initialFormValues);
  });

  test('should change form value for name', () => {
    const { result } = renderHook(() => useForm(initialFormValues));
    const [, handleInputChange] = result.current;
    act(() => handleInputChange({ target: newFormValues }));
    const [values] = result.current;
    expect(values).toEqual({ ...initialFormValues, name: 'new name' });
  });

  test('should reset the form', () => {
    const { result } = renderHook(() => useForm(initialFormValues));
    const [, handleInputChange, reset] = result.current;
    act(() => {
      handleInputChange({ target: newFormValues }), reset();
    });
    const [values] = result.current;
    expect(values).toEqual(initialFormValues);
  });
});
