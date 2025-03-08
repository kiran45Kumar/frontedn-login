import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;
export const registeruser = async (userdata)=>{
    try{
        const response = await axios.post(`${API_URL}/register`, userdata);
        return response.data;
    }
    catch(error){
        throw error.response.data;
    }
};

export const loginuser = async (userdata)=>{
    try{
        const response = await axios.post(`${API_URL}/login`, userdata);
        return response.data;
    }
    catch(error){
        throw error.response.data;
    }
};