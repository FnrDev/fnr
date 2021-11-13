# Fnr

<center>
	<a href="https://www.npmjs.com/package/fnr">
		<img alt="fnr" src="https://nodei.co/npm/fnr.png">
	</a>
</center>

* NPM package that validation phone numbers & emails & dates and many more ...

# Installation from [NPM](https://www.npmjs.com/package/fnr)

```
npm install fnr
```

## Examples Regex

```js
const fnr = require('fnr');
const validation = new fnr.validation();

const isEmail = validation.isEmail('me@fnrr.dev');
const isPhoneNumber = validation.isPhoneNumber('+31636363634');
const isDate = validation.isDate('12/5/2021');
const isURL = validation.isURL('https://youtube.com');
const isImage = validation.isImage('https://probot.io/static/logo1.jpg');

console.log(isEmail); // true
console.log(isPhoneNumber); // true
console.log(isDate); // true
console.log(isURL); // true
console.log(isImage); // true
```

## Others
```js
const fnr = require('fnr');
const shortClient = new fnr.shortURL('GET_YOUR_KEY_FROM_https://i8.ae/user/tools/api');

async function shortURL(url) {
    const e = await shortClient.short(url);
    console.log(e);
}

shortURL('https://probot.io'); // And you will get output like that [#output]
```

## Output
```js
{ error: 0, short: "https://i8.ae/OeBnD" }
```