import { SonicRay } from "../sound/SonicRay";

export const OnSonicFrame = 'sonic-frame';

export default interface SoundSource {
    on(event: 'sonic-frame', listener: (ray: SonicRay) => void): this;
}