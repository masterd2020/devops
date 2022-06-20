import {it, expect, describe} from 'vitest';

import {sum} from './example'

describe('sum()', () => {
  it('should return the addition of the two number given', () => {
    const num1 = 2;
    const num2 = 4;

    const value = sum(num1, num2);

    expect(value).toBe(6)
  })
})