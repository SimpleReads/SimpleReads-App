export default function getFlask(){

    async function getInfo(){
        const response = await fetch("http://localhost:3001/test")
        ;

        if (!response.ok) {
            console.log(response.json())
            throw new Error("AAAA")
        }

        const result = await response.json()
        console.log(result)
        return result.message;
    }

    return getInfo();
}