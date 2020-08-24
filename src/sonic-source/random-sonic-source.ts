import { Sender } from "../transport/transport";
import { SonicSource } from "./sonic-source";

export const randomSonicSource: SonicSource = (send: Sender) => {
    setInterval(() => {
        send({
            system: {
                mic1: {
                    x: 0,
                    y: 0,
                    z: 0,
                },
                mic2: {
                    x: 1,
                    y: 0,
                    z: 0,
                },
                mic3: {
                    x: 0,
                    y: 1,
                    z: 0,
                },
                mic4: {
                    x: 0,
                    y: 0,
                    z: 1,
                }
            },
            times: {
                mic1: Math.floor(Math.random() * 10),
                mic2: Math.floor(Math.random() * 10),
                mic3: Math.floor(Math.random() * 10),
                mic4: Math.floor(Math.random() * 10),
            },
            sonic: {
                frequency: Math.random() * 20000,
                volume: Math.random(),
            }
        })
    });
};