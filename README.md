# Pawlio 

Developer: Lewis Bull

[Visit Live Website here](https://cl-pp5-pawlio-ba8f8e344581.herokuapp.com/)


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
22. As a user, I can change the password to my account so that I can keep it secure]#

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

GET COLOR PALETTE IMAGE HERE

## Font

Google fonts were used on the website. Iter was used as my main font with sans serif as the backup font. Inter was used throughout the site to ensure high legibility of the content. 

## WireFrames

WIREFRAME IMAGES HERE

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
- Favicon.io
- Cloudinary

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
- DropdownMenu – A reusable component that renders a dropdown menu, allowing users to manage their content. It provides options to edit or delete their own posts and comments, update profile details, or change their password.
- FeedbackMsg – This component displays user feedback messages triggered by actions such as editing or deleting comments, removing posts, or updating profile information or passwords.
- Landing– A dedicated component for the landing page shown to new or unauthenticated users. It includes navigation links for signing up and logging in, alongside the app’s navbar.
- LikeFeedAddPost – A versatile component featuring three icons: one to add a new post, one to view liked posts, and another to show posts from followed profiles. It appears on multiple pages within the app.
- NavBar – A reusable navigation bar that adapts based on the user's login status. Logged-in users see links to the main feed and their avatar, while logged-out users see links to log in or sign up. This component is consistently used across all pages.
- PageNotFound – A specific component that displays a 404 error graphic and a button to return to the main menu when a user navigates to a non-existent URL.
- PasswordCriteria – A reusable component that displays password requirements on hover or focus. It is used both during sign-up and when changing the user’s password in the profile settings.
- PopularProfiles – A reusable component that showcases the top three most-followed profiles in the app. It displays the user's avatar, name, and a follow/unfollow button (hidden on medium-sized screens). This component is commonly used alongside <LikeFeedAddPost /> and category badges on relevant pages.

# Back-End API

## Django REST Framework

The API for this application was built with the Django REST Framework. The repository with a ReadMe file for the Backend can be found [here](http://github.com/LewisBull2303/Pawlio_drf_api)

## Features

### Landing Page:
- The main body contains an explanation of the app
- Includes navbar, main body and footer
- Contains directs links to the login and sign up page

### Logo and Navigation Bar
- Remains across all pages of the website
- The Navbar has 2 different variations
  - New or not logged in users, will see the home icon, sign up icon and log in icon
  - Logged in users will see the home icon, the sign out button and their avatar profile picture
- The navbar is fully responsive and changes to a hamburger menu on smaller screen sizes

### Footer
- A footer is displayed at the bottom of the landing page
- Contains links to social media and github pages
- Contains copyright info

### Sign Up Form
- New users can create an account
- THe user must provide a username that is less than 20 characters, a password and a password confirmation
- The password must meet the criteria which user can see when they hover over the password criteria button
- User cannot register if the name is already in use
- Once registered the user is taken to the login page to log in

### Login Form
- Returning users are able to use their credentials to login
- The user muist have a valid account in the system
- Both username and password are needed to login
- Once logged in the user is taken to the main home page
- Warning messages are displayed when incorrect input has been put in

### Post Create/Update Form
- Contains the image, title, category and descriptions
- Description field is option
- Allows users to share their pictures with others
- Allow users to categorise their post to make it easy to be found by other users

### Main Home Page
- Main home page is diplayed for all logged in users
- Contains 3 small menus
  - Add post, likes and feed buttons
  - Most followed users
  - Post category badges
- Without any search filters all posts are displayed
- Display all posts that are ordered by the most recent one

### Post Page
- Contains details of a single post, with the image title, description and category tag
- Contains number of likes and comments the post has
- Contains like icon to allow user to like the post
- Features comment section below the post

#### Comments
- Enable users to share their opinion on a specific post
- Display passed time since adding the post
- Users have an option to update or delete the comment

### Likes
- Allow users to express their interest in the post
- Like icons are red if user likes the post
- User cannot like their own post
- Allow user to search to liked posts only when click on the feed option in the small menu

### Profile Page
- Contains information about the user
- Displays info how many posts and followers a user has and how many users they are following
- Display profile information
- Contains a dropdwon menu to edit the profile and change profile password

### Profile Picture
- Allow users to change their default avatar to their own custom picture
- Displayed in the navbar at the top of the post and in the main home page and the users comments
- Displayed within Most followed users menu

### Password Change Form
- Allow users to change their password
- Contains password criteria visible on hover/tap of view password criteria button

### Infinite Scroll
- Allows users to scroll through the content without having to jump to a new page or previous page
- User for the posts and comments
- Improves general user experience and user engagement
- Displated the loading gif before loading

### Follow/Unfollow
- Users are able to follow/unfollow profiles that they like

### Add Liked Feed Menu
- Allow users to create a post
- Allow users to view only post they liked
- Allow users to view only posts created by users they follow

#### Top Users Menu
- Displayed the 10 most followed users
- Contains follow buttons next to username which allow following users
- Featured on the majority of pages

### Category Badges
- Allow the user to tag a post
- Allow other users to find content they are most interested in

### Search Bar
- By typing a phrase in the search bar users can find a specific post or a user they are looking for
- Allows to search through post title, users or post category
- Allow users to search through liked posts only or post by users followed
- User can click on the eraser icon to clear the search content

### 404 Page
- Displays if the user loads a page with a url that does not exist
- Contains a button to redirect users to the main page


