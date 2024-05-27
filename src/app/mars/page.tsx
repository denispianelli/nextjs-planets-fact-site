import Mars from '@/components/mars';
import { Suspense } from 'react';

export const metadata = {
  title: 'Mars',
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Mars />
    </Suspense>
  );
}
