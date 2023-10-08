import axios from 'axios'


export default function getDefs(numOfUsages: number, numOfDefs: number, word: string){

    async function getInfo(word: string){
        return new Promise(function (resolve, reject) {
            axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
                .then(response => {
                    resolve([0, response.data])
                })
                .catch(error => {
                    console.log(error.response.data);
                    resolve([1, "Sorry we couldn't find a definition for that word"])
                });
        });
    }

    async function formatDefs(numOfUsages: number, numOfDefs: number, info: any, word: string) {
        let i = await info
        let content = i[1]
        let str = ""
        if (i[0] == 0){
            content = content[0]["meanings"];
            str = `${word}\n`;
            let usage = 0;
            let def = 0;
            while ((usage < numOfUsages) && (usage < content.length)) {
                str += `${content[usage]["partOfSpeech"]}\n`;
                while ((def < numOfDefs) && (def < content[usage]["definitions"].length)) {
                    str += `\t${content[usage]["definitions"][def]["definition"]}\n`;
                    def += 1;
                }
                str += "\n";
                usage += 1;
                def = 0;
            }
        }
        else {
            str = content
        }
        
        //console.log(str);
        return str;
    }

    let newword = word
    let finalChar = word[word.length - 1]
    if (!finalChar.match(/[a-zA-Z]/)) {
        newword = word.substring(0, word.length - 1)
    }

    let info = getInfo(newword);
    let str = formatDefs(numOfUsages, numOfDefs, info, word);
    //onsole.log(str);
    return str;
}





