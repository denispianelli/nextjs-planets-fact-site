import Uranus from '@/components/uranus';
import { Suspense } from 'react';

export const metadata = {
  title: 'Urannus',
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Uranus />
    </Suspense>
  );
}
