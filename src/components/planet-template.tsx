'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { PlanetHeader } from './planet-header';
import { PlanetDisplay } from './planet-display';
import { PlanetDescription } from './planet-description';
import { PlanetInfos } from './planet-infos';
import Header from './page-header';
import { Planet, PlanetSizes } from '@/lib/definitions';
import { PlanetTab } from './planet-tab';

interface PlanetTemplateProps {
  planetData: Planet;
  planetSizes: PlanetSizes;
}

const PlanetTemplate: React.FC<PlanetTemplateProps> = ({
  planetData,
  planetSizes,
}) => {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab');
  const pathname = usePathname();
  const { replace } = useRouter();
  const planetName = planetData.name.toLowerCase();

  useEffect(() => {
    const VALID_TABS = ['overview', 'structure', 'geology'];

    if (!tab || !VALID_TABS.includes(tab)) {
      replace(`${pathname}?tab=overview`);
    }
  }, [tab, pathname, replace]);

  return (
    <main className="h-screen">
      <Header />
      <PlanetHeader planet={planetName} />
      <section className="lg:grid lg:grid-cols-[760px,350px] lg:justify-center">
        <PlanetDisplay
          planetSizes={planetSizes}
          planetData={planetData}
          tab={tab!}
        />

        <div className="mx-[24px] md:mx-[40px] md:grid md:grid-cols-2 lg:mx-0 lg:flex lg:w-[350px] lg:flex-col lg:justify-center lg:justify-self-end">
          <PlanetDescription planetData={planetData} tab={tab!} />
          <PlanetTab planet="mercury" />
        </div>

        <PlanetInfos planetData={planetData} />
      </section>
    </main>
  );
};

export { PlanetTemplate };
