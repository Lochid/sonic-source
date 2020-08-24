import { SonicRay } from "../sound/SonicRay";

export const OnSonicFrame = 'sonic-frame';

export type Sender = (data: SonicRay) => void;
export type Transport = (port: number) => Sender;