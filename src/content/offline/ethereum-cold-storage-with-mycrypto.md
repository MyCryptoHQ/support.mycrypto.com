{
"title"       : "Using MyCrypto for Cold Storage",
"sort"        : "04",
"category"    : "Offline",
"description" : "Offline",
"date_published" : "2017-07-05T08:00:00+08:00",
"date_modified"  : "2018-06-10T08:00:00+08:00"
}

---%


### Preface

The following assumes you are **not** using a Ledger or TREZOR hardware wallet. Due to their ease of use and security, [we recommend a hardware wallet for cold storage](https://support.mycrypto.com/hardware-wallets/hardware-wallet-recommendations.html).

To save / backup your Ledger or TREZOR device, simply write down the 24-word phrase on the card they provide and keep it very, very safe. Never put this key on an online device or type it into MyCrypto.com.


You can run MyCrypto.com on your computer, and this computer can be a cold-storage or offline device. This means it is not connected to the internet and _will never be connected to the internet again._ You can generate a wallet completely offline and send crypto or Tokens from the "View & Send" page.

### How to

* First off, follow our guide on [running MyCrypto offline and locally](https://support.mycrypto.com/offline/running-mycrypto-locally.html).
* Open the "Create New Wallet" tab in the MyCrypto desktop application. Click "Generate a Keystore File."
* Enter a strong but easy-to-remember password. Do not forget it.
    * _This encrypts (protects) your private key. It does not generate your private key. This password alone will **not** be enough to access your crypto._
* Click the `"Generate New Wallet"` button.
* Download your `Keystore / UTC file` and save this file to a USB drive.
    * _This is the encrypted version of your private key. It is safer than your unencrypted private key was alone, but you **must have your password** to access it in the future._
* Read the warning. If you understand it, click the `"Continue"` button.
* Print your paper wallet backup and / or _carefully_ hand-write the `private key` on a piece of paper.
    * _If you are writing it, it is recommended you write it 2 or 3 times. This decreases the chance your messy handwriting will prevent you from accessing your wallet later._
* Copy and paste your address into a text document somewhere. Get it to your primary, online computer.
    * _Use the QR code or a different USB drive. It is best if you do not hand write it_.
    * _Search your address on [https://etherscan.io/](https://etherscan.io/). Bookmark this page. This is how you will view your balance at any time_.
* Send a small amount of crypto (e.g., 0.0001 ETH) from an exchange or another wallet to your new offline wallet.
* On your offline device, unlock your wallet from the Keystore / UTC file on your USB drive or via the private key that you printed out.  Ensure it unlocks the wallet you are sent to and matches the bookmark you have.
    * _Do not simply leave your new wallet open. Pretend you are coming back a year later to access your riches. Can you do it?_
* Send a small amount of crypto (e.g., 0.00001 ETH) from this new wallet to another address.
    * _Perhaps our donation address, which can be found in the bottom-right corner of MyCrypto.com? We are a free, open-source service. There are no fees, no ads, and no selling your data._
* Ensure you have recorded all necessary bits of information and the addresses match at all times. If they don't, you miswrote something somewhere. That means it's time to start from the beginning in order to make sure you never lose access to your funds.

Doing all of this is tedious, but it ensures (1) you have complete access to your funds, (2) the address you sent to is correct and matches the private key you have saved, and (3) you can rest easily for years to come, knowing you will be able to access your crypto later.

---

### Safe Storage of Backups

It is recommended that you store backups of both forms of your key (the Keystore file version and paper wallet version) in physically separate, offline environments.

This prevents loss of the private key and password due to: a dead hard drive, a lost USB drive, a wet piece of paper, etc. Keep in mind that physical loss can affect an entire geographical area (e.g., fire, flood).


### We Cannot Recover Your Key

MyCrypto is not a web wallet and cannot recover your private key or password, access your account, move funds, recover funds, nor cancel / reverse transactions.

We are a client-side interface that allows you to interact with the blockchain. Please secure and back up your key like the millions of dollars it could someday be worth.


### Related Reading

* [What is the difference between private key & Keystore / UTC file?](https://support.mycrypto.com/private-keys-passwords/difference-beween-private-key-and-keystore-file.html)

* [Protecting yourself and your funds](https://support.mycrypto.com/security/securing-your-ethereum.html)
