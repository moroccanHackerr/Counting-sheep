function countSheeps(sheep) {
  let value = 0;
  for (let i = 0; i <= sheep.length; i++) {
    if(sheep[i] === true){
      value += 1;
    }
  }
  return value;
}


console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);
