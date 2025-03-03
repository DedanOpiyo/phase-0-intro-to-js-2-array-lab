// Write your solution here!
cats = ["Milo", "Otis", "Garfield"];

function cats(catsParam){
    // does nothing yet. Resolves the ReferenceError: cats is not defined
    console.log("Initial cats Array:", catsParam);
};

function destructivelyAppendCat(name) {
    // appends a cat to the end of the cats array:
    cats.push(name);
};

function destructivelyPrependCat(name) {
    // prepends a cat to the beginning of the cats array
    cats.unshift(name);
};

function destructivelyRemoveLastCat(name) {
    // removes the last cat from the cats array
    cats.pop(name);
};

function destructivelyRemoveFirstCat(name) {
    // removes the first cat from the cats array
    cats.shift(name);
};

function appendCat(name) {
    // appends a cat to the cats array and returns a new array, leaving the cats array unchanged
    let newcatsarray = [...cats];
    newcatsarray.push(name);
    return newcatsarray;

    /* Alternatively, use slice method with no parameter to non-destructively modify the array
    let newcatsarray = cats.slice();
    newcatsarray.push(name);
    return newcatsarray;
    */
};

function prependCat(name) {
    // prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
    let newcatsarray = [...cats];
    newcatsarray.unshift(name);
    return newcatsarray;

    /* Using slice method:
    let newcatsarray = cats.slice();
    newcatsarray.unshift(name);
    return newcatsarray;
    */
};

function removeLastCat(name) {
    // removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
    let newcatsarray = [...cats];
    newcatsarray.pop(name);
    return newcatsarray;

    /* Alternatively, use slice method
    let newcatsarray = cats.slice();
    newcatsarray.pop(name);
    return newcatsarray;
    */
};

function removeFirstCat(name) {
    // removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
    let newcatsarray = [...cats];
    newcatsarray.shift(name);
    return newcatsarray;

    /* Using slice method:
    let newcatsarray = cats.slice();
    newcatsarray.shift(name);
    return newcatsarray;
    */
};
