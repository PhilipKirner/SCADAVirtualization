# SCADAVirtualization
### Hosting client
* Navigate to /frontend/scada/
* Run npm install
* Run npm run start
    * This will host the react web app
* Wait for the react app to finish hosting
* Then run npm start electron
* You should now get the web app hosted within an electron window
* if that doesn't work try this to start electron
* <pathToProject>/SCADAVirtualization/frontend/scada/src$ ../node_modules/.bin/electron ./electron-starter.js