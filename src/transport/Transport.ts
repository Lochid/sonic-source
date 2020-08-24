import { SonicRay } from "../sonic/SonicRay";

export const OnSonicFrame = 'sonic-frame';

export type Sender = (data: SonicRay) => void;
export type Transport = (port: number) => Sender;