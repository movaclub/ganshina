
/**
 * @param {string} data - Chinese source text
 * @param {number} maxWordLength - max length of sub-string generated (optional)
 * @param {boolean} sortToLength - sort results by string lengths (optional)
 * @return {Array}
 */
exports.parse = function(data, maxWordLength = 8, sortToLength = false){
    if( data instanceof String ) return new Error('Input text must be of type String.');
    if( maxWordLength < 1 || maxWordLength > 999 ) return new Error('Max word length must be in range [1;999]');
    if( !data ) return new Array(0);

    const splitRegxp = new RegExp(/[\uFF0C\uFE10\uFE50\u1F101-\u1F10A\u0000-\u007F\u2000-\u206F\u2E00-\u2E7F\u3000-\u303F\u3200-\u32FF\u3300-\u33FF\uFE30-\uFE4F\u12400-\u1247F\u16FE0-\u16FFF \w\s]+/);
    const sentences = data.split(splitRegxp).filter((elem) => { return !!elem; });


    let resArray = new Array(0);
    let tmpObj = {};

    for(let sentence of sentences){
        tmpObj.sentence = sentence;
        tmpObj.words = [];
        if( sortToLength ) tmpObj.groups = {};

        for(let start = 0; start < sentence.length; ++start){
            let maxCurrLength = sentence.length - start;
            for(let amount = (maxWordLength <= maxCurrLength) ? maxWordLength : maxCurrLength; amount > 0; --amount){
                if( sortToLength ) {
                    if( amount.toString() in tmpObj.groups ) {
                        tmpObj.groups[ amount.toString() ].push(sentence.substr(start, amount));
                    } else {
                        tmpObj.groups[ amount.toString() ] = new Array(sentence.substr(start, amount));
                    }
                }
                tmpObj.words.push( sentence.substr(start, amount) );
            }
        }
        resArray.push( Object.assign({}, tmpObj) );
    }
    return resArray;
}
