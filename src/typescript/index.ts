const constant: string = 'string';

interface ClockInterface {
  tick();
  run();
  stop();
}

interface ClockContructor {
  new (hh: number, mm: number): ClockInterface;
}

abstract class Clock {
  abstract tick(): void;
  private interval: any;

  run() {
    this.interval = setInterval(() => {
      this.tick();
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }
}

class DigitalClock extends Clock implements ClockInterface {
  constructor(hh: number, mm: number) {
    super();
  }
  tick() {
    console.log('beep');
  }
}

class AnalogClock extends Clock implements ClockInterface {
  constructor(hh: number, mm: number) {
     super();
  }
  tick() {
    console.log('tick');
  }
}

function createClock (clock: ClockContructor, hh: number, ss: number): ClockInterface {
  return new clock(hh, ss);
}

let digitalClock = createClock(DigitalClock, 22, 54);
let analogClock = createClock(AnalogClock, 10, 10);

digitalClock.run();
analogClock.run();

export default constant;
