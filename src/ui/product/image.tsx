import { useState } from "react";
import { InnerImageZoom } from "react-inner-image-zoom";

interface ImageProps {
  images: string[];
}

export default function Image({ images }: ImageProps) {
  const [img, setImg] = useState<string>(images[0]);

  const hoverHandler = (image: string) => {
    setImg(image);
  };

  return (
    <div className="  mx-auto max-lg:w-3/5 w-2/5">
      <div className="w-full bg-[#B4B4B4] rounded-lg mb-2">
        <InnerImageZoom src={img} />
      </div>
      <div className="flex justify-between gap-2 bg-[#B4B4B4] rounded-lg border-gray-400 border-2 p-2">
        {images.map((image, i) => (
          <div
            className="w-20 h-20 border-2 border-gray-600 rounded-lg cursor-pointer"
            key={i}
            onMouseOver={() => hoverHandler(image)}
          >
            <img src={image} />
          </div>
        ))}
      </div>
    </div>
  );
}
