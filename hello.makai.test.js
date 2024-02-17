import myName from '../utils/hello.Makai.mjs';
import assert from 'assert';

it("Tests helloworld", ()=>{

    const hello = myName();

    assert.equal(hello,"Hello Makai");

});