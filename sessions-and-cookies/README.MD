# What I've learned:

### Cookies:
- great for storing data on the client (browser);
- DO NOT store sensitive data here, it can be viewed and manipulated;
- cookies can be configurated to expire whe the browser is closed(=> "Session Cookie") or when a certain age/expiry date is reached ("Permanent Cookie")
- works well together with sessions;

### Sessions:
- stored on the server, not on the client;
- great or storing sensitive data that should survive across requests;
- you can store anything in sessions;
- often used for storing user data/authentication status;
- identified via Cookie (don't mistake this with term "Session cookie")
- you can use different storages for saving your sessions on the server