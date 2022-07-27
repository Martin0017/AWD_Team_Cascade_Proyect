import axios from 'axios'

const baseUrl = 'http://54.210.116.27:3001/ChocoAndino/fauna/'

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