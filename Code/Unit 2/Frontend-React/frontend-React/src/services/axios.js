import axios from 'axios'

const baseUrl = 'http://localhost:3000/ChocoAndino/fauna/'

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