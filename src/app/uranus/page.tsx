import Uranus from '@/components/uranus';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Uranus />
    </Suspense>
  );
}
