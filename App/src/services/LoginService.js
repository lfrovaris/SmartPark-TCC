import { api } from './Configure';
import realmMotorista from '../repository/RealMotorista';
import showMessage from '../view/core/message';
  
export async function serviceLogin(login, navigation) {
    try {
        const resp = await api.post('/login', login);
        if(resp.status == 200){
            delete resp.data.__v
            realmMotorista.create(resp.data);
            showMessage('Login realizado com sucesso!')
            navigation.navigate('MainScreen');
        }else{
            showMessage('Login incorreto, tente novamente!');
        }
    } catch (e) {
        console.log(e);
    }
}

export async function serviceRegister(motorista, navigation) {
    try {
        const resp = await api.post('/motorista', motorista);
        if(resp.status == 200){
            navigation.navigate('HomeScreen')
            showMessage('Cadastro realizado com sucesso!');
        }else{
            showMessage('Cadastro falhou, tente novamente!');
        }
    } catch (e) {
        console.log(e);
    }
}

export async function serviceUpdateAccount(motorista, navigation) {
    try {
        const resp = await api.put(`/motorista/${motorista._id}`, motorista);
        if(resp.status == 200){
            realmMotorista.updateProfile(motorista);
            navigation.navigate('ParkingLotScreen');
            showMessage('Perfil editado com sucesso!');
        }else{
            showMessage('Perfil falhou, tente novamente!');
        }
    } catch (e) {
        console.log(e);
    }
}


export async function serviceUpdateAccountFavorites(motorista, message) {
    try {
        const resp = await api.put(`/motorista/${motorista._id}`, motorista);
        if(resp.status == 200){
            showMessage(message);
        }else{
            showMessage(message);
        }
    } catch (e) {
        console.log(e);
    }
}