import {theme} from '../theme';

describe('theme', () => {
  it('has expected interface', () => {
    expect(typeof theme).toBe('object');
    expect(typeof theme.black).toBe('string');
    expect(typeof theme.steel).toBe('string');
    expect(typeof theme.slate).toBe('string');
    expect(typeof theme.silver).toBe('string');
    expect(theme.smoke instanceof Array).toBe(true);
    expect(theme.snow instanceof Array).toBe(true);
  });
});
