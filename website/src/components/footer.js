import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function Footer() {
    return (
      <div className='flex flex-col items-center' style={{'borderTopWidth': 1, 'borderColor': 'rgba(194,194,194,35)'}}>
        <Image className='mt-4 mb-4' src="/logo-valinity.png" height="100" width="100" alt='logo-valinity'/>
        <p className='mb-2 text-[11px] font-bold text-[#19191b]'>Copyright © 2023 Valinity</p>
        <div className='mb-3 grid text-[11px] grid-cols-3 underline text-[#696871] justify-items-center items-stretch'>
            <Link href='/'>
                <p>Politique de confidentialité</p>
            </Link>
            <Link href='/'>
                <p>S'abonner</p>
            </Link>
            <Link href='/'>
                <p>Condition d'utilisation</p>
            </Link>
        </div>
      </div>
    );
  }
