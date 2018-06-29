{
 "title": "Parity Phrases No Longer Supported",
 "sort": "99",
 "category": "Other Wallets",
 "description": "Other Wallets",
 "date_published": "2017-07-05T08:00:00+08:00",
 "date_modified": "2017-09-26T08:00:00+08:00"
}
---%

MyCrypto aims to deliver an easy-to-use and secure platform. Due to an increase in the amount of issues & lost ETH surrounding the "Parity Phrase" option on MyCrypto, we have opted to remove it to prevent future loss.

### If you are using a Parity Phrase

1.   [Generate a new wallet, securely. ](https://support.mycrypto.com/getting-started/creating-a-new-wallet-on-mycrypto.html)
2.   [Back up your new wallet, securely.](https://support.mycrypto.com/getting-started/backing-up-your-new-wallet.html)
3.   Go to the [legacy send page.](https://legacy.mycrypto.com/#send-transaction)
4.   Unlock your new wallet.
5.   Copy your address on the right hand side.
6.   Open a new tab and go to the [send page again.](https://legacy.mycrypto.com/#send-transaction)
7.   In the new tab, hit `cmd`+`shift`+`i` or `ctrl`+`shift`+`i`.
8.   Navigate to the "console" tab on the thingy that pops up.
9.   Copy and paste the following in the console and then press enter: `document.getElementById( 'showMeTheMoney' ).style.display = 'block';`
10.  You can now select "Parity Phrase".
11.  Unlock your **old wallet** via your Parity Phrase.
12.  Paste your address from the **new wallet** you just generated into the "To Address" field. (This should be in the first tab from earlier.)
13.  Send your funds from your original Parity Phrase wallet to your freshly generated wallet.
14.  If you have Tokens: send any **tokens** you have to your **new wallet**.
15.  Then, send any **ETH** you have to your **new wallet**.
16.  If you have ETC: click the node switcher in the upper right corner and select "ETC" and send any **ETC** you have to your **new wallet**.
17.  Moving forward, use your **new wallet**, not your old, Parity Phrase wallet.
18.  Do not delete your Parity Phrase wallet in case you ever need it again _(maybe you forgot to send a token or accidentally send ETH to it in the future)_


### But whyyyyy?

1.  **They are insecure:** People are using them as brain wallets. [Brain wallets are insecure](https://www.reddit.com/r/ethereum/comments/45y8m7/brain_wallets_are_now_generally_shunned_by/).
2.  [Here is Parity's statement on the issue.](https://blog.ethcore.io/restoring-blank-seed-phrase/)
3.  Humans are not capable of generating enough entropy and therefore the wallets derived from phrases <span style="text-decoration: underline;">humans</span> make up can be easily brute forced.
4.  They are being brute forced as we speak. At the time of this writing, no less than 9 ETH from 15 accounts has been _confirmed_ stolen. There is certainly much more that we are unaware of.
5.  Parity phrases have no checksum or ability to enforce certain standards, such as strength or length. Any characters work.
6.  **They create confusion for new users:** New users have typed their private keys in that field and then ask us why their address is different from the one they originally derived.


### Advanced Users

First, I'd like to apologize to the Parity team for the above. I fully realize that you had the best intentions with the recovery phrase feature. Unfortunately, if you give people the ability to do something they will always, always do it. For this reason, you shouldn't ever let people do something that could result in low-entropy wallets.

We fully realize we should have noticed this earlier and taken steps to mitigate. Unfortunately, it wasn't until this massive influx of new users that we realized what people were doing and connect the dots.

If you are an advanced user, you may look at the above list of steps and scoff. _"But I could just....Or you could just....this is a pain."_

Yes, yes you could. And yes, yes we could.

But our responsibility is to do whatever we can to minimize risk and confusion. With the spike of new users, we must be cautious in what we advice we give. If you wish to aid a person in the above, we strongly recommend that you have them complete <span style="text-decoration: underline;">all</span> steps. They are there to ensure people generate a secure wallet, have a backup, don't copy an address to a key they don't have, don't send a test amount to an address they don't have access to, and can send ETH in and out of the new wallet.

These are all things that multiple users have not done in the past which has resulted in lost ETH. We learn from the hundreds of support tickets that come to us every day.
