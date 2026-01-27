import { Suspense } from 'react';
import BuyDevice from '../../pages/BuyDevice';

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BuyDevice />
        </Suspense>
    );
}
