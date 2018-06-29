{
 "title": "Error: Unable to Connect to Custom Node",
 "sort": "10",
 "category": "Networks and Nodes",
 "description": "Networks and Nodes",
 "date_published": "2017-10-08T08:00:00+08:00",
 "date_modified": "2017-10-28T08:00:00+08:00"
}
---%


*   Verify the URL you entered is correct.
*   Verify the port you entered is correct.
*   Verify that if you are connecting to an http:// node you are running MyCrypto locally (NOT over https://).
*   Verify you are is running with:
      *  `geth --rpc --rpccorsdomain "null" --keystore "dont_put_secret_files_here_ever"`
      *  parity is running with `parity --rpccorsdomain "*" --keys-path "dont_put_secret_files_here_ever"`
*   Verify your node is actually up and running.
*   Try removing the node and adding it again.
*   Try changing the node in the top-right corner to ETH (Etherscan.io) or ETH (Infurio.io).
*   Try using Google Chrome, or a different browser.
*   Ensure you do not have a firewall or something else that may be blocking the connection.
