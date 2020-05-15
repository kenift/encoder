import { Encoder } from '../src'

test("Encoder: encrypt string with special characters and then decrypt", () => {
    let el = "Test string #$%!@#%^&^!@#%!^@%#&!%@#^&!%@#&^^&*123123123"

    let enc = Encoder.encrypt.string(el);

    expect(Encoder.decrypt.string(enc)).toBe(el);
})

test("Encoder: encrypt http url string, test pass if source url is equal decryption", () => {
    let el = "https://github.com/kenift/exception.git"

    let enc = Encoder.encrypt.string(el);

    expect(Encoder.decrypt.string(enc)).toBe(el);
})

test("Encoder: encrypt number 103, test pass if source is equal decryption", () => {
    let el = 103

    let enc = Encoder.encrypt.number(el);

    expect(Encoder.decrypt.number(enc)).toBe(el);
})

test("Encoder: encrypt number 103.0002, test pass if source is equal decryption", () => {
    let el = 103.0002;

    let enc = Encoder.encrypt.number(el);

    expect(Encoder.decrypt.number(enc)).toBe(el);
})

test("Encoder: encrypt number -103.0002, test pass if source is equal decryption", () => {
    let el = -103.0002;

    let enc = Encoder.encrypt.number(el);

    expect(Encoder.decrypt.number(enc)).toBe(el);
});


test("Encoder: encrypt object { name: 'Vernetti', age: 24 }, test pass if source is equal decryption", () => {
    let el = { name: 'Vernetti', age: 24 }

    let enc = Encoder.encrypt.object(el);

    expect(Encoder.decrypt.object(enc)).toEqual(el);
})

test("Encoder: encrypt array [ 'Vernetti', 24 ], test pass if source is equal decryption", () => {
    let el = [ 'Vernetti', 24 ];

    let enc = Encoder.encrypt.object(el);

    expect(Encoder.decrypt.object(enc)).toEqual(el);
});