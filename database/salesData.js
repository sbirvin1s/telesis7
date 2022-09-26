/* NOTE: Used to generate dummy sales data

  const makeArray = (stop) => {
  const results = [];

  while (results.length < stop) {
    results.push(Math.floor(Math.random() * 1000));
  }
  return results;
}

*/

/*========== DATABASE INFORMATION ==========*/
const dataset = [
  468, 935, 886, 413, 54, 989, 227, 369, 695, 738, 387, 385, 377, 280, 773, 503, 848, 829, 370, 292, 937, 737, 487, 194, 173, 112, 492, 665, 637, 643, 552, 805, 974, 500, 797, 641, 541, 697, 534, 682, 32, 44, 991, 8, 16, 122, 490, 697, 425, 908, 962, 966, 933, 654, 288, 838, 463, 511, 272, 777, 710, 545, 768, 859, 298, 637, 217, 810, 352, 675, 536, 991, 579, 428, 326, 339, 921, 344, 682, 780, 642, 721, 204, 283, 267, 173, 443, 89, 32, 504, 303, 814, 16, 503, 322, 419, 359, 919, 850, 922
 ];

 /*========== DATABASE METHODS ==========*/
const salesData = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(dataset), Math.floor(Math.random() * 1000))
  });
}

/*========== EXPORTS ==========*/
module.exports = {
  salesData,
}