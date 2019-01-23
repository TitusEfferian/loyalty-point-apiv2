import StellarSdk from 'stellar-sdk'
import { server, RLL_ASSET, RALALI_SECRET, RALALI_PUBLIC } from './stellar.config'

export const changeTrust = async (sourceAccount, secretKey) => {
  const account = await server.loadAccount(sourceAccount)

  const transaction = new StellarSdk.TransactionBuilder(account).addOperation(
    StellarSdk.Operation.changeTrust({
      asset: RLL_ASSET
    })
  ).build()

  transaction.sign(StellarSdk.Keypair.fromSecret(secretKey))

  const result = await server.submitTransaction(transaction)

  return result
}

export const createAccount = async (destination) => {
  const account = await server.loadAccount(RALALI_PUBLIC)

  const transaction = new StellarSdk.TransactionBuilder(account).addOperation(
    StellarSdk.Operation.createAccount({
      destination: destination,
      startingBalance: '2'
    })
  ).build()

  transaction.sign(StellarSdk.Keypair.fromSecret(RALALI_SECRET))

  const result = await server.submitTransaction(transaction)

  return result
}

export const loadAccount = (sourceAccount) => {
  return server.loadAccount(sourceAccount)
}

export const payment = (amount, destination, order_id) => {
  return new Promise((resolve, reject) => {
    server.loadAccount(RALALI_PUBLIC)
      .then((account) => {
        var transaction = new StellarSdk.TransactionBuilder(account)
          .addOperation(StellarSdk.Operation.payment({
            amount: amount,
            asset: RLL_ASSET,
            destination: destination
          }))
          .addMemo(StellarSdk.Memo.text('Order id: ' + order_id))
          .build()
        transaction.sign(StellarSdk.Keypair.fromSecret(RALALI_SECRET))
        return server.submitTransaction(transaction)
      })
      .then(function (result) {
        resolve(result)
      })
      .catch(function (err) {
        reject(err)
      })
  })
}

export const buyVoucher = (sourceAccount,secretKey,amount) =>{
  return new Promise((resolve,reject)=>{
    server.loadAccount(sourceAccount)
    .then((account)=>{
      var transaction = new StellarSdk.TransactionBuilder(account)
      .addOperation(StellarSdk.Operation.payment({
        amount:amount,
        asset:RLL_ASSET,
        destination:RALALI_PUBLIC
      }))
      .build()
      transaction.sign(StellarSdk.Keypair.fromSecret(secretKey))
      return server.submitTransaction(transaction)
    })
    .then(function(result){
      resolve(result)
    })
    .catch(function(err){
      reject(err)
    })
  })
}