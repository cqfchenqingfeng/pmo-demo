import axios from 'axios';

let baseUrl="http://172.20.23.99";

export const getListInfo = params =>{ return axios.get(`${baseUrl}/data/info.php`) }

export const getTestInfo = params =>{ return axios.post(`${baseUrl}/Project/test`,params)}

export const searchList = params =>{ return axios.get(`${baseUrl}/data/search.php`,{params:params})}

export const setUserDefined = params =>{console.log(params); return axios.post(`${baseUrl}/data/test.php`,params)}