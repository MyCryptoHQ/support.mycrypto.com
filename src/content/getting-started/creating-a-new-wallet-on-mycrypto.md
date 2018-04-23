{
"title"       : "How to Create a Wallet",
"sort"        : "05",
"category"    : "Getting Started",
"description" : "Getting Started",
"date_published" : "2015-10-05T08:00:00+08:00",
"date_modified"  : "2017-10-16T08:00:00+08:00"
}

---%


### Preface

The following assumes you are **not** using a Ledger or TREZOR hardware wallet. Due to their ease of use and security, [we recommend a hardware wallet for cold storage](https://support.mycrypto.com/hardware-wallets/hardware-wallet-recommendations.html).

To save / backup your Ledger or TREZOR device, simply write down the 24-word phrase on the card they provide and keep it very, very safe. Never put this key on an online device or type it in to MyCrypto.com.

### How To

* Go to [https://mycrypto.com/generate](https://mycrypto.com/generate).
* Select an option for a type of wallet to create: Keystore File or Mnemonic Phrase:

##### If you chose to create a Keystore File

* Enter a strong but easy to remember password. Do not forget it.
    * _This encrypts (protects) your private key. It does not generate your private key. This password alone will **not** be enough to access your Ether._
* Enter the password again to confirm it.
* Click the `"Create New Wallet"` button.
* Download your `Keystore File` & save this file to a USB drive.
    * _This is the encrypted version of your private key. You need the password to access it. It is safer than your unencrypted private key but you must have your password to access it in the future._
* Read the warning. If you understand it, click the `"Continue"` button.
* Print your paper wallet backup and/or _carefully_ hand-write the `private key` on a piece of paper.
    * _If you are writing it, it is recommend you write it 2 or 3 times. This decreases the chance your messy handwriting will prevent you from accessing your wallet later._
* Copy & paste your address into a text document somewhere.
    * _Search your address on [https://etherscan.io/](https://etherscan.io/). Bookmark this page. This is how you will view your balance at any time_

##### If you chose to create a Mnemonic Phrase

* Click the `"Regenerate Phrase"` button as many times as you want until you get a set of words that you like.

* Write down the 12-word phrase that you have listed.

* Click the `"Confirm Phrase"` button.

* Follow the instructions to confirm the mnemonic phrase that you just created.

##### What now?

* Unlock your new wallet using the method you chose to generate your wallet from the [https://mycrypto.com/account](https://mycrypto.com/account) page.  Ensure it unlocks the wallet you are sent to and matches the bookmark you have.
    * _Do not simply leave your new wallet open. Pretend you are coming back a year later to access your riches. Can you do it?_
* Send a small amount of Ether (0.0001 ETH) from your previous wallet or exchange to your new wallet's public address (The one beginning in '0x').
* Send a small amount of Ether (0.00001 ETH) from this new wallet to another address.
    * _Perhaps our donation address? We are a free, open-source service. There are no fees, no ads, no tracking, no cookies, no selling your data._
* Ensure you have recorded all necessary bits of information and the addresses match at all times. If they don't, you mis-wrote something somewhere. That means it's time to start from the beginning in order to make sure you never lose access to your funds.

Doing all of this is tedious, but it ensures you (1) have complete access to your funds (2) the address you sent to is correct and matches the private key you have saved and (3) you can rest easily for years to come, knowing you will be able to access your ETH later.

### Safe Storage of Backups

It is recommended that you store backups of both forms of your key (the Keystore or Mnemonic Phrase and paper wallet version) in physically separate, offline environments.

This prevents loss of the private key & password due to: dead hard drive, lost USB drive, wet piece of paper, etc. Keep in mind that physical loss can affect an entire area (e.g. fire, flood).

### We cannot recover your key

MyCrypto is not a web wallet and cannot recover your private key or password, access your account, move funds, recover funds, nor cancel/reverse transactions.

We are a client-side interface that allows you to interact with the Ethereum blockchain. Please secure & back up your key like the millions of dollars it could some day be worth.


### Related Reading

* [What is the difference between private key & Keystore / UTC file?](https://support.mycrypto.com/private-keys-passwords/difference-beween-private-key-and-keystore-file.html)

* [Protecting yourself and your funds](https://support.mycrypto.com/security/securing-your-ethereum.html)


### Short Version (Advanced Users Only)


###### Keystore File option

1.  Go to [https://mycrypto.com/generate](https://mycrypto.com/generate) and click the `"Keystore File"` button.
2.  Enter a strong but easy to remember password. Type it in again to confirm.
3.  Click the `"Create New Wallet"` button.
4.  Click the `"Download"` button & save your `Keystore / UTC` file. Back it up.
5.  Read the warning. If you understand it and promise not to lose your private key, click the `"Continue"` button.
6.  You now have the option of printing a paper wallet, saving your private key, or saving a QR code of your private key. Back up at least one (offline).
7.  Then click `"Next: Save your Address"`
9.  Unlock your wallet that you just created using the `Keystore / UTC` file you just downloaded or the `private key`.
10. Save your address to a text document & bookmark the link to it on [https://etherscan.io/](https://etherscan.io/).
11. Ensure all information matches. Don't lose this information. Double check your work.

###### Mnemonic Phrase option

1.  Go to [https://mycrypto.com/generate](https://mycrypto.com/generate) and click the `"Mnemonic Phrase"` button.
2.  Click the `"Regenerate Phrase"` button a few times.
3.  Write down the phrase in order.
4.  Select the `"Confirm Phrase"` button.
5.  Follow the directions to confirm the mnemonic phrase.
6.  Log into the account on [https://mycrypto.com/account](https://mycrypto.com/account) using the mnemonic phrase option.
7.  Save your address to a text document & bookmark the link to it on [https://etherscan.io/](https://etherscan.io/).
8. Ensure all information matches. Don't lose this information. Double check your work.
