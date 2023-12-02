# Ultimate M Car API

## Introduction

Welcome to the backend of Ultimate M Car, a Django Rest Framework-based project for managing posts, comments, likes, events, bookmarked events, review events and user profiles.

<figure align="center">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701511519/ultimate-m-car/README/backend/welcome_zgbqpr.png"
        alt="Welcome Ultimate M Car Website">
    <figcaption>Welcome to the backend of Ultimate M Car</figcaption>
</figure>

## Table Of Contents

- [Ultimate M Car API](#ultimate-m-car-api)
  - [Introduction](#introduction)
  - [Table Of Contents](#table-of-contents)
  - [Database Diagram](#database-diagram)
  - [API Endpopints](#api-endpopints)
    - [Posts](#posts)
    - [Comments](#comments)
    - [Likes](#likes)
    - [Events](#events)
    - [Bookmark Events](#bookmark-events)
    - [Review Events](#review-events)
    - [Profiles](#profiles)
    - [Followers](#followers)
  - [Data Models](#data-models)
    - [Posts Data Model](#posts-data-model)
    - [Comments Data Model](#comments-data-model)
    - [Likes Data Model](#likes-data-model)
    - [Events Data Model](#events-data-model)
    - [Reviews Data Model](#reviews-data-model)
    - [Bookmarks Data Model](#bookmarks-data-model)
    - [Profiles Data Model](#profiles-data-model)
    - [Followers Data Model](#followers-data-model)
  - [Technologies Used](#technologies-used)
  - [Testing](#testing)
  - [Deployment and Initial Setup](#deployment-and-initial-setup)
    - [Initial Setup](#initial-setup)
      - [1.Creating Respository on Github](#1creating-respository-on-github)
      - [2. Register with Cloudinary](#2-register-with-cloudinary)
      - [3. Installing Django and configure project to use Cloudinary](#3-installing-django-and-configure-project-to-use-cloudinary)
      - [4. Prepare our environment and settings.py file](#4-prepare-our-environment-and-settingspy-file)
      - [5. Installing Django Rest Framework](#5-installing-django-rest-framework)
      - [6. Installing Django Rest Auth](#6-installing-django-rest-auth)
      - [7. Create a database On ElephantSQL](#7-create-a-database-on-elephantsql)
      - [8. Creating app on Heroku](#8-creating-app-on-heroku)
      - [9. Attach the Database](#9-attach-the-database)
      - [10. Connect ElephantSQL database to project](#10-connect-elephantsql-database-to-project)
      - [11. Preparing for deployement to Heroku](#11-preparing-for-deployement-to-heroku)
      - [12. Deploying to Heroku](#12-deploying-to-heroku)

---

## Database Diagram

Database diagram created using LucidCharts
<figure align="center">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701503514/ultimate-m-car/README/database_schema_ikkhq3.png"
        alt="Database diagram for the Ultimate M Car Website">
    <figcaption>Database Diagram</figcaption>
</figure>

---

## API Endpopints

### Posts

- GET /api/posts/: Retrieve all posts.
- POST /api/posts/create: Create a new post.
- GET /api/posts/<post_id>/: Retrieve a specific post.
- PUT /api/posts/<post_id>/: Update a specific post.
- DELETE /api/posts/<post_id>/: Delete a specific post.

<details>
<summary>Posts API</summary>
<figure>
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701503588/ultimate-m-car/README/backend/posts/post-list-view_tx67k3.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701503589/ultimate-m-car/README/backend/posts/post-list-view-post_ut2rrv.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701503587/ultimate-m-car/README/backend/posts/post-detail-view-post-pk_pxbe0i.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701503588/ultimate-m-car/README/backend/posts/post-detail-view-post-pk-put_blmjoi.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701503587/ultimate-m-car/README/backend/posts/post-detail-view-post-pk-delete_hxj5ba.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701503588/ultimate-m-car/README/backend/posts/post-detail-view-post-pk-deleted_zpzkma.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701503590/ultimate-m-car/README/backend/posts/posts_fxbfgr.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701503589/ultimate-m-car/README/backend/posts/posts-pk_y65zdn.png"
        alt="Ultimate M Car API">
        <figcaption>Posts API</figcaption>
</figure>
</details>

[Table of Contents](#table-of-contents)

### Comments

- GET /api/comments/: Retrieve all comments.
- POST /api/comments/: Create a new comment.
- GET /api/comments/<comment_id>/: Retrieve a specific comment.
- PUT /api/comments/<comment_id>/: Update a specific comment.
- DELETE /api/comments/<comment_id>/: Delete a specific comment.

<details>
<summary>Comments API</summary>
<figure>
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504322/ultimate-m-car/README/backend/comments/comment-list-view_qfdiey.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504322/ultimate-m-car/README/backend/comments/comment-list-view-post_z4v7zz.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504321/ultimate-m-car/README/backend/comments/comment-detail-view-pk_txt4ox.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504321/ultimate-m-car/README/backend/comments/comment-detail-view-pk-put_dd3clg.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504320/ultimate-m-car/README/backend/comments/comment-detail-view-pk-delete_ugfzh1.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504324/ultimate-m-car/README/backend/comments/comments_lsewmx.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504323/ultimate-m-car/README/backend/comments/comments-pk_xlsvjq.png"
        alt="Ultimate M Car API">
        <figcaption>Comments API</figcaption>
</figure>
</details>

[Table of Contents](#table-of-contents)

### Likes

- POST /api/likes/: Like a post.
- DELETE /api/likes/<like_id>/: Unlike a post.

<details>
<summary>Likes API</summary>
<figure>
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504516/ultimate-m-car/README/backend/likes/likes-list-view_wp05xu.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504517/ultimate-m-car/README/backend/likes/likes-list-view-post_ybgqby.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504514/ultimate-m-car/README/backend/likes/likes-detail-view-pk_e7kyjn.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504516/ultimate-m-car/README/backend/likes/likes-detail-view-pk-delete_wqpn2p.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504515/ultimate-m-car/README/backend/likes/likes_vmamtn.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504518/ultimate-m-car/README/backend/likes/likes-pk_ahqyg3.png"
        alt="Ultimate M Car API">
        <figcaption>Likes API</figcaption>
</figure>
</details>

[Table of Contents](#table-of-contents)

### Events

- GET /api/events/: Retrieve all events.
- POST /api/events/: Create a new event.
- GET /api/events/<events_id>/: Retrieve a specific event.
- PUT /api/events/<events_id>/: Update a specific event.
- DELETE /api/events/<events_id>/: Delete a specific event.

<details>
<summary>Events API</summary>
<figure>
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504584/ultimate-m-car/README/backend/events/events-list-view_i3gid0.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504585/ultimate-m-car/README/backend/events/events-list-view-create_nexh4h.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504580/ultimate-m-car/README/backend/events/events-detail-view-create_a6yki0.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504583/ultimate-m-car/README/backend/events/events-detail-view-put_yqwup5.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504581/ultimate-m-car/README/backend/events/events-detail-view-delete_pamyjk.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504582/ultimate-m-car/README/backend/events/events_n2gfap.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504583/ultimate-m-car/README/backend/events/events-id_fap0ae.png"
        alt="Ultimate M Car API">
        <figcaption>Events API</figcaption>
</figure>
</details>

[Table of Contents](#table-of-contents)

### Bookmark Events

- POST /api/bookmarks/: Bookmark an event.
- DELETE /api/bookmarks/<bookmarks_id>/: Remove a bookmark from an event.

<details>
<summary>Bookmarks API</summary>
<figure>
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504718/ultimate-m-car/README/backend/bookmarks/bookmarks-list-view_dq6soi.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504716/ultimate-m-car/README/backend/bookmarks/bookmarks-detail-view-pk_bxrhnb.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504717/ultimate-m-car/README/backend/bookmarks/bookmarks-detail-view-pk-delete_swd3xv.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504835/ultimate-m-car/README/backend/bookmarks/bookmarks_ltjkfs.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504837/ultimate-m-car/README/backend/bookmarks/bookmarks-pk_yyes0z.png"
        alt="Ultimate M Car API">
        <figcaption>Bookmarks API</figcaption>
</figure>
</details>

[Table of Contents](#table-of-contents)

### Review Events

- POST /api/reviews/: Submit a review for an event.
- GET /api/reviews/<reviews_id>/: Retrieve a specific review.
- PUT /api/reviews/<reviews_id>/: Update a specific review.
- DELETE /api/reviews/<reviews_id>/: Delete a specific review.

<details>
<summary>Reviews API</summary>
<figure>
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504881/ultimate-m-car/README/backend/reviews/reviews-list-view_tjupjo.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504880/ultimate-m-car/README/backend/reviews/reviews-list-view-post-again_lh1fim.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504879/ultimate-m-car/README/backend/reviews/reviews-detail-view-pk-put_nwa4js.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504877/ultimate-m-car/README/backend/reviews/reviews-detail-view-pk-delete_xbugdb.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504926/ultimate-m-car/README/backend/reviews/reviews_gha64j.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504928/ultimate-m-car/README/backend/reviews/reviews-pk_xdwyyp.png"
        alt="Ultimate M Car API">
        <figcaption>Reviews API</figcaption>
</figure>
</details>

[Table of Contents](#table-of-contents)

### Profiles

- GET /api/profiles/: Retrieve user profiles.
- GET /api/profiles/<profiles_id>/: Retrieve a specific user profile.
- PUT /api/profiles/<profiles_id>/: Update a specific user profile.

<details>
<summary>Profiles API</summary>
<figure>
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701505011/ultimate-m-car/README/backend/profiles/profiles-list-view_ueomxh.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701505009/ultimate-m-car/README/backend/profiles/profiles-list-detailview_kidaxh.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701505151/ultimate-m-car/README/backend/profiles/profiles-detail-view-put_iypivs.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701505013/ultimate-m-car/README/backend/profiles/profiles_pwmsml.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701505010/ultimate-m-car/README/backend/profiles/profiles-pk_aptece.png"
        alt="Ultimate M Car API">
        <figcaption>Profiles API</figcaption>
</figure>
</details>

[Table of Contents](#table-of-contents)

### Followers

- GET /api/followers/: Retrieve user profiles.
- GET /api/followers/<followers_id>/: Retrieve a specific user profile.
- PUT /api/followers/<followers_id>/: Update a specific user profile.

<details>
<summary>Followers API</summary>
<figure>
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701505213/ultimate-m-car/README/backend/followers/followers-list-view_av5xo6.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701505210/ultimate-m-car/README/backend/followers/followed_d6rso0.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701505212/ultimate-m-car/README/backend/followers/followed-delete_ibldpc.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701505259/ultimate-m-car/README/backend/followers/followers_knnacd.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701505261/ultimate-m-car/README/backend/followers/followers-pk_nyj8yq.png"
        alt="Ultimate M Car API">
        <figcaption>Followers API</figcaption>
</figure>
</details>

[Table of Contents](#table-of-contents)

---

## Data Models

### Posts Data Model

Posts Data Modal takes the following fields

- owner
- created_at
- updated_at
- title
- content
- model
- year
- bhp (Brake Horsepower)
- location
- is_modified
- colour

In addition to the fields generated in the Posts model through the serializer, I have included the following attributes in the JSON data:

- is_owner
- profile_id
- profile_image
- like_id
- likes_count
- comments_count

I've established a sorting mechanism for the posts list, utilizing the parameters:

- likes_count
- comments_count
- likes_created_at
A search feature has been implemented, allowing users to search the entire posts list based on the post owner or various post attributes such as title, model, year, bhp, location, is_modified, and colour.

[Table of Contents](#table-of-contents)

### Comments Data Model

Comments Data Modal takes the following fields

- owner
- post
- created_at
- updated_at
- content

In addition to the fields generated in the Comments model through the serializer, I have included the following attributes in the JSON data:

- is_owner
- profile_id
- profile_image
- like_id
- likes_count
- comments_count

[Table of Contents](#table-of-contents)

### Likes Data Model

Likes Data Modal takes the following fields

- owner
- post
- created_at

Upon user login, a form becomes visible in a form of a Heart Icon, allowing them to create a new like. The user can choose the post they wish to like, establishing a connection between the like and the selected post.

If a user attempts to like the same post twice, an error message is displayed, notifying them that they have already liked the selected post. The duplicate like is prevented from being created. Similarly, if a user tries to like a post they created, an error message informs them that liking their own post is not allowed, and the like is not created.

<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701507238/ultimate-m-car/README/backend/likes/dublicate-error_wl3o5h.png"
        alt="Ultimate M Car API">

After logging in, when a user examines the details of a like they created, additional functionality for deleting the like becomes available.

[Table of Contents](#table-of-contents)

### Events Data Model

Events Data Modal takes the following fields

- owner
- created_at
- updated_at
- title
- description
- location
- event_date
- event_time

In addition to the fields generated in the Events model through the serializer, I have included the following attributes in the JSON data:

- is_owner
- profile_id
- profile_image
- bookmark_id
- bookmarks_count
- reviews_count

I've implemented a search function that enables users to search the entire events list based on the event owner, title, event date, and location. Additionally, I've configured ordering for the events list and selected the following criteria for sorting the events:

- reviews_count
- bookmarks_count
- bookmarks_created_at

[Table of Contents](#table-of-contents)

### Reviews Data Model

Reviews Data Modal takes the following fields

- owner
- event
- created_at
- updated_at
- rating
- review

In addition to the fields generated in the Reviews model through the serializer, I have included the following attributes in the JSON data:

- is_owner
- profile_id
- profile_image
- created_at
- updated_at

Upon user login, a form becomes visible for creating a new review. The user can select the event they wish to review, and to successfully post the review, they must enter review text and select a rating. The rating is handled in the front end of the application.

If a user attempts to review the same event twice, an error message is displayed, indicating that they have already reviewed the selected event. The system prevents the creation of duplicate reviews. Similarly, if a user tries to review their own event, they receive an error message stating that reviewing their own event is not allowed, and the review is not created.

Once logged in, if a user examines the details of a review they created, additional functionality for editing and deleting becomes available. A pre-filled form is provided for editing the comment, and a delete button is available to remove the comment from the API.

<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504880/ultimate-m-car/README/backend/reviews/reviews-list-view-post-again_lh1fim.png"
        alt="Ultimate M Car API">

[Table of Contents](#table-of-contents)

### Bookmarks Data Model

Bookmarks Data Modal takes the following fields

- owner
- event
- created_at

Upon user login, a form becomes visible in a form of a Bookmark Icon, allowing them to create a new Bookmark. The user can choose the event they wish to bookmark, establishing a connection between the bookmark and the selected event.

If a user attempts to bookmark the same event twice, an error message is displayed, notifying them that they have already bookmarked the selected event. The duplicate bookmark is prevented from being created. Similarly, if a user tries to bookmark a event they created, an error message informs them that bookmarking their own event is not allowed, and the bookmark is not created.

<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701508164/ultimate-m-car/README/backend/bookmarks/bookmarks-error_umgmfc.png"
        alt="Ultimate M Car API">

[Table of Contents](#table-of-contents)

### Profiles Data Model

Profiles Data Modal takes the following fields

- owner
- created_at
- updated_at
- name
- content
- image

In addition to the fields generated in the Profiles model through the serializer, I have included the following attributes in the JSON data:

- is_owner
- following_id
- posts_count
- events_count
- followers_count
- following_count

Upon user login, when the user accesses the details of their own profile, additional Edit and Delete functionality becomes accessible. A pre-filled form is provided for editing the fields of the profile model, and a delete button is available to remove the profile from the API.

[Table of Contents](#table-of-contents)

### Followers Data Model

Followers Data Modal takes the following fields

- owner
- followed
- created_at
In addition to the fields generated in the Followers model through the serializer, I have included the following attributes in the JSON data:

- followed_name

Upon user login, a form becomes visible for creating a new follower post. The user can select the profile they wish to follow, establishing a connection between the follower post and the chosen user profile.

If a user attempts to follow the same profile twice, they receive an error message indicating that they are already following the selected profile. The system prevents the creation of a duplicate follow post.

<img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701509110/ultimate-m-car/README/backend/followers/followers-error_zxg30x.png"
        alt="Ultimate M Car API">

After logging in, if the user examines the details of a single follower post they created, additional functionality for deleting the post becomes available.

[Table of Contents](#table-of-contents)

---

## Technologies Used

- [Github](https://www.github.com) was used to store the code.
- [Codeanywhere](https://codeanywhere.com/) was used to create this site and then push everything to github.
- [Django](https://www.djangoproject.com/) was the framework that was used.
- [Django Rest Framework](https://www.django-rest-framework.org/) building the backend Web API.
- [Django Rest Framework SimpleJWT](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/) - Simple JWT provides a JSON Web Token authentication backend for the Django REST Framework.
- [Django Filter](https://django-filter.readthedocs.io/en/stable/) - Django-filter is a generic, reusable application to alleviate writing some of the more mundane bits of view code.
- [Python](https://en.wikipedia.org/wiki/Python_(programming_language)), django is a python framework.
- [Cloudinary](https://cloudinary.com/) was used to store the images.
- [dj-database-url](https://pypi.org/project/dj-database-url/0.5.0/) - This simple Django utility allows you to utilize the 12factor inspired DATABASE_URL environment variable to configure your Django application.
- [dj-rest-auth](https://pypi.org/project/dj-rest-auth/) - Drop-in API endpoints for handling authentication securely in Django Rest Framework.
- [django-allauth](https://docs.allauth.org/en/latest/) - Integrated set of Django applications addressing authentication, registration, account management as well as 3rd party (social) account authentication.
- [gunicorn](https://pypi.org/project/gunicorn/) - unicorn ‘Green Unicorn’ is a Python WSGI HTTP Server for UNIX.
- [Pillow](https://pypi.org/project/Pillow/8.2.0/) - The Python Imaging Library adds image processing capabilities to your Python interpreter.
- [psycopg2](https://pypi.org/project/psycopg2/) - Psycopg is the most popular PostgreSQL database adapter for the Python programming language.
- [PyJWT](https://pypi.org/project/PyJWT/) - A Python implementation of RFC 7519.
- [python3-openid](https://pypi.org/project/python3-openid/) - OpenID support for modern servers and consumers.
- [pytz](https://pypi.org/project/pytz/) - This is a set of Python packages to support use of the OpenID decentralized identity system in your application, update to Python 3
- [sqlparse](https://pypi.org/project/sqlparse/) - sqlparse is a non-validating SQL parser for Python.
- [whitenoise](https://whitenoise.readthedocs.io/en/latest/django.html) - Radically simplified static file serving for Python web apps


[Table of Contents](#table-of-contents)

---

## Testing

Testing of the Backend can be found [here](https://github.com/JoeYip13/project-5-drf-api-react/blob/main/TESTING_Back_End.md)

---

## Deployment and Initial Setup
This project was created using [Codeanywhere](https://www.codeanywhere.com/).

### Initial Setup
#### 1.Creating Respository on Github

- 1.1 First make sure you are signed into [Github](https://github.com/) and go to code institutes template, which can be found [here](https://github.com/Code-Institute-Org/ci-full-template).
- 1.2 Then click on **use this template** and select **Create a new repository** from the drop down. Enter the name for the repository and click **Create repository from template**.
- 1.3 Once the repository was created, I clicked the purple **Codeanywhere** button to create a workspace in Codeanywhere so that I could write the code for the site.

#### 2. Register with Cloudinary

- 2.1 Go to [Cloudinary](https://cloudinary.com/) and click on the *"SIGN UP FOR FREE"*
- 2.2 Once you have filled our the form, click on *"CREATE ACCOUNT"*
- 2.3 You should get a confirmation email with a link to validate your account. Click on the link and you will be ready to go.

#### 3. Installing Django and configure project to use Cloudinary

I followed the Code Institute Django Rest Framework *"API Project Setup with Django and Cloudinary"* Tutorial video. Also followed this handy *"DRF Cheatsheet - Setting up basic Django Project with Cloudinary"* from Code Institute [here](https://docs.google.com/document/d/1LCLxWhmW_4VTE4GXsnHgmPUwSPKNT4KyMxSH8agbVqU/edit#heading=h.mpopj7v69qqn).<br>
First we go into the terminal:

- 3.1 Install Django. ( `pip3 install 'django<4'` )
- 3.2 Install Cloudinary Libraries. ( `pip install django-cloudinary-storage` )
- 3.3 Install Pillow ( `pip install Pillow` )

In `settings.py` file:

- 3.4 Add the cloudinary libaries to `INSTALLED_APPS = [` **Note the order is important**
  `INSTALLED_APPS = [`<br>
    `…,`<br>
    `'django.contrib.messages',`<br>
    `'cloudinary_storage',`<br>
    `'django.contrib.staticfiles',`<br>
    `'cloudinary',`
    `…,`<br>
`]`

- 3.5 Create a new `env.py` file on top level directory
- 3.6 In the `env.py` file `import os`
- 3.7 Set environment variables `os.environ["CLOUDINARY_URL"] = "`**Paste in Cloudiary API Key from Cloudinary Website**`"`
- 3.8 Add in secret key `os.environ["SECRET_KEY"] = "`Make up your own random secret key or cut/copy and paste the automatic generated secret key django created for you when you start django project`"`
- 3.9 Remove the insecure secret key and replace with. ( `os.environ.get('SECRET_KEY')` )

#### 4. Prepare our environment and settings.py file

- 4.1 In `settings.py` file
- 4.2 Reference env.py. Below the `import os` you should have the following code <br>
`import dj_database_url`<br>
`if os.path.isfile("env.py"):`<br>
`import env` <br>
- 4.3  Tell Django to use Cloudinary to store media
`CLOUDINARY_STORAGE = {`<br>
    `'CLOUDINARY_URL': os.environ.get('CLOUDINARY_URL')`<br>
`}`<br>
`MEDIA_URL = '/media/'`<br>
`DEFAULT_FILE_STORAGE = 'cloudinary_storage.storage.MediaCloudinaryStorage'`<br>
- 4.3 Remove the insecure secret key and replace. ( `os.environ.get('SECRET_KEY')` )

#### 5. Installing Django Rest Framework

In the terminal:

- 5.1 Install django rest framework ( `pip install djangorestframework` )
- 5.2 Add the rest framework to `INSTALLED APPS = [`

  `'django.contrib.staticfiles',`<br>
    `'cloudinary',`<br>
    `'rest_framework',`<br>

#### 6. Installing Django Rest Auth

In the terminal:

- 6.1 Install django rest auth (`pip3 install dj-rest-auth==2.1.9`)
- 6.2 Add the rest auth to `INSTALLED APPS = [`

  `'django.contrib.sites',`<br>
    `'allauth',`<br>
    `'allauth.account',`<br>
    `'allauth.socialaccount',`<br>
    `'dj_rest_auth.registration',`<br>
- 6.3 Below the `INSTALLED APPS = [ ... ]` add `SITE_ID = 1`
- 6.4 In project level urls.py file add the following to `urlspattern = [`
  
    `path('dj-rest-auth/', include('dj_rest_auth.urls')),`<br>
    `path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),`<br>

#### 7. Create a database On ElephantSQL

- 7.1 Log into the [ElephantSQL](https://www.elephantsql.com/) website and click **Create new Instance**
- 7.2 Enter a **Name** and keep the plan as **Tiny Turtle Free**, then **tags** field can be left blank, Select a region closest to you, I selected **EU-West-1(Ireland)** as I'm in UK. Then click **Review** and afterwards click **create instance**.
- 7.3 On The Dashboard click on your database instance name.
- 7.4 You will see the details for your database instance, in the url section click on the copy icon to copy the **ElephantSQL database URL**. It will start with postgres:// .

#### 8. Creating app on Heroku

- 8.1 Head over to [Heroku](https://www.heroku.com/) and sign in.
- 8.2 On the home page, click **New** and **Create new app** from the drop down.
- 8.3 Give the app a name(this must be unique) and select a **region** I chose **Europe** as I am in Europe, Then click **Create app**.
- 8.4 Open the settings tab
- 8.5 Click Reveal Confrig Vars
- 8.6 Add a config var called `DATABASE_URL` for the value it should be the **ElephantSQL database URL** you copied in the previous step.

#### 9. Attach the Database

- 9.1 Back over to your IDE workspace for me its [Codeanywhere](https://www.codeanywhere.com/)
- 9.2 In the `env.py` file Set environment variables `os.environ["DATABASE_URL"] = "`**Paste in ElephantSQL database URL**`"`
- 9.3 Head back over to [Heroku](https://www.heroku.com/)
- 9.4 Add a config var called `SECRET_KEY` for the value it should be a **random secret key**

#### 10. Connect ElephantSQL database to project

- 10.1 In the terminal `pip3 install dj_database_url==0.5.0 psycopg2`
- 10.2 In the `settings.py` file, import dj_database_url under the import for os

    `import os`<br>
    `import dj_database_url`<br>

- 10.3 Update the `DATABASES` to the following

    `if 'DEV' in os.environ:`<br>
        `DATABASES = {`<br>
            `'default': {`<br>
                `'ENGINE': 'django.db.backends.sqlite3',`<br>
                `'NAME': BASE_DIR / 'db.sqlite3',`<br>
            `}`<br>
        `}`<br>
    `else:`<br>
        `DATABASES = {`<br>
            `'default': dj_database_url.parse(os.environ.get("DATABASE_URL"))`<br>
        `}`<br>

- 10.4 Temporarily comment out the `# os.environ['DEV'] = '1'` so that our IDE can connect to our external database
- 10.5 back in `settings.py` file we will temporaily add a `print('connected')` statement in our else `DATABASES` to confirm we have connected to the external database

    `else:`<br>
            `DATABASES = {`<br>
                `'default': dj_database_url.parse(os.environ.get("DATABASE_URL"))`<br>
            `}`<br>
            `print('connected)`<br>

- 10.6 In the tmerinal `python3 manage.py makemigrations --dry-run` to confirm we are connected to the external database
- 10.7 If we see the `connected` in the terminal, this means we are connected to our external database. You can remove the print statement now.
- 10.8 Now we know we are connected we can makemigrations and follow up with migrate our database models to our new external database. So in the terminal `python3 manage.py makemigrations` then `python3 manage.py migrate`
- 10.9 Create a superuser for our new database `python3 manage.py createsuperuser`
- 10.10 Confirm that the data i.e superuser in our external database has been created. Back over to [ElephantSQL](https://www.elephantsql.com/) in our database we created. Select BROWSER.
- 10.11 Click the Table queries button from the drop down. And select auth_user.
- 10.12 Click the blue Execute button and you should see our newly created superuser details displayed. This confirms our tables have been created and you can add data to our external database.

#### 11. Preparing for deployement to Heroku

- 11.1 In the terminal `pip3 install gunicorn django-cors-headers`
- 11.2 Update our requirements.txt file with `pip freeze --local > requirements.txt`
- 11.3 Heroku requires a Procfile. Note it must be named correctly and not have any file extension, otherwise Heroku won’t recognise it. Create a Procfile in our top level directory.
- 11.4 Add the following code in our Procfile.

    `release: python manage.py makemigrations && python manage.py migrate`<br>
    `web: gunicorn drf_api_ultimate_m_car.wsgi`<br>

- 11.5 In our `settings.py` file update the value of the `ALLOWED_HOSTS` so that it’s not hardcoded and you could spin up multiple API instances, as they would all be deployed to different URLs..

    `ALLOWED_HOSTS = ['localhost', os.environ.get('ALLOWED_HOST')]`<br>

- 11.6 In our `env.py` file add
  
    `os.environ['ALLOWED_HOST'] = 'your_heroku_app_url'`

- 11.6 Add corsheaders to INSTALLED_APPS

    `'dj_rest_auth.registration',`<br>
    `'corsheaders',`<br>

- 11.7 Add corsheaders middleware to the TOP of the MIDDLEWARE

    `'corsheaders.middleware.CorsMiddleware',`<br>
    `'django.middleware.security.SecurityMiddleware',`<br>

- 11.8 Under the MIDDLEWARE list, set the ALLOWED_ORIGINS for the network requests made to the server with the following code

    `if 'CLIENT_ORIGIN' in os.environ:`<br>
    `CORS_ALLOWED_ORIGINS = [`<br>
        `os.environ.get('CLIENT_ORIGIN')`<br>
    `]`<br>
    `if 'CLIENT_ORIGIN_DEV' in os.environ:`<br>
    `extracted_url = re.match(`<br>
        `r'^([^.]+)', os.environ.get('CLIENT_ORIGIN_DEV', ''), re.IGNORECASE).group(0)`<br>
    `CORS_ALLOWED_ORIGIN_REGEXES = [`<br>
        `rf"{extracted_url}.(eu|us)\d+\.codeanyapp\.com$",`<br>
    `]`<br>

- 11.9 Enable sending cookies in cross-origin requests so that users can get authentication functionality add this below the above code.

    `CORS_ALLOW_CREDENTIALS = True`

- 11.10 To be able to have the front end app and the API deployed to different platforms, set the JWT_AUTH_SAMESITE attribute to 'None'. Without this the cookies would be blocked.
    `JWT_AUTH_REFRESH_COOKIE = 'my-refresh-token'`<br>
    `JWT_AUTH_SAMESITE - 'None`<br>

- 11.11 Set the DEBUG value to be True only if the DEV environment variable exists. This will mean it is True in development, and False in production

    `DEBUG = 'DEV' in os.environ`

- 11.12 Comment DEV back in `env.py`

    `os.environ['DEV'] = '1'`

- 11.13 Ensure the project requirements.txt file is up to date. In the terminal `pip freeze --local > requirements.txt`

#### 12. Deploying to Heroku

- 12.1 Head back over to [heroku](https://www.heroku.com/) and click on your **app** and then go to the **Settings tab**
- 12.2 On the **settings page** scroll down to the **config vars** section and check you have all the correct config vars setup
- 12.3 `DATABASE_URL` which you will set equal to the **ElephantSQL database URL**
- 12.4 `SECRET_KEY` is set to your secret key value
- 12.5 `CLOUDINARY_URL` this will be set to your Cloudinary URL
- 12.6 `DISABLE_COLLECTSTATIC` for the value it should be `1` **This is for temporary. You should remove before final deployment**
- 12.7 `ALLOWED_HOST` for the value it should be the Heroku app's URL
- 12.8 Then scroll to the top and go to the **deploy tab** and go down to the **Deployment method** section and select **Github** and then sign into your account.
- 12.9 Below that in the **search for a repository to connect to** search box enter the name of your repository that you created on **github** and click **connect**
- 12.10 Once it has connected scroll down to the **Manual Deploy** and click **Deploy branch** when it has deployed you will see a **view app** button below and this will bring you to your newly deployed app.
- 12.11 Please note that when deploying manually you will have to deploy after each change you make to your repository.
