import Link from 'next/link';
import { League_Spartan } from 'next/font/google';
import Image from 'next/image';
import type { Planet } from '@/lib/definitions';

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

export interface PlanetDescriptionProps {
  planetData: Planet;
  tab: string;
}

const PlanetTitle = ({ planetData }: { planetData: Planet }) => {
  return (
    <h1 className="mb-4 text-[40px] uppercase md:text-left lg:text-[80px]">
      {planetData.name}
    </h1>
  );
};

const PlanetDescriptionContent = ({
  planetData,
  tab,
}: PlanetDescriptionProps) => {
  return (
    <p
      className={`${leagueSpartan.className} text-sm text-white/70 md:text-left`}
    >
      {tab === 'overview' && planetData.overview.content}
      {tab === 'structure' && planetData.structure.content}
      {tab === 'geology' && planetData.geology.content}
    </p>
  );
};

const PlanetSourceLink = ({ planetData, tab }: PlanetDescriptionProps) => {
  return (
    <p
      className={`${leagueSpartan.className} mt-[32px] flex items-center justify-center text-white/50 md:justify-start`}
    >
      Source :&nbsp;{' '}
      <Link
        className="flex items-center gap-1 font-bold underline"
        href={planetData[tab]?.source || '/'}
        target="_blank"
      >
        Wikipedia{' '}
        <Image
          src={'/assets/icon-source.svg'}
          alt="Icon Source"
          width={12}
          height={12}
        />
      </Link>
    </p>
  );
};

const PlanetDescription: React.FC<PlanetDescriptionProps> = ({
  planetData,
  tab,
}) => {
  return (
    <div>
      <PlanetTitle planetData={planetData} />
      <PlanetDescriptionContent planetData={planetData} tab={tab} />
      <PlanetSourceLink planetData={planetData} tab={tab} />
    </div>
  );
};

export { PlanetDescription };
