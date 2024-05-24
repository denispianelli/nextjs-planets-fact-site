import { League_Spartan } from 'next/font/google';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

export default function Header() {
  const links = [
    { href: '/mercury', label: 'Mercury', color: '#def4fc' },
    { href: '/venus', label: 'Venus', color: '#f7cc7f' },
    { href: '/earth', label: 'Earth', color: '#545bfe' },
    { href: '/mars', label: 'Mars', color: '#ff6a45' },
    { href: '/jupiter', label: 'Jupiter', color: '#ecad7a' },
    { href: '/saturn', label: 'Saturn', color: '#fccb6b' },
    { href: '/uranus', label: 'Uranus', color: '#65f0d5' },
    { href: '/neptune', label: 'Neptune', color: '#497efa' },
  ];
  return (
    <header className="flex h-[85px] items-center justify-between border-b border-white/20 px-[24px] uppercase">
      <h2 className="text-h2">the planets</h2>
      <ul
        className={`${leagueSpartan.className} text-h3 hidden gap-[33px] font-bold opacity-75 md:flex`}
      >
        <Link href="/mercury">
          <li>Mercury</li>
        </Link>
        <Link href="/venus">
          <li>Venus</li>
        </Link>
        <Link href="/earth">
          <li>Earth</li>
        </Link>
        <Link href="/mars">
          <li>Mars</li>
        </Link>
        <Link href="/jupiter">
          <li>Jupiter</li>
        </Link>
        <Link href="/saturn">
          <li>Saturn</li>
        </Link>
        <Link href="/uranus">
          <li>Uranus</li>
        </Link>
        <Link href="/neptune">
          <li>Neptune</li>
        </Link>
      </ul>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="bg-transparent p-0 hover:bg-transparent hover:text-[#979797]  md:hidden">
            <Menu />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side={'right'}
          className={`${leagueSpartan.className} text-h3  mt-[85px] w-full border-none font-bold uppercase`}
        >
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                className="grid grid-cols-2 items-center border-b border-white/10 py-4 last-of-type:border-none"
                key={link.href}
                href={link.href}
              >
                <div className="flex gap-4">
                  <div className={`h-5 w-5 rounded-full bg-[${link.color}]`} />
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
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
}
