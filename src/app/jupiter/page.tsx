import Jupiter from '@/components/jupiter';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Jupiter />
    </Suspense>
  );
}
