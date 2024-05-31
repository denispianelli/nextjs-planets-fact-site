'use client';

import { League_Spartan } from 'next/font/google';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { TabButton } from './ui/button';

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

const PlanetTab: React.FC<{ planet: string }> = ({ planet }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const tab = searchParams.get('tab');
  console.log('planet =', planet);

  const handleTabClick = (tab: string) => {
    replace(`${pathname}?tab=${tab}`);
  };
  return (
    <div
      className={`hidden text-h3 md:flex md:flex-col md:items-end md:justify-center ${leagueSpartan.className} gap-4 font-bold lg:mt-[39px] [&>*]:uppercase`}
    >
      <TabButton
        onClick={() => handleTabClick('overview')}
        isActive={tab === 'overview'}
        planet={planet}
        label="overview"
        index={1}
      />
      <TabButton
        onClick={() => handleTabClick('structure')}
        isActive={tab === 'structure'}
        planet={planet}
        label="internal structure"
        index={2}
      />
      <TabButton
        onClick={() => handleTabClick('geology')}
        isActive={tab === 'geology'}
        planet={planet}
        label="surface geology"
        index={3}
      />
    </div>
  );
};

export { PlanetTab };
