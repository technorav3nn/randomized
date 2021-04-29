function randomItemFunc(arr) {
  if(!arr){
    throw new Error("Expected an array")
  } else if(!Array.isArray(arr)){
    throw new Error("Expected an array")
  }
    const r = arr[Math.floor(Math.random() * arr.length)]
    return r
}

class randomized {
  randomItem(arr) {
    if(!arr){
      throw new Error("Expected an array")
    } else if(!Array.isArray(arr)){
      throw new Error("Expected an array")
    }
    const rand = arr[Math.floor(Math.random() * arr.length)]
    return rand
  }
  randomMultiple(arr, count) {
    if (!Number.isInteger(count) || isNaN(count) && count >= 0) {
		throw new Error('Expected an integer, that isnt negative');
	}
  for (let i = 0; i < count; i++) {     
    return [...Array.from({length: count})].map(() => randomItemFunc(arr));
  }
  }
}

module.exports = randomized