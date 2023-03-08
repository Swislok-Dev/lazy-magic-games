import React from 'react'
import Image from 'next/image'

function MyImage({src, width, height, alt}: any) {
  const myLoader = ({ src }: any) => {
    return `/images/${src}`;
  };
  const NewImage = (props: any) => {
    return (
      <Image
        loader={myLoader}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    );
  };
  return (
    <NewImage />
  )
}

export default MyImage