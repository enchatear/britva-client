// 'use client';
import React, { useEffect, useState } from 'react';
// import Image from 'next/image';

const LogoBox: React.FC<{ className?: string; imgSrc: string }> = ({
  className,
  imgSrc,
}) => {
  // const [isClient, setIsClient] = useState(false);
  //
  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // return isClient ? (
  return (
    <img
      src={imgSrc}
      alt="logo"
      // width={window.innerWidth < 768 ? 129 : 150}
      // height={window.innerWidth < 768 ? 24 : 28}
      className={className}
    />
  );
  // ) : null;
};

export default LogoBox;
