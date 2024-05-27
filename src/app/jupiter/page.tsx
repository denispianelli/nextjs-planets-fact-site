import Jupiter from '@/components/jupiter';
import { Suspense } from 'react';

export const metadata = {
  title: 'Jupiter',
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Jupiter />
    </Suspense>
  );
}
