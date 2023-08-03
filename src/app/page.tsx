'use client';

import Image from 'next/image'
import { RandomFox } from '../../components/RandomFox';
import { useState } from 'react';

const random = () => Math.floor(Math.random() * 123) + 1;

export default function Home() {

  const [images, setImages] = useState<Array<string>>([
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello world

      {images.map((image, index) => (
        <div key={index} className="p-4">
          <RandomFox image={image} />
        </div>
      ))}

    </main>
  )
}
