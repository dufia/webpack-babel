const constant: string = 'string';

interface ClockInterface {
  tick();
}

interface ClockContructor {
  new (hh: number, mm: number): ClockInterface;
}

class DigitalClock implements ClockInterface {
  constructor(hh: number, mm: number) {}
  tick() {
    console.log('beep');
  }
}

class AnalogClock implements ClockInterface {
  constructor(hh: number, mm: number) {}
  tick() {
    console.log('tick');
  }
}

function createClock (clock: ClockContructor, hh: number, ss: number): ClockInterface {
  return new clock(hh, ss);
}

let digitalClock = createClock(DigitalClock, 22, 54);
let analogClock = createClock(AnalogClock, 10, 10);

digitalClock.tick();
analogClock.tick();

export default constant;
