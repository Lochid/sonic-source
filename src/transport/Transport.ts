import { SonicRay } from "../sound/SonicRay";

export type Sender = (data: SonicRay) => void;
export type Transport = (port: number) => Sender;