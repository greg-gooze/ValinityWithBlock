import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function Navbar2() {
  return (
    <div className='bg-white' style={{display: 'flex', 'borderBottomWidth': 1, 'borderColor': 'rgba(194,194,194,35)'}}>
      <Link href="/" className="ml-[13%] pt-[20px] pb-[20px]">
        <Image src="/logo-valinity.png" height="100" width="100" alt='logo-valinity'/>
      </Link>
      <nav className="flex items-center ml-[31%]">
        <Link className="pl-[30px] pr-[30px] font-settings-navbar hover:text-[#4641e6] duration-500" href="/#SectionTechnologie">Technologie</Link>
        <Link className="pl-[30px] pr-[30px] font-settings-navbar hover:text-[#4641e6] duration-500" href="/#SectionRoadmap">Roadmap</Link>
        <Link className="pl-[30px] pr-[30px] font-settings-navbar hover:text-[#4641e6] duration-500" href="/#SectionContact">Contact</Link>
        {/* style={{'border-right-width': 1, 'borderColor': 'rgba(194,194,194,35)'}} */}
      </nav>
    </div>
  );
}