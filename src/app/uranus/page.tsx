import { PlanetTemplate } from '@/components/planet-template';
import { Suspense } from 'react';
const data = require('@/lib/data.json');

export const metadata = {
  title: 'Uranus',
};

export default function Page() {
  const planetData = data[6];

  const planetSizes = {
    small: 176,
    medium: 290,
    large: 458,
  };

  return (
    <Suspense fallback={null}>
      <PlanetTemplate planetData={planetData} planetSizes={planetSizes} />
    </Suspense>
  );
}
