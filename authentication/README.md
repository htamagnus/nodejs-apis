## what I've learned:
1. **authentication:**
- authentication means that not every visitor of the page can view and interact with everything;
- authentication has to happen on the server-side and builds up on sessions;
- you can protect routes by checking the session controlled login status right before you acess a controller action;
---
2. **security & UX:**
- passwords should be stored in a hashed form;
- CSRF attacks are a real issua and you should therefore include CSRF protection in any application you build;
- for a better user experience, you can flash data/messages into the session which you then can display in your views;
---
3. **bcryptjs:**
- to encrypt passwords using the bcryptjs library, which is a JavaScript implementation of the bcrypt password hashing algorithm, follow these steps. Bcrypt is a secure password hashing algorithm designed to protect against brute-force attacks and dictionary attacks.
---
4. **csurf:**
- how to make a website secure and immune to CSRF attacks with csurf. csurf is a middleware for Express.js, a popular web application framework for Node.js. Its purpose is to prevent Cross-Site Request Forgery (CSRF) attacks by adding an additional layer of security to your web application.
![image](https://github.com/htamagnus/nodejs-apis/assets/85269068/132bb9a8-0fd6-4a1a-9973-407674eb91e0)

---
5. **connect-flash:**
- how to display error messages with connect-flash. connect-flash is an additional middleware for the Express.js web application framework in Node.js. It is commonly employed to store and retrieve messages meant to be transferred between requests. This proves particularly beneficial in situations like showcasing flash messages following a form submission or successful authentication.
---
