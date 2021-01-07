function randomizer(...callbacks) {
  let n = arguments.length;

  let secondsElapsed = 0;

  let timeLogger = setInterval(() => {
    secondsElapsed += 1;
    console.log(secondsElapsed);

    if (secondsElapsed >= n) {
      clearInterval(timeLogger);
    }
  }, 1000);

  callbacks.forEach(callback => {
    let randomInt = Math.floor(Math.random() * (n * 2));
    setTimeout(callback, randomInt * 1000);
  });
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