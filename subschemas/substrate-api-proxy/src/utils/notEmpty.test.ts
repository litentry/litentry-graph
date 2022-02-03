import { notEmpty } from './notEmpty';

describe('notEmpty util', () => {
  test.each([
    [null, false],
    [undefined, false],
    ['', false],
    [1, true],
    ['test', true],
    [[1, 2, 3], true],
    [{ test: 'test' }, true],
  ])('notEmpty(%p)', async (value: any, expected: boolean) => {
    expect(Boolean(value)).toBe(expected);
  });
});
