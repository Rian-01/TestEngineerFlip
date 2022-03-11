######################################################################################################################################
Step by step for testing API and WEB.

Testing for API With Postman
1. Open postman
2. Select import
3. Upload file Test_Engineer.json and click ok
4. Run postman

Testing with Newman
1. Install newman with terminal
  a. npm install -g newman for windows or
  b. brew install newman for Mac
2. Go to the file location Test_Engineer.json with terminal
3. Type : newman run Test_Engineer.json -r hetmlextra
4. Enter
5. The results will appear and create a folder with the name newman with the report results being html

######################################################################################################################################

WEB testing with cypress
1. Install cypress
  a. type "npm install cypress --save-dev" in cmd or terminal
  B. Paste the testEngineer.test.js file into the same integration folder where cypress was installed, for example "C:\Users\rianp\cypress\integration"
2. Run cypress by typing "npx cypress open"
3. After cypress is open, click the testEngineer.test.js file, and web automation will run