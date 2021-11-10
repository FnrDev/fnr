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
        if (!email) return new TypeError('Missing email to vaildation')
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(emailRegex)) return true;
        return false;
    }
    
}

module.exports = validation;