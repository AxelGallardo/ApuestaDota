import axios from 'axios';

class ApuestaService {
  /**
   *
   * @param monto Monto de la apuesta
   * @param tipo Tipo de la apuesta
   * @returns Con esta funcion podras crear una apuesta en la base de datos.
   */
  async crearApuesta(monto: number, tipo: number) {
    try {
      const response = await axios.post(
        'https://apuestadota.com:8080/api/bet',
        {monto, tipo},
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   *
   * @param userId El id del usuario
   * @param limit El limit es la cantidad de apuestas que quieres que te regrese, por defecto es 10
   * @returns Con esta funcion podras obtener una lista de las apuestas de modo real hechas por el usuario
   */
  async listApuestasReal(userId: number, limit = 10) {
    try {
      const {data} = await axios.post(
        'https://apuestadota.com/api/backoffice/apuesta/apuestaNormalDetail',
        {
          id: userId,
          limit: limit,
        },
      );

      console.log('APUESTAS POR USUARIO', data);
    } catch (err) {
      console.error({err});
    }
  }

  /**
   *
   * @param userId El id del usuario
   * @param limit El limit es la cantidad de apuestas que quieres que te regrese, por defecto es 10
   * @returns Con esta funcion podras obtener una lista de las apuestas de modo practica hechas por el usuario
   */
  async listApuestasPrueba(userId: number, limit = 10) {
    try {
      const {data} = await axios.post(
        'https://apuestadota.com/api/backoffice/apuesta/apuestaPruebaDetail',
        {
          id: userId,
          limit: limit,
        },
      );

      console.log('APUESTAS POR USUARIO', data);
    } catch (err) {
      console.error({err});
    }
  }
}
