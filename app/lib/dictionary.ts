import axios from 'axios'

export default class Dictionary {
    currentWord: string;
    currentInfo: any;

    constructor(){}

    lookup(word: string){
        this.currentWord = word;
        this.currentInfo = this.getInfo(word);
    }

    getInfo(word: string){
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


    async returnInfo() {
        let stuff = await this.currentInfo
        console.log(stuff);
    }

    async getDefs(numOfUsages: number, numOfDefs: number) {
        let info = await this.currentInfo;
        info = info[0]["meanings"];
        let str = "";
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

}
