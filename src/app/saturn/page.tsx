import Saturn from '@/components/saturn';
import { Suspense } from 'react';

export const metadata = {
  title: 'Saturn',
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Saturn />
    </Suspense>
  );
}
