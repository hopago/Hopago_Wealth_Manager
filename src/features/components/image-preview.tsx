import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ImagePreviewProps {
  file: File;
  onClick: () => void;
  width?: string;
  height?: string;
}

export const ImagePreview = ({
  file,
  onClick,
  width = "240px",
  height = "150px",
}: ImagePreviewProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative rounded-[20px] overflow-hidden cursor-pointer"
      style={{ width, height }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10"></div>
      )}

      <Image
        key={file.name}
        src={URL.createObjectURL(file)}
        alt="uploaded_image"
        className="w-full h-full object-cover rounded-[20px]"
        fill
      />

      {hover && (
        <div className="absolute inset-0 flex items-center justify-center gap-3 z-20">
          <Button type="button" variant="secondary" size="sm">
            이미지 변경
          </Button>
          <Button
            type="button"
            variant="destructive"
            size="sm"
            onClick={onClick}
          >
            이미지 제거
          </Button>
        </div>
      )}
    </div>
  );
};
