import AxiosServiceBase from "../";

export default class BaconIpsumAxiosService extends AxiosServiceBase {
    getBaconIpSum() {
        return this.axios
            .get('https://baconipsum.com/api/?type=meat-and-filler')
    }
}
