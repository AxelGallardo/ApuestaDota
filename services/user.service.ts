import axios from "axios"

class UsuarioService {

    async getUser(id) {
        try {
            const response =
                await axios.post("https://apuestadota.com/api/backend/getUser", { user_id: id })
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }


    async getSaldo() {
        try {
            const response =
                await axios.get("https://apuestadota.com:8080/api/saldo", {})
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }






}

