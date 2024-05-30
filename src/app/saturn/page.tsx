import { PlanetTemplate } from '@/components/planet-template';
import { Suspense } from 'react';
const data = require('@/lib/data.json');

export const metadata = {
  title: 'Saturn',
};

export default function Page() {
  const planetData = data[5];

  const planetSizes = {
    small: 256,
    medium: 422,
    large: 666,
  };

  return (
    <Suspense fallback={null}>
      <PlanetTemplate planetData={planetData} planetSizes={planetSizes} />
    </Suspense>
  );
}
