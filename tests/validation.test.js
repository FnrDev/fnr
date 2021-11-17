const fnr = require('../src/index.js');
const validation = new fnr.validation();

describe('Validations', () => {
	describe('isIP()', () => {
		describe('IPV4', () => {
			test('127.0.0.1 returns true', () => {
				expect(validation.isIP('127.0.0.1')).toBeTruthy();
			})
			test('255.255.255.0 returns true', () => {
				expect(validation.isIP('255.255.255.0')).toBeTruthy();
			})
			test('284.284.284.0 returns false', () => {
				expect(validation.isIP('284.284.284.0')).toBeFalsy();
			})
		})
		describe('IPV6', () => {
			test('2001:db8:3333:4444:5555:6666:7777:8888 returns true', () => {
				expect(validation.isIP('2001:db8:3333:4444:5555:6666:7777:8888')).toBeTruthy()
			})
			test('56FE::2159:5BBC::6594 return false', () => {
				expect(validation.isIP('56FE::2159:5BBC::6594')).toBeFalsy();
			})
		})
	})
})
