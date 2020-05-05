### Install MongoDB

`sudo chown -R $(whoami) $(brew --prefix)/*`

`brew update`

`brew tap mongodb/brew`

`brew services start mongodb-community`

In addition to the binaries, the install creates:

- the configuration file `/usr/local/etc/mongod.conf`
- the log directory path `/usr/local/var/log/mongodb`
- the data directory path `/usr/local/var/mongodb`

### Fix common installation errors 

failed to connect to server [localhost:27017] on first connect

`sudo rm -rf /tmp/mongodb-27017.sock`

`brew services start mongodb-community`


To begin using MongoDB, connect a mongo shell to the running instance. From a new terminal, issue the following:

`mongo`

### Install the Dependencies

`npm install`

### Populate the Database

`node seed.js`

### Run the Tests

`npm test`

### Start the Server

`node index.js`