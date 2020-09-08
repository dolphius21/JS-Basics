function Stopwatch() {
  this.duration = 0;
  let startTime, endTime, running;

  this.start = function() {
    if (running) {
      throw new Error('Stopwatch has already started.');
    }
    running = true;

    startTime = new Date();
  };

  this.stop = function() {
    if (!running) {
      throw new Error('Stopwatch has not started yet.')
    }
    running = false;
    
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    this.duration += seconds;
  };

  this.reset = function() {
    this.duration = 0;
    startTime = null;
    endTime = null;
    running = false;
  }
}

const sw = new Stopwatch();

