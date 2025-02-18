import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { ControllerRenderProps } from "react-hook-form";
import { Button } from "@/components/ui/button";

interface ImagePreviewProps {
  file: File;
  field: ControllerRenderProps<
    {
      category: string;
      email: string;
      title: string;
      description: string;
      images?: File[] | undefined;
    },
    "images"
  >;
  width?: string | number;
  height?: string | number;
}

export const ImagePreview = ({
  file,
  field,
  width = "240px",
  height = "150px",
}: ImagePreviewProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [hover, setHover] = useState(false);
  const [blobUrl, setBlobUrl] = useState("");

  const onClickRemove = () => {
    if (field.value) {
      field.onChange(field.value.filter((f) => f.name !== file.name));
    }
  };

  const onClickChange = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0] && field.value) {
      field.onChange(
        field.value.map((f) => (f.name === file.name ? files[0] : f))
      );
    }
  };

  useEffect(() => {
    const url = URL.createObjectURL(file);
    setBlobUrl(url);

    return () => URL.revokeObjectURL(url);
  }, [file.name]);

  return (
    <div
      className="relative rounded-md overflow-hidden cursor-pointer"
      style={{ width, height }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10" />
      )}

      <Image src={blobUrl} alt="uploaded_image" className="object-cover" fill />

      {hover && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-20">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={onClickChange}
          >
            이미지 변경
          </Button>
          <Button
            type="button"
            variant="destructive"
            size="sm"
            onClick={onClickRemove}
          >
            이미지 제거
          </Button>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={onFileChange}
      />
    </div>
  );
};
