import Mars from '@/components/mars';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Mars />
    </Suspense>
  );
}
