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
    }
}

module.exports = validation;