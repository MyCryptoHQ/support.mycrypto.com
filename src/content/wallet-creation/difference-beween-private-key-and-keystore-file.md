{
 "title": "Differences between wallet types (e.g. private key vs keystore)",
 "sort": "12",
 "category": "Wallet Creation",
 "description": "Wallet Creation",
 "date_published": "2017-07-05T08:00:00+08:00",
 "date_modified": "2018-06-10T08:00:00+08:00"
}
---%

_What are the different types of private key formats that I can use to access my wallet?_

The ETH is stored on the blockchain, your private key or Keystore File or whatever piece of information you have proves ownership of that ETH, which allows you to move it.

At the end of the day, you are always signing with your private key.

However, for additional functionality (like protecting it with a password) there are formats & ways of storing your private key:

### MetaMask

* [Learn More Here](https://support.mycrypto.com/migration/moving-from-private-key-to-metamask.html)

### Ledger or TREZOR or Digital Bitbox Hardware Wallets

* [Learn More Here](https://support.mycrypto.com/hardware-wallets/hardware-wallet-recommendations.html)

### Keystore File (UTC / JSON)

* This is encrypted by the password you chose.
* This is the recommended version to save.
* This Keystore file matches the format used by Mist so you can easily import it in the future.
* Make sure to have multiple backups.

[How to Properly Save and Backup your Wallet](https://support.mycrypto.com/getting-started/backing-up-your-new-wallet.html)

![](https://support.mycrypto.com/images/wallet-types/keystore.jpg)

### Mnemonic Phrases

* Typically these come in 12-word or 24-words.
* They can derive multiple addreses - meaning your phrase actually is able to create multiple accounts, addresses, and private keys.
* [MyCrypto.com](https://mycrypto.com/generate), Ledger, TREZOR, MetaMask, and Jaxx create these for you.

![](https://i.imgur.com/Jc7lavW.png)

![](https://i.imgur.com/KxATWoK.png)

![](https://support.mycrypto.com/images/wallet-types/mnemonic.jpg)

### Private Key (unencrypted)

* This is the unencrypted text version of your private key, meaning no password is necessary.
* If someone were to find your unencrypted private key, they could access your wallet without a password.
* For this reason, encrypted versions are typically recommended. To learn about how you can encrypt your private key, [click here for more information](https://support.mycrypto.com/private-keys-passwords/how-to-change-ethereum-account-password-unencrypted-encrypted.html).
* However, you should print the paper wallet or save this in an **offline** environment (like a piece of paper or USB drive). This ensures a lost password does not result in lost ETH, and acts as another backup.

![](https://support.mycrypto.com/images/wallet-types/private-key.jpg)

### Parity Phrase -- deprecated

* [Learn More Here](https://support.mycrypto.com/private-keys-passwords/parity-phrases-are-no-longer-supported.html)

### JSON File (unencrypted) -- deprecated

* This is the unencrypted, JSON format of your private key.
* It gives you a file, just in case you prefer a file over a string of characters
* This means you do not need the password but anyone who finds your JSON can access your wallet & Ether without the password.

### Related Articles

[Protecting Yourself and Your Funds](https://support.mycrypto.com/security/securing-your-ethereum.html)
[How to Properly Save and Backup your Wallet](https://support.mycrypto.com/getting-started/backing-up-your-new-wallet.html)
