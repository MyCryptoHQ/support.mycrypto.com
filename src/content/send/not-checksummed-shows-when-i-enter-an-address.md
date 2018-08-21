{
"title"          : "Error: 'Not Checksummed' When Entering Address",
"sort"           : "03",
"category"       : "Sending & Receiving",
"description"    : "Sending & Receiving",
"date_published" : "2017-07-05T08:00:00+08:00",
"date_modified"  : "2018-08-21T08:00:00+08:00"
}

---%

##### What is a checksummed address?

A checksummed address is an address that contains uppercase letters as specified in [EIP-55](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-55.md). Checksummed addresses are meant to alleviate some of the issue of sending transactions to the wrong address.

There are two versions of Ethereum addresses: one that contains uppercase letters and one that does not:

`0x7cb57b5a97eabe94205c07890be4c1ad31e486a8`

`0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8`

Both addresses are exactly the same, except for the uppercase vs lowercase letters. Capitalization simply means the address has a checksum. Both will work exactly the same and have your funds.

The one that is all lowercase is "not checksummed" meaning that you could mistype a letter/number. If you mistype the address and send the transaction, your ETH will be gone forever.

Alternatively, if you use the checksummed version of an address and mistype it, it will tell you that it's an invalid address when you go to submit the transaction.

For this reason, we warn you when your address is not checksummed. You can still send to it without issue but if you should double-check the address before doing so, *especially* if you hand-typed it.

If you are sending to one of your own wallets, you can save the checksummed address via the [View & Send](https://mycrypto.com/account/) page and copying the address displayed there.

**To help get this standard adopted by others, make sure to contact your favorite Ethereum organizations about adopting this standard to help protect their users (YOU)**
