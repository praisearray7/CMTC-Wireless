'use client';

import { Suspense } from 'react';
import ContactUs from '../../pages/ContactUs';

export default function Page() {
    return (
        <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading...</div>}>
            <ContactUs />
        </Suspense>
    );
}
