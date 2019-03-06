function f (x: string): string {
  return `funciton ${x}`;
}

let f2: (x: number, y: number) => number;
f2 = (x: number, y: number) => x * y;

let f3: (x: number, y: number) => number = (x: number, y: number) => x * y;

function identity<K>(whatever: K): K {
  return whatever;
}

identity<string>('12');

let myIdentity: (s: string) => string = (arg: string) => arg;

function returner<T>(arg: T): T {
  return arg;
}

let myReturner: <T>(arg: T) => T = returner; 
let myReturner2: {<T>(arg: T): T} = returner;

interface genericReturner<T> {
  (arg: T): T;
}

let myReturner3: genericReturner<object> = returner;

export default f;
