import { Planet, PlanetSizes } from '@/lib/definitions';
import Image from 'next/image';

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
  const isOverview = tab === 'overview' || tab === 'geology';
  const isStructure = tab === 'structure';
  const isGeology = tab === 'geology';

  const sm = planetSizes.small;
  const md = planetSizes.medium;
  const lg = planetSizes.large;

  const planetName = planetData.name.toLowerCase();

  return (
    <div className="relative mx-auto flex h-[305px] w-full items-center justify-center md:h-[460px] lg:h-[700px]">
      <div
        className={`relative grid  h-[${sm}px] w-[${sm}px] md:h-[${md}px] md:w-[${md}px] lg:w-[${lg}px] items-end lg:h-[${lg}px]`}
      >
        {isOverview && (
          <Image
            src={`/assets/planet-${planetName}.svg`}
            alt={`Planet ${planetData.name}`}
            fill
            sizes="100%"
            priority
          />
        )}
        {isStructure && (
          <Image
            src={`/assets/planet-${planetName}-internal.svg`}
            alt={`Planet ${planetData.name}`}
            fill
            sizes="100%"
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
