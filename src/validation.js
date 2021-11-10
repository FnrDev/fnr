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
        if (!email) return new TypeError('Missing email to vaildation.');
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(emailRegex)) return true;
        return false;
    };
    /**
     * 
     * @param {string} number 
     * @returns true if is vaild phone number false if not
     */
    isPhoneNumber(number) {
        if (!number) return new TypeError('Missing phone number to vaildation.');
        if (typeof number !== 'string') return new TypeError(`Phone number must be a string. received ${typeof number}`);
        const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (number.match(phoneRegex)) return true;
        return false;
    };
    /**
     * 
     * @param {string} date 
     * @returns true if is vaild date false if not
     */
    isDate(date) {
        if (!date) return new TypeError('Missing data to vaildation.');
        if (typeof date !== 'string') return new TypeError(`Date must be a string. received ${typeof date}`);
        const dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
        if (date.match(dateRegex)) return true;
        return false;
    };
    /**
     * 
     * @param {string} url 
     * @returns true if is vaild url false if not
     */
    isURL(url) {
        if (!url) return new TypeError('Missing url to vaildation.');
        if (typeof url !== 'string') return new TypeError(`Url must be a string. received ${typeof date}`);
        const urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
        if (url.match(urlRegex)) return true;
        return false;
    };
    /**
     * 
     * @param {string} url 
     * @returns true if image url is image or false if not
     */
    isImage(url) {
        if (!url) return new TypeError('Missing image url to vaildation.');
        if (typeof url !== 'string') return new TypeError(`Image url must be a string. received ${typeof date}`);
        const imgRegex = /(http[s]*:\/\/)([a-z\-_0-9\/.]+)\.([a-z.]{2,3})\/([a-z0-9\-_\/._~:?#\[\]@!$&'()*+,;=%]*)([a-z0-9]+\.)(jpg|jpeg|png)/i;
        if (url.match(imgRegex)) return true;
        return false;
    };
}

module.exports = validation;