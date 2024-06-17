# FullStack Music Application
This fullstack application has been made using Express.js for the backend part, React for the frontend part and Ionic for the mobile part.

# How it works

In order to use it, we will need a MySQL database running locally.
We will also need a cloudinary account to be able to store our songs.
Then, in the back folder we will need to create an .env file with the following structure:
 - CLOUDINARY_NAME='Name in Dashboard from your cloudinary profile'
 - CLOUDINARY_KEY='API key from your cloudinary profile'
 - CLOUDINARY_SECRET='Secret API from your cloudinary profile'
 - DB_NAME='Name of the database'
 - DB_USER='User of the database'
 - DB_PASSWORD='Password of the user'
 - DB_HOST='localhost'
With all of the above configured, we will open 3 terminals, and in each of them we will move to a folder (back, desktop, mobile).
In the terminals located in back and mobile we will execute npm start.
In the terminal located on the desktop we will execute npm run dev.