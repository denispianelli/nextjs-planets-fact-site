import { PlanetTemplate } from '@/components/planet-template';
import { Suspense } from 'react';
const data = require('@/lib/data.json');

export const metadata = {
  title: 'Earth',
};

export default function Page() {
  const planetData = data[2];

  const planetSizes = {
    small: 173,
    medium: 285,
    large: 450,
  };

  return (
    <Suspense fallback={null}>
      <PlanetTemplate planetData={planetData} planetSizes={planetSizes} />
    </Suspense>
  );
}
