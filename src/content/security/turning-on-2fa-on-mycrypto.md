{
"title"       : "Can I Turn on 2FA for MyCrypto?",
"sort"        : "50",
"category"    : "Security & Phishing",
"description" : "Security & Phishing",
"date_published" : "2017-07-05T08:00:00+08:00",
"date_modified"  : "2018-06-10T08:00:00+08:00"
}

---%

### No. And if you landed on a site telling you that you could, they are lying to you and trying to steal your private keys.

[2FA / MFA](https://en.wikipedia.org/wiki/Multi-factor_authentication) is something that works for server-side applications in order to add an additional layer of security on top of the username and password.

### TOTP (Google Authenticator)

> Time-based One-time Password (TOTP), popularized mainly by Google Authenticator, verifies your identity based a secret that must be shared online between you and the provider.

> When logging into a website, your device generates a unique code based on the shared secret and the current time. Then you have to manually submit this code. The server generates the exact same thing, based on the same secret, in order to compare and validate the login request.

![](https://cdn-images-1.medium.com/max/1600/0*nWGWoyFQ_SVN_KnZ.)

_[source](https://blog.trezor.io/why-you-should-never-use-google-authenticator-again-e166d09d4324)_

All of this work is done so that you are _authorized_ to access the information stored on the servers of the service you are using.

### The Blockchain and MyCrypto

In the case of MyCrypto.com, a client-side application, we do not have servers in this fashion. We do not hold your keys on our servers. We do not give you access to the keys on our servers. You have the key. That key is the core piece of information that allows access to authenticate a transaction on the blockchain. While *you* can encrypt it with a password, there is no server that can verify or track a 2FA login / [OTP](https://en.wikipedia.org/wiki/One-time_password) when you are using MyCrypto. If someone gets your private key (Keystore file, mnemonic, passwords), they have complete access to your funds. There is no stopping transactions, canceling transactions, or resetting passwords.

In order to implement 2FA, we would need to store your key and protect it on our servers. This is simply not something we want to do. If we did so, we would have a situation where anyone who gets access to our servers, your keys, or your 2FA codes gets access to the funds of every user on our servers. The bounty on hacking our servers is as large as the funds held by every user. That's a huge bounty and is dangerous.

If this is functionality that you do want, feel free to use an exchange or hosted wallet, such as Coinbase, Kraken, Poloniex, Bittrex, Bitfinex, Gemini, and so forth. Just be aware of the risk of letting someone else hold your keys and, in turn, 2FA codes for you.

### Or, you know, spend the <$100 and get a [hardware wallet](https://support.mycrypto.com/hardware-wallets/hardware-wallet-recommendations.html). It's worth it. You can use it for 2FA on other services and ensure the safety and security of your funds.

More information: https://github.com/kvhnuke/etherwallet/issues/292

### Related Reading

[Security & Phishing](https://support.mycrypto.com/security/)
[What is the Difference between an Exchange and MyCrypto?](https://support.mycrypto.com/getting-started/whats-the-difference-between-an-exchange-and-mycrypto.html)
