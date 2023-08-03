'use client';

import { LazyImage } from '../../components/LazyImage';
import { MouseEventHandler, useState } from 'react';

const random = () => Math.floor(Math.random() * 123) + 1;
const generateId = () => Math.random().toString(36).substring(2, 9);

export default function Home() {

  const [images, setImages] = useState<Array<IImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {

    const newImageItem: IImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${random()}.jpg`
    };

    setImages([
      ...images,
      newImageItem
    ]);
  }

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <p className="text-lg p-10">Hello random fox!!!</p>

      <button
        onClick={addNewFox}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Add new fox
      </button>

      {images.map(({ id, url }) => (
        <div key={id} className="p-4">
          <LazyImage
            src={url}
            width={320}
            height="auto"
            className="mx-auto rounded-md bg-gray-300"
            onClick={() => console.log("click")}
          />
        </div>
      ))}

    </main>
  );
};
