import axios from 'axios'


export default function getDefs(numOfUsages: number, numOfDefs: number, word: string){

    async function getInfo(word: string){
        return new Promise(function (resolve, reject) {
            axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error.response.data);
                    reject(error.response.data)
                });
        });
    }

    async function formatDefs(numOfUsages: number, numOfDefs: number, info: any, word: string) {
        let content = await info;
        content = content[0]["meanings"];
        let str = `${word}\n`;
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
        //console.log(str);
        return str;
    }

    let info = getInfo(word);
    let str = formatDefs(numOfUsages, numOfDefs, info, word);
    //onsole.log(str);
    return str;
}





