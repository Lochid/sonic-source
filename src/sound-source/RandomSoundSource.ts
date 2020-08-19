import { EventEmitter } from 'events';
import SoundSource, { OnSonicFrame } from "./SoundSource";


export default class RandomSoundSource extends EventEmitter implements SoundSource {
    constructor() {
        super();
        setInterval(() => {
            this.emit(OnSonicFrame, {
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
        })
    }
}