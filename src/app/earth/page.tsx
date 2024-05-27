import Earth from '@/components/earth';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Earth />
    </Suspense>
  );
}
