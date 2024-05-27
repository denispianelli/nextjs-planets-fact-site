'use client';

import clsx from 'clsx';
import { League_Spartan } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
const data = require('@/lib/data.json');

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

const VALID_TABS = ['overview', 'structure', 'geology'];

export default function Neptune() {
  const [activeImage, setActiveImage] = useState(data[7].images.planet);
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab');
  const pathname = usePathname();
  const { replace } = useRouter();
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!tab || !VALID_TABS.includes(tab)) {
      replace(`${pathname}?tab=overview`);
    }
  }, [tab, pathname, replace]);

  function handleOverviewClick() {
    replace(`${pathname}?tab=overview`);
    setActiveImage(data[7].images.planet);
  }

  function handleStructureClick() {
    replace(`${pathname}?tab=structure`);
    setActiveImage(data[7].images.internal);
  }

  function handleGeologyClick() {
    replace(`${pathname}?tab=geology`);
    setActiveImage(data[7].images.planet);
  }

  return (
    <main className="mb-4 justify-center lg:flex">
      <header className="border-b border-white/20 px-6 text-h3 md:hidden">
        <ul
          className={`${leagueSpartan.className} grid grid-cols-3 gap-4 text-[9px] font-bold leading-none [&>*]:uppercase [&>button]:py-4`}
        >
          <button
            onClick={() => handleOverviewClick()}
            type="button"
            className={clsx('border-t-4 border-t-transparent', {
              'border-b-4 border-b-transparent text-white/50':
                tab !== 'overview',
              'border-neptune border-b-4': tab === 'overview',
            })}
          >
            overview
          </button>
          <button
            onClick={() => handleStructureClick()}
            type="button"
            className={clsx('border-t-4 border-t-transparent', {
              'border-b-4 border-b-transparent text-white/50':
                tab !== 'structure',
              'border-neptune border-b-4': tab === 'structure',
            })}
          >
            structure
          </button>
          <button
            onClick={() => handleGeologyClick()}
            type="button"
            className={clsx('border-t-4 border-t-transparent', {
              'border-b-4 border-b-transparent text-white/50':
                tab !== 'geology',
              'border-neptune border-b-4': tab === 'geology',
            })}
          >
            surface
          </button>
        </ul>
      </header>
      <article className="grid text-center lg:flex lg:w-[1110px] lg:flex-wrap">
        <div className="relative mx-auto my-[64px] flex h-[173px] w-[173px] items-center justify-center md:my-[96px] md:h-[285px] md:w-[285px] lg:mb-[142px] lg:mt-[162px] lg:h-[450px] lg:w-[450px]">
          <Image src={activeImage} alt={data[7].name} fill />
          <Image
            src={data[7].images.geology}
            alt={`${data[7].name} Geology`}
            width={windowWidth < 1024 ? 80 : 163}
            height={windowWidth < 1024 ? 98 : 199}
            className={clsx(
              'fixed left-[50%] top-[350px] -translate-x-1/2 -translate-y-1/2 transform-gpu md:top-[470px] lg:left-[38%] lg:top-[650px]',
              {
                hidden: tab !== 'geology',
              },
            )}
          />
        </div>
        <div className="mx-[24px] md:mx-[40px] md:grid md:grid-cols-2 lg:mx-0 lg:flex lg:w-[350px] lg:flex-col lg:justify-center lg:justify-self-end">
          <div>
            <h1 className="mb-4 text-[40px] uppercase md:text-left lg:text-[80px]">
              {data[7].name}
            </h1>
            <p
              className={`${leagueSpartan.className} text-sm text-white/70 md:text-left`}
            >
              {tab === 'overview' && data[7].overview.content}
              {tab === 'structure' && data[7].structure.content}
              {tab === 'geology' && data[7].geology.content}
            </p>
            <p
              className={`${leagueSpartan.className} mt-[32px] flex items-center justify-center text-white/50 md:justify-start`}
            >
              Source :&nbsp;{' '}
              <Link
                className="flex items-center gap-1 font-bold underline"
                href={data[7][tab as string]?.source || '/'}
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
          </div>
          <div
            className={`hidden text-h3 md:flex md:flex-col md:items-end md:justify-center ${leagueSpartan.className} gap-4 font-bold lg:mt-[39px] [&>*]:uppercase`}
          >
            <button
              onClick={() => handleOverviewClick()}
              type="button"
              className={clsx(
                'h-[40px] w-[281px] border border-white/20 text-left lg:h-[48px] lg:w-[350px]',
                {
                  'bg-neptune': tab === 'overview',
                  'hover:bg-[#313148]': tab !== 'overview',
                },
              )}
            >
              <span className="ml-[20px] mr-[17px] text-white/50 ">01</span>{' '}
              overview
            </button>
            <button
              onClick={() => handleStructureClick()}
              type="button"
              className={clsx(
                'h-[40px] w-[281px] border border-white/20 text-left lg:h-[48px] lg:w-[350px]',
                {
                  'bg-neptune': tab === 'structure',
                  'hover:bg-[#313148]': tab !== 'structure',
                },
              )}
            >
              <span className="ml-[20px] mr-[17px] text-white/50 ">02</span>{' '}
              internal structure
            </button>
            <button
              onClick={() => handleGeologyClick()}
              type="button"
              className={clsx(
                'h-[40px] w-[281px] border border-white/20 text-left lg:h-[48px] lg:w-[350px]',
                {
                  'bg-neptune': tab === 'geology',
                  'hover:bg-[#313148]': tab !== 'geology',
                },
              )}
            >
              <span className="ml-[20px] mr-[17px] text-white/50 ">03</span>{' '}
              surface geology
            </button>
          </div>
        </div>

        <div className="mt-[28px] grid gap-2 uppercase md:mx-[40px] md:grid-cols-4 md:gap-[11px] lg:col-span-2 lg:m-0 lg:flex lg:justify-center lg:gap-[30px] lg:text-left">
          <div className="mx-[24px] flex justify-between border border-white/20 px-6 py-2 md:mx-0 md:flex-col lg:h-[128px] lg:w-[255px]">
            <h4
              className={`${leagueSpartan.className} text-h4 font-bold text-white/50 lg:mt-[20px]`}
            >
              rotation time
            </h4>
            <p className="text-[20px] lg:text-[40px]">{data[7].rotation}</p>
          </div>
          <div className="mx-[24px] flex justify-between border border-white/20 px-6 py-2 md:mx-0 md:flex-col lg:h-[128px] lg:w-[255px]">
            <h4
              className={`${leagueSpartan.className} text-h4 font-bold text-white/50 lg:mt-[20px]`}
            >
              revolution time
            </h4>{' '}
            <p className="text-[20px] lg:text-[40px]">{data[7].revolution}</p>
          </div>
          <div className="mx-[24px] flex justify-between border border-white/20 px-6 py-2 md:mx-0 md:flex-col lg:h-[128px] lg:w-[255px]">
            <h4
              className={`${leagueSpartan.className} text-h4 font-bold text-white/50 lg:mt-[20px]`}
            >
              radius
            </h4>{' '}
            <p className="text-[20px] lg:text-[40px]">{data[7].radius}</p>
          </div>
          <div className="mx-[24px] flex justify-between border border-white/20 px-6 py-2 md:mx-0 md:flex-col lg:h-[128px] lg:w-[255px]">
            <h4
              className={`${leagueSpartan.className} text-h4 font-bold text-white/50 lg:mt-[20px]`}
            >
              average temp.
            </h4>{' '}
            <p className="text-[20px] lg:text-[40px]">{data[7].temperature}</p>
          </div>
        </div>
      </article>
    </main>
  );
}
