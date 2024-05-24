'use client';

import clsx from 'clsx';
import { League_Spartan } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
const data = require('@/lib/data.json');

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

export default function Page() {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeImage, setActiveImage] = useState(data[3].images.planet);

  function handleTabChange(tab: string) {
    setActiveTab(tab);

    switch (tab) {
      case 'overview':
        setActiveImage(data[3].images.planet);
        break;
      case 'structure':
        setActiveImage(data[3].images.internal);
        break;
      case 'geology':
        setActiveImage(data[3].images.planet);
        break;
      default:
        break;
    }
  }

  return (
    <main>
      <header className="text-h3 border-b border-white/20 px-6">
        <ul
          className={`${leagueSpartan.className} grid grid-cols-3 gap-4 text-[9px] font-bold leading-none [&>*]:uppercase [&>button]:py-4`}
        >
          <button
            onClick={() => handleTabChange('overview')}
            type="button"
            className={clsx('border-t-4 border-t-transparent', {
              'border-b-4 border-b-transparent text-white/50':
                activeTab !== 'overview',
              'border-bostonBlue border-b-4': activeTab === 'overview',
            })}
          >
            overview
          </button>
          <button
            onClick={() => handleTabChange('structure')}
            type="button"
            className={clsx('border-t-4 border-t-transparent', {
              'border-b-4 border-b-transparent text-white/50':
                activeTab !== 'structure',
              'border-bostonBlue border-b-4': activeTab === 'structure',
            })}
          >
            structure
          </button>
          <button
            onClick={() => handleTabChange('geology')}
            type="button"
            className={clsx('border-t-4 border-t-transparent', {
              'border-b-4 border-b-transparent text-white/50':
                activeTab !== 'geology',
              'border-bostonBlue border-b-4': activeTab === 'geology',
            })}
          >
            surface
          </button>
        </ul>
      </header>
      <article className="grid text-center">
        <div className="relative mx-auto  px-[132px] py-[95px]">
          <Image
            src={activeImage}
            alt={data[3].name}
            width={111}
            height={111}
          />
          <Image
            src={data[3].images.geology}
            alt={`${data[3].name} Geology`}
            width={80}
            height={80}
            className={clsx(
              'absolute left-[50%] top-[70%] -translate-x-1/2 -translate-y-1/2 transform-gpu',
              {
                hidden: activeTab !== 'geology',
              },
            )}
          />
        </div>
        <div className="mx-[24px]">
          <h1 className="mb-4 text-[40px] uppercase">{data[3].name}</h1>
          <p className={`${leagueSpartan.className} text-sm text-white/70`}>
            {activeTab === 'overview' && data[3].overview.content}
            {activeTab === 'structure' && data[3].structure.content}
            {activeTab === 'geology' && data[3].geology.content}
          </p>
          <p
            className={`${leagueSpartan.className} mt-[32px] flex items-center justify-center text-white/50`}
          >
            Source :&nbsp;{' '}
            <Link
              className="flex items-center gap-1 font-bold underline"
              href={data[3][activeTab]?.source}
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
        <div className="mt-[28px] grid gap-2 uppercase">
          <div className="mx-[24px] flex justify-between border border-white/20 px-6 py-2">
            <h4
              className={`${leagueSpartan.className} text-h4 font-bold text-white/50`}
            >
              rotation time
            </h4>
            <p className="text-[20px]">{data[3].rotation}</p>
          </div>
          <div className="mx-[24px] flex justify-between border border-white/20 px-6 py-2">
            <h4
              className={`${leagueSpartan.className} text-h4 font-bold text-white/50`}
            >
              revolution time
            </h4>{' '}
            <p className="text-[20px]">{data[3].revolution}</p>
          </div>
          <div className="mx-[24px] flex justify-between border border-white/20 px-6 py-2">
            <h4
              className={`${leagueSpartan.className} text-h4 font-bold text-white/50`}
            >
              radius
            </h4>{' '}
            <p className="text-[20px]">{data[3].radius}</p>
          </div>
          <div className="mx-[24px] flex justify-between border border-white/20 px-6 py-2">
            <h4
              className={`${leagueSpartan.className} text-h4 font-bold text-white/50`}
            >
              average temp.
            </h4>{' '}
            <p className="text-[20px]">{data[3].temperature}</p>
          </div>
        </div>
      </article>
    </main>
  );
}
