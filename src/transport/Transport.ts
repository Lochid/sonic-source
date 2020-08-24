import { SonicRay } from "../sound/SonicRay";

export default interface Transport {
    sendSonicFrame(ray: SonicRay): void;
}