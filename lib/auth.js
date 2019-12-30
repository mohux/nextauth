import axios from 'axios';
export const loginUser = async (email, password) => {
    try{
        const { data } = await axios.post('/api/login', { email, password });
        console.log(data);
    }catch({response}){
        console.log(response.data);
    }
}