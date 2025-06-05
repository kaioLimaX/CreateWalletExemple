const bip39 = require('bip39')
const bip32 = require('bip32')
const bitcoin = require('bitcoinjs-lib')

function generateWallet(network = 'testnet') {
  const networks = bitcoin.networks[network]
  if (!networks) throw new Error(`Rede inválida: ${network}`)

  const mnemonic = bip39.generateMnemonic()
  const seed = bip39.mnemonicToSeedSync(mnemonic)
  const root = bip32.fromSeed(seed, networks)
  const child = root.derivePath("m/49'/1'/0'/0/0")

  const address = bitcoin.payments.p2pkh({
    pubkey: child.publicKey,
    network: networks
  }).address

  return {
    mnemonic,
    address,
    privateKey: child.toWIF(),
    seedHex: seed.toString('hex'),
  }
}

module.exports = {
  generateWallet,
}