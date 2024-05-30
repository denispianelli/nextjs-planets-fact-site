import { Planet } from '@/lib/definitions';
import { League_Spartan } from 'next/font/google';

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

const PlanetInfoTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h4
      className={`${leagueSpartan.className} text-h4 font-bold text-white/50 lg:mt-[20px]`}
    >
      {children}
    </h4>
  );
};

const PlanetInfoContent = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-[20px] lg:text-[40px]">{children}</p>;
};

const PlanetInfoWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-[24px] flex justify-between border border-white/20 px-6 py-2 md:mx-0 md:flex-col lg:h-[128px] lg:w-[255px]">
      {children}
    </div>
  );
};

const PlanetInfos: React.FC<{ planetData: Planet }> = ({ planetData }) => {
  return (
    <div className="mt-[28px] grid gap-2 uppercase md:mx-[40px] md:grid-cols-4 md:gap-[11px] lg:col-span-2 lg:m-0 lg:flex lg:justify-center lg:gap-[30px] lg:text-left">
      <PlanetInfoWrapper>
        <PlanetInfoTitle>rotation time</PlanetInfoTitle>
        <PlanetInfoContent>{planetData.rotation}</PlanetInfoContent>
      </PlanetInfoWrapper>

      <PlanetInfoWrapper>
        <PlanetInfoTitle>revolution time</PlanetInfoTitle>
        <PlanetInfoContent>{planetData.revolution}</PlanetInfoContent>
      </PlanetInfoWrapper>

      <PlanetInfoWrapper>
        <PlanetInfoTitle>radius</PlanetInfoTitle>
        <PlanetInfoContent>{planetData.radius}</PlanetInfoContent>
      </PlanetInfoWrapper>

      <PlanetInfoWrapper>
        <PlanetInfoTitle>average temp.</PlanetInfoTitle>
        <PlanetInfoContent>{planetData.temperature}</PlanetInfoContent>
      </PlanetInfoWrapper>
    </div>
  );
};

export { PlanetInfos };
