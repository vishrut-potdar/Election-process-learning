import { describe, it, expect } from 'vitest';
import { cn } from './lib/utils';

describe('Utility Functions', () => {
  describe('cn utility', () => {
    it('merges class names correctly', () => {
      expect(cn('base', 'extra')).toBe('base extra');
    });

    it('handles conditional classes', () => {
      expect(cn('base', true && 'is-true', false && 'is-false')).toBe('base is-true');
    });

    it('handles object syntax for classes', () => {
      // Note: clsx (which cn usually wraps) supports objects
      expect(cn({ 'class-a': true, 'class-b': false })).toContain('class-a');
      expect(cn({ 'class-a': true, 'class-b': false })).not.toContain('class-b');
    });
  });
});
