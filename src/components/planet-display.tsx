'use client';

import { Planet, PlanetSizes } from '@/lib/definitions';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export interface PlanetDisplayProps {
  planetSizes: PlanetSizes;
  planetData: Planet;
  tab: string;
}

const PlanetDisplay: React.FC<PlanetDisplayProps> = ({
  planetSizes,
  planetData,
  tab,
}) => {
  const [mounted, setMounted] = useState(false);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  const isOverview = tab === 'overview' || tab === 'geology';
  const isStructure = tab === 'structure';
  const isGeology = tab === 'geology';

  const sm = planetSizes.small;
  const md = planetSizes.medium;
  const lg = planetSizes.large;

  const planetName = planetData.name.toLowerCase();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative mx-auto flex h-[305px] w-full items-center justify-center md:h-[460px] lg:h-[700px]" />
    );
  }

  return (
    <div className="relative mx-auto flex h-[305px] w-full items-center justify-center md:h-[460px] lg:h-[700px]">
      <div className={`relative grid`}>
        {isOverview && (
          <Image
            src={`/assets/planet-${planetName}.svg`}
            alt={`Planet ${planetData.name}`}
            width={isMobile ? `${sm}` : isTablet ? `${md}` : `${lg}`}
            height={isMobile ? `${sm}` : isTablet ? `${md}` : `${lg}`}
            priority
          />
        )}
        {isStructure && (
          <Image
            src={`/assets/planet-${planetName}-internal.svg`}
            alt={`Planet ${planetData.name}`}
            width={isMobile ? `${sm}` : isTablet ? `${md}` : `${lg}`}
            height={isMobile ? `${sm}` : isTablet ? `${md}` : `${lg}`}
          />
        )}
      </div>
      {isGeology && (
        <Image
          src={planetData.images.geology}
          alt={`${planetData.name} Geology`}
          width={163}
          height={199}
          priority
          className="absolute left-1/2 grid -translate-x-1/2 translate-y-[70px] transform lg:translate-y-[90%] "
        />
      )}
    </div>
  );
};

export { PlanetDisplay };
