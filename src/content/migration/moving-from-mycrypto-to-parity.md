{
"title"       : "[MyCrypto ➡ Parity] Access your MyCrypto account in Parity",
"sort"        : "03",
"category"    : "Migrating to/from MyCrypto",
"description" : "Migrating to/from MyCrypto",
"date_published" : "2017-07-05T08:00:00+08:00",
"date_modified"  : "2018-11-29T08:00:00+08:00"
}

---%

Starting from Parity v1.10, Parity Ethereum client (the node) has been separated from the Parity User Interface (UI). The user interface previously accessible from the browser in versions <=1.9 is now released as a standalone app. Parity UI isn’t actively maintained anymore.

### Place your Keystore file in the following locations:

*  `C:\Users\You\AppData\Roaming\Parity\Ethereum`

*  `/Users/you/Library/Application Support/io.parity.ethereum`

*  `/home/you/.local/share/io.parity.ethereum`

Then, open Parity and away you go. 🎉

Command-line options:
```
--keys-path=[PATH]
  Specify the path for JSON key files to be found (default: $BASE/keys)
```

### Related Reading

*  [How to find your keystore file](https://support.mycrypto.com/migration/location-of-mist-geth-wallet-files.html)
