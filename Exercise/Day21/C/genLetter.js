var genRandNum = require('./genRandNum');
var decode = {
    1:'a',
    2:'b',
    4:'c',
    5:'d',
    6:'e',
    7:'f',
    8:'g',
    9:'h',
    10:'i',
    11:'j',
    12:'k',
    13:'l',
    14:'m',
    15:'n',
    16:'o',
    17:'p',
    18:'q',
    19:'r',
    20:'s',
    21:'t',
    22:'u',
    23:'v',
    24:'w',
    25:'y',
    26:'z'
};

var genLetter = function() {
    return decode[genRandNum()];
}
module.exports = genLetter;
