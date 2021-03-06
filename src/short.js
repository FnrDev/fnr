const { default: axios } = require('axios');
const fnr = require('./index');
const vaildation = new fnr.validation();

class shortURL {
    /**
     * @param {string} key
     */
    constructor(key) {
        if (!key) throw new Error('Missing api key, check https://app.bitly.com/settings/api/ to get key.');
        this.key = key;
    }
    /**
     * @param {string} url 
     * @returns
     * ```js
     * {
*       created_at: '2021-11-14T14:35:44+0000',
        id: 'bit.ly/31Q14jw',
        link: 'https://bit.ly/31Q14jw',
        custom_bitlinks: [],
        long_url: 'https://probot.io/',
        archived: false,
        tags: [],
        deeplinks: [],
        references: { group: 'https://api-ssl.bitly.com/v4/groups/Bk98d0JwFyp' }
     * }
     * ```
     */
    async short(url) {
        if (!url) return new TypeError('Missing url to short.')
        if (typeof url !== 'string') return new TypeError(`URL MUST BE A STRING, received ${typeof url}.`);
        if (!vaildation.isURL(url)) return new TypeError('You need a vaild url to short.');
        try {
            const req = await axios({
                url: "https://api-ssl.bitly.com/v4/shorten",
                method: "POST",
                headers: {
                    Authorization: `Bearer ${this.key}`
                },
                data: {
                    long_url: url
                }
            });
            return req.data;
        } catch (e) {
            return e.response.data;
        }
    }
}

module.exports = shortURL;