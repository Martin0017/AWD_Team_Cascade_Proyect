import axios from 'axios';

const baseUrl = 'http://3.110.116.24:3001/ChocoAndino/fauna/'

export async function getFauna(id) {
    try {
        const response = await axios({
            url: `${baseUrl}`,
            method: 'GET'
        })
        return response;
    } catch (error) {
        console.log(error)
    }
}