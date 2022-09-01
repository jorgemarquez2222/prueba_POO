import axios from 'axios'

class UsersService {
    #url
    #headers
    #method
    #libReq
    constructor(url, method) {
        this.#url = url
        this.#method = method
        this.#headers = {
            'Content-Type': 'application/json'
        }
    }
    async deleteUser(person) {
        try {
            const options = {
                data: {
                    id: person.id
                }
            }
            const response = await axios.delete(`${this.#url}/user`, options)
            return response.data
        } catch (e) {
            return e.message
        }
    }
    async getUsers(data) {
        try {
            const config = {
                method: this.#method,
                url: `${this.#url}/users`,
                headers: this.#headers,
                data
            };
            const resp = await axios(config)
            return resp.data

        } catch (e) {
            console.log(e.stack)
        }
    }
}
const objeto = new UsersService(
    'http://localhost:3000',
    'get',
    fetch())

var data = JSON.stringify({
    "name": "Otro2"
});


// objeto.getUsers(data).then((resp) => {
//     console.log(resp)
// })
var person = {}
person.id = 126
objeto.deleteUser(person).then((resp)=>{
    console.log(resp)
})

console.log(objeto.url)