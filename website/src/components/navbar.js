import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

function ScrollLink({ href, sectionId, children }) {
  function handleClick(event) {
    event.preventDefault();
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Link className="pl-[30px] pr-[30px] font-settings-navbar hover:text-[#4641e6] duration-500"  href={href} onClick={handleClick}>
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <div style={{display: 'flex', 'borderBottomWidth': 1, 'borderColor': 'rgba(194,194,194,35)'}}>
      <Link href="/" className="ml-[13%] pt-[20px] pb-[20px]">
        <Image src="/logo-valinity.png" height="100" width="100" alt='logo-valinity'/>
      </Link>
      <nav className="flex items-center ml-[31%]">
        <ScrollLink href="#SectionTechnologie" sectionId="#SectionTechnologie">Technologie</ScrollLink>
        <ScrollLink href="#SectionRoadmap" sectionId="#SectionRoadmap">Roadmap</ScrollLink>
        <ScrollLink href="#SectionContact" sectionId="#SectionContact">Contact</ScrollLink>
        {/* style={{'border-right-width': 1, 'borderColor': 'rgba(194,194,194,35)'}} */}
      </nav>
    </div>
  );
}