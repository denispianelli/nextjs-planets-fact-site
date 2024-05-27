import Earth from '@/components/earth';
import { Suspense } from 'react';

export const metadata = {
  title: 'Earth',
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Earth />
    </Suspense>
  );
}
