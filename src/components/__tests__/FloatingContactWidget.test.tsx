import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import FloatingContactWidget from '../FloatingContactWidget';

// Mock GSAP to avoid animation errors during tests
vi.mock('@gsap/react', () => ({
    useGSAP: vi.fn((callback) => callback()),
}));

vi.mock('gsap', () => ({
    default: {
        timeline: () => ({
            to: vi.fn().mockReturnThis(),
            fromTo: vi.fn().mockReturnThis(),
            set: vi.fn().mockReturnThis(),
        }),
    },
}));

describe('FloatingContactWidget', () => {
    it('renders the main toggle button (closed state)', () => {
        render(<FloatingContactWidget />);
        // Find button by the image inside it
        const mainButton = screen.getByAltText('Support').closest('button');
        expect(mainButton).toBeInTheDocument();
        // Just check if the image is present, assuming it's the closed state
        expect(screen.getByAltText('Support')).toBeInTheDocument();
    });

    it('reveals options when hovered/clicked', () => {
        render(<FloatingContactWidget />);

        // Find main button container (it has the mouse enter listeners)
        // Since we can't easily query by listeners, we target the wrapper box or specific icon button
        // The component structure is Box (listeners) -> Box (actions) + Box (Relative) -> IconButton

        // Let's trigger mouseEnter on the root element. 
        // We'll assume the first div is the container. 
        // Better: trigger click on the button to open it.
        const mainButton = screen.getByAltText('Support').closest('button');
        if (!mainButton) throw new Error('Main button not found');
        fireEvent.click(mainButton);

        // Expect WhatsApp and Phone buttons to be in the document
        const whatsappLink = screen.getByLabelText('Chat on WhatsApp');
        const phoneLink = screen.getByLabelText('Call Us');

        expect(whatsappLink).toBeInTheDocument();
        expect(phoneLink).toBeInTheDocument();
    });

    it('dismisses the widget when close button is clicked', () => {
        render(<FloatingContactWidget />);

        // The close/dismiss button is small and absolute positioned.
        // It has a CloseIcon inside. 
        // There are two close icons when open (one main toggle, one dismiss).
        // The dismiss button has size="small", the other is default/large.
        // We can find it by finding the button that handles the click.

        // Actually, there's specific accessibility logic we might miss, 
        // but let's look for the small icon button.
        const buttons = screen.getAllByRole('button');
        // The first one in DOM order should be the Dismiss button (top of relative box)?
        // Wait, Layout: Box -> [Actions] -> Box(Rel) -> [DismissBtn, MainBtn].
        // Dismiss btn is first in the relative box.

        // Let's rely on the fact that the dismiss button calls setIsVisible(false).
        // Since we don't have text on it, we can look for the button containing the CloseIcon 
        // that ISN'T the main toggle when open.
        // The main toggle shows an Image when closed.

        // So when closed, there is 1 button with image (Main) and 1 button with CloseIcon (Dismiss).
        // Let's find the button with the CloseIcon.

        // Actually, the keys might conflict if we aren't careful.
        // Let's try to query by testId if possible, but I can't modify the code right now easily without another step.
        // Let's try to find the button with the dismiss logic.

        // The dismiss button has `size="small"`.
        // We can just click the buttons and see if the component disappears.

        // Let's assume the button with the smaller close icon is the one.
        // Or simpler: The widget is present. We click the dismiss button. The widget is gone.

        const mainToggle = screen.getByAltText('Support').closest('button');
        expect(mainToggle).toBeInTheDocument();

        // Get all buttons.
        const allButtons = screen.getAllByRole('button');
        // Filter out the main toggle
        const dismissButton = allButtons.find(btn => btn !== mainToggle && !btn.getAttribute('href'));

        if (dismissButton) {
            fireEvent.click(dismissButton);
        } else {
            throw new Error('Dismiss button not found');
        }

        // Now the entire widget should be null (removed from DOM)
        expect(screen.queryByAltText('Support')).not.toBeInTheDocument();
    });
});
