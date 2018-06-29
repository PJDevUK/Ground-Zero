# Ground-Zero

STARTING
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
1:
CONNECT TO LOCAL DB (This will change later in development)
Open Gitbash via desktop icon. Then when console appears 
enter the following command.

"C:\Program Files\MongoDB\Server\3.6\bin\mongo.exe"

Press: Enter 

DONE!
Now move this console away to the side or minimise 
(Dont Close) this will close the connection to your local 
MongoDB server which you have just initialised.

This step will change later in development but I'll update 
this file to reflect 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
2:

In Visual Studio Code (VSC). 

                       Press: Ctrl + '

The integrated terminal will appear and you should see a $
if not call me over.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
3:
Enter the following command shown below and press enter.

                       npm install

This will ensure all packages are correct before starting.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
4:
Now enter this command. 

                       Nodemon start

Now the app initialise and start listening for request and 
user interaction. it should look like this below:

[nodemon] 1.17.5
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node start.js`
development
Listening on Port 3000
Connected to DB
Enviroment => local

If not please call me over. Its thrown an exception and 
needs to be handled before continuing

HAVE FUN :)
END
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Adopts CORS:
https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
With Help From:
https://github.com/expressjs/cors

ES6 Lint used:
[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com) [![Greenkeeper badge](https://badges.greenkeeper.io/jpldevpub/Ground-Zero.svg)](https://greenkeeper.io/)
