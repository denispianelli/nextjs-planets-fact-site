import Venus from '@/components/venus';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Venus />
    </Suspense>
  );
}
