import { PlanetTemplate } from '@/components/planet-template';
import { Suspense } from 'react';
const data = require('@/lib/data.json');

export const metadata = {
  title: 'Mercury',
};

export default function Page() {
  const planetData = data[0];

  const planetSizes = {
    small: 111,
    medium: 184,
    large: 290,
  };

  return (
    <Suspense fallback={null}>
      <PlanetTemplate planetData={planetData} planetSizes={planetSizes} />
    </Suspense>
  );
}
