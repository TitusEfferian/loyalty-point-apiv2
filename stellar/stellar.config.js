import StellarSdk from 'stellar-sdk'
// export const server = new StellarSdk.Server('http://192.168.29.86:8000/', {
//   allowHttp: true
// });
// export const network = new StellarSdk.Network('Standalone Network ; February 2017');
// export const UseNetwork = StellarSdk.Network.use(network);
export const server = new StellarSdk.Server('https://horizon-testnet.stellar.org')
export const UseNetwork = StellarSdk.Network.useTestNetwork()

export const RALALI_ISSUER = 'GCOGIX37YSPLJBOXECR4IGM2Y5PH547MBSXJVUC24JYCYB5QQXWKO5WN'
export const RALALI_ISSUER_SECRET = 'SDB62U3YHQMJBYBPD56CDWTJQJPBYX5EZ3PEK5KQFQWTHP7STNGC3CO7'

export const RALALI_PUBLIC = 'GCACDXO6PN7JDJ737H754NP62CLRDDX4FZHYU3XNF7UMOEIFQVEQAKMM'
export const RALALI_SECRET = 'SCS5OCDGGEDYELAWY5QQOBIGARDPO3GEH5J5723IFHNQYTJEFAXO3VBX'

export const RLL_ASSET = new StellarSdk.Asset('RLL', RALALI_ISSUER)