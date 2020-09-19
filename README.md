# EAS-E
## Inspiration
73% of students in 2018 studying through private, for-profit institutions enrolled in distance education,
34.1% of students at public institutions the same year took online courses, and 
30.4% of students at private non-profit schools enrolled in distance education.

On top of this, I being high schoolers who have the high school burden online, we have sensed the struggle not only for ourselves but for those of other peers who often come to us for help. As a result, this inspired us to create this project.
## What it does
The first section is an area where tutors can make posts for any students to require help to respond to. As a tutor I fill in several fields such as the subjects I wish to tutor, my phone number, email address, name and description and I am able to post a post. Additionally, if I choose to tutor as a volunteer I can enter Free in the costs column. This allows users to simply  add
 
The second section is a help section where students having problems with certain questions can enter them or information they wish to retrieve using Wolfram Simple API. I am able to go to that page and for example enter “Who was George Washington” and a detailed answer and facts in relation to him comes up.

The third section is the courses tabs which users can use in order to find courses to either learn more or seek help via a course in order to learn more or develop that skill further. Here there are a few find pre-selected courses such as Computer Science, Data Science, Calculus 1 for options but instead I will use the custom query input where I can input a course that I might want to find and a list of courses come out of the output using ClassPert Course Search API

The fourth section is a build your own resume section. Users will answer some questions and the program will write a professionally written resume. In the future, I would like to use sentimental analysis to make sure that the tone is as accurate as can be. Each resume comes with 5 sections such as awards, experience, interests, etc. We know writing the perfect resume is tough and must be better than ever due to how many jobs have been displaced due to the pandemic; hence we chose to make the resume builder. 
## How I built it
For the react native part of the application, I will break it down section by section.

For the first section, I simply used Firebase as a backend which allowed a simple, easy and fast way of retrieving and pushing data to the cloud storage. This allowed me to spend time on other features, and due to my ever growing experience with firebase, this did not take too much time. I simply added a form which pushed data to firebase and when you go to the home page it refreshes and see that the cloud was updated in real time

For the second section, I used native base in order to create my UI and used Wolfram Alpha simple api, which takes in the query and then outputs an image with the results. This way the infromation given is maximized. The UI is again created by me where the icons are from vector-icons this time around.

For the third section, I used classpert, course search api in order to create a query system to output results of courses that are found most appealing to the user. For the user interface, I created the designs myself and I user Material-Paper library to retrieve the icons which are being used throughout the app.

For the fourth section, using python and flask we were able to create a page, then embedded into the react native app for usage, to help users create modern and appealing resumes depending on their skills. Unfortuantely, my partner forgot ot write this explanation, since he created this section. He is in a different time zone, and becuase of that he went to sleep already. I am unable to contact him, but he will be awake after the submission deadline has passed. Please email neerbhalgat@gmail.com or joshiom28@gmail.com for questions.


## IMPROVEMENTS
We would like to make an automatic notetaker that automatically converts what the teachers is saying in class to text. this way students dont have to take down notes and accidentally miss important information. We would also like to use sentiment analysis for our resume just to make sure the tone is positive and not neutral or negative.

# How to Run it


Go ahead and download the REACT-NATIVE-APP, not the website just yet. Download it and run expo install inside the root folder. After that, a qr code should show up. Open up your phone and make sure you have the expo app installed from the play store. After that, scan the qr code and it should lead you into the expo app you just downloaded where the project should show up. 
# Things to Watch out For
Here are some things in the app to watch out for
# Tutor Post Section
After adding a tutor post, you will need to refresh the app by shaking the device. After that, a reload button should pop up and by pressing htat it will refresh.
# Wolfram Query Answereer
After entering a query, wait a few moments before the image pops up. It will take some more time than usual becuase the image takes longer to render since it has more data.
# Course Searcher
The query results, is the equavalent of the results you would get from its website. As a result, when pressing a course you will then reach the website of where the course is from. 
# Resume Builder
We faced troubles trying to upload this to a domain, and as a result, the website on the app is currently static and as a result the functionality is not there. If you wish to see it in action, please run the website project folder on your local host. 
# UI Pictures
Please check out the UI pictures folder for more information. In case it is hard or not able to be run on your machine, please use these as a reference of our app.
