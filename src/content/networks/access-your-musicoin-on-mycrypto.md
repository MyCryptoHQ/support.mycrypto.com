{
"title"       : "Accessing and Sending MUSICOIN via MyCrypto",
"sort"        : "04",
"category"    : "Networks & Nodes",
"description" : "Networks & Nodes",
"date_published" : "2017-10-08T08:00:00+08:00",
"date_modified" : "2018-04-26T08:00:00+08:00"
}

---%


We temporarily removed the MUSIC node because we had some issues with hardware wallets and lack of EIP-155 support.

You can still add MUSIC as a custom token by following the below instructions.

### Warnings

We advise you to be careful when interacting with TREZOR, Ledger, or any other hardware wallet.

We also advise you to ensure you are using an address on the MUSICOIN chain that is different from your ETH or EXP addresses.

Any transactions sent on the MUSICOIN chain can be replayed on a different chain.

### How to

1. Select `Add Custom Node` at the very bottom of the network dropdown in top right
2. Node name: MUSICOIN
3. Select "CUSTOM"
4. URL: https://mewapi.musicoin.tw or https://mcdnode.trustfarm.io/api
5. Currency: MUSIC
6. Chain ID: 1
7. Click "Save & Use Custom Node" button.

![](https://i.imgur.com/CH2sfsd.png)

You should see the MUSICOIN node at the bottom of the network switcher dropdown. If you can't connect to the node, remove the node by clicking the little ( X ) icon next to the MUISCOIN name in the network dropdown and try the other URL (above).

