import Neptune from '@/components/neptune';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Neptune />
    </Suspense>
  );
}
