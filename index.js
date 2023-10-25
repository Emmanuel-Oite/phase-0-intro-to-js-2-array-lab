// Write your solution here!
// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

//destructivelyAppendCat(name):
function destructivelyAppendCat(name) {
  cats.push(name);
}

//destructivelyPrependCat(name):
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

//destructivelyRemoveLastCat():
function destructivelyRemoveLastCat() {
  cats.pop();
}

//destructivelyRemoveFirstCat():
function destructivelyRemoveFirstCat() {
  cats.shift();
}

//appendCat(name):
function appendCat(name) {
  let newCats = [...cats, name];
  return newCats;
}
//prependCat(name)
function prependCat(name) {
  let newCats = [name, ...cats];
  return newCats;
}

//removeLastCat()
function removeLastCat() {
  let newCats = cats.slice(0, -1);
  return newCats;
}

//removeFirstCat()
function removeFirstCat() {
  let newCats = cats.slice(1);
  return newCats;
}
