import { Euler, Vector3 } from "three";
import { SCREEN_SIZE } from "@/constants";

interface AdjustModelForScreenSizeProps {
  screenScale?: [number, number, number];
  screenPosition: [number, number, number];
  rotation: [number, number, number];
}

export const adjustModelForScreenSize = ({
  screenPosition,
  screenScale = [1, 1, 1],
  rotation,
}: AdjustModelForScreenSizeProps): [Vector3, Vector3, Euler] => {
  const isSmallScreen = window.innerWidth < SCREEN_SIZE.MD;
  const scaleValues = isSmallScreen
    ? screenScale.map((s) => s * 0.7)
    : screenScale;

  const scale = new Vector3(...scaleValues);
  const position = new Vector3(...screenPosition);
  const r = new Euler(...rotation);

  return [scale, position, r];
};
