import { api } from './Configure'

export async function ServiceGetParkingLotList() {
    try {
        const resp = await api.get('vaga/all');
        return resp.data;
    } catch (e) {
        throw e;
    }
}
