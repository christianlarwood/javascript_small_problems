let ladder = '';
let array = ['head', 'heal', 'teal', 'tell', 'tall', 'tail'];
array.forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
});

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail

// ['head', 'heal', 'teal', 'tell', 'tall', 'tail']