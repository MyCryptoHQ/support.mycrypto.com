{
"title"          : "Setting Gas Price Above The Slider Limits",
"sort"           : "06",
"category"       : "Transactions",
"description"    : "Transactions",
"date_published" : "2017-06-20T08:00:00+08:00",
"date_modified"  : "2017-06-20T08:00:00+08:00"
}

---%

### The Gas Price slider's values normally span from `1gwei` to `40gwei`. How do I set the gas price above or below the slider limit?

 If you want to set a gas price above or below that, you can use the "Advanced" button in the [Send & View](https://mycrypto.com/account) tab. In the advanced section, there will be a gas price text field which you can set between `0.1gwei and 999.9gwei`.


Please note that the TX Fee is the `gas limit * gas price`. This means that a contract transaction with a gas limit of `200000` using a gas price of `150 GWEI` would cost `0.03 ETH`.

If you are unfamiliar with how gas limit & gas price work together, please check out [our pretty rockin' guide on gas first.](https://support.mycrypto.com/gas/what-is-gas-ethereum.html)
