import axios from 'axios';
export class ChallengeService {
  static async createLobby(body: any) {
    const {
      userID,
      userImage,
      bet,
      commission,
      entrance,
      revenue,
      nickname,
      steamId,
      medal,
      balance,
    } = body;
    // const balance = await this.getBalance();
    return await axios.post('/api/challenge/createLobby', {
      userID,
      userImage,
      bet,
      commission,
      revenue,
      entrance,
      balance,
      nickname,
      steamId,
      medal,
    });
  }

  static async checkAvailable(userID: number) {
    const {data} = await axios.get(
      `/api/challenge/checkAvailable?userID=${userID}`,
    );
    return data.status;
  }

  static async checkIfLobby(userID: number) {
    const result = await axios.get(
      `/api/challenge/checkLobby?userID=${userID}`,
    );
    const {data} = result;
    if (data.message) {
      return;
    }
    return {
      result: data.result,
      id: data.id,
      ready: data.ready,
      medal: data.medal,
    };
  }

  static async listLobbies() {
    const {data} = await axios.get('/api/challenge/list');
    return data.result;
  }

  static async isHost(lobbyId: number, userID: number) {
    const {data} = await axios.post('/api/challenge/isHost', {
      lobbyId,
      userID,
    });
    return data.result;
  }

  static async abandonLobby({id, userID, entrance, lobbyId, balance}: any) {
    // const balance = await this.getBalance();
    const isHost = await this.isHost(lobbyId, userID);
    const {data} = await axios.put('/api/challenge/abandon', {
      lobbyPlayerId: id,
      userID,
      balance,
      entrance,
      isHost,
      lobbyId,
    });
    return data.result;
  }

  static async handleReady(id: number, ready: boolean) {
    const {data} = await axios.put('/api/challenge/ready', {
      id,
      ready,
    });
    return data.result;
  }

  //   static async verifyStatus(lobbyId: num) {
  //     const {data} = await axios.get(
  //       `api/challenge/verifyStatus?lobbyId=${lobbyId}`,
  //     );
  //   }

  static getRoles(array: any) {
    return array
      .filter(item => !item.nickname && !item.steamId)
      .reduce((acc, current) => {
        const name = this.findRoleName(current.role);
        if (!acc[current.role]) {
          acc[current.role] = name;
        }
        return acc;
      }, {});
  }

  static async joinLobby(body: any) {
    const {
      id,
      playerId,
      playerImage,
      medal,
      nickname,
      steamId,
      role,
      team,
      entrance,
      balance,
    } = body;
    const {data} = await axios.put('/api/challenge/joinLobby', {
      id,
      playerId,
      playerImage,
      medal,
      nickname,
      steamId,
      role,
      team,
      balance,
      entrance,
    });
    return data.result;
  }

  static async checkFree(userID: number) {
    const {data} = await axios.get(`/api/challenge/checkFree?userID=${userID}`);
    return data.status;
  }

  static async handleUpdate(name: string, password: string, id: number) {
    const {data} = await axios.put('/api/challenge/lobbyUpdate', {
      name,
      password,
      id,
    });
    return data.result;
  }

  static async changeRole({
    oldId,
    newId,
    nickname,
    steamId,
    image,
    medal,
    userId,
  }: any) {
    const {data} = await axios.put('/api/challenge/changeRole', {
      nickname,
      steamId,
      userId,
      medal,
      image,
      oldId,
      newId,
    });

    return data.result;
  }

  static async checkEveryoneReady(lobbyId: number) {
    const {data} = await axios.get(
      `/api/challenge/checkEveryoneReady?lobbyId=${lobbyId}`,
    );
    return data.result;
  }

  static async startGame(lobbyId: number) {
    const {data} = await axios.put('/api/challenge/startGame', {
      lobbyId,
    });
    return data.result;
  }

  static findRoleName(roleNumber: number) {
    let name = '';
    switch (roleNumber) {
      case 1:
        name = 'Carry';
        break;
      case 2:
        name = 'Midlaner';
        break;
      case 3:
        name = 'Offlaner';
        break;
      case 4:
        name = 'Soft Support';
        break;
      case 5:
        name = 'Hard Support';
        break;
      default:
        name = 'Hard Support';
        break;
    }

    return name;
  }
}
