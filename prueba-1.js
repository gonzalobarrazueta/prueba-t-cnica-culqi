let s = "dogowldogcatowlcatdog";
let words = ["dog","owl","cat", "owl"];

let findSubstrings = function (s, words) {

    let wordLength = words[0].length;
    let concatenatedStringLength = words.length * wordLength;
    if (s.length < concatenatedStringLength) return [];

    let l = 0;
    let r = concatenatedStringLength;

    let indices = [];

    for (let i = 0; i < s.length; i++) {
        let substring = s.substring(l, r);

        if (substring.length < concatenatedStringLength) break;

        if (allWordsArePresent(substring, words)) {
            indices.push(l);
        }

        l++; r++;
    }

    return indices;
}

function allWordsArePresent(substring, words) {
    for (let i = 0; i < words.length; i++) {
        let index = substring.indexOf(words[i]);
        if (index === -1) return false;
        substring = substring.replace(words[i], '');
    }
    return true;
}

console.log(findSubstrings(s, words));