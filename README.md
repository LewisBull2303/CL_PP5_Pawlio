# Pawlio <img width="100" height="70" alt="image" src="https://github.com/user-attachments/assets/a2f1a4d3-ffae-4e93-987e-24a50005b9cc" />

Developer: Lewis Bull

[Visit Live Website here](https://cl-pp5-pawlio-ba8f8e344581.herokuapp.com/)

<img width="1277" height="709" alt="image" src="https://github.com/user-attachments/assets/5952be3e-d5ff-48ef-ae87-6cbaef7c9879" />

## Table of Content

- [About](#About)
- [Project Goals](#project-goals)
- [User Stories](#user-stories)
- [Design](#design)
  - [Fonts](#fonts)
  - [Wireframes](#wireframes)
- [Technologies Used](#technologies-used)
  - [Languages](#languages)
  - [Libraries, Frameworks and Dependencies](libraries-frameworks-and-dependencies)
  - [Tools and Programs](tools-and-programs)
- [Front-end](#front-end)
- [Back-End API](#Back-End-API)
- [Features](#features)
- [Future Improvements / Additional Features](#future-improvements--additional-features)
- [Validation](#validation)
- [Testing](#testing)
  - [Manual Testing](#manual-testing)
  - [Performing tests on various devices](#performing-tests-on-different-devices)
  - [Browser Compatibility](#browser-compatibility)
- [Bugs](#bugs)
- [Config](#Config)
- [Credits](#credits)


## About

Pawlio is a web based platform where users can share pictures of their pets or animals with the rest of the community on the app. Every user can like other peoples posts, and add comments to share their opinions on posts. Users can also follow their favourite profiles and easily see updates on folowed accounts activity. Pawlio is an app for all ages and was made for animal lovers who love to share adorable pictures of their favourite animals.

## Project Goals

The goal of this project was to build a social platform which allows users to intereact with each other in meaningful and broad ways such as commenting or liking posts and following profiles. The main drive is to keep the platform very informal and was purely for entertainment purposes.

The key functions of the platform are:

 - Simple and Interactive navigation across all of the websites pages
 - All pages to be responsive across various devices
 - User interaction with posts, comments, likes and following users
 - User profiles with Bios and profiles images
 - Post filtering by titles, users and categories
 - User authentiation
 - CRUD functionality for posts, comments, likes followers and the profile information
 - Post filtering by likes and followed users

## User Stories

### Authentication

1. As a new user, I can create a new account to be able to access the app
2. As a pre-existing user, I can log in to my account with my credentials to access the app
3. As a User, I can maintain the logged-in status until I choose to log out of the app

### Posts

4. As a user, I can create posts so that I can share pictures of animals with the whole community
5. As a user, I can view post by category and can categorize my posts to users can see it by its tag
6. As a user, I can view other peoples posts so that I can get inspired by their images
7. As a user, I can view the details of a post so I can see the full description and other users comments
8. As a user I can like a post so that I can show my interest

### Navigation

9. As a user, I can see the home page with an explanation of the portal, so that I know what the app is about
10. As a user, I can see the navbar on every page, so that I can easily return to the main page and access my profile page
11. As a logged-out user, I can see log in and sign up options so that I can log in or sign up

### The Post Page

12. As a user, I can view the details of a single post so that I can read other users comments and know what they think about
13. As a user, I can view a category for the post so that I know what the image relates to
14. As a user, I can add comments to a post so that I can share my thoughts about a post
15. As a user, I can see when comments were created, so I know how old a comment is
16. As a user, I can edit my comment so that I can update it
17. As a user, I can delete my comment from the post
18. As a user, I can edit my post title and description so that I can make corrections or update my post after it was created

### User Profile Page

19. As a user, I can dd my profile picture so that other users can easily identify me
20. As a User, I can view my users profile pictures so that I can identify other users
21. As a user, I can update my picture and bio on my profile so that other users can see up to date information about me
22. As a user, I can change the password to my account so that I can keep it secure

### Other Users Profiles

23. As a user, I can view all the posts by a specific user so that I can see their latest activity
24. As a user, I can view other users profiles with their bios, the number of posts, followers and profiles they follow
25. As a user, I can follow and unfollow other users so that I can get specific user' posts in my feed
26. As a user, I can see a list of the most followed profiles

### Main Page

27. As a user, I can view posts ordered by most recently added so that I am up to date with the newest content J
28. As a user, I can keep scrolling through the posts so that they are loaded automatically and I don't have to select the next page
29. As a user, I can see the posts I liked so that I can find the posts I enjoy the most
30. As a user, I can view posts from users I followed, so I can follow their activity
31. As a user, I can view posts category tags, so that I choose posts to display that I’m interested in
32. As a user, I can search for posts with keywords so that I can find the posts I am interested in

### General

33. As the site owner, I want my site to be fully responsive so that user can use it on different devices
34. As a site owner, I want users to see a 404 page when they go to a url that doesnt exist
35. As a user, I can view feedback messages so that I know if my comment, profile or post has been updated

## Design

The color scheme for this application was inspired by other similar social media websites such as instagram and twitter, focusing mainly on base colors like, white, gray and black. It was my aim to keep the colors fairly neutral to create a calming and familiar feel to the whole webpage, another benefit that it adds is that the objects with colors such as the like button, profile pictures and images all stand out more. The use of neautral colors allows the users focus to be drawn to the images on the page allowing for better user engagement. The Apps background color is an off white with the navbar matching but being seperated by a black line boarder. The main content page is then white to add contrast and once again draw in the focus of the user. The buttons are all black at a base line but when hovered over turn blue and when active also become blue. The like button is at a base black, but when hovered and not liked, becomes red, when it is liked it is a full red and when it it liked and hovered over it becomes blue. All of these colors were carefully thought out to allow for contrast and clear directionn on what the user can interact with.

<img width="1091" height="533" alt="image" src="https://github.com/user-attachments/assets/4d26791f-1b5c-452e-8db7-0536bd8ea01c" />

## Fonts

Google fonts were used on the website. Iter was used as my main font with sans serif as the backup font. Inter was used throughout the site to ensure high legibility of the content. 

## WireFrames

<details>
 <summary>Desktop Wireframes</summary>

<img width="1442" height="908" alt="image" src="https://github.com/user-attachments/assets/51a77988-c5a1-463a-b1c7-d3b173cda7a4" />

</details>

<details>
 <summary>Tablet Wireframes</summary>

<img width="1477" height="588" alt="image" src="https://github.com/user-attachments/assets/88744985-1eb6-411b-a545-6b6616b045a7" />
<img width="1542" height="577" alt="image" src="https://github.com/user-attachments/assets/9c6f46b9-f9e0-443d-8812-c70e955cb5a6" />
<img width="1115" height="608" alt="image" src="https://github.com/user-attachments/assets/113edc93-ab4c-44b5-a689-e7be79ce950f" />

</details>

<details>
 <summary>Mobile Wireframes</summary>

<img width="1489" height="722" alt="image" src="https://github.com/user-attachments/assets/ed78d82d-114b-41c5-8ac0-22f66b995a73" />
<img width="1453" height="718" alt="image" src="https://github.com/user-attachments/assets/7c7b93d7-e589-49b4-9788-a5caf6d174f1" />
<img width="1009" height="813" alt="image" src="https://github.com/user-attachments/assets/c75737f9-5ea3-4fb3-8c79-75a3239f515b" />

</details>


## Technologies used:

### Languages

- HTML
- CSS
- Javascript
  - React (17.0.2)

### Libraries, Frameworks and Dependencies

- Axios - axios was used to send API requests from the react project to the API and avoid any CORS erros when sending cookies
- JWT - Library to decode out JSON Web token. I used JWT to prevent unauthenticated user from making extra network requests to refresh their access tokens.
- Popper - A 3rd party library used by React-Bootstrp to make sure the dropdown menu position is fixed on all browsers
- React 17 - Javascript library for building user interfaces
- React-Bootstrap 4.6 - I used bootstrap react library fore UI Components, styling and responsivenes
- React Infinite Scroll - I used this component to load content such as posts and comments automaticallt as the user scrolls toward the bottom of the page without having a jump to the next/previous page
- React Router - Used for dynamic routing, I used this library to enable the navigation among views of components and control what the user sees depending on the url

### Tools and Programs
- Font Awesome - Icons from Font Awesome were used throughout the site
- Google Fonts - import of Inter font
- Git was used for version control within VSCode to push the code to GitHub
- GitHub was used as a remote repository to store project code
- Favicon.io for making the site favicon
- Cloudinary to store static files
- Coolors to help find colors
- Font Awesome - Icons from Font Awesome were used throughout the site
- Heroku was used to deploy the project into a live environment
- Validation:
  - WC3 Validator was used to validate the html
  - Jigsaw W3 Validator was used to validate the css
  - JSHint used to validate JSX code
  - Lighthouse used to validate performance, accessibility, best practice and SEO of the app

# Front-end

## React

React is a flexible, efficient, and declarative JavaScript library used to build user interfaces. It simplifies managing an interface and its state by breaking the UI into independent, reusable components.

I chose React for this application for several key reasons:

- Performance: React significantly improves page load speed, enhancing overall user experience by minimizing wait times.

- Modularity and Maintainability: React’s component-based architecture makes the codebase more flexible and easier to maintain compared to many other front-end frameworks.

- React Bootstrap: To enhance styling and responsiveness, I incorporated React Bootstrap. It offers pre-built components tailored for React, designed with accessibility in mind—an essential aspect of front-end development. Having previously worked with plain Bootstrap, transitioning to React Bootstrap was a natural and efficient choice.

- Industry Adoption: React is widely used in building social media and content-driven platforms, including by major companies like Meta (Facebook), Instagram, Netflix, and Airbnb.

- Component Reusability: React allows developers to reuse components across different parts of the application, reducing redundancy and streamlining development.

There were several components created and re-used for this application:

- Asset - multipurpose reusable compontent which displays different versions of the component depending on the props we pass to it
  - loading gif (spinner) when content is being loaded
  - image with src and alt attribute
  - paragraph with a message
  - User Stories Answered - 28
- DropdownMenu – A reusable component that renders a dropdown menu, allowing users to manage their content. It provides options to edit or delete their own posts and comments, update profile details, or change their password. - User Stories Answered - 19, 20
- FeedbackMsg – This component displays user feedback messages triggered by actions such as editing or deleting comments, removing posts, or updating profile information or passwords. User Stories Answered - 35
- Landing– A dedicated component for the landing page shown to new or unauthenticated users. It includes navigation links for signing up and logging in, alongside the app’s navbar. User Stories Answered - 9
- LikeFeedAddPost – A versatile component featuring three icons: one to add a new post, one to view liked posts, and another to show posts from followed profiles. It appears on multiple pages within the app. User Stories Answered - 4, 29, 30
- NavBar – A reusable navigation bar that adapts based on the user's login status. Logged-in users see links to the main feed and their avatar, while logged-out users see links to log in or sign up. This component is consistently used across all pages. User Stories Answered - 10 , 11
- PageNotFound – A specific component that displays a 404 error graphic and a button to return to the main menu when a user navigates to a non-existent URL. User Stories Answered - 34
- PasswordCriteria – A reusable component that displays password requirements on hover or focus. It is used both during sign-up and when changing the user’s password in the profile settings. User Stories Answered - 1, 22
- PopularProfiles – A reusable component that showcases the top three most-followed profiles in the app. It displays the user's avatar, name, and a follow/unfollow button (hidden on medium-sized screens). This component is commonly used alongside <LikeFeedAddPost /> and category badges on relevant pages. User Stories Answered - 26

# Back-End API

## Django REST Framework

The API for this application was built with the Django REST Framework. The repository with a ReadMe file for the Backend can be found [here](http://github.com/LewisBull2303/Pawlio_drf_api)

## Features

### Landing Page:
- The main body contains an explanation of the app
- Includes navbar, main body and footer
- Contains directs links to the login and sign up page
- User Stories Answered - 9, 11

<details>
 <summary>Images</summary>

<img width="1229" height="785" alt="image" src="https://github.com/user-attachments/assets/c4bc177c-9e2a-4f7a-bf1d-c2e911b91199" />

</details>

### Logo and Navigation Bar
- Remains across all pages of the website
- The Navbar has 2 different variations
  - New or not logged in users, will see the home icon, sign up icon and log in icon
  - Logged in users will see the home icon, the sign out button and their avatar profile picture
- The navbar is fully responsive and changes to a hamburger menu on smaller screen sizes
- User Stories Answered - 10, 11

<details>
 <summary>Images</summary>

<img width="1565" height="250" alt="image" src="https://github.com/user-attachments/assets/088dc107-fbf5-4e39-97b8-730d45f0fcef" />
<img width="1440" height="276" alt="image" src="https://github.com/user-attachments/assets/6d88f356-24d2-4fbb-9766-e56bfe2275ee" />


</details>

### Footer
- A footer is displayed at the bottom of the landing page
- Contains links to social media and github pages
- Contains copyright info

<details>
 <summary>Images</summary>

<img width="1336" height="319" alt="image" src="https://github.com/user-attachments/assets/1fcf433c-f1ca-4bc8-807e-6bf8556b8ca7" />


</details>

### Sign Up Form
- New users can create an account
- THe user must provide a username that is less than 20 characters, a password and a password confirmation
- The password must meet the criteria which user can see when they hover over the password criteria button
- User cannot register if the name is already in use
- Once registered the user is taken to the login page to log in
- User Stories Answered - 1

<details>
 <summary>Images</summary>

<img width="1320" height="655" alt="image" src="https://github.com/user-attachments/assets/eff586d1-01f8-47e2-a5aa-a62e6c6d09c2" />


</details>

### Login Form
- Returning users are able to use their credentials to login
- The user muist have a valid account in the system
- Both username and password are needed to login
- Once logged in the user is taken to the main home page
- Warning messages are displayed when incorrect input has been put in
- User Stories Answered - 2

<details>
 <summary>Images</summary>

<img width="1378" height="514" alt="image" src="https://github.com/user-attachments/assets/b69f87db-a4e6-422d-926d-72c62c04e79b" />


</details>

### Post Create/Update Form
- Contains the image, title, category and descriptions
- Description field is option
- Allows users to share their pictures with others
- Allow users to categorise their post to make it easy to be found by other users
- User Stories Answered - 4, 5, 18, 31

<details>
 <summary>Images</summary>

<img width="1305" height="577" alt="image" src="https://github.com/user-attachments/assets/7e9a36b1-aaed-42fe-81e0-61794dc62d0c" />

</details>

### Main Home Page
- Main home page is diplayed for all logged in users
- Contains 3 small menus
  - Add post, likes and feed buttons
  - Most followed users
  - Post category badges
- Without any search filters all posts are displayed
- Display all posts that are ordered by the most recent one
- User Stories Answered - 6, 27

<details>
 <summary>Images</summary>



</details>

### Post Page
- Contains details of a single post, with the image title, description and category tag
- Contains number of likes and comments the post has
- Contains like icon to allow user to like the post
- Features comment section below the post
- User Stories Answered - 7, 8 12, 13, 14

<details>
 <summary>Images</summary>

<img width="1604" height="1168" alt="image" src="https://github.com/user-attachments/assets/152dfe69-2eb5-4500-ba2c-d2371b5e6b3b" />


</details>

#### Comments
- Enable users to share their opinion on a specific post
- Display passed time since adding the post
- Users have an option to update or delete the comment
- User Stories Answered - 14, 15, 16, 17

<details>
 <summary>Images</summary>

<img width="1233" height="598" alt="image" src="https://github.com/user-attachments/assets/3ff83c45-6ea8-45ab-90bb-602f68c127d7" />
<img width="1116" height="477" alt="image" src="https://github.com/user-attachments/assets/7296b51d-e945-4288-aca8-8fd63bcbce18" />


</details>

### Likes
- Allow users to express their interest in the post
- Like icons are red if user likes the post
- User cannot like their own post
- Allow user to search to liked posts only when click on the feed option in the small menu
- User Stories Answered - 8

<details>
 <summary>Images</summary>

<img width="972" height="790" alt="image" src="https://github.com/user-attachments/assets/49ecb1ed-0c8f-4f29-8802-ee3932deaf7c" />
<img width="1348" height="525" alt="image" src="https://github.com/user-attachments/assets/24b433e4-f061-41a1-b022-4fe26982986c" />


</details>

### Profile Page
- Contains information about the user
- Displays info how many posts and followers a user has and how many users they are following
- Display profile information
- Contains a dropdwon menu to edit the profile and change profile password
- User Stories Answered - 19, 20, 21, 23, 24

<details>
 <summary>Images</summary>

<img width="1601" height="1044" alt="image" src="https://github.com/user-attachments/assets/dbe5a2d6-9e79-4980-9f75-3e6363664613" />


</details>

### Profile Picture
- Allow users to change their default avatar to their own custom picture
- Displayed in the navbar at the top of the post and in the main home page and the users comments
- Displayed within Most followed users menu
- User Stories Answered - 19, 20

<details>
 <summary>Images</summary>

<img width="205" height="187" alt="image" src="https://github.com/user-attachments/assets/b0824b19-31b5-460f-a9b6-b2aefaee02a6" />
<img width="588" height="179" alt="image" src="https://github.com/user-attachments/assets/107de544-415e-4445-a059-64ab7acc8a0d" />
<img width="753" height="206" alt="image" src="https://github.com/user-attachments/assets/304309a5-b4a8-4532-bd7b-82ad669fc2c3" />


</details>

### Password Change Form
- Allow users to change their password
- Contains password criteria visible on hover/tap of view password criteria button
- User Stories Answered - 22

<details>
 <summary>Images</summary>

<img width="1289" height="531" alt="image" src="https://github.com/user-attachments/assets/84701781-92bf-490a-a80c-3f442771c6b2" />


</details>

### Infinite Scroll
- Allows users to scroll through the content without having to jump to a new page or previous page
- User for the posts and comments
- Improves general user experience and user engagement
- Displated the loading gif before loading
- User Stories Answered - 28

<details>
 <summary>Images</summary>

<img width="1725" height="955" alt="image" src="https://github.com/user-attachments/assets/1b8c24e6-f6cc-4f19-97c7-14b39a3985d5" />


</details>

### Follow/Unfollow
- Users are able to follow/unfollow profiles that they like
- User Stories Answered - 25

<details>
 <summary>Images</summary>

<img width="1145" height="526" alt="image" src="https://github.com/user-attachments/assets/8b05695d-3c92-4e57-9841-7799bad0c2bf" />


</details>

### Add Liked Feed Menu
- Allow users to create a post
- Allow users to view only post they liked
- Allow users to view only posts created by users they follow
- User Stories Answered - 4, 29, 30

<details>
 <summary>Images</summary>

<img width="1000" height="307" alt="image" src="https://github.com/user-attachments/assets/f9bd2e24-be06-4871-a300-782d0570a8e4" />


</details>

#### Top Users Menu
- Displayed the 10 most followed users
- Contains follow buttons next to username which allow following users
- Featured on the majority of pages
- User Stories Answered - 26

<details>
 <summary>Images</summary>

<img width="501" height="781" alt="image" src="https://github.com/user-attachments/assets/aedf1235-0542-4ef6-916e-eb655cb33e23" />


</details>

### Category Badges
- Allow the user to tag a post
- Allow other users to find content they are most interested in
- User Stories Answered - 31

<details>
 <summary>Images</summary>

<img width="575" height="863" alt="image" src="https://github.com/user-attachments/assets/9d9702c2-3227-49c6-8eef-e5b99ecde0b6" />


</details>

### Search Bar
- By typing a phrase in the search bar users can find a specific post or a user they are looking for
- Allows to search through post title, users or post category
- Allow users to search through liked posts only or post by users followed
- User can click on the eraser icon to clear the search content
- User Stories Answered - 32

<details>
 <summary>Images</summary>

<img width="1059" height="202" alt="image" src="https://github.com/user-attachments/assets/06e42e4f-2484-4ce1-b743-dc8884a69eb1" />


</details>

### 404 Page
- Displays if the user loads a page with a url that does not exist
- Contains a button to redirect users to the main page
- User Stories Answered - 34

<details>
 <summary>Images</summary>

<img width="1612" height="874" alt="image" src="https://github.com/user-attachments/assets/d147f1bf-7427-461d-9719-0c2b36e5b509" />


</details>

### Feedback Messages
- The user is provided with a feedback message about the action they have just completed or tried
- User Stories Answered - 35

<details>
 <summary>Images</summary>

<img width="908" height="206" alt="image" src="https://github.com/user-attachments/assets/a82b351f-d615-4c25-ba17-1bbfff6e343c" />
<img width="893" height="177" alt="image" src="https://github.com/user-attachments/assets/b95af48c-c8a8-45fd-bfa8-efb0f8b880f5" />
<img width="1393" height="482" alt="image" src="https://github.com/user-attachments/assets/c1059e76-11ad-4421-9143-a5e3bae1d9ed" />

</details>

## Future Improvements / Additional Features

Below are some of the ways that this project could be improved in the future

1. Better user authentication, potentially requiring an email addess thet would need to be confirmed before allowing access to the platform
2. Options to send other users messages on the app, through a personal messaging system
3. Ability for users to make their own categories and tags to allow for more freedom of expression
4. Forgot password button to allow users to reset their password if they could not log into their account
5. Allow authentication through other apps such as google, linkedIn, Instagram etc
6. A page that shows the most liked or commented posts on the website
7. Ability to reply to other users comments
8. Option to like other users comments

There was originally plans for the users to be able to private message each other on the website, but I decided to keep the app more streamlined to allow for further growth and progression

## Validation

### HTML
The W3C Markup Validation Service was used to validate the HTML of the website. No errors were identified.

<details>
 <summary>Images</summary>

<img width="1152" height="752" alt="image" src="https://github.com/user-attachments/assets/8e10393a-e4f5-48cc-8d14-84e4774be7f4" />
<img width="1219" height="640" alt="image" src="https://github.com/user-attachments/assets/8f3eacbd-0554-4928-9a69-2ba8f4cf95cb" />
<img width="1174" height="622" alt="image" src="https://github.com/user-attachments/assets/48a60c33-6b3e-46d8-b10b-d1a898277ded" />
<img width="1226" height="650" alt="image" src="https://github.com/user-attachments/assets/ede3218a-84a2-4ac1-a4b3-731885c7ca4a" />
<img width="1181" height="750" alt="image" src="https://github.com/user-attachments/assets/e0953445-940d-4805-865a-9ff29ad902cf" />
<img width="1306" height="627" alt="image" src="https://github.com/user-attachments/assets/5f55f64c-95f8-49ad-8072-73991a07387e" />
<img width="1349" height="770" alt="image" src="https://github.com/user-attachments/assets/933d2953-e95e-4ab8-a392-792a70ac2bef" />
<img width="1551" height="718" alt="image" src="https://github.com/user-attachments/assets/3d20183d-0f3c-4211-ae94-2a3230a5ef60" />
<img width="1242" height="620" alt="image" src="https://github.com/user-attachments/assets/489a41be-5e41-4cd8-b88b-e4531ab83609" />
<img width="1244" height="615" alt="image" src="https://github.com/user-attachments/assets/7c9aaf94-8561-4b5c-adb6-b86ff6f3e675" />

</details>

### CSS
The W3C Jigsaw CSS Validation Service was used to validate the CSS of the website. All CSS modules pass the validation with no errors. 

<details>
 <summary>Images</summary>

<img width="1148" height="388" alt="image" src="https://github.com/user-attachments/assets/881123f5-ce7c-4a43-8193-a7a5b632fadf" />
<img width="1205" height="599" alt="image" src="https://github.com/user-attachments/assets/81ac740c-54aa-4b78-9ec8-17450a537d45" />
<img width="1407" height="565" alt="image" src="https://github.com/user-attachments/assets/6d0ddcbc-42c5-4815-aa6c-e798a02b3a76" />
<img width="1386" height="663" alt="image" src="https://github.com/user-attachments/assets/a059a25a-ef89-4f52-ab94-db93afafb124" />
<img width="1928" height="602" alt="image" src="https://github.com/user-attachments/assets/f2ae70e4-9c74-44d9-aaab-7c644ad277ef" />
<img width="1810" height="333" alt="image" src="https://github.com/user-attachments/assets/f756b806-4f5c-4388-906f-0c2eaa3649fa" />
<img width="1795" height="429" alt="image" src="https://github.com/user-attachments/assets/b106fcc5-f873-4738-96ee-38f3bb900f5c" />
<img width="1969" height="462" alt="image" src="https://github.com/user-attachments/assets/95a5a499-1e24-438f-9f03-558535125c5f" />
<img width="1885" height="426" alt="image" src="https://github.com/user-attachments/assets/e065bb11-d8c5-41e0-b3ab-5537baeea640" />
<img width="1765" height="395" alt="image" src="https://github.com/user-attachments/assets/15122d7a-5272-4bfd-9219-ff0c8cd55993" />
<img width="1661" height="695" alt="image" src="https://github.com/user-attachments/assets/f19ce10f-b9e5-456b-bbee-18f5a2998037" />
<img width="1817" height="625" alt="image" src="https://github.com/user-attachments/assets/cca40ca3-8e7b-42da-bf4d-e4421b037883" />
<img width="1680" height="522" alt="image" src="https://github.com/user-attachments/assets/ca08eac9-4e74-4f06-8306-b66c2ad472a5" />
<img width="1816" height="441" alt="image" src="https://github.com/user-attachments/assets/0d9ea8ce-24fc-4b7e-ab56-e4c9e2e5647d" />
<img width="1681" height="495" alt="image" src="https://github.com/user-attachments/assets/8e7055bb-4efc-47b9-8ed8-194511705f8d" />
<img width="1814" height="486" alt="image" src="https://github.com/user-attachments/assets/f7b8ecab-aac7-4548-9c91-0ca7baeab6e2" />
<img width="1757" height="551" alt="image" src="https://github.com/user-attachments/assets/d3ed9852-6fe2-4240-9a4e-401d61d24aa9" />

</details>

### JS Validation 

JSHint was used to validate all of the js code:

<details>
 <summary>Images</summary>

<img width="1122" height="513" alt="image" src="https://github.com/user-attachments/assets/bf4eb778-e603-4d8d-a05d-9762f3af4c1b" />
<img width="1086" height="382" alt="image" src="https://github.com/user-attachments/assets/7d30fbd5-f67c-48ce-8285-97314bd3e615" />
<img width="1078" height="377" alt="image" src="https://github.com/user-attachments/assets/cb0370bd-5c10-47fa-bec8-7e4a3aa80835" />
<img width="1306" height="1010" alt="image" src="https://github.com/user-attachments/assets/2ae7aec3-e76b-4a92-b65b-2064ec541da9" />
<img width="1112" height="498" alt="image" src="https://github.com/user-attachments/assets/07fd16ba-b365-45eb-b7bf-c4b5e5434e83" />
<img width="1326" height="1201" alt="image" src="https://github.com/user-attachments/assets/723ebc59-75f1-45b0-b899-6e146dda53f9" />
<img width="1250" height="591" alt="image" src="https://github.com/user-attachments/assets/29d68aa0-f867-4562-a98b-e25ddc94cd68" />
<img width="1232" height="1005" alt="image" src="https://github.com/user-attachments/assets/3cbd32eb-24f6-452b-b0b6-3820bf73c48a" />
<img width="1279" height="674" alt="image" src="https://github.com/user-attachments/assets/184697b2-10ce-42bd-90fe-3805c5dfe4fc" />
<img width="1136" height="685" alt="image" src="https://github.com/user-attachments/assets/04ee7d7e-16c6-43d4-8c9b-b52fbb0af076" />

<img width="1322" height="969" alt="image" src="https://github.com/user-attachments/assets/a47bedb6-a947-49ce-92ab-06edf6601706" />
<img width="1312" height="1080" alt="image" src="https://github.com/user-attachments/assets/2abf78ee-4814-40f9-bb4e-0131dd12ac71" />
<img width="1097" height="515" alt="image" src="https://github.com/user-attachments/assets/9279fefb-26f2-4b19-961d-1562497debc9" />
<img width="1118" height="539" alt="image" src="https://github.com/user-attachments/assets/b2e34546-b5e6-409e-8e60-cba5cd77da2a" />

<img width="1545" height="912" alt="image" src="https://github.com/user-attachments/assets/eaffbd67-bd3f-4e63-8f40-515c32947e18" />
<img width="1532" height="923" alt="image" src="https://github.com/user-attachments/assets/4b887064-8481-47c8-b9f8-2f0626b26861" />
<img width="1802" height="1148" alt="image" src="https://github.com/user-attachments/assets/97bbc0b6-12e2-4c19-b199-2f698549e97c" />
<img width="1340" height="709" alt="image" src="https://github.com/user-attachments/assets/e53001d8-4603-4b66-b94f-8bc28c44fb58" />
<img width="1357" height="983" alt="image" src="https://github.com/user-attachments/assets/f6fd026c-7c41-4fd0-8883-5508ea2e0022" />

<img width="1392" height="803" alt="image" src="https://github.com/user-attachments/assets/38e793f7-b0f8-4597-920c-1ab46ecf8179" />
<img width="1474" height="978" alt="image" src="https://github.com/user-attachments/assets/27208bba-2405-4d58-81a8-14b6e15cad31" />
<img width="1420" height="894" alt="image" src="https://github.com/user-attachments/assets/ee2f70be-1ef8-490d-ac0d-135a338f8ebd" />
<img width="1463" height="1045" alt="image" src="https://github.com/user-attachments/assets/b597b5d8-f691-4391-85de-fbc9fa5c5070" />
<img width="1315" height="1006" alt="image" src="https://github.com/user-attachments/assets/b3dbf1d8-f216-4ae1-84b6-ad6208ffba3c" />
<img width="1185" height="778" alt="image" src="https://github.com/user-attachments/assets/a9a8f082-8e8e-42ae-a072-bf8ee985053e" />
<img width="1126" height="960" alt="image" src="https://github.com/user-attachments/assets/b11b9c11-b1fb-4790-aad1-c40c4a29c26b" />
<img width="1259" height="968" alt="image" src="https://github.com/user-attachments/assets/557e3def-1d2c-490e-acad-bf227a0d01ae" />
<img width="1339" height="1075" alt="image" src="https://github.com/user-attachments/assets/367c48c7-273d-430a-8660-28e643c2d01f" />
<img width="1205" height="974" alt="image" src="https://github.com/user-attachments/assets/de8edb2a-23c6-4107-a8f8-b8353ff7610b" />
<img width="1312" height="893" alt="image" src="https://github.com/user-attachments/assets/97a43e9d-7e82-4d9f-8b2b-d2835a37ebdd" />
<img width="1154" height="1094" alt="image" src="https://github.com/user-attachments/assets/90354fef-c866-479f-b1ca-14dd94f68b02" />

</details>

### Google Lighthouse

Lighthouse was used to test the performance, accessibility, best practice and SEO of the site. The validation was done for both desktop & mobile.

<details>
 <summary>Desktop Images</summary>

<img width="934" height="530" alt="image" src="https://github.com/user-attachments/assets/b8e9428c-5333-40d3-a191-f2932d485567" />
<img width="904" height="775" alt="image" src="https://github.com/user-attachments/assets/9467ba14-7a6f-44f6-9c74-c776ab31656c" />


</details>

<details>
 <summary>Mobile Images</summary>

<img width="835" height="537" alt="image" src="https://github.com/user-attachments/assets/e6a3cf36-5ad4-4899-8b29-eb9294e7381b" />
<img width="1064" height="663" alt="image" src="https://github.com/user-attachments/assets/a3e8e4c2-5ed1-466e-8dd5-25e8a0031438" />

</details>

## Manual Testing

1. As a new user, I can create a new account to be able to access the app

|Test|Expected Result|Actual Result|
|---|---|---|
|Navigate to https://cl-pp5-pawlio-ba8f8e344581.herokuapp.com/ and click on sign up in the Navbar or the Happy to join button on the landing page. The user types in a username, password and confirms the password|Redirects the user to the login page, and if they login with their account credentials they are taken to the home page and the navbar displays their profile image|Works as expected|

<details>
 <summary>Images</summary>
 
<img width="1511" height="739" alt="image" src="https://github.com/user-attachments/assets/a9955f58-846b-4c01-b8bd-1ec9ddf67a59" />

</details>

2. As a pre-existing user, I can log in to my account with my credentials to access the app

|Test|Expected Result|Actual Result|
|---|---|---|
|Navigate to https://cl-pp5-pawlio-ba8f8e344581.herokuapp.com/ and click on Login in the Navbar or the Im already a member button on the landing page. The user types in their username and password |Allows the user to login|Works as expected|

<details>
 <summary>Images</summary>

<img width="1683" height="780" alt="image" src="https://github.com/user-attachments/assets/fed219d9-e89a-458b-8756-ee34ab8f27c8" />

</details>


3. As a User, I can maintain the logged-in status until I choose to log out of the app

|Test|Expected Result|Actual Result|
|---|---|---|
|Log in and stay logged in|Allows the user to stay logged in unless they choose to log themselves out|Works as expected|


<details>
 <summary>Images</summary>

<img width="1371" height="701" alt="image" src="https://github.com/user-attachments/assets/86394634-24ce-4e48-a9e6-2d11f4eb6d95" />


</details>


4. As a user, I can create posts so that I can share pictures of animals with the whole community

|Test|Expected Result|Actual Result|
|---|---|---|
|Click on the add post button in the navbar or the side menu|Add the post title, select the category and upload image (post description is optional) and click ‘create’ button. The post will appear in the main posts page|Works as expected|

<details>
 <summary>Images</summary>

<img width="1486" height="718" alt="image" src="https://github.com/user-attachments/assets/455047b7-5f73-427c-ae72-120e11910b17" />


</details>


5. As a user, I can view post by category and can categorize my posts to users can see it by its tag

|Test|Expected Result|Actual Result|
|---|---|---|
|Click on the ‘Add post’ in the left-hand side small menu and the posts create page will be shown. Add posts details and select a category of the post (mandatory field)|Post is added and a category badge (type of post) is displayed within the post under its title and description|Works as expected|
|Click on one of the category button in the side menu|Only posts with that category tag will show up and filter out the rest|Works and Expected|

<details>
 <summary>Images</summary>

<img width="588" height="781" alt="image" src="https://github.com/user-attachments/assets/9ace1ae4-a428-4d3b-9e7c-ac0dc16c2056" />
<img width="1556" height="821" alt="image" src="https://github.com/user-attachments/assets/5cf25aa9-2b94-4e68-bf41-30aff67140ed" />

</details>


6. As a user, I can view other peoples posts so that I can get inspired by their images

|Test|Expected Result|Actual Result|
|---|---|---|
|As a logged in user navigate to the main page by clicking on the 'Home' icon in the navbar|All posts will be displayed on the page|Works as expected|

<details>
 <summary>Images</summary>

<img width="821" height="951" alt="image" src="https://github.com/user-attachments/assets/a095a18f-db2b-4341-bf03-b68e029db0fb" />


</details>


7. As a user, I can view the details of a post so I can see the full description and other users comments

|Test|Expected Result|Actual Result|
|---|---|---|
|From the main post page click on the post image|Redirects to a specific post page and displays post details|Works as expected|

<details>
 <summary>Images</summary>

<img width="1402" height="1049" alt="image" src="https://github.com/user-attachments/assets/f02e9229-9e00-4d93-8a68-79a839327c1d" />

</details>


8. As a user I can like a post so that I can show my interest

|Test|Expected Result|Actual Result|
|---|---|---|
|Click on the like button for a post|The like counter will go up and the like button will change to indicate it has been liked, the post is also added to the like page|Works as expected|

<details>
 <summary>Images</summary>

<img width="1068" height="786" alt="image" src="https://github.com/user-attachments/assets/2bffc08f-1a4c-4b17-960c-f3a4779002e0" />
<img width="1207" height="874" alt="image" src="https://github.com/user-attachments/assets/0ed7d180-2a5a-4e7b-9692-d7fb13759ed2" />

</details>


9. As a user, I can see the home page with an explanation of the portal, so that I know what the app is about

|Test|Expected Result|Actual Result|
|---|---|---|
|Navigate to https://cl-pp5-pawlio-ba8f8e344581.herokuapp.com/|The user is taken to the landing page with a description of the app|Works as expected|

<details>
 <summary>Images</summary>

<img width="1238" height="745" alt="image" src="https://github.com/user-attachments/assets/703443b5-6a85-4ab7-b38c-71b6305e62de" />

</details>


10. As a user, I can see the navbar on every page, so that I can easily return to the main page and access my profile page

|Test|Expected Result|Actual Result|
|---|---|---|
|Navigate to any page on the website|The navbar is clearly displayed at the top of the page|Works as expected|
 
<details>
 <summary>Images</summary>

<img width="1443" height="651" alt="image" src="https://github.com/user-attachments/assets/bb9b097d-b6cb-4ef6-94ec-b9d2a82667f4" />
<img width="1326" height="519" alt="image" src="https://github.com/user-attachments/assets/a613c922-27cc-43e8-a33d-2c1d7d762747" />
<img width="1287" height="483" alt="image" src="https://github.com/user-attachments/assets/a98e133c-7d8d-4317-b36b-671956a1e1a9" />
<img width="1379" height="538" alt="image" src="https://github.com/user-attachments/assets/ece12838-b0a9-43f7-9cb8-ef809268ed17" />

</details>


11. As a logged-out user, I can see log in and sign up options so that I can log in or sign up

|Test|Expected Result|Actual Result|
|---|---|---|
|Navigate to the main page and ensure you are logged out. If logged in, click on the sign out button in the navbar|Redirects to the landing page amd displays option to sign in or sign up|Works as expected|

<details>
 <summary>Images</summary>

<img width="1312" height="242" alt="image" src="https://github.com/user-attachments/assets/f0bf205e-c179-4769-9f41-23214305faf5" />

</details>


12. As a user, I can view the details of a single post so that I can read other users comments and know what they think about

|Test|Expected Result|Actual Result|
|---|---|---|
|From the the main post page click on the post image|Redirects to a chosen post page and displays post details with comments below|Works as expected|

<details>
 <summary>Images</summary>

<img width="1394" height="1105" alt="image" src="https://github.com/user-attachments/assets/19f3ec3e-e2c5-4242-b4d2-b2e69bf31a3d" />

</details>


13. As a user, I can view a category for the post so that I know what the image relates to

|Test|Expected Result|Actual Result|
|---|---|---|
|From the the main post page look at a post|Once the post has been created by the user, a category is displayed within each post|Works as expected|

<details>
 <summary>Images</summary>

<img width="844" height="952" alt="image" src="https://github.com/user-attachments/assets/2f1d5518-6a75-496b-a2ef-739c933b18bf" />

</details>


14. As a user, I can add comments to a post so that I can share my thoughts about a post

|Test|Expected Result|Actual Result|
|---|---|---|
|From the the main post page click on the post image, it will redirect to the post details page, under the image the user can write their comment and hit add|Adds the comment to the post and increments the number of comments by 1|Works as expected|

<details>
 <summary>Images</summary>

<img width="1296" height="1082" alt="image" src="https://github.com/user-attachments/assets/a8b91373-dbf9-465a-bf61-c98a5068d0c5" />
<img width="1246" height="1096" alt="image" src="https://github.com/user-attachments/assets/87a79982-ef0f-4370-bec6-cababa657b68" />

</details>


15. As a user, I can see when comments were created, so I know how old a comment is

|Test|Expected Result|Actual Result|
|---|---|---|
|Click on a post image to navigate to the post details page|All comments with the creation date are displayed under the post|Works as expected|

<details>
 <summary>Images</summary>

<img width="269" height="197" alt="image" src="https://github.com/user-attachments/assets/c3c44eab-946e-4da5-8d81-e4b0f75cf334" />

</details>


16. As a user, I can edit my comment so that I can update it

|Test|Expected Result|Actual Result|
|---|---|---|
|Navigate to a comment you made and click the dropddown menu button and then click the edit comment button, change the content of the comment and click save|The users comment will be updated|Works as expected|

<details>
 <summary>Images</summary>

<img width="963" height="442" alt="image" src="https://github.com/user-attachments/assets/a236bb6d-90cd-4999-be0f-92ef08e64e95" />
<img width="786" height="337" alt="image" src="https://github.com/user-attachments/assets/5a6bf3f4-3ba2-4ea9-ab9c-bb0ea1141eef" />
<img width="888" height="411" alt="image" src="https://github.com/user-attachments/assets/5cb93ca3-04ed-4061-aebf-db601b859265" />

</details>


17. As a user, I can delete my comment from the post

|Test|Expected Result|Actual Result|
|---|---|---|
|Navigate to a comment you made and click the dropddown menu button and then click the delete comment button, change the content of the comment and click save|The users comment will be deleted|Works as expected|

<details>
 <summary>Images</summary>

<img width="813" height="360" alt="image" src="https://github.com/user-attachments/assets/529ec420-5a0a-4ff3-aba1-24a94027d970" />
<img width="832" height="288" alt="image" src="https://github.com/user-attachments/assets/93a0d38f-243a-42f5-96f3-f592186401bd" />


</details>


18. As a user, I can edit my post title and description so that I can make corrections or update my post after it was created

|Test|Expected Result|Actual Result|
|---|---|---|
|The user navigates to a post they made, they can click the dropdown menu button on the post and click the edit post button|The users will be prompted to edit the title, image, description or category and once done it will be updated on the website|Works as expected|

<details>
 <summary>Images</summary>

<img width="1628" height="1026" alt="image" src="https://github.com/user-attachments/assets/17ab08c7-1291-4840-aa51-82ee457b6ec1" />
<img width="1389" height="664" alt="image" src="https://github.com/user-attachments/assets/10749236-e05e-45a1-81c3-d4e321d7baea" />
<img width="1377" height="1094" alt="image" src="https://github.com/user-attachments/assets/2e20556e-3440-49f7-a300-70a9f00f0c50" />
<img width="1307" height="540" alt="image" src="https://github.com/user-attachments/assets/d8c78555-08b7-4b65-a5fb-c3330889f94c" />
<img width="1238" height="943" alt="image" src="https://github.com/user-attachments/assets/8d62e31c-b06b-4c6e-a48c-97b1ec17083c" />

</details>


19. As a user, I can dd my profile picture so that other users can easily identify me

|Test|Expected Result|Actual Result|
|---|---|---|
|The user navigates to the profile page through the navbar or a post that they have made, they can then click the profile dropdown and click the edit profile button the user can then change their profile picture|The users will be able to update their profile picture and once done it will be updated on the website|Works as expected|

<details>
 <summary>Images</summary>

<img width="1287" height="477" alt="image" src="https://github.com/user-attachments/assets/b7541f2a-9964-4350-bb23-08574a809239" />
<img width="1275" height="550" alt="image" src="https://github.com/user-attachments/assets/e52ad4eb-4dc0-44b7-885b-6b9e93ed3c7b" />
<img width="1378" height="546" alt="image" src="https://github.com/user-attachments/assets/d2b11917-a26f-4c67-a7c5-8718ae72d1a1" />
<img width="1350" height="440" alt="image" src="https://github.com/user-attachments/assets/29a65f74-ddff-4bdd-8669-ebb01c5b06eb" />

</details>


20. As a User, I can view my users profile pictures so that I can identify other users

|Test|Expected Result|Actual Result|
|---|---|---|
|On the home page of the website the user can find another users post|The users will be able to see the other users profile picture to identify them|Works as expected|

<details>
 <summary>Images</summary>

<img width="1055" height="466" alt="image" src="https://github.com/user-attachments/assets/cb2e519f-7ab1-4789-a0d1-2febfb6e052e" />

</details>


21. As a user, I can update my picture and bio on my profile so that other users can see up to date information about me

|Test|Expected Result|Actual Result|
|---|---|---|
|The user navigates to their profile page and click on the dropdown menu, the user can then click the edit profile button|The users will be able to change their profile picture and bio, if they do it will be updated so users can see it|Works as expected|

<details>
 <summary>Images</summary>

<img width="1287" height="477" alt="image" src="https://github.com/user-attachments/assets/b7541f2a-9964-4350-bb23-08574a809239" />
<img width="1275" height="550" alt="image" src="https://github.com/user-attachments/assets/e52ad4eb-4dc0-44b7-885b-6b9e93ed3c7b" />
<img width="1378" height="546" alt="image" src="https://github.com/user-attachments/assets/d2b11917-a26f-4c67-a7c5-8718ae72d1a1" />
<img width="1350" height="440" alt="image" src="https://github.com/user-attachments/assets/29a65f74-ddff-4bdd-8669-ebb01c5b06eb" />

</details>


22. As a user, I can change the password to my account so that I can keep it secure

|Test|Expected Result|Actual Result|
|---|---|---|
|The user navigates to their profile page and click on the dropdown menu, the user can then click the edit password button|The users will be able to change their password to keep their profile encrypted|Works as expected|

<details>
 <summary>Images</summary>

<img width="1709" height="569" alt="image" src="https://github.com/user-attachments/assets/401a37e6-eaa4-4ae7-8916-bde6f1dec759" />
<img width="1172" height="511" alt="image" src="https://github.com/user-attachments/assets/433418ee-1c06-43ba-97b3-7694aaeac676" />

</details>


23. As a user, I can view all the posts by a specific user so that I can see their latest activity

|Test|Expected Result|Actual Result|
|---|---|---|
|Click on the user avatar or name|Redirects to the chosen user profile page and displays all their posts within the profile page|Works as expected|

<details>
 <summary>Images</summary>

<img width="1026" height="710" alt="image" src="https://github.com/user-attachments/assets/124a6674-730a-4818-9239-8b79366e66b9" />
<img width="1742" height="1173" alt="image" src="https://github.com/user-attachments/assets/404cd78d-7534-48f0-bbd0-6dedaeb15178" />


</details>


24. As a user, I can view other users profiles with their bios, the number of posts, followers and profiles they follow

|Test|Expected Result|Actual Result|
|---|---|---|
|Click on the user avatar or name|Redirects to the chosen user profile page and displays all their information to see such as the bio, number of followers, number of posts and the number of accounts they follow|Works as expected|

<details>
 <summary>Images</summary>

<img width="1414" height="1136" alt="image" src="https://github.com/user-attachments/assets/da6cca47-95c4-4bed-a478-437d6cdcedbf" />


</details>


25. As a user, I can follow and unfollow other users so that I can get specific user' posts in my feed

|Test|Expected Result|Actual Result|
|---|---|---|
|Click on the 'follow' button within the user profile page or by the username in 'Top Users' menu|Follows the user, increases the 'following' number on current profile and increases the number of followers on followed user's profile|Works as expected|

<details>
 <summary>Images</summary>

<img width="1451" height="532" alt="image" src="https://github.com/user-attachments/assets/ccfe08f8-9d16-41ed-a10b-708c88f3c961" />
<img width="1403" height="611" alt="image" src="https://github.com/user-attachments/assets/92d5a093-91f1-4af3-8ebf-a7d23e9c737d" />


</details>


26. As a user, I can see a list of the most followed profiles

|Test|Expected Result|Actual Result|
|---|---|---|
|Go to the home page of the website|On the left there will be a small menu that displays 3 the most followed profiles|Works as expected|

<details>
 <summary>Images</summary>

<img width="508" height="631" alt="image" src="https://github.com/user-attachments/assets/1818699c-d579-4af7-b1af-26c17788f91c" />


</details>


27. As a user, I can view posts ordered by most recently added so that I am up to date with the newest content

|Test|Expected Result|Actual Result|
|---|---|---|
|Add a new post and navigate to the main posts page|Adds post on top of the other posts and displays a date when it was added|Works as expected|

<details>
 <summary>Images</summary>

<img width="1731" height="1165" alt="image" src="https://github.com/user-attachments/assets/1657c2db-c9ec-427c-91f7-f010411d0b02" />


</details>


28. As a user, I can keep scrolling through the posts so that they are loaded automatically and I don't have to select the next page

|Test|Expected Result|Actual Result|
|---|---|---|
|Navigate to the main posts page and scroll to the bottom of the page|Loads new content and moves the scroll bar. Displays a loading gif before the posts have been loaded|Works as expected|

<details>
 <summary>Images</summary>

<img width="1541" height="1030" alt="image" src="https://github.com/user-attachments/assets/0a145862-9e39-4d07-960d-aa32f371ff69" />


</details>


29. As a user, I can see the posts I liked so that I can find the posts I enjoy the most

|Test|Expected Result|Actual Result|
|---|---|---|
|On the main posts page click on the 'Liked posts' icon/text|Loads all liked posts|Works as expected|

<details>
 <summary>Images</summary>

<img width="1564" height="1168" alt="image" src="https://github.com/user-attachments/assets/53809f59-2d08-4ec2-9f16-739fbe8b2071" />


</details>


30. As a user, I can view posts from users I followed, so I can follow their activity

|Test|Expected Result|Actual Result|
|---|---|---|
|On the main posts page click on the 'Feed' icon/text|Loads all posts from followed users|Works as expected|

<details>
 <summary>Images</summary>

<img width="1452" height="1110" alt="image" src="https://github.com/user-attachments/assets/681bd32d-09ee-4616-b03b-8fbd1b562fa3" />


</details>


31. As a user, I can view posts category tags, so that I choose posts to display that I’m interested in

|Test|Expected Result|Actual Result|
|---|---|---|
|On the main posts page click on the category badge of posts you'd like to view|Loads all posts with the selected category|Works as expected|

<details>
 <summary>Images</summary>

<img width="1548" height="1076" alt="image" src="https://github.com/user-attachments/assets/d01efada-650d-4a1b-9253-ce1aad164d2f" />

</details>


32. As a user, I can search for posts with keywords so that I can find the posts I am interested in

|Test|Expected Result|Actual Result|
|---|---|---|
|On the main posts page click on the search bar and type a phrase|Searches through all posts, users and post categories and diplays ones with the seached keyword either as the username or in the title or category|Works as expected|

<details>
 <summary>Images</summary>

<img width="1427" height="765" alt="image" src="https://github.com/user-attachments/assets/45d8390a-8be9-46d3-a59e-3d344bd4e399" />
<img width="1526" height="823" alt="image" src="https://github.com/user-attachments/assets/f7f05282-eda1-408a-a814-025df456fe4d" />


</details>


33. As the site owner, I want my site to be fully responsive so that user can use it on different devices

|Test|Expected Result|Actual Result|
|---|---|---|
|Change device screen size using chrome dev tools|The web functionality remains the same on various screen sizes|Works as expected|

<details>
 <summary>Images</summary>

<img width="996" height="1251" alt="image" src="https://github.com/user-attachments/assets/f8c69cb5-c120-4ecb-9544-a6d28873a00f" />
<img width="1395" height="1275" alt="image" src="https://github.com/user-attachments/assets/0c921d54-7234-4bc2-b527-80d7111c5d10" />

</details>


34. As a site owner, I want users to see a 404 page when they go to a url that doesnt exist

|Test|Expected Result|Actual Result|
|---|---|---|
|Navigate to a url that does not exist such as https://cl-pp5-pawlio-ba8f8e344581.herokuapp.com/bad-request|Reroutes to a customised 404 page|Works as expected|

<details>
 <summary>Images</summary>

<img width="1599" height="893" alt="image" src="https://github.com/user-attachments/assets/2edc28ea-35d8-4bc1-8840-51fac15574d1" />


</details>


35. As a user, I can view feedback messages so that I know if my comment, profile or post has been updated

|Test|Expected Result|Actual Result|
|---|---|---|
|In the post page comments section click on the dropdown menu and edit icon to edit your existing comment. Make changes to your comment and click 'Update'|Saves the comment, changes time display to 'now' and displays the feedback message to the user|Works as expected|
|In the post page comments section click on the dropdown menu and delete icon to delete your existing comment|Deletes the comment and displays the feedback message in its place|Works as expected|
|In the profile page click on the dropdown menu and edit icon to edit user profile. Make desired changes and click Save|Updates the profile, displays the feedback message and redirects the user to their profile page after a short delay|Works as expected|
|In the profile page click on the dropdown menu and the key icon to change user password. Update the password and click Save|Updates the password, displays the feedback message and redirects the user to their profile page after a short delay|Works as expected|
|Within the post page click on the dropdown menu and delete icon to delete the post|Deletes the post, displays the feedback message and redirects the user to the main posts page|Works as expected|

<details>
 <summary>Images</summary>

<img width="908" height="206" alt="image" src="https://github.com/user-attachments/assets/a82b351f-d615-4c25-ba17-1bbfff6e343c" />
<img width="893" height="177" alt="image" src="https://github.com/user-attachments/assets/b95af48c-c8a8-45fd-bfa8-efb0f8b880f5" />
<img width="1393" height="482" alt="image" src="https://github.com/user-attachments/assets/c1059e76-11ad-4421-9143-a5e3bae1d9ed" />

</details>


## Performing Tests on Different Devices

The website was tested using Google Chrome Developer Tools Toggle Device Toolbar to simulate viewports of different devices.

The website was tested on the following devices:

- ASUS ZenBook (laptop screen)
- Samsung Galaxy Tab A (tablet screen)
- Samsung S7 (mobile screen)

## Brower Compatibility

Testing has been carried out on the following browsers, no issues were found:

- Googe Chrome
- Firefox Browser
- Microsoft Edge

## Bugs

|Bug|Fix|
|---|---|
|On small screens, the hamburger menu would not appear|Updated the logic in the code to correctly check the screen size and then display the hamburger menu icon|
|Users profile would not update when edited|Updated the logic to allow the request to go through to the backend|
|Issue where the comment and profile dropdown menu would not appear|Corrected the drf_api.serializer in the backend to see if the user correct user is logged in|

## Config

1. Go to the GitHub repository
2. Click on Fork button in top right corner
3. You will then have a copy of the repository in your own GitHub account.

## Making a local clone

1. Go to the GitHub repository
2. Locate the Code button above the list of files and click it
3. Highlight the "HTTPS" button to clone with HTTPS and copy the link
4. Open commandline interface on your computer
5. Change the current working directory to the one where you want the cloned directory
6. Type git clone and paste the URL from the clipboard
7. Press Enter to create your local clone

## Credits

404 Image was taken from [here](https://nicepage.com/sd/758347/404-page-with-cat-website-design) and edited using [remove.bg](https://www.remove.bg/)
The default Profile picture and post image was taken from the [Moments](https://learn.codeinstitute.net/dashboard) project by Code institute

### Code

This project was inspired by the [Moments](https://learn.codeinstitute.net/dashboard) social media platform which was a final walk-through project with Code Institute. I have adjusted the project and added additonal features, such as filtering of posts based on their category. The Pawlio application can be expanded on and include the potential improvements mentioned in the 'Future features / improvements' section.

Thank you to Aleksandra for help with the file set up and styles

### Acknowledgements

First and foremost, I would like to give a special thank you to my wonderful Fiance Jasmine, whose support has made managing a full-time job, Open University, and Code Institute submissions possible.

Special thank you also to Mo Shami, My mentors, whose help and guidance has been truly invaluable to me.

The live link to the repository is here : https://github.com/LewisBull2303/CL_PP5_Pawlio
