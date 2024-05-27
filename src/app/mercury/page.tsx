import Mercury from '@/components/mercury';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Mercury />
    </Suspense>
  );
}
