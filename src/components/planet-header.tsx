'use client';

import { League_Spartan } from 'next/font/google';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { HeaderTabButton } from './ui/button';
import styles from '@/app/ui/home.module.css';

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

const PlanetHeader: React.FC<{ planet: string }> = ({ planet }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const tab = searchParams.get('tab');

  const planetBorder = `${planet}-border`;

  const handleTabClick = (tab: string) => {
    replace(`${pathname}?tab=${tab}`);
  };

  return (
    <header className="border-b border-white/20 px-6 text-h3 md:hidden">
      <ul
        className={`${leagueSpartan.className} grid grid-cols-3 gap-4 text-[9px] font-bold leading-none [&>*]:uppercase [&>button]:py-4`}
      >
        <HeaderTabButton
          className={(tab === 'overview' && styles[planetBorder]) || ''}
          tab="overview"
          onClick={handleTabClick}
        >
          overview
        </HeaderTabButton>
        <HeaderTabButton
          className={(tab === 'structure' && styles[planetBorder]) || ''}
          tab="structure"
          onClick={handleTabClick}
        >
          structure
        </HeaderTabButton>
        <HeaderTabButton
          className={(tab === 'geology' && styles[planetBorder]) || ''}
          tab="geology"
          onClick={handleTabClick}
        >
          surface
        </HeaderTabButton>
      </ul>
    </header>
  );
};

export { PlanetHeader };
