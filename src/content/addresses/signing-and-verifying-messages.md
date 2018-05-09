{
"title"       : "How to sign & verify messages on Ethereum",
"sort"        : "04",
"category"    : "Addresses & Balances",
"description" : "Addresses & Balances",
"date_published" : "2018-04-18T08:00:00+08:00",
"date_modified"  : "2018-04-18T08:00:00+08:00"
}

---%


### Why?

In Ethereum, signatures are a way of providing evidence that a specific user has access to a specific address.

For example; if user A wants to provide evidence to user B that user A has access to address X, they could sign a message with their private key, stating that user A has access to address X, then share the signed signature with user B. If the signature is correct, user B can verify that user A has access to address X, without user A ever having to share their private key to user B.

### Signing a message

1.  Go to the [message signing page on MyCrypto](https://mycrypto.com/signmsg.html). Make sure that you see the green "MyCrypto, Inc" certificate in your URL bar. [Don't see it?](https://support.mycrypto.com/security/i-cannot-see-the-extended-validation-certificate.html)

2.  Enter the message that you wish to use to prove your address.

    ![](https://i.imgur.com/phgR0mF.png)

3.  Access your wallet.

    ![](https://i.imgur.com/6FSKGMU.png)

4.  Click the big blue "Sign Message" button.

5.  Your signed message will appear in the box below. This should look a bit like this:

    ```
    {
      "address": "0x6375f34fb31a042a36a238dd86f9286c9b375a25",
      "msg": "This is proof that I, user A, have access to this address.",
      "sig": "0xbb89d7a6cef9e78f7ac3760e1775b2f11c61606e99693582e084ce19758bdfb2351168013ec49221260bada8224709bc89d41ebceea55b444679c5c3caf8b2e11c",
      "version": "2"
    }
    ```

    You can share this message with anyone you wish to provide evidence to that you own an address.

### Verifying a message

1.  Go to the [message signing page on MyCrypto](https://mycrypto.com/signmsg.html) and click "Verify Message".

    ![](https://i.imgur.com/ykazjDv.png)

2.  Enter the signed message that you want to check, and click "Verify Message".

    ![](https://i.imgur.com/cvjoEuA.png)

    If the signature is correct, a green bar will be displayed.