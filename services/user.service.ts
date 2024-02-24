import axios from 'axios';
export class UsuarioService {
  /**
   *
   * @param userId Recuerda llamar esta funcion y enviarle como parametro el id del usuario
   * @returns Con esta funcion obtendras la informacion del usuario
   */
  static async getUser(userId: number) {
    try {
      const response = await axios.post(
        'https://apuestadota.com/api/backend/getSaldo',
        {user_id: userId},
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
