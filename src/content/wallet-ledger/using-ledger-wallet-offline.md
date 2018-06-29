{
 "title": "Using a Ledger Wallet Offline",
 "sort": "08",
 "category": "Ledger Wallet",
 "description": "Ledger Wallet",
 "date_published": "2018-02-15T08:00:00+08:00",
 "date_modified": "2018-05-10T09:07:00+08:00"
}
---%

If you want to run MyCrypto offline and use a Ledger Wallet, you have to setup an HTTPS server. Fortunately, this is integrated in MyCrypto. For this guide, we will be using Node.js.

### 1. Installing Node.js
Start off by downloading and installing Node.js, using the installer [here](https://nodejs.org/en/download/). It is available for Windows, macOS and Linux. After you have installed Node.js, the commands `node` and `npm` should be available from your command line.

To test this, open your command line (also called Terminal on macOS and Linux) and run the following command:
```bash
$ node -v
```
<sub><sup>The $ is just an indication of a command line, do not include it in the command.</sup></sub> 
 
If everything goes well, you should see the version of the currently installed Node.js.

### 2. Getting the files we need
Download the latest version of MyCrypto, you can find it [here](https://github.com/MyCryptoHQ/MyCrypto/releases/latest). 

Make sure to unpack it, and then execute `npm install` in the newly downloaded folder, this will install all the dependencies needed for MyCrypto.

Once you have the files somewhere in a folder, you need to create a self-signed SSL certificate. That may sound very technical and difficult, but all you need to do is go to [this](https://devcenter.heroku.com/articles/ssl-certificate-self) guide, and follow the steps. You should now have a `server.crt` and `server.key` file. Move these files into `webpack_config/server.*`.


That's it. You can now run the following command from the local MyCrypto folder to start your own HTTPS server:
```bash
$ npm run dev:https
```
In your browser, go to [https://localhost:3000](https://localhost:3000). You will see a browser warning, but it is safe to ignore this, since you are using a self-signed certificate (in Chrome: Advanced -> Proceed to localhost).
