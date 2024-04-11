const findMissingNumber = arr => {
    if (arr.length === 0) {
        return false
    }
    const sortedArr = arr.sort((a, b) => a - b);
    //если первый элемент не равен 0 то результат изначально равен 0 
    //если первый элемент равено 0 то результат равен последнемуч яислу в массиве плюс 1
    let result = sortedArr[0] !== 0 ? sortedArr[0] - 1 : sortedArr[sortedArr.length - 1] + 1
    for (let i = 0; i < sortedArr.length; i++) {
// если число следующее за итерируемым не больше на 1 чем итерируемое и послднее сравниваемое число не больше чем послднее число массива 
            if (sortedArr[i + 1] !== sortedArr[i] + 1 && sortedArr[i + 1] <= sortedArr[sortedArr.length - 1]) {
                result = sortedArr[i] + 1
            }
        }
    return result
};
console.log(findMissingNumber([0, 1, 2, 3, 4]))
module.exports = findMissingNumber