{
"title"       : "How to recover VET tokens sent to MyCrypto",
"sort"        : "99",
"category"    : "Tokens",
"description" : "Tokens",
"date_published" : "2018-09-22T08:00:00+08:00",
"date_modified"  : "2018-09-22T08:00:00+08:00"
}

---%

VeChain recently migrated to their own blockchain, meaning that it is no longer an ERC-20 token and is currently not supported by MyCrypto. If you accidentally sent VET tokens to your Ethereum wallet, follow these instructions in order to recover your tokens.

## 1. Get a keystore file

### From a hardware wallet

When using a hardware wallet, exporting your keystore file is a bit more difficult. A hardware wallet never exposes the private keys, so you have to use your recovery phrase. Please note that by using your recovery phrase, you are exposing your private keys to your computer so it is **highly recommended** to reset your hardware wallet after getting the keystore file (and moving your other funds somewhere else temporarily)!

To get a keystore file, use the mnemonic phrase option and fill in your recovery phrase. Then follow the instructions below.

### From a private key or mnemonic phrase

If you are using a private key or mnemonic phrase to access your wallet, exporting a keystore file is easy. It is recommended to do this on an offline computer to prevent anyone from stealing your private key. Simply access your account in the MyCrypto desktop app and navigate to "Wallet Info" using the dropdown menu.

![](https://i.imgur.com/DisRHNw.png)

Scroll down to "Utilities". You should see a button to generate a keystore file. Fill in a strong password, click "Generate Keystore File" and click "Download". Safe the keystore file somewhere on your disk.

## 2. Get the VeChainThor Wallet

Download the [VeChainThor Wallet](https://wallet.vechain.org/) (available for iOS and Android) from the official VeChain website. Open the app, accept the terms and conditions and set a strong login PIN.

## 3. Import your keystore file

![](https://i.imgur.com/gO47LYo.png)

In the VeChainThor Wallet you should see an option to import a wallet. Select this option, go to the "Keystore" tab and paste all the contents of your keystore file. Fill in the password for the keystore file, that you used when generating the keystore file. Choose a name for your wallet and click import. You should now be able to access your wallet with your VET tokens.
