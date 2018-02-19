{
"title"       : "Using a Ledger Wallet Offline",
"sort"        : "08",
"category"    : "Offline",
"description" : "Offline",
"date_published" : "2018-02-15T08:00:00+08:00",
"date_modified"  : "2018-02-15T08:00:00+08:00"
}

---%

To use a Ledger Wallet offline, a HTTPS connection (`https://`) is required. When you simply open the `index.html` file in your browser, it is opened through `file://`. If you want to run MyCrypto offline and use a Ledger Wallet, you have to setup an HTTPS server. Fortunately, there are some great applications made already, with the only purpose to serve static files over an HTTPS connection. For this guide, we will be using Node.js.

### 1. Installing Node.js
Start off by downloading and installing Node.js, using the installer [here](https://nodejs.org/en/download/). It is available for Windows, macOS and Linux. After you have installed Node.js, the commands `node` and `npm` should be available from your command line.

To test this, open your command line (also called Terminal on macOS and Linux) and run the following command:
```bash
$ node -v
```
<sub><sup>The $ is just an indication of a command line, do not include it in the command.</sup></sub> 
 
If everything goes well, you should see the version of the currently installed Node.js.

### 2. Getting the files we need
Next, you have to execute another command in the command line: 
```bash
$ npm install http-server -g
```
This will install a simple web server that can serve files over an HTTPS connection. You also need to download MyCrypto to your computer. You can do this by following the instructions [here](https://support.mycrypto.com/offline/running-mycrypto-locally.html).

Once you have the files somewhere in a folder, you need to create a self-signed SSL certificate. That may sound very technical and difficult, but all you need to do is go to [this](http://www.selfsignedcertificate.com/) website, fill in `localhost` and press the generate button. You should see two files, `localhost.key` and `localhost.cert`. Download both and move them to the folder where you have your MyCrypto. Rename the `localhost.key` file to `key.pem` and the `localhost.cert` file to `cert.pem`.

That's it. You can now run the following command from the local MyCrypto folder to start your own HTTPS server:
```bash
$ http-server -S
```
In your browser, go to [https://localhost:8080](https://localhost:8080). You will see a browser warning, but it is safe to ignore this, since you are using a self-signed certificate (in Chrome: Advanced -> Proceed to localhost).
