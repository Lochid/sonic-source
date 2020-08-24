import { SonicSystem } from "./SonicSystem";
import { SonicTimes } from "./SonicTimes";
import { Sonic } from "./Sonic";

export interface SonicRay {
    system: SonicSystem;
    times: SonicTimes;
    sonic: Sonic;
}
