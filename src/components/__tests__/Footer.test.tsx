import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Footer from '../Footer';
import { BrowserRouter } from 'react-router-dom';

// Mock child components that might use animation or excessive rendering
vi.mock('../animations/StaggerContainer', () => ({
    default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}));

describe('Footer', () => {
    it('renders the copyright text centered', () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );

        const year = new Date().getFullYear();
        const copyright = screen.getByText((content) => content.includes(`© ${year} CMTC Wireless`));

        expect(copyright).toBeInTheDocument();
        expect(copyright).toHaveStyle({ textAlign: 'center' });

        // Check the parent container for centering class/style if possible
        // The parent Box has justifyContent: 'center'
        const parentBox = copyright.parentElement;
        // checking computed style might be tricky with jsdom/vitest without full CSS parsing, 
        // but checking the prop passed to sx (converted to class) is hard.
        // We trust the code change for the flex property, but we can verify the text-align on the Typography.
    });
});
