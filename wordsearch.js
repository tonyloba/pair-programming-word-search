// helper functions
// horizontalCheck
// verticalCheck
const horizontalCheck = function (letters, word) {

    const horizontalJoin = letters.map(ls => ls.join(''));
    for (let l of horizontalJoin) {
        // console.log('each line:', l);
        if (l.toLowerCase().includes(word.toLowerCase())) {   
            return true;
        }
    }
    // return false if horizontal and vertical are not true;
    return false;
}

const transpose = function (matrix) {
    let newArray = [];
    //number of arrays in the matrix    
    for (let i = 0; i < matrix[0].length; i++) {
        newArray.push([])
    }

    for (let j = 0; j < matrix.length; j++) {
        for (let k = 0; k < matrix[j].length; k++) {
            console.log(matrix[k]);
            newArray[k].push(matrix[j][k]);

        }
    }

    return newArray;
}




const verticalCheck = function (letters, word) {
    //transpose the letters matrix:
    return horizontalCheck(transpose(letters), word);
    //then do the samething as horizontalJoin

}



const wordSearch = (letters, word) => {
// if (horizontalCheck(letters, word) === true || verticalCheck(letters, word) === true) {
//     return true;
// } else {
//     return false;
// }


  if (horizontalCheck(letters, word)) {
      return true;
  }
  if (verticalCheck(letters, word)) {
      return true;
  }
  return false;
}

module.exports = wordSearch
