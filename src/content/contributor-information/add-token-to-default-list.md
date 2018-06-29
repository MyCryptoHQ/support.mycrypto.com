{
 "title": "Adding your Token as a Default Token",
 "sort": "40",
 "category": "Contributor Information",
 "description": "Contributor Information",
 "date_published": "2017-10-08T08:00:00+08:00",
 "date_modified": "2018-06-20T08:00:00+08:00"
}
---%



#### [If you are a person experimenting with tokens, you can add a token to your local version of MyCrypto](https://support.mycrypto.com/tokens/adding-new-token-and-sending-custom-tokens.html)

MyCrypto ships with a default token list that allows our Token Scanner functionality to check balances for a pre-determined set of tokens and display them to the user.

If a token is a not in the list, users are still able to add their desired token manually through our Custom Token functionality.

If your token is not yet included in our default token list, you can add it at https://github.com/ethereum-lists/tokens, which is synced with the MyCrypto codebase before each release.

We ask that you do not PR the token directly to our default token list at https://github.com/MyCryptoHQ/MyCrypto/blob/develop/common/config/tokens/eth.json, as we have an automated script that pulls from https://github.com/ethereum-lists/tokens instead.