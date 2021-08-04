const SimpleStorage = artifacts.require('SimpleStorage');

module.exports = deployer => {

    // Edit this privateFor string to match the ABS Public Key of the node that should have visiblity 
    // of the contract (this value is also known as the Tessera public key)
    deployer.deploy(SimpleStorage, { privateFor: ['JjUhXkg+J1pVWdInRZ4L/G+d2VWCMrvh8nzpye/8jgw=']});
};
