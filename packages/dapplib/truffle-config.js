require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom system tragic name renew sad snake hope entire army giggle'; 
let testAccounts = [
"0xadccd386af3d76ffb812ed41ef4ecc28444767e744be237e8b12576aa135455c",
"0x0c7a267584271d68decd96612333c780ce0e182c5e00bc7bcadf29cd8360c178",
"0x888815cfbcc9ac17535b78c4fab07870d4e66d1ff828120f048bd3cb69d07417",
"0x210d871c2d4249d58437c74358078f639a0e9251313b370f3aca1dcf4b9c9eb1",
"0x9496b25676b28d2ef7c35f33fd5fc4e0116fc7904dcda225b7a04a20f85f8a5e",
"0xefade36a34589daf0afc1a8a1a47c5f6169d31dd743686684d6bc5bc71173fa1",
"0xdc6af13fecf40e172ee58cef1d676783ffed8e68a313ed1d2b9e3783449b07f7",
"0x660ad696601de851151f97c0d59f9d5ab0e5f1dfeaea8691ba15ee257a7dfee7",
"0x3cae9c684ebeb19d3eb34a3183c82b27d2ca825c14d454785e1352cd6a6942c1",
"0x0b7501b17eb2a4da8dbf09bf8a8acb84404701af970bc9a6034f8da070e70011"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


