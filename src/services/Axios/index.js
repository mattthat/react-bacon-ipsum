import axios from 'axios';

export default class AxiosServiceBase {
    constructor(defaults = {}) {
        this.axios = axios
        this.axios.defaults = defaults;
    }
}
