export default class Player {
  color: string;

  time: number = 300;

  timer: number = 0;

  constructor(color: string) {
    this.color = color;
  }

  setTimer(timer: number) {
    this.timer = timer;
  }

  getTime() {
    return this.time;
  }

  setTime(time: number) {
    this.time = time;
  }

  stopTimer() {
    console.log('stop timer', this.timer, this.time);
    clearTimeout(this.timer);
  }
}
