import { Scene } from 'phaser';

export class TestScene extends Scene {
    constructor() {
        super({ key:'testScene' });
    }

    create() {
        let a: string;

        console.log(a.length);
    }
}