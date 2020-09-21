function StopWatch() {
    this.duration = 0;
    this.running = false;
    this.startTime=null;
    this.stopTime=null;
}
    Object.defineProperty(this, "duration", {
      get: function () {
        return duration;
      },
      set: function(dur){
           duration=dur;
      }
    });

    Object.defineProperty(this, "startTime", {
        get: function () {
          return startTime;
        },
        set: function(st){
            startTime =st;
        }
      });

      Object.defineProperty(this, "stopTime", {
        get: function () {
          return stopTime;
        },
        set: function(st){
            stopTime=st;
        }
      });

      Object.defineProperty(this, "running", {
        get: function () {
          return running;
        },
        set: function(run){
            running=run;
        }
      });
  
  StopWatch.prototype.startTimer = function () {
    if (this.running) {
      console.log("Stopwatch is running");
      return;
    }
    this.running = true;
    this.startTime = Date.now();
  }
  
  
  StopWatch.prototype.stopTimer = function () {
    if (!this.running) {
      console.log("Stopwatch is already stopped");
      return;
    }
    this.running = false;
    this.endTime = Date.now();
    this.duration = (this.endTime - this.startTime) / 1000;
  }
  

  StopWatch.prototype.reset = function () {
    this.duration = 0;
    this.running = false;
    this.startTime = null; //u can use undefined as well. but null is prefered when we want to reset values
    this.endTime = null;
  }

// let sw = new StopWatch();
// sw.startTimer();
// console.log(sw.duration);
  