{
 "title": "[MyCrypto ➡ TREZOR] Moving from MyCrypto to TREZOR",
 "sort": "02",
 "category": "Trezor Wallet",
 "description": "Trezor Wallet",
 "date_published": "2017-11-08T08:00:00+08:00",
 "date_modified": "2018-05-14T08:00:00+08:00"
}
---%


The TREZOR is one of the best and easiest cryptocurrency hardware wallets out there, it is available for purchase [here](https://shop.trezor.io?a=mycrypto.com). It supports a wide range of cryptocurrencies, but this guide is specifically made for using it with Ethereum and ERC-20 tokens using MyCrypto.

<div class="alert alert-info">
  When connecting to your TREZOR, you do not generate a new wallet on MyCrypto. Your TREZOR is your wallet and you use your TREZOR device now to store and send Ether & Tokens.
</div>


##  Initial set-up

1. **Plug your device into your computer** using the USB cable provided.

2. **Go to the URL displayed on your device.**
    *  You can use the buttons on your device to confirm/deny actions. For this guide we will be using the TREZOR One. ![](https://i.imgur.com/3krRHps.jpg) ![](https://i.imgur.com/ecjTCuI.png)

3. **Click "Create new"** ![](https://i.imgur.com/6Fhylzj.png)

4. **Your TREZOR is ready!**
    *  Click "Continue to the wallet". You will see a message that your TREZOR is not yet backed up, and that your progress is 10%. Click on "Create a backup in 3 minutes". ![](https://i.imgur.com/MWiq7yl.png) ![](https://i.imgur.com/dNjM19g.png)

5. **Creating your backup.**
    *  The TREZOR will give you 24 random words that you will have to write down on the provided card in the box. These are the recovery words, also known as seed.
    *  You will have to use these words when you want to restore your TREZOR in case it fails or you accidentally reset the TREZOR.
    *  **Do not save these recovery words on your computer or take a photo of these words with your phone.** Doing so means you are just as unsafe as using a normal private key.
    *  Always write them down physically using pen and paper and keep this paper safe.
    ![](https://i.imgur.com/46cTldk.png) ![](https://i.imgur.com/27wfOOI.jpg)

6. **Confirm your recovery words.**
    *  Once you've written down all of the words it will ask you to confirm your recovery phrase, in order to make sure that you've written them down correctly. ![](https://i.imgur.com/pEA00nN.png)

7. **You're done backing up your TREZOR!**
    *  In case you lose or break your TREZOR, you will now be able to recover your wallets stored on your TREZOR using the 24-word seed. ![](https://i.imgur.com/eGeMpFF.png)

8. **Naming your device.**
    *  At the next step it will ask you to set a name for your TREZOR. This is useful in case you own multiple TREZORS, or want to make sure the TREZOR you have is yours. ![](https://i.imgur.com/3DxaxuN.png)

9. **The next step is setting a PIN.** Enter a new PIN that you will use to access your TREZOR any time you want to access your wallets.
    *  Make sure this is a hard to guess pin, so that others won't be able to get access to your TREZOR.
    *  If you are not sure how PINs work with the TREZOR, look [here](http://doc.satoshilabs.com/trezor-user/enteringyourpin.html) for more information.
    *  e.g. I want to set "8963" as pin. This would mean that I have to click the lower-left button, then the middle-right button, then the lower-middle button, and finally the upper-left button. ![](https://i.imgur.com/8APMGG1.png) ![](https://i.imgur.com/A6zBzI3.jpg)

10. **Re-enter your PIN you just created.**
    *  Be aware that the order of the numbers on the display of your TREZOR has changed, so you will have to click different buttons on your computer in order to enter the correct PIN. ![](https://i.imgur.com/jCWKVML.jpg)
    *  All set! ![](https://i.imgur.com/Q2W4pup.png) ![](https://i.imgur.com/j7fdU1l.png)


###### Now your TREZOR is all set-up and ready to be used!



## Connecting to your TREZOR with MyCrypto

###### It's time to access our TREZOR using MyCrypto! In order to do so, go to [MyCrypto.com](https://mycrypto.com/)

1. Plug in your TREZOR.

2. Select the TREZOR option on MyCrypto.

3. Click the blue `Connect to TREZOR` button on MyCrypto. ![](https://i.imgur.com/sbtmPkz.png) ![](https://i.imgur.com/0DYJzXJ.png)

4. A window reading "Export public key for "Ether Account Number [...]" will pop up. Click "Export". ![](https://i.imgur.com/pGcr5Vx.png)

5. Different Ethereum addresses will be displayed on MyCrypto. All of these addresses are accessible via on your TREZOR. Select one of these addresses. ![](https://i.imgur.com/d9ekI6V.png)

6. Once you select one of the addresses the interface looks just the same as if you were to enter your private key to access it, it's no different.

###### Your TREZOR is ready to be used!



## Transferring funds from your private key to the TREZOR

###### Sending ETH or tokens to your TREZOR works the same as sending to any other address.

1. Pick one of the addresses on the list when you access your TREZOR.

2. Copy this address to your clipboard.

3. Unlock your original Ethereum account address (via private key or MetaMask or JSON file—wherever you are transferring from)

4. Paste your TREZOR address into the "To Address" field and send your ETH & tokens.

5. The next time you unlock your TREZOR wallet you will be able to see your funds, safely stored on your TREZOR!




## Sending funds FROM your TREZOR

###### In order to send from your TREZOR hardware wallet, connect to your TREZOR per the instructions above.

1. You should now see a "Send Ether & Tokens" view on MyCrypto.com.

2. The address displayed under 'Account Address' on the right side of the screen should match the address you selected earlier.

![](https://i.imgur.com/6TMYHBC.png)

3. Enter the address you would like to send to in the `To Address:` field.

4. Enter the `Amount` you would like to send.

5. If you are sending tokens, click the `Scan for Tokens` button.

6. Then select the token you would like to send from the dropdown next to Amount.

7. Use the `Transaction Fee` slider to select how much [gas](https://support.mycrypto.com/gas/what-is-gas-ethereum.html) to use for your transaction. ![](https://i.imgur.com/KteZ6QV.png)

8. Click the `Send Transaction` button when you are ready to go. *(Don't worry, you will be able to review the transaction before it is sent)* ![](https://i.imgur.com/ehmhdcG.png)

9. A pop-up will appear. Click `Details` for a more information about your transaction. Please double-check the information before you click send. ![](https://i.imgur.com/0tvFXdy.png)

10. After you click `Send Transaction` a green message should appear at the bottom of your screen. You can click the buttons to view & verify the transaction on Etherscan, Etherchain, or MyCrypto to Check the transaction Status. ![](https://i.imgur.com/VaY7g4h.png)


<div class="alert alert-info">
  [If your transaction never shows up on Etherscan / Etherchain / MyCrypto after a new minutes, you may need to send with more gas. Click to learn more about gas.](https://support.mycrypto.com/gas/).
</div>





## Restoring your TREZOR

*  TREZOR made a clear and easy to follow guide on how to restore your TREZOR [here](https://doc.satoshilabs.com/trezor-user/recovery.html).




## Troubleshooting

*  TREZOR has an extensive knowledge base that you can find [here](https://trezor.io/support/), as well as MyCrypto's [here](https://support.mycrypto.com/). There is a big chance that it's already listed on one of them.

*  If you need further assistance, reach out to [TREZOR](https://satoshilabs.kayako.com/conversation/new/2) or [MyCrypto](https://support.mycrypto.com/) support.
