class API {
    async getData() {

        //const total = 50;
        //get data from api

        const data = await fetch('https://www.datos.gov.co/api/views/t929-et3u/rows.json?accessType=DOWNLOAD');

        const answerJson = await data.json();

        return {
            answerJson
        }
    }
}