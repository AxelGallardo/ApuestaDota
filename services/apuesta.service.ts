import axios from "axios"

class ApuestaService {

    async crearApuesta(monto: number, tipo: number) {
        try {

            const response =
                await axios.post("https://apuestadota.com:8080/api/bet", { monto, tipo })
            console.log(response)
        } catch (error) {
            console.log(error)
        }



    }


}

