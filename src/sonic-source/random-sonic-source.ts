import { Sender } from "../transport/transport";
import { SonicSource } from "./sonic-source";

export const randomSonicSource: SonicSource = (send: Sender) => {
    setInterval(() => {
        send({
            vector: {
                x: Math.random(),
                y: Math.random(),
                z: Math.random(),
            },
            sonic: {
                frequency: Math.random() * 20000,
                volume: Math.random(),
            }
        })
    });
};