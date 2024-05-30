'use client';

import { League_Spartan } from 'next/font/google';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { HeaderTabButton } from './ui/button';

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

const PlanetHeader: React.FC<{ planet: string }> = ({ planet }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const tab = searchParams.get('tab');

  const handleTabClick = (tab: string) => {
    replace(`${pathname}?tab=${tab}`);
  };

  return (
    <header className="border-b border-white/20 px-6 text-h3 md:hidden">
      <ul
        className={`${leagueSpartan.className} grid grid-cols-3 gap-4 text-[9px] font-bold leading-none [&>*]:uppercase [&>button]:py-4`}
      >
        <HeaderTabButton
          tab="overview"
          currentTab={tab}
          planet={planet}
          onClick={handleTabClick}
        >
          overview
        </HeaderTabButton>
        <HeaderTabButton
          tab="structure"
          currentTab={tab}
          planet={planet}
          onClick={handleTabClick}
        >
          structure
        </HeaderTabButton>
        <HeaderTabButton
          tab="geology"
          currentTab={tab}
          planet={planet}
          onClick={handleTabClick}
        >
          surface
        </HeaderTabButton>
      </ul>
    </header>
  );
};

export { PlanetHeader };
