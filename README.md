# abs-truffle-test

1. Edit `2_deploy_contracts.js` to use your ABS Public Key (same as the Tessera public key)
2. Edit `truffle-config.js` to use your RPC endpoint URL
3. In a terminal do this to deploy the contract that will be privateFor the public key entered in step 1:
```
truffle networks --clean
truffle migrate --network azureqbs
```
4. If step 3 did not error, then a privateFor contract was deployed ok.

