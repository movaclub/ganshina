### Chinese text parser

__Usage:__
 * First parameter \<string\> - Chinese source text
 * (Optional) Second parameter \<number\> (DEFAULT = 8) - max length of sub-string generated
 * (Optional) Third parameter \<boolean\> (DEFAULT = false) - sort results by string lengths
 * Return value - Array
````
// index.js
const ChineseParser = require('chinese-parser');

console.log(ChineseParser.parse("中華民國十年，中國共產黨立於上海。", 3, true));


OUTPUT:
[
  {
    "sentence": "中華民國十年",
    "words": [
      "中華民",
      "中華",
      "中",
      "華民國",
      "華民",
      "華",
      "民國十",
      "民國",
      "民",
      "國十年",
      "國十",
      "國",
      "十年",
      "十",
      "年"
    ],
    "groups": {
      "1": [
        "中",
        "華",
        "民",
        "國",
        "十",
        "年"
      ],
      "2": [
        "中華",
        "華民",
        "民國",
        "國十",
        "十年"
      ],
      "3": [
        "中華民",
        "華民國",
        "民國十",
        "國十年"
      ]
    }
  },
  {
    "sentence": "中國共產黨立於上海",
    "words": [
      "中國共",
      "中國",
      "中",
      "國共產",
      "國共",
      "國",
      "共產黨",
      "共產",
      "共",
      "產黨立",
      "產黨",
      "產",
      "黨立於",
      "黨立",
      "黨",
      "立於上",
      "立於",
      "立",
      "於上海",
      "於上",
      "於",
      "上海",
      "上",
      "海"
    ],
    "groups": {
      "1": [
        "中",
        "國",
        "共",
        "產",
        "黨",
        "立",
        "於",
        "上",
        "海"
      ],
      "2": [
        "中國",
        "國共",
        "共產",
        "產黨",
        "黨立",
        "立於",
        "於上",
        "上海"
      ],
      "3": [
        "中國共",
        "國共產",
        "共產黨",
        "產黨立",
        "黨立於",
        "立於上",
        "於上海"
      ]
    }
  }
]

````
