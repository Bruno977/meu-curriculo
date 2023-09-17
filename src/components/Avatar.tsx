import React from 'react';
import Profile from '@/assets/images/profile2c.png';
import Image from 'next/image';

export function Avatar() {
  return (
    <div
      className="bg-zinc-800 relative 
        lg:before:content-[''] lg:before:border-[6px] lg:before:border-emerald-500 
        lg:before:absolute lg:before:inset-0 lg:before:z-[-1]
        lg:before:translate-x-[24px] lg:before:translate-y-[24px] lg:before:translate-z-[-24px]
        "
    >
      <Image
        src={Profile}
        alt="Bruno Rodrigues"
        width={500}
        height={500}
        quality={100}
        className=" w-[400px] h-[400px]  object-cover max-w-full"
      />
    </div>
  );
}
