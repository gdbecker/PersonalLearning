## 15_ Cross-Site Scripting

### Certificate
!["Certificate"](./15_CrossSiteScripting.jpg)

### XSS
- This attacks injects malicious JavaScript code into your website
- When people go to your site, the browser downloads this script and executes it
- As a result, the attacker can gain user info through session cookies or even data provided by users themselves
- Assuming that the site is vulnerable to XSS attacks when users click on a malicious link, the search engine website won't display any results but execute the JS code which was injected by the attacker

### What is XSS?
- Cross-site Scripting (XSS) happens whenever an app takes untrusted data and sends it to the client (browser) without validation
- This allows attackers to execute malicious scripts in the victim's browser, which can result in user sessions hijack, defacing websites, or redirect the user to malicious sites

### XSS Types
1. Stored XSS
   1. AKA Persistent XSS
   2. Occurs when user input is stored on the target server, such as database/message forum/comment field, etc
   3. Then the victim is able to retrieve the stored data from the web app
2. Reflected XSS
   1. AKA Non-Persistent XSS
   2. Occurs when user input is immediately returned by a web app in an error message/search result of the input provided by the user, as part of the request and without permanently storing the user-provided data
3. DOM Based XSS
   1. When the source of the data is in the DOM, the sink is also known as the DOM, and the data flow never leaves the browser

### Reflected XSS
- Occurs when user input is immediately returned by a web app in an error message/search result of the input provided by the user, as part of the request and without permanently storing the user-provided data
- In this, we actually have to send the code to the target, and once the target runs the code, it will be executed on their machine

### Let's try it
- Need these tools:
  - XAMPP Server: download it from https://www.apachefriends.org/download.html
  - DVWA: DAMM vulnerable web app coded in PHP/MySQL; the aim is to practice some of the most common web vulnerabilities with various difficulties levels
    - download it from http://www.dvwa.co.uk/
  - Once downloaded, browse through the installation folder and rename it as "dvwa"
  - Go to the config file, add a username and password, and copy it to the "htdocs" folder of the Xampp
  - Once done, just start the localhost server, and fire DVWA and login with your credentials
  - Glance through the sidebar and browse to the DVWA security option and set it to low
  - Then go to the XSS reflected option, and we are ready to try this vulnerability

### Let's inject
- Here you can see a textbox, and we will inject the below XSS code there:
  - "<script>alert('XSS')</script>"
- Click on submit, and you will see the above alert. The code gets executed
- Even the same can be done through the URL, and you can then send that malicious URL to the target
- Once the target clicks on the URL, the code gets executed

### Stored XSS
- AKA Persistent XSS
- Occurs when user input is stored on the target server, such as database/message forum/comment field, etc
- Then the victim is able to retrieve the stored data from the web app
- Unlike Reflected XSS in which we have to send the URL to the target, and when they click on it then the exploit starts, in Stored XSS the code is actually stored in the database or into the page
- So every time the target visits that page, your code will get executed
- Stored XSS is much more dangerous than Reflected XSS

### Let's try
- Browse through the sidebar and click on the XSS stored option
- There's a small form directly connected to the database - if we can inject our code here, then we can add our code directly to the database
- Add your name in the name field and in the Message field add our XSS code
  - "<script>alert('XSS')</script>"
- Click on the sign button, and we will get the alert that's generated from this code
- Now if the user tries to use this page, the code will get executed since it's already stored in the database
- Again this will only work if the site is vulnerable to XSS

### XSS Prevention
- Escaping
  - You can and should use to prevent XSS vulnerabilities from appearing in your app is by escaping user input
  - Escaping data means taking the data an app has received and ensuring it's secure before rendering it for the end user
  - By escaping user input, key characters in the data received by a web page will be prevented from being interpreted n any malicious way
  - In essence, you're censoring the data your web page receives in a way that will disallow the characters - especially < and > characters - from being rendered, which otherwise could cause harm to the app and/or users
  - If your page doesn't allow users to add their own code to the page, a good rule of thumb is to then escape any and all HTML, URL and JS entities
  - However if your web page does allow users to add rich text, such as on forums or post comments, you have a few choices
  - You'll either need to carefully choose which HTML entities you will escape and which you won't or by using a replacement format for raw HTML, such as Markdown, which will in turn allow you to continue escaping all HTML
- Validating input
  - This is the process of ensuring an app is rendering the correct data and preventing malicious data from doing harm to the site, database, and users
  - While whitelisting and input validation are more commonly associated with SQL injection, they can also be used as an additional method of XSS prevention
  - Whereas blacklisting, or disallowing certain, predetermined characters in user input, disallows only known bad characters, whitelisting allows known good characters and it's a better method for preventing XSS attacks
- Sanitizing
  - Sanitize user input
  - Strong defense but shouldn't be used alone
  - You might need to use all 3 methods
  - Especially helpful on sites that allow HTML markup, to ensure data received can do no harm to users, as well as your database by scrubbing the data clean of potentially harmful markup, changing unacceptable user input to an acceptable format

### Real life cases
- A DOM-based XSS vulnerability has been discovered in the Google Voice browser extension
- They discovered the XSS issue during a browser session when the extension was installed
- After opening gmail, the extension's code triggered a popup, prompting to explore further