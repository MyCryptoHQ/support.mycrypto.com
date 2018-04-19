{
"title"       : "Transactions are Not Showing Up or Pending Forever",
"sort"        : "01",
"category"    : "Transactions",
"description" : "Transactions",
"date_published" : "2017-12-07T08:00:00+08:00",
"date_modified"  : "2018-02-25T08:00:00+08:00"
}

---%


A combination of new users, increased interest, CryptoKitties, and misc. ICOs have created quite a mess of the TX pool and has a lot of TXs pending and taking longer than normal to send. This is a network issue and affecting all exchanges and clients.

There is simply not enough space in the blocks for the miners to mine all the transactions, and most systems are not currently set up to monitor the massive quantity of transaction requests. This is affecting all people's ability to send transactions, including our own.

### Helpful Tools and Resources to Get Your TX to Send

*  [See all the transactions that are pending here](https://etherscan.io/txsPending)

*  [Learn about **Gas**, **TX Fees**, and how to get your TX to go through](https://support.mycrypto.com/gas/what-is-gas-ethereum.html)

*  [Replace a **pending TX** that you sent with too low gas](https://support.mycrypto.com/transactions/check-status-of-ethereum-transaction.html) (This is done by sending a 0 ETH transaction with the same nonce as your previous tx)

*  [Learn about what a **nonce** is and how it controls which transactions are mined, or not mined](https://support.mycrypto.com/transactions/what-is-nonce.html)

*  [See what the **optimal gas price** for sending transactions is here (can be really helpful)](https://ethgasstation.info/)


### Other Tips

*  Try switching the network in the top-right to use a different node. There are 4 nodes that allow you to interact with ETH: MyCrypto, Etherscan, Infura, and Giveth. If one is not working, simply try another one.

*  If you get a transaction hash for your transaction but it isn't showing up on Etherscan, you can check & replace the transaction with one with a higher gas price here: [https://mycrypto.com/tx-status](https://mycrypto.com/tx-status)

*  If you sent **FROM an exchange**, your best bet is to just be patient. I know we received over 1000 messages in the past 24 hours, I can't imagine what an exchange's inbox looks like right now. :(

*  There are additional issues created by this increased traffic that result in unclear error messages on MyCrypto. We're sorry for this, and working on improving those messages. If you get an error, try pressing the generate button again, or changing the network via the dropdown in the top-right. However, be careful that you don't actually send the same transaction twice. If it says "transaction hash already imported" or "same nonce", you MAY have already sent that transaction and it's waiting to be mined. If both transactions get mined, you will send twice as much as you mean to.

If you have any other questions, please let us know, but your answer is likely in the links above.

Thank you for understanding.

### For Visual Learners

![](../images/transactions/txpool_01.jpg)

![](../images/transactions/txpool_02.jpg)

![](../images/tx_pool_infographic.png)
