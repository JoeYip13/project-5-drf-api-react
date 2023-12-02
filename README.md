# Ultimate M Car

## Introduction

"Ultimate M Car" is a dedicated car blog website that fosters a vibrant community of users passionate about BMW's M power division. The platform encourages users to actively participate by creating, reading, and sharing content related to BMW M cars. To enhance the user experience, individuals can easily register for a free account, unlocking the ability to create blog posts and events. Additionally, users can connect with like-minded enthusiasts by following others, updating their profiles, and managing their content through editing and deletion capabilities. The platform facilitates engagement through features like liking and commenting on user blog posts, as well as providing the option to review event posts. "Ultimate M Car" aims to be the go-to destination for BMW M enthusiasts to connect, share, and celebrate their passion for these high-performance vehicles.

<figure align="center">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701018274/ultimate-m-car/README/am_i_responsive_rlxvbx.png"
        alt="Ultimate M Car website through Am i responsive screenshot">
        <figcaption>Ultimate M Car Am I Responsive</figcaption>
</figure>

[Click Here To Visit Live Site](https://ultimate-m-car-75d78b230442.herokuapp.com//)

## Table Of Contents
- [Ultimate M Car](#ultimate-m-car)
  - [Introduction](#introduction)
  - [Table Of Contents](#table-of-contents)
  - [UX Design](#ux-design)
  - [User Stories](#user-stories)
    - [Navigation \& Authentication](#navigation--authentication)
    - [Adding \& Liking Posts](#adding--liking-posts)
    - [The Posts Page](#the-posts-page)
    - [The Post Page](#the-post-page)
    - [The Profile Page](#the-profile-page)
    - [Landing Page](#landing-page)
    - [Events Page](#events-page)
  - [Agile Methodology](#agile-methodology)
  - [Wireframes](#wireframes)
  - [Typography](#typography)
  - [Colour Scheme](#colour-scheme)
  - [Reuable Components](#reuable-components)
      - [`Avatar.js`](#avatarjs)
      - [`Asset.js`](#assetjs)
      - [`CustomAlert.js`](#customalertjs)
      - [`MoreDropdown.js`](#moredropdownjs)
      - [`NavBar.js`](#navbarjs)
      - [`NotFound.js`](#notfoundjs)
  - [Features](#features)
    - [Navigation Bar](#navigation-bar)
    - [Feed Page](#feed-page)
    - [Events Page](#events-page-1)
    - [Sign Up Page](#sign-up-page)
    - [Sign In Page](#sign-in-page)
    - [Profile Page](#profile-page)
    - [Add Post Page](#add-post-page)
    - [Add Event Page](#add-event-page)
    - [Like a Post](#like-a-post)
    - [Comment on a Post](#comment-on-a-post)
    - [Popular Profiles](#popular-profiles)
    - [Bookmark a Event](#bookmark-a-event)
    - [Review a Event](#review-a-event)
    - [Search and filter Post](#search-and-filter-post)
    - [404 Page](#404-page)
  - [Technologies Used](#technologies-used)
  - [Testing](#testing)
  - [Deployment and Initial Setup](#deployment-and-initial-setup)
    - [Initial Setup](#initial-setup)
      - [1. Starting a React Project inside the DRF project](#1-starting-a-react-project-inside-the-drf-project)
      - [2. Preparing the Django API for development](#2-preparing-the-django-api-for-development)
      - [3. Updating `settings.py`](#3-updating-settingspy)
      - [4. Preparing React to connect to the Django API](#4-preparing-react-to-connect-to-the-django-api)
      - [5. Deployment of both application](#5-deployment-of-both-application)
  - [Credits](#credits)
  - [Acknowledgements:](#acknowledgements)

---
## UX Design

1. Seamless Onboarding:
Introduce users to the Ultimate M Car community with a simple and engaging onboarding process. Allow them to personalize their profiles, set preferences, and choose their M Car model.

2. Striking Visuals:
Capture the essence of M Cars through visually appealing design. Implement high-quality images, sleek layouts, and an overall aesthetic that mirrors the performance and luxury of M series.

3. User Profiles:
Encourage users to create detailed profiles showcasing their M Cars. Include fields for model, modifications, and a gallery to display their favorite images. This creates a personalized experience and fosters a sense of pride.

4. User-Generated Content:
Make it easy for users to share their M Car stories, pictures, and experiences. Implement a user-friendly post creation interface, allowing them to upload images, write captions, and share technical details.

5. Interactive Comments:
Promote community interaction by enabling users to leave comments on posts. Implement a threaded comment system to facilitate discussions about specific aspects of the showcased M Cars.

6. Likes and Upvotes:
Implement a like/upvote system to let users show appreciation for each other's content. Recognizing and promoting popular posts creates a positive environment and motivates users to share more.

7. M Car Forums:
Create dedicated forums for different M Car models or topics of interest. This segmentation allows users to connect with like-minded individuals who share their passion for specific aspects of M Cars.

8. Events and Meetups:
Facilitate offline connections by featuring M Car events and meetups. Allow users to create and promote their own events, fostering a sense of community beyond the digital realm.

9. User Notifications:
Keep users engaged with personalized notifications for likes, comments, and new posts from their favorite M Car enthusiasts. A well-tailored notification system enhances the feeling of being part of an active community.

10. Responsive Design:
Ensure a seamless experience across devices. A responsive design is crucial for users to engage with the community whether they're on a desktop, tablet, or mobile device.

11. Search and Discovery:
Implement a robust search functionality to help users discover specific M Car models, topics, or users. An intuitive tagging system can aid in categorizing content.

12. Feedback Mechanism:
Encourage users to provide feedback on the platform. Regularly update and enhance features based on user suggestions to show that their opinions matter.

13. Privacy Controls:
Give users control over their privacy settings. Allow them to choose who can view their profiles and posts, providing a comfortable environment for sharing.

14. Gamification:
Incorporate gamification elements, such as badges or leaderboards, to reward active community members. This adds a competitive and fun aspect to the user experience.

15. Continuous Improvement:
Regularly update the platform based on user analytics and feedback. A UX that evolves with user needs ensures long-term engagement and a thriving community.

Ultimate M Car is not just a website; it's a dynamic community where M Car enthusiasts come together to celebrate their passion for high-performance vehicles. Explore, connect, and elevate your M Car experience with the Ultimate M Car platform! 🏎️🚀

[Table of Contents](#table-of-contents)

---

## User Stories
### Navigation & Authentication
- Navigation: As a user I can view a navbar from every page so that I can navigate easily between pages
- Routing: As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh
- Authentication - Sign up: As a user I can create a new account so that I can access all the features for signed up users
- Authentication - Sign in: As a user I can sign in to the app so that I can access functionality for logged in users
- Authentication - Logged in Status: As a user I can tell if I am logged in or not so that I can log in if I need to
- Authentication - Refreshing access tokens: As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised
- Navigation: Conditional rendering - As a logged out user I can see sign in and sign up options so that I can sign in/sign up
- Avatar: As a user I can view user's avatars so that I can easily identify users of the application

### Adding & Liking Posts

- Create posts: As a logged in user I can create posts so that I can share my images with the world!
- View a post: As a user I can view the details of a single post so that I can learn more about it
- Like a post: As a logged in user I can like a post so that I can show my support for the posts that interest me

### The Posts Page

- View most recent posts: As a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content
- As a user, I can search for posts with keywords, so that I can find the posts and user profiles I am most interested in.
- View liked posts: As a logged in user I can view the posts I liked so that I can find the posts I enjoy the most
- View posts of followed users: As a logged in user I can view content filtered by users I follow so that I can keep up to date with what they are posting about
- Infinite scroll: As a user I can keep scrolling through the images on the site, that are loaded for me automatically so that I don't have to click on "next page" etc

### The Post Page
- Post page: As a user I can view the posts page so that I can read the comments about the post
- Edit post: As a post owner I can edit my post title and description so that I can make corrections or update my post after it was created
- Create a comment: As a logged in user I can add comments to a post so that I can share my thoughts about the post
- Comment date: As a user I can see how long ago a comment was made so that I know how old a comment is
- View comments: As a user I can read comments on posts so that I can read what other users think about the posts
- Delete comments: As an owner of a comment I can delete my comment so that I can control removal of my comment from the application
- Edit a comment: As an owner of a comment I can edit my comment so that I can fix or update my existing comment

### The Profile Page

- Profile page: As a user I can view other users profiles so that I can see their posts and learn more about them
- Most followed profiles: As a user I can see a list of the most followed profiles so that I can see which profiles are popular
- User profile - user stats: As a user I can view statistics about a specific user: bio, number of posts, follows and users followed so that I can learn more about them
- Follow/Unfollow a user: As a logged in user I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed
- View all posts by a specific user: As a user I can view all the posts by a specific user so that I can catch up on their latest posts, or decide I want to follow them
- Edit profile: As a logged in user I can edit my profile so that I can change my profile picture and bio
- Update username and password: As a logged in user I can update my username and password so that I can change my display name and keep my profile secure
- Once you have reviewed the User Stories, continue to the next unit

### Landing Page
- As a site user, I can visit the car blog's landing page, so that I can see a visually appealing and well-organized list of car related content with blog posts with clear titles, publication dates, and featured images

### Events Page
- As a registered user I can view all the upcoming events, ordered by closest dates first so that I can discover and access information about upcoming events
- As a registered user I can create and publish an event so that I can efficiently promote and manage gatherings for participants
- As a registered user I can delete an event so that I can efficiently manage my events and remove outdated or cancelled gatherings
- As a registered user I can edit an event details so that I can keep participants informed about any changes or updates to the event.
- As a event participant I can access an interactive map for event location so that I can easily navigate and plan my visit.
- As a registered user I can I want the ability to leave ratings and reviews for events I have attended so that I can share my experiences and help others make informed decisions.
- As a registered user on the events platform. I can bookmark an event so that I can easily track and access them later without searching.
- As a registered user on the events platform. I can leave a reviews for events I have attended so that I can share my experiences and provide valuable feedback to organizers and other participants.

[Table of Contents](#table-of-contents)

---
## Agile Methodology

I used Github issues to create User Stories. Then made a individual Milestone fro each individual feature to store all the User Stories related to that milestone. This agile approach methodology helps track the development of this project. You can find the User Stories [here](https://github.com/JoeYip13/project-5-drf-api-react/milestones)<br>
I created a Kanban board using Github Projects feature to track the flow of work from each milestone. You can find the Kanban board [here](https://github.com/users/JoeYip13/projects/7/views/1?groupedBy%5BcolumnId%5D=Milestone)

---

## Wireframes
I used [Figma](https://www.figma.com/) to create wireframes. This was rough guideline of how I'd like to structure the website. But subject to changes during development stages.
<figure align="center">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701019022/ultimate-m-car/README/wireframes_w4vgzr.png"
        alt="Overview of all wireframes created in Figma">
        <figcaption>Overview of all wireframes created in Figma</figcaption>
</figure>
<figure align="center">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701019843/ultimate-m-car/README/home_page_xk1gmc.png"
        alt="Ultimate M Car Home page">
        <figcaption>Ultimate M Car Home Page</figcaption>
</figure>
<figure align="center">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701019444/ultimate-m-car/README/post_page_lpzp20.png"
        alt="Ultimate M Car Post page">
        <figcaption>Ultimate M Car Post Page</figcaption>
</figure>
<figure align="center">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701019442/ultimate-m-car/README/add_post_page_gb29w9.png"
        alt="Ultimate M Car add post page">
        <figcaption>Ultimate M Car add Post Page</figcaption>
</figure>
<figure align="center">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701019443/ultimate-m-car/README/signup_page_t6cubx.png"
        alt="Ultimate M Car Sign Up page">
        <figcaption>Ultimate M Car Sign Up Page</figcaption>
</figure>
<figure align="center">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701019443/ultimate-m-car/README/signin_page_so5qfh.png"
        alt="Ultimate M Car Sign In page">
        <figcaption>Ultimate M Car Sign In Page</figcaption>
</figure>
<figure align="center">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701019444/ultimate-m-car/README/events_page_q7q9hh.png"
        alt="Ultimate M Car Events page">
        <figcaption>Ultimate M Car Events Page</figcaption>
</figure>
<figure align="center">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701019443/ultimate-m-car/README/add_event_page_tzymnj.png"
        alt="Ultimate M Car Add Event page">
        <figcaption>Ultimate M Car add Event Page</figcaption>
</figure>
<figure align="center">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701019445/ultimate-m-car/README/profile_page_bk1qc5.png"
        alt="Ultimate M Car Profile page">
        <figcaption>Ultimate M Car Profile Page</figcaption>
</figure>

[Table of Contents](#table-of-contents)

---

## Typography
The logo was crafted using the "Sans Racing One" font from Google Fonts, chosen for its distinctive style. For the body text, the font "Arimo" was employed consistently throughout the website, ensuring a clean and readable presentation across various content sections.

<summary>Google Fonts Sans Racing One</summary>
<figure align="center">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1700593396/ultimate-m-car/README/racing_sans_one_hwlvju.png"
        alt="Google Fonts Pair">
    <figcaption>Google Fonts Sans Racing One</figcaption>
</figure>

<summary>Google Fonts Arimo</summary>
<figure align="center">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1700593396/ultimate-m-car/README/Arimo_dnpr8b.png"
        alt="Google Fonts Arimo">
    <figcaption>Google Fonts Arimo</figcaption>
</figure>


---

## Colour Scheme

In selecting colors, my goal was to elevate the car posts to resemble an art gallery ambiance. To achieve this, I opted for a black main background color across the website, accompanied by white. Additionally, a contrasting touch of blue was introduced, while a subtle hint of red was strategically applied. The red accent serves as a focal point, particularly noticeable in heart and bookmark icons, adding visual interest and engagement cues.
<figure align="center">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1700511050/ultimate-m-car/README/umc_coolors_palette_sy7fkc.png"
        alt="Ultimate M Car scheme">
    <figcaption>Color Space</figcaption>
</figure>

[Table of Contents](#table-of-contents)

---

## Reuable Components

A number of reusable React components were created with the intention of reducing code duplication.

#### `Avatar.js`

The Avatar Component in the Ultimate M Car project is a reusable UI element designed to display user profile pictures or any other relevant images in a visually appealing and consistent manner. This component is utilized across various sections of the project, such as NavBar, Posts, Comments, Events, and Reviews.

#### `Asset.js`

The Asset component is used to render the loading spinner utilised throughout the app.

#### `CustomAlert.js`

The Custom Alert component is used in the Sign In Form.

#### `MoreDropdown.js`

The MoreDropdown component is used to handle the Edit and Delete in Posts, Events, Comments, Reviews. This also is used for the Profile Edit Dropdown. Where the user can edit their profile, change username and password. 

#### `NavBar.js`

NavBar component is used in the App.js file which displays the NavBar throughout all the webpages.

#### `NotFound.js`

NotFound component is used to render a Not Found page.

## Features

### Navigation Bar

As a new user, the navigation bar includes links to the Feed page, Events page, Sign Up page, and Sign In page, providing easy access to key sections of the website.
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701021302/ultimate-m-car/README/features/navbar_ahuqce.png" alt="Ultimate M Car navigation bar">
<figcaption>Navigation bar</figcaption>
</figure>
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701021303/ultimate-m-car/README/features/navbar_mobile_szjzoj.png" alt="Ultimate M Car navigation bar mobile view">
<figcaption>Navigation bar Mobile</figcaption>
</figure>

Once a user has logged in, the navigation bar prominently displays links to the Add Post page, Feed page, Events page, Sign Out, as well as the user's profile avatar and username. Additionally, a dropdown arrow is featured next to the username, providing access to further options.
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701021305/ultimate-m-car/README/features/navbar_signedin_wrx4pa.png" alt="Ultimate M Car navigation bar logged in">
<figcaption>Navigation bar logged in</figcaption>
</figure>
The dropdown menu associated with the user's profile avatar provides access to the "Liked" and "Bookmarked" sections. This allows users to conveniently view all the posts they have liked and events they have bookmarked on the platform.
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701021307/ultimate-m-car/README/features/navbar_signedin_dropdown_dnbi7f.png" alt="Ultimate M Car navigation bar logged in dropdown">
<figcaption>Navigation bar logged in dropdown</figcaption>
</figure>
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701021304/ultimate-m-car/README/features/navbar_mobile_signedin_fp5shi.png" alt="Ultimate M Car navigation bar logged in dropdown mobile view">
<figcaption>Navigation bar logged in dropdown mobile view</figcaption>
</figure>

[Table of Contents](#table-of-contents)

---

### Feed Page

The Feed page serves as the default landing page of the website, welcoming users when they first open the URL.
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701023302/ultimate-m-car/README/features/feed_page_rnl3j5.png">
<figcaption>Feed page</figcaption>
</figure>

<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701023302/ultimate-m-car/README/features/feed_page_mobile_bdt4mo.png">
<figcaption>Feed page mobile</figcaption>
</figure>

[Table of Contents](#table-of-contents)

---

### Events Page

The Events page closely resembles the Feed page, with the key distinction being that upon user navigation to the Events page, the "Add Event" feature replaces the "Add Post" option. This alteration allows users to seamlessly contribute and engage with event-related content on the platform.
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701023600/ultimate-m-car/README/features/events_page_irslgv.png">
<figcaption>Event page</figcaption>
</figure>
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701023599/ultimate-m-car/README/features/event_page_mobile_gwgbet.png">
<figcaption>Event page mobile</figcaption>
</figure>

[Table of Contents](#table-of-contents)

---

### Sign Up Page

The Sign Up page comprises a form through which users can submit their registration details.
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701021312/ultimate-m-car/README/features/signup_tyccfh.png">
<figcaption>Sign Up page</figcaption>
</figure>
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701023896/ultimate-m-car/README/features/signup_mobile_zhhfaf.png">
<figcaption>Sign up page mobile</figcaption>
</figure>

[Table of Contents](#table-of-contents)

---

### Sign In Page

The Sign In page includes a form where users can register for an account.
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701021310/ultimate-m-car/README/features/signin_eg141m.png">
<figcaption>Sign In page</figcaption>
</figure>
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701024197/ultimate-m-car/README/features/signin_mobile_pcfzuo.png">
<figcaption>Sign In page mobile</figcaption>
</figure>

[Table of Contents](#table-of-contents)

---

### Profile Page

The profile page showcases the user's profile image, username, post and event counts, as well as the number of followers and users they are following. Additionally, a bio is included to provide further information about the user. Beneath these profile statistics, users can find a comprehensive display of all the posts and events contributed by the user. This layout offers a comprehensive overview of the user's activities and contributions on the platform.
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701021309/ultimate-m-car/README/features/profile_page_gjbmyr.png">
<figcaption>Profile page</figcaption>
</figure>

<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701024481/ultimate-m-car/README/features/profile_page_mobile_snkgic.png">
<figcaption>Profile page mobile</figcaption>
</figure>

[Table of Contents](#table-of-contents)

---

### Add Post Page

The "Add Post" page includes a form allowing logged-in users to generate new posts for publication on the feed page. Each input field within the form is accompanied by placeholder text, providing users with illustrative examples of the input required to successfully create a post. These placeholders serve as helpful guides, ensuring users have a clear understanding of the information expected for an effective post submission.
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701021298/ultimate-m-car/README/features/add_post_abbk0f.png">
<figcaption>Add Post Page</figcaption>
</figure>
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701024967/ultimate-m-car/README/features/add_post_mobile_sf82o6.png">
<figcaption>Add Post Page mobile</figcaption>
</figure>

[Table of Contents](#table-of-contents)

---

### Add Event Page
The "Add Event" page showcases a form designed for logged-in users to generate new events for publication on the events page. Within the form, the event date field includes a placeholder date format, offering users an illustrative example of the required input for a successful event creation. This format serves as a guide to ensure accurate and effective event submissions.
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701021297/ultimate-m-car/README/features/add_event_ryhk9o.png">
<figcaption>Add Event Page</figcaption>
</figure>
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701025310/ultimate-m-car/README/features/add_event_mobile_i0sff4.png">
<figcaption>Add Event Page mobile</figcaption>
</figure>

[Table of Contents](#table-of-contents)

---

### Like a Post
When a logged-in user expresses appreciation for a post by liking it, the "love heart" icon undergoes visual changes. Hovering over the icon alters the outline color, and upon clicking to like the post, the heart icon transitions to a solid color while the like count increments by 1. To undo the like, hovering over the heart icon changes the color from solid red to blue. Unliking the post reverts the icon to its original state, and the count decreases by 1. Users can conveniently access a list of all their liked posts through the profile dropdown menu by clicking on the "Liked" link.
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701026123/ultimate-m-car/README/features/like_post_kbsnts.png">
<figcaption>Like on hover</figcaption>
</figure>
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701026122/ultimate-m-car/README/features/liked_post_pafm7c.png">
<figcaption>Like confirmed</figcaption>
</figure>
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701026433/ultimate-m-car/README/features/unlike_post_iicurs.png">
<figcaption>Unlike on hover</figcaption>
</figure>
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701026128/ultimate-m-car/README/features/all_liked_posts_n6nyh8.png">
<figcaption>View all liked posts</figcaption>
</figure>

[Table of Contents](#table-of-contents)

---

### Comment on a Post
When a logged-in user wishes to comment on a post, they can conveniently access the comment form directly from the main feed page by hovering over the comment icon. The icon's outline will change from a neutral grey to a solid black, providing a clear indication that it is a link or a call to action. Upon clicking, the user will be directed straight to the desired post, where below it, the comment form will be displayed. After submitting the comment, users can view their contribution on the post and have the option to edit or delete the comment using the three dots menu.
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701026949/ultimate-m-car/README/features/comment_hover_yydh8j.png">
<figcaption>Comment on hover</figcaption>
</figure>
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701026948/ultimate-m-car/README/features/comment_post_jwvyik.png">
<figcaption>Comment form</figcaption>
</figure>
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701027850/ultimate-m-car/README/features/comment_on_post_k3flfk.png">
<figcaption>Comment on post</figcaption>
</figure>
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701028018/ultimate-m-car/README/features/comment_edit_ockn9a.png">
<figcaption>Edit comment link</figcaption>
</figure>
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701028020/ultimate-m-car/README/features/comment_edit_submit_q9cvvs.png">
<figcaption>Edit comment</figcaption>
</figure>
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701028281/ultimate-m-car/README/features/comment_successful_kj9h2e.png">
<figcaption>Edit comment submitted</figcaption>
</figure>
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701028416/ultimate-m-car/README/features/comment_delete_z60rs9.png">
<figcaption>Comment delete modal</figcaption>
</figure>

[Table of Contents](#table-of-contents)

---

### Popular Profiles
The widely-used profiles feature is present throughout the entire website, positioned on the right side of all pages on large screens and at the top on smaller screens. Utilizing a filter, this component organizes all users on the site based on their follower count, arranging them from highest to lowest. On larger screens, the top ten profiles are showcased, while on smaller screens, the top four are highlighted.
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701194391/ultimate-m-car/README/features/popular_profiles_kjmo6h.png">
<figcaption>Popular Profiles</figcaption>
</figure>
For users who are not logged in, the profile avatar and username are visible. For logged-in users, in addition to the avatar and username, there is a button allowing them to follow or unfollow the profile. Clicking on each profile avatar provides the option to navigate to the complete profile page of the respective user.
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701194704/ultimate-m-car/README/features/popular_profiles_logged_in_k2z9gr.png">
<figcaption>Popular Profiles Logged in User</figcaption>
</figure>

[Table of Contents](#table-of-contents)

---

### Bookmark a Event
When a logged-in user desires to bookmark an event, the "bookmark" icon undergoes visual transformations for a user-friendly experience. Hovering over the icon changes the outline color, and upon clicking to bookmark the event, the icon transitions to a solid color. Simultaneously, the bookmark count increases by 1. To remove the bookmark, hovering over the icon changes the color from solid red to blue. Unbookmarking the event reverts the icon to its original state, and the count decreases by 1. Users can conveniently access a compiled list of all their bookmarked events through the profile dropdown menu by clicking on the "Bookmarked" link.
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701195951/ultimate-m-car/README/features/bookmark_event_hbrhci.png">
<figcaption>Bookmark on hover</figcaption>
</figure>
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701195951/ultimate-m-car/README/features/bookmarked_fhn3fw.png">
<figcaption>Bookmark confirmed</figcaption>
</figure>
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701195951/ultimate-m-car/README/features/unbookmark_dws6tg.png">
<figcaption>Unbookmark on hover</figcaption>
</figure>
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701196092/ultimate-m-car/README/features/bookmarked_view_ibtx1h.png">
<figcaption>View all Bookmarked events</figcaption>
</figure>

[Table of Contents](#table-of-contents)

---

### Review a Event
When a logged-in user intends to submit a review for an event, the process is streamlined for convenience. By hovering over the review icon on the main event page, the icon's outline transforms from a neutral grey to a solid black, clearly indicating its functionality as a link or call to action. Clicking on the icon directs the user straight to the desired event, revealing the review form below. The form includes a dropdown menu for selecting a star rating out of 5. Upon submission, users can easily review their contribution on the event and retain the option to edit or delete the review through the three dots menu. This user-friendly approach ensures a seamless and efficient review process.
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701196826/ultimate-m-car/README/features/review_hover_lqc7ea.png">
<figcaption>Review on hover</figcaption>
</figure>
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701196649/ultimate-m-car/README/features/review_page_lhx8ix.png">
<figcaption>Review form</figcaption>
</figure>
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701196647/ultimate-m-car/README/features/review_submit_x2jnr6.png">
<figcaption>Review event</figcaption>
</figure>
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701196647/ultimate-m-car/README/features/review_edit_ymyfgz.png">
<figcaption>Edit review link</figcaption>
</figure>
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701196646/ultimate-m-car/README/features/review_edited_kaiomc.png">
<figcaption>Edit review</figcaption>
</figure>
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701196646/ultimate-m-car/README/features/review_success_p9dpey.png">
<figcaption>Edit review submitted</figcaption>
</figure>
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701196647/ultimate-m-car/README/features/review_delete_iacws2.png">
<figcaption>Review delete modal</figcaption>
</figure>

[Table of Contents](#table-of-contents)

---

### Search and filter Post
The search bar on the website functions as a versatile filtering tool for posts, enabling users to refine results based on various criteria. Posts can be filtered by username, title, model, year, BHP (brake horsepower), location, color, and a binary indicator for modifications ("Yes" or "No"). When a user inputs keywords into the search bar, any post containing matches for these criteria will be filtered and displayed, providing a tailored and efficient way to find specific content on the platform.
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701197290/ultimate-m-car/README/features/search_filter_ogyqwy.png">
<figcaption>Search and filter post</figcaption>
</figure>

[Table of Contents](#table-of-contents)

---

### 404 Page

<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701025808/ultimate-m-car/README/features/404_page_m3fl36.png">
<figcaption>404 Page</figcaption>
</figure>
<figure align="center">
<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701025809/ultimate-m-car/README/features/404_page_mobile_dhupad.png">
<figcaption>404 Page mobile</figcaption>
</figure>

[Table of Contents](#table-of-contents)

---

## Technologies Used

- [Github](https://www.github.com) was used to store the code.
- [Codeanywhere](https://codeanywhere.com/) was used to create this site and then push everything to github.
- [React](https://react.dev/) was used to create the frontend user interface.
- [Cloudinary](https://cloudinary.com/) was used to store the images.
- [Figma](https://www.figma.com) was used to create the wireframes.
- [Django](https://www.djangoproject.com/) was the framework that was used.
- [Python](https://en.wikipedia.org/wiki/Python_(programming_language)), django is a python framework.
- [Bootstrap](https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)) was also used to style the site.
- [Codeanywhere](https://codeanywhere.com/) was used to create this site and then push everything to github.
- [ElephantSQL](https://www.elephantsql.com/) was used to store the database.
- [WhiteNoise](https://whitenoise.readthedocs.io/en/stable/) was used to store static files.
- [Pexels](https://www.pexels.com/) was used for profile picture imagery.
- [Google Images](www.google.com/) was used for car post and event images.
- [Tinyjpg](https://tinyjpg.com/) was used to compress large image files.
- [Image Resizer](https://imageresizer.com/) was used to resize large images.
- [Chat Gpt](https://chat.openai.com/) was used to generate blog post content.
- [Google Fonts](https://fonts.google.com/) was used for typography.
- [Color Space](https://mycolor.space/) was used for colors.
- [Favicon](https://www.favicon-generator.org/) was used to create favicon.
- [Font Awesome](https://fontawesome.com/) was used for icons.

[Table of Contents](#table-of-contents)

---

## Testing

Testing can be found [here](https://github.com/JoeYip13/project-5-drf-api-react/blob/testing/TESTING_Front_End.md)

[Table of Contents](#table-of-contents)

---

## Deployment and Initial Setup

This project was created using [Codeanywhere](https://www.codeanywhere.com/).

### Initial Setup

#### 1. Starting a React Project inside the DRF project

I followed Code Institute document found [here](https://code-institute-students.github.io/advfe-unified-workspace/creating-an-app-in-a-workspace/00-creating-an-app-in-a-workspace) for creating a new default React application in an existing DRF workspace.
- 1.1 Open the workspace for DRF project
- 1.2 Open the terminal window and create a new folder called frontend in the root directory

    `mkdir frontend`

- 1.3 Change directory to be inside the frontend folder with the following command

    `cd frontend`

- 1.4 From inside the frontend directory, run the following command to create a new React app and install all the working dependencies used in the Moments application

    `npx create-react-app . --template git+<https://github.com/Code-Institute-Org/cra-template-moments.git> --use-npm`

- 1.5 Enter `y` to confirm and then click enter
- 1.6 Wait for all dependencies to be installed. This installation will take some time, the terminal may appear to freeze for a few minutes. Once it does start to show activity you can ignore any deprecated warnings, these are extremely common and expected with npm installs.
- Enter the following command to remove the .git folder, .gitignore file and README.md from the frontend folder as these already exist within the root directory of your DRF project

    `rm -rf .git .gitignore README.md`

- 1.7 From inside the frontend directory, run the following command to check that the basic React app is running

    `npm start`

- 1.8 Open the browser when the preview has finished building

[Table of Contents](#table-of-contents)

#### 2. Preparing the Django API for development

- 2.1 In your `env.py` file, make the following changes:
- 2.2 Comment out the `DEV` environment variable. This ensures that the application will respond with JSON
- 2.3 Remove the CLIENT_ORIGIN_DEV environment variable, if you have it
- 2.4 Add a new key DEBUG with a value of ‘1’

    `os.environ['DEBUG'] = '1'`

- 2.5 Add a new key ALLOWED_HOST with the value of your development environment URL, wrapped in quotes. note to remove the `https://` from the beginning, and the trailing slash `/` from the end of the development environment URL.
- 2.6 Add a new key CLIENT_ORIGIN with the value of your development environment URL, wrapped in quotes. This string should include the `https://` at the beginning, but the trailing slash `/` should be removed.
- 2.7 If you are working in Codeanywhere you will need to install the urllib3 package to ensure your post images will save to Cloudinary without errors.
- 2.8 Ensure your terminal location is in the root directory, then install urllib3 with the following command

    `pip3 install urllib3==1.26.15`

- 2.9 Add this dependency to your requirements.txt file with the following command

    `pip3 freeze > requirements.txt`

[Table of Contents](#table-of-contents)

#### 3. Updating `settings.py`

Now that we have the two parts of our application within the same workspace, the CORS issues with the original separate projects are no longer a problem. This is because both parts of the project will come from the same base URL. Therefore, we can remove most of the code in the Django project relating to CORS.

- 3.1 In `settings.py` Set DEBUG to the value of the DEBUG environment variable and update ALLOWED_HOSTS to include the ALLOWED_HOST environment variable added to your `env.py` file
- 3.2 In your `settings.py` file remove the line containing the `import re`
- 3.3 Remove all the CORS code, leaving only the CORS_ALLOWED_ORIGINS list. Should look like this:

    `if 'CLIENT_ORIGIN' in os.environ:`<br>
    `CORS_ALLOWED_ORIGINS = [`<br>
        `os.environ.get('CLIENT_ORIGIN')`<br>
    `]`<br>
    `CORS_ALLOW_CREDENTIALS = True`<br>

[Table of Contents](#table-of-contents)

#### 4. Preparing React to connect to the Django API

- 4.1 Open the package.json file in the frontend directory, and at the bottom of the file, add a new key to the JSON object

    `"proxy": "http://localhost:8000/"`

[Table of Contents](#table-of-contents)

#### 5. Deployment of both application

Because the React part of the project contains static files, we need to store all the static files for deployment, using WhiteNoise. WhiteNoise will also store the static files for the Django Admin panel, so you’ll be able to easily access that from the deployed URL as well.

- 5.1 In the terminal: Ensure your terminal location is in the root directory, then install whitenoise with the following command

    `pip3 install whitenoise==6.4.0`

- 5.2 Add this dependency to your requirements.txt file with the following command

    `pip3 freeze > requirements.txt`

- 5.3 Create a new empty folder called staticfiles in the root directly with the following command

    `mkdir staticfiles`

- 5.4 In `settings.py` In the INSTALLED_APPS list, ensure that the ‘cloudinary_storage’ app name is below ‘django.contrib.staticfiles’. This ensures that Cloudinary will not attempt to intervene with staticfiles, and allows whitenoise to become the primary package responsible for static files

- 5.5 In the MIDDLEWARE list, add WhiteNoise below the SecurityMiddleware and above the SessionMiddleware

    `'whitenoise.middleware.WhiteNoiseMiddleware',`

- 5.6 In the TEMPLATES list at the DIRS key, add the following code to the DIRS list, to tell Django and WhiteNoise where to look for Reacts index.html file in deployment

    `'DIRS': [os.path.join(BASE_DIR, 'staticfiles', 'build')],`

- 5.7 In the static files section, add the STATIC_ROOT and WHITENOISE_ROOT variables and values to tell Django and WhiteNoise where to look for the admin static files and Reacts static files during deployment

    `WHITENOISE_ROOT = BASE_DIR / 'staticfiles' / 'build'`

[Table of Contents](#table-of-contents)

---

## Credits

- Code Institute [Django Rest Framework](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+DRF+2021_T1/courseware/f775d54df4da44d18309888b3fe884f7/bc5fbada70104d489aa0363a03d8bda8/) Walkthrough project.
- Code Institute [Moments](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+RA101+2021_T3/courseware/70a8c55db0504bbdb5bcc3bfcf580080/953cd4e5015f483bb05263db3e740e19/) Walkthrough project. I also used this project tutorial to start my website.
- My Tutor from project 1-4 [Rory Patrick Sheridan](https://github.com/Ri-Dearg) For all the project support I needed throughout my learning. His knowledge and advice has been really supportive.
- My Tutor from project 5. - Jubril Akolade
- Code Institute [Tutor Support Team](https://learn.codeinstitute.net/ci_support/diplomainfullstacksoftwarecommoncurriculum/tutor) The amazing tutor support team for their support.
- Code Institute Slack Community
- Corey Shafer on YouTube [Django Tutorials](https://www.youtube.com/watch?v=UmljXZIypDc&list=PL-osiE80TeTtoQCKZ03TU5fNfx2UY6U4p)
- Codemy on YouTube [Create a simple Django Blog](https://www.youtube.com/watch?v=B40bteAMM_M&list=PLCC34OHNcOtr025c1kHSPrnP18YPB-NFi)
- Django Docs [Django Github](https://github.com/django/django)
- Bootstrap 5.1.3 Docs [Bootstrap 5.1.3](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
- React-Bootstrap Docs [React-Bootstrap 4.6](https://react-bootstrap-v4.netlify.app/)

---

## Acknowledgements:

- I like to thank Code Institute for the project walkthroughs.
- My mentor Rory Patrick Sheridan for his exceptional level of support and guidance throughout my learning.
- My mentor Jubril Akolade for his words of wisdom and help and support.
- Additionally, I would like to thank Code Institute Tutor Support Team for their amazing support.
- The Code Institute Slack Community channel. My family for their support through my learning.
- Corey Shafer and Codemy YouTube tutorials.

[Table of Contents](#table-of-contents)

---
