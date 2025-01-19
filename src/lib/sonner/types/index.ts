import { TOASTER_COLORS } from "../styles";

export type Toaster_Position =
  | "bottom-center"
  | "bottom-right"
  | "bottom-left"
  | "top-center"
  | "top-right"
  | "top-left";

export type Toaster_Message = keyof typeof TOASTER_COLORS;
