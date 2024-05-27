import { League_Spartan } from 'next/font/google';
import Link from 'next/link';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';
import styles from '@/app/ui/home.module.css';
const data = require('@/lib/data.json');

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

export default function Header() {
  const links: Link[] = data.map((planet: { name: string }) => ({
    href: `/${planet.name.toLowerCase()}`,
    label: planet.name,
    color: planet.name.toLowerCase(),
    hoverColor: `${planet.name.toLowerCase()}-hover`,
  }));

  interface Link {
    href: string;
    label: string;
    color: string;
    hoverColor: string;
  }

  return (
    <header className="flex h-[68px] items-center justify-between border-b border-white/20 px-[24px] uppercase md:h-[159px] md:flex-col md:justify-around lg:h-[85px] lg:flex-row lg:justify-between">
      <h2 className="text-[28px]">the planets</h2>
      <ul
        className={`${leagueSpartan.className} hidden gap-[33px] text-h3 font-bold opacity-75 md:flex`}
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className={`${styles[link.hoverColor]} py-8 hover:border-t-4`}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="bg-transparent p-0 hover:bg-transparent hover:text-[#979797] md:hidden">
            <Menu />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side={'right'}
          className={`${leagueSpartan.className} mt-[85px]  w-full border-none text-h3 font-bold uppercase`}
        >
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <SheetClose key={link.href} asChild>
                <Link
                  className="grid grid-cols-2 items-center border-b border-white/10 py-4 last-of-type:border-none"
                  key={link.href}
                  href={link.href}
                >
                  <div className="flex gap-4">
                    <div
                      className={`${styles[link.color]} h-5 w-5 rounded-full `}
                    />
                    <li>{link.label}</li>
                  </div>
                  <Image
                    src={'/assets/icon-chevron.svg'}
                    alt="chevron"
                    width={4}
                    height={8}
                    className="justify-self-end"
                  />
                </Link>
              </SheetClose>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
}
