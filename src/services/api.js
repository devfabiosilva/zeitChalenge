import axios from 'axios';
import md5 from 'md5';
import { privKey } from '../utils/privkey.js'

//const baseurl = 'http://gateway.marvel.com/v1/public/';

const credentials = {
    ts: new Date().getTime(),
    apiKey: 'e422f8cb13eab387bc50725320c41866',
    privKey: privKey//'4723e916929f874bff1241558b5aa4cd80f56c54'
}
// https://developer.marvel.com/documentation/authorization

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/'
});

export async function allHeroes(offset) {

    const { ts, apiKey, privKey } = credentials;
    const hash = md5(ts + privKey + apiKey);
    console.log(privKey);
    const param = `/characters?limit=10&offset=${offset}&ts=${ts}&apikey=${apiKey}&hash=${hash}`;
    const res = await api.get(param);
    //return await api.get(`/characters?limit=10&offset=${offset}&ts=${ts}&apikey=${apiKey}&hash=${hash}`);
    return {link: param, res}

}
