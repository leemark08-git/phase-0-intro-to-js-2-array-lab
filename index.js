const cats = ['Milo', 'Otis', 'Garfield'];
const destructivelyAppendCat = (name) => {
    cats.push(name)
}
const destructivelyPrependCat = (name) => {
    cats.unshift(name)
}
const destructivelyRemoveLastCat = (name) => {
    cats.pop(name)
}
const destructivelyRemoveFirstCat = (name) => {
    cats.shift(name)
}
const appendCat = (name) => {
const newAppendCat = [...cats, name];
return newAppendCat;
}
const prependCat = (name) => {
const newPrependCat = [name, ...cats,];
return newPrependCat;
}
const removeLastCat = () => {
const newRemoveLastCat = cats.slice(0, -1);
return newRemoveLastCat;
}
const removeFirstCat = () => {
const newRemoveFirstCat = cats.slice(1);
return newRemoveFirstCat;
}



