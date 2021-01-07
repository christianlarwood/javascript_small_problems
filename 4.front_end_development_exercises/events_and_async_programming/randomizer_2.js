const { clearInterval } = require("timers");

function randomizer(...callbacks) {
  let n = callbacks.length;
  let count = 1;

  // iterate and log the seconds
  while (count <= n * 2) {
    let c = count;
    setTimeout(() => {
      console.log(c);
    }, count * 1000);
    count += 1;
  }

  // official answer
  let maxSeconds = n * 2;
  let currentSecond = 1;

  let secondLogger = setInterval(() => {
    console.log(currentSecond);
    currentSecond += 1;

    if (maxSeconds >= currentSecond) {
      clearInterval(secondLogger);
    }
  }, 1000)

  // iterate through each callback and assign a random interval to each
  callbacks.forEach(callback => {
    let executeTime = Math.floor(Math.random() * n * 2 * 1000);
    setTimeout(callback, executeTime);
  })
}

function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

randomizer(callback1, callback2, callback3);