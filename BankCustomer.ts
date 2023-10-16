import * as assert from 'assert';
class BankCustomer {
    private name: string;
    private secretCode: string;

    constructor(name: string, secretCode: string) {
        this.name = name;
        this.secretCode = secretCode;
    }


    public getName()
    {
        return this.name;
    }

    public setName(name: string)
    {
        this.name = name;
    }

    public  getSecretCode()
     {
        return this.secretCode;
     }
     public  setSecretCode(secretCode:string )
     {
        this.secretCode = secretCode;
     }

     public verifyPinInput(pinCode)
     {
        if(this.secretCode == pinCode)
        {
            return true;
        }
        return false;
     }
}
const customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));