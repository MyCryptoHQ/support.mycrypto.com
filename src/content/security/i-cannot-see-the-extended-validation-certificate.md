{
"title"       : "Cannot see the Extended Validation ('MyCrypto, Inc.') Certificate",
"sort"        : "85",
"category"    : "Security & Phishing",
"description" : "Security & Phishing",
"date_published" : "2017-12-28T08:00:00+08:00",
"date_modified"  : "2018-06-07T08:00:00+08:00"
}

---%



On MyCrypto.com you should be able to see the Extended Validation Certificate (EV SSL) in your  URL bar. However, some anti-virus applications like BitDefender prevent you from seeing the EV SSL. These anti-virus applications essentially perform a man-in-the-middle attack, simply put, it scans all your traffic from and to MyCrypto by replacing the original SSL certificate.

This can cause a security risk, as you are not able to verify if you are on the right URL. Fortunately, the way to solve this is by simply disabling the SSL scanning feature of your anti-virus application.

### How to disable SSL scanning
If you are using BitDefender, please follow these steps in order to solve the issue:

1. Open BitDefender.
2. Click on `View Features`.
3. Click on the settings icon under the `Web Protection` section.
4. Disable the `Scan SSL` option.

Now, if you restart your browser, you should be able to see the EV SSL on MyCrypto.

If you are using another anti-virus application and you are having this issue, the steps should be very similar. Look for web protection settings in the anti-virus configuration and look for something similar to SSL scanning.
