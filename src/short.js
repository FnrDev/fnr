const { default: axios } = require('axios');
const fnr = require('./index');
const vaildation = new fnr.validation();

class shortURL {
    /**
     * @param {string} key
     */
    constructor(key) {
        if (!key) throw new Error('Missing api key, check https://i8.ae/user/tools/api to get key.');
        this.key = key;
    }
    /**
     * @param {string} url 
     * @returns
     * ```js
     * { error: 0, short: "https://i8.ae/OeBnD" }
     * ```
     */
    async short(url) {
        if (!url) return new TypeError('Missing url to short.')
        if (typeof url !== 'string') return new TypeError(`URL MUST BE A STRING, received ${typeof url}.`);
        if (!vaildation.isURL(url)) return new TypeError('You need a vaild url to short.');
        try {
            const req = await axios({
                url: "https://i8.ae/api/url/add",
                method: "POST",
                headers: {
                    Authorization: this.key
                },
                data: {
                    url: url
                }
            });
            return req.data;
        } catch (e) {
            return e.response.data;
        }
    }
}

module.exports = shortURL;