'use client';

import Image from 'next/image'
import { RandomFox } from '../../components/RandomFox';
import { useState } from 'react';

const random = () => Math.floor(Math.random() * 123) + 1;
const generateId = () => Math.random().toString(36).substr(2, 9);

type ImageItem = { id: string; url: string };

export default function Home() {

  const [images, setImages] = useState<Array<ImageItem>>([
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello world

      {images.map(({ id, url }) => (
        <div key={id} className="p-4">
          <RandomFox image={url} />
        </div>
      ))}

    </main>
  )
}
