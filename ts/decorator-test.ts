import { HasMusic, X } from './decorators';

@HasMusic({
    vehicle: 'Car'
})
class Car {
    play;
    move() {
        console.log('moving..');
    }
}

@HasMusic({
    vehicle: 'Truck'
})
class Truck { play; }

let c = new Car();
c.move();
c.play();

let t = new Truck();
t.play();