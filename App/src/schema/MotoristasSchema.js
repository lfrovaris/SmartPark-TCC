export default class MotoristaSchema {

    _id;
    name;
    email;
    password;
    vagasFavoritas=[];

    constructor(_id='', name='', email='', password='', vagasFavoritas=[]){
      this._id=_id;
      this.name=name;
      this.email=email;
      this.password=password;
      this.vagasFavoritas=vagasFavoritas;
    }

    static schema = {
      name: 'Motorista',
      primaryKey: '_id',
      properties: {
        _id: 'string',
        name: 'string',
        email: 'string',
        password: 'string',
        vagasFavoritas: {
          type: 'list',
          objectType: 'string'
        }
      }
    };
  }