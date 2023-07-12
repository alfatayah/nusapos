# nusapos
this project made from express js and mongo db combine in view ejs

# Installations
+ create env in project
+ configure database mongo db in env
+ install brwoser sycn (npm install -g browser-sync)
+ run npm run dev and npm run ui (to run browser sycn)
# Run the apps
+ npm run dev

# Create new table in database
+ create new models in project
+ create new dummy data in var data = [] in seed.js
+ run command node ./seed.js to create table and dummy data
+ Dont make name table or db for camel case in mongoDB 

# To connect DB and using seed.js
+ change url local mongo db in app.js
+ run script node ./seed.js to create table
