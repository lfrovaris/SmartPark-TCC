/* eslint-disable prettier/prettier */
import { realmConnect } from '../services/Configure';
import MotoristaSchema from '../schema/MotoristasSchema';

function convertToArray(realmObjectsArray)
{
    let copyOfJsonArray = Array.from(realmObjectsArray);
    let jsonArray = JSON.parse(JSON.stringify(copyOfJsonArray));
    return jsonArray;
}

class RealmMotorista {
  create(motorista){
    try{
      realmConnect.write(() => {
          realmConnect.create(MotoristaSchema.schema.name, motorista, !!realmConnect.objectForPrimaryKey(MotoristaSchema.schema.name, motorista._id));
      });
    }catch(err){
      console.warn(err)
    }
  }

  updateFavorites(motorista, vaga, add){
    try{
      realmConnect.write(() => {
          if(add){
            motorista.vagasFavoritas.push(vaga)
          }else{
            motorista.vagasFavoritas = motorista.vagasFavoritas.filter(el => el !== vaga)
          }
      });
    }catch(err){
      console.warn("updateFavorites", err)
    }
  }

  updateProfile(motorista){
    try{
      realmConnect.write(() => {
          realmConnect.create(MotoristaSchema.schema.name, motorista, !!realmConnect.objectForPrimaryKey(MotoristaSchema.schema.name, motorista._id));
      });
    }catch(err){
      console.warn(err)
    }
  }

  delete(motorista) {
    try{
      realmConnect.write(() => {
        realmConnect.delete(realmConnect.objectForPrimaryKey(MotoristaSchema.schema.name, motorista._id));
      });
    }catch(err){
      console.warn(err)
    }
  }

  getMotorista() {
    try{
      const motorista = realmConnect.objects(MotoristaSchema.schema.name);
      return motorista[0];
    }catch(err){
      console.warn(err)
    }
  }
}

const realmMotorista = new RealmMotorista();
console.log("realmMotorista", realmMotorista)
export default realmMotorista;