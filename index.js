const { generateWallet } = require('./src/WalletService')

function main() {
  try {
    const wallet = generateWallet('testnet')
    console.log('=== Carteira Bitcoin (testnet) ===')
    console.log('Mnemonic:', wallet.mnemonic)
    console.log('Address:', wallet.address)
    console.log('Private Key:', wallet.privateKey)
    console.log('Seed (hex):', wallet.seedHex)
  } catch (e) {
    console.error(e.message)
  }
}

main()