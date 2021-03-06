'use strict';

class validation {
    /**
     * @param {string} email 
     * @returns true if is vaild email or false if not.
     * @example 
     * ```
     * console.log(isEmail('me@fnrr.dev'))
     * ```
     */
    isEmail(email) {
        if (!email) return new TypeError('Missing email to validation.');
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(emailRegex)) return true;
        return false;
    };
    /**
     * @param {string} number 
     * @returns true if is vaild phone number false if not
     */
    isPhoneNumber(number) {
        if (!number) return new TypeError('Missing phone number to validation.');
        if (typeof number !== 'string') return new TypeError(`Phone number must be a string. received ${typeof number}`);
        const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (number.match(phoneRegex)) return true;
        return false;
    };
    /**
     * @param {string} date 
     * @returns true if is vaild date false if not
     */
    isDate(date) {
        if (!date) return new TypeError('Missing data to validation.');
        if (typeof date !== 'string') return new TypeError(`Date must be a string. received ${typeof date}`);
        const dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
        if (date.match(dateRegex)) return true;
        return false;
    };
    /**
     * @param {string} url 
     * @returns true if is vaild url false if not
     */
    isURL(url) {
        if (!url) return new TypeError('Missing url to validation.');
        if (typeof url !== 'string') return new TypeError(`Url must be a string. received ${typeof url}`);
        const urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
        if (url.match(urlRegex)) return true;
        return false;
    };
    /**
     * @param {string} url 
     * @returns true if image url is image or false if not
     */
    isImage(url) {
        if (!url) return new TypeError('Missing image url to validation.');
        if (typeof url !== 'string') return new TypeError(`Image url must be a string. received ${typeof url}`);
        const imgRegex = /(http[s]*:\/\/)([a-z\-_0-9\/.]+)\.([a-z.]{2,3})\/([a-z0-9\-_\/._~:?#\[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(jpg|jpeg|png)/i;
        if (url.match(imgRegex)) return true;
        return false;
    };
    /**
     * @param {string} hex 
     * @returns true if is hex color false if not.
     */
    isHexColor(hex) {
        if (!hex) return new TypeError('Missing hex code to validation.');
        if (typeof hex !== 'string') return new TypeError(`Hex code must be a string. received ${typeof hex}`);
        const hexRegex = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i;
        if (hex.match(hexRegex)) return true;
        return false;
    }
    /**
     * @param {string} ip
     * @return true if the input is an ip address false if not.
     */
      isIP(ip) {
        if (!ip) return new TypeError('Missing ip address to validation.');
        if (typeof ip !== 'string') return TypeError(`IP Address must be a string. received ${typeof ip}`);
        const ipRegex_v4 = /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/;
        const ipRegex_v6 = /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/;
        if (ip.match(ipRegex_v4) || ip.match(ipRegex_v6)) return true;
        return false;
    }
}

module.exports = validation;
