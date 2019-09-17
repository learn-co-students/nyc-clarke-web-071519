function one() {
  let one = 'one'
  console.log(two)
}

function two() {
  let two = 'two'
  console.log(one)
}

function three() {
  console.log('three')
}

function four() {
  one()
  two()
  three()
  console.log('four')
}

function five(){
  five()
}

four()