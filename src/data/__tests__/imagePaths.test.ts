import { describe, it, expect } from 'vitest';
import { getImagePath } from '../imagePaths';

describe('getImagePath', () => {
    it('returns absolute URLs as is', () => {
        const url = 'https://example.com/image.png';
        expect(getImagePath(url)).toBe(url);
    });

    it('prepends BASE_URL to relative paths', () => {
        const path = 'logo.png';
        // Mock import.meta.env.BASE_URL
        // Since we are not in a real Vite env during this specific test execution manner without setup, 
        // we might check what it returns or if it's undefined (defaulting to / or similar).
        // By default in test environment it might be '/'.
        
        const result = getImagePath(path);
        expect(result).toMatch(/\/logo.png$/);
    });
});
