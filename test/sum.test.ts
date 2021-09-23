import sum from '../src/sum';

describe('test story', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
    expect(1).toBe(1);
  });
});
