# Hire Next

# Overview 
HireNext is a web application designed to help users keep track of the jobs they have applied to. The application provides features such as  sorting, searching, and filters based on work type and job status. It is built using the MERN stack (MongoDB, Express.js, React, and Node.js) and employs JWT for authentication and cookies for session management.

# Features
1. User Authentication: Utilizes JWT for secure user authentication.
2. Job Tracking: Allows users to maintain a record of the jobs they have applied to.

3. Sorting: Enables users to sort job applications based on various parameters.

4. Searching: Allows users to search for specific job applications using relevant keywords.

5. Filters: Users can filter job applications based on work type and job status.
# Tech Stack
1.Frontend: React ,Tailwind.css

2.Backend: Node.js, Express.js

3.Database: MongoDB

4.Authentication: JSON Web Tokens (JWT)

5.Cloud Storage: Cloudinary

6.Session Management: Cookies




## Installation Clone the repository:

git clone https://github.com/adarsh7raj/Job_Portal


## Install server dependencies
 cd backend
 npm install

 
 ## Install client dependencies
 cd ../frontend
 npm install

## set environment variables
1.First create a .env file in root of backend folder

2.Create a mongodb project and get the mongodburi and create a MONGODB_URI env variable  and paste the uri in that .

3.Create a PORT env variable and give it a value of 8000.

4.Create a SECRET_KEY  env varibale and add the value for JWT secret.

5.Create your account on cloudinary and create these env variables : CLOUD_NAME, API_SECRET , API_KEY.


# Start the server and client:

 ## Start the server (from the backend directory)
 node index.js


 ## Start the client (from the frontend directory)
 npm run dev

Open your browser and go to http://localhost:5173 to view the application.





# Usage
1.Create an account or log in.
### Student login
2. You can login as student or as recruiter.

3. As student you can search jobs, sort ,filter jobs and can apply for a job

4. You can edit profile by adding about yourself , upload your profile pic and upload your resume.
### Recruiter login

5. As a recruiter you can add companies and jobs.

6. In jobs you can add job title,company name , salary,decription,requirements,Job type,number of openings.
7. You can also see the candidates application for a particular job post.


### If you have any questions or feedback, please contact me at adarshrajyadav68@gmail.com I'd love to hear from you!

