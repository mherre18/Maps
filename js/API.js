class API {
    async getData() {

        //const total = 50;
        //get data from api

        const data = await fetch('https://www.datos.gov.co/resource/kkkb-uzjh.json');

        const answerJson = await data.json();

        return {
            answerJson
        }
    }
}