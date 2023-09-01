import axios from 'axios'


export default function getDefs(numOfUsages: number, numOfDefs: number, word: string) {
    let info = getInfo(word);
    return formatDefs(numOfUsages, numOfDefs, info)
}


function getInfo(word: string){
    return new Promise(function (resolve, reject) {
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                console.log(error)
                reject("error")
            });
    });
}


async function formatDefs(numOfUsages: number, numOfDefs: number, info: any) {
    info = info[0]["meanings"];
    let str = `${this.currentWord}\n`;
    let usage = 0;
    let def = 0;
    while ((usage < numOfUsages) && (usage < info.length)) {
        str += `${info[usage]["partOfSpeech"]}\n`;
        while ((def < numOfDefs) && (def < info[usage]["definitions"].length)) {
            str += `    ${info[usage]["definitions"][def]["definition"]}\n`;
            def += 1;
        }
        str += "\n";
        usage += 1;
        def = 0;
    }
    console.log(str);
}