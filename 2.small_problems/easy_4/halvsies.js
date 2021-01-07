function halvsies(array) {
  let result = [[], []];
  if (array.length % 2 === 0) {
    result[0] = array.slice(0, ((array.length / 2)));
    result[1] = array.slice((array.length / 2));
  } else {
    result[0] = array.slice(0, ((array.length / 2 + 1)));
    result[1] = array.slice((array.length / 2 + 1));
  }
  console.log(result);
}

function halvsies(array) {
  let half = Math.ceil(array.length / 2);
  const firstHalf = array.slice(0, half);
  const secondHalf = array.slice(half);

  return [firstHalf, secondHalf];
}


halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]