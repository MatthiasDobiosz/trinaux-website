import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://random-user.p.rapidapi.com/getuser',
    headers: {
        'X-RapidAPI-Key': '6db746e077msh0a1609870030b0fp115007jsn62452d24cc95',
        'X-RapidAPI-Host': 'random-user.p.rapidapi.com'
    }
}

export const getPeople = async () => {
    try{
        const response = await axios.request(options);
        const {data} = response;
        return data;
    }
    catch(e){
        console.error(e);
    }

}