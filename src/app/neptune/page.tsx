import Neptune from '@/components/neptune';
import { Suspense } from 'react';

export const metadata = {
  title: 'Neptune',
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Neptune />
    </Suspense>
  );
}
