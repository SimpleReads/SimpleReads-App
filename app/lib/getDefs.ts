import axios from 'axios'

/**
 * Retrieves word definitions from an online dictionary API that user requests.
 *
 * @param numOfUsages - The max number of usages to retrieve for the word.
 * @param numOfDefs - The max number of definitions to retrieve for each usage.
 * @param word - The word for which definitions are to be fetched.
 * @returns A Promise that resolves to a formatted string containing definitions or an error message.
 */
export default function getDefs(numOfUsages: number, numOfDefs: number, word: string){

    // Function which fetches word information from the dictionary API
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

    // Function which formats retrieved definitions
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
        return str;
    }

    // Remove any non-alphabetical characters at the end of the word
    let newword = word
    let finalChar = word[word.length - 1]
    if (!finalChar.match(/[a-zA-Z]/)) {
        newword = word.substring(0, word.length - 1)
    }

    // Get the word information and format definitions
    let info = getInfo(newword);
    let str = formatDefs(numOfUsages, numOfDefs, info, word);
    
    return str;
}