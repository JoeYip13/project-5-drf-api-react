# Testing

This is the Read Me Testing for the Backend. Click [here](https://github.com/JoeYip13/project-5-drf-api-react/blob/main/README_Back_End.md) if you like to see the Read Me for the Backend

## Table of Contents

- [Testing](#testing)
  - [Table of Contents](#table-of-contents)
  - [Manual Testing](#manual-testing)
    - [Post Test](#post-test)
    - [Comment Test](#comment-test)
    - [Likes Test](#likes-test)
    - [Event Test](#event-test)
    - [Bookmark Test](#bookmark-test)
    - [Reviews Test](#reviews-test)
  - [PEP8 Validator](#pep8-validator)
  - [Python validation](#python-validation)
  - [Bugs](#bugs)
    - [Fixed Bugs](#fixed-bugs)

---

## Manual Testing

I created a couple of super users and conducted testing on the backend functionality.

<details>
<summary>Create Superuser API</summary>
<figure>
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701511520/ultimate-m-car/README/backend/create-superuser_ihkeos.png"
        alt="Ultimate M Car API">
</figure>
</details>

### Post Test

| Feature | Action | Expected Result | PASS/FAIL |
| ------- | ------ | --------------- | --------- |
| Post List | Display | The Post List page should display all data in the database for posts with the all the correct serialized fields. | PASS |
| Post Form | Display | The Post page should display a form with fields for Image, Title, Content, Model, Year, BHP (Brake Horsepower), Location, Modified, and Colour. | PASS |
| Title | Input | Entering a valid title for the post should not trigger any errors. | PASS |
| Image Upload | Input | Uploading a valid image file for the post should display the selected image in a preview. | PASS |
| Content | Input | Entering valid content for the post should not trigger any errors. | PASS |
| Model | Input | Entering the model information for the post should not trigger any errors. | PASS |
| Year | Input | Entering a valid manufacturing year for the post should not trigger any errors. | PASS |
| BHP | Input | Entering a valid value for Brake Horsepower should not trigger any errors. | PASS |
| Location | Input | Entering a valid location for the post should not trigger any errors. | PASS |
| Modified | Input | Entering a valid value for Brake Horsepower should not trigger any errors. | PASS |
| Colour | Input | Entering a valid color for the post should not trigger any errors. | PASS |
| Submit Form | Click | Submitting the form with all valid information should create a new post in the database. | PASS |
| Edit Post | Click | If the user owns the post, edit the post with pre-filled information. | PASS |
| Delete Post | Click | If the user owns the post, delete post will remove the post from the database. | PASS |
| Image Size | Input | Uploading an image that exceeds the specified size should display an error message. | PASS |
| Edit Post Form | Display | The Edit Post page should display a form with pre-filled fields for Image, Title, Content, Model, Year, BHP (Brake Horsepower), Location, Modified, and Colour based on the existing post. | PASS |

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
        <figcaption>Posts API</figcaption>
</figure>
</details>

### Comment Test

| Feature | Action | Expected Result | PASS/FAIL |
| ------- | ------ | --------------- | --------- |
| Comment Section | Display | The comment list page should display a section for viewing and adding comments in the database. | PASS |
| Add Comment | Input | Entering a valid comment in the comment input field and clicking "Post" should add the comment to the post database. | PASS |
| Comment Content | Display | The added comment should be displayed in the database with the all the correct serialized fields. | PASS |
| Comment Detail | Display | The comment detail section should display the details of the comment and all the correct serialized fields. | PASS |
| Edit Comment | Click | If the user owns the comment, the comment section form is pre-filled with the user existing comment. | PASS |
| Save Edit | Click | Modifying the comment, clicking "PUT" should update the comment content and display the edited version. | PASS |
| Delete Comment | Click | If the user owns the comment, there should be an option to delete the comment. Confirming deletion should remove the comment from the database. | PASS |

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
        <figcaption>Comments API</figcaption>
</figure>
</details>

### Likes Test

| Feature | Action | Expected Result | PASS/FAIL |
| ------- | ------ | --------------- | --------- |
| Like Button | Click | Clicking the "Post" button on a post should increase the like count for that post. | PASS |
| Like | Display | After liking a post, the database should update with new like id and post id . | PASS |
| Like Count | Display | The like count for the post should be updated. | PASS |
| Like Delete | Display | If the owner owns the like, there should be an option to delete the like. Confirming deletion should remove the like from the database | PASS |

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
        <figcaption>Likes API</figcaption>
</figure>
</details>

### Event Test

| Feature | Action | Expected Result | PASS/FAIL |
| ------- | ------ | --------------- | --------- |
| Event List | Display | The Event List page should display all data in the database for events with the all the correct serialized fields. | PASS |
| Event Form | Display | The event form with fields for Image, Title, Description, Event Date, Event Time, and Location. | PASS |
| Title | Input | Entering a valid title for the event should not trigger any errors. | PASS |
| Image Upload | Input | Uploading a valid image file for the event should display the selected image in a preview. | PASS |
| Description | Input | Entering valid description for the event should not trigger any errors. | PASS |
| Event Date | Input | Entering a valid event date for the event should not trigger any errors. | PASS |
| Location | Input | Entering a valid location for the event should not trigger any errors. | PASS |
| Event Time | Input | Entering a valid value for time should not trigger any errors. | PASS |
| Submit Form | Click | Submitting the form with all valid information should create a new event update the database. | PASS |
| Edit Event | Click | If the user owns the event, there should be an option to edit the event with pre-filled information. | PASS |
| Delete Event | Click | If the user owns the event, there should be an option to delete the event. Deleting the event will remove the event from the database | PASS |
| Image Size | Input | Uploading an image that exceeds the specified size should display an error message. | PASS |

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
        <figcaption>Events API</figcaption>
</figure>
</details>

### Bookmark Test

| Feature | Action | Expected Result | PASS/FAIL |
| ------- | ------ | --------------- | --------- |
| Bookmark | Click | Clicking the "POST" button on a event should increase the bookmark count for that event. | PASS |
| Bookmark Count | Display | The bookmark count for the event should be updated after bookmarking. | PASS |
| Bookmark Detail | Display | The bookmark detail section should display the details of the bookmark and all the correct serialized fields. | PASS |

<details>
<summary>Bookmarks API</summary>
<figure>
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504718/ultimate-m-car/README/backend/bookmarks/bookmarks-list-view_dq6soi.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504716/ultimate-m-car/README/backend/bookmarks/bookmarks-detail-view-pk_bxrhnb.png"
        alt="Ultimate M Car API">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701504717/ultimate-m-car/README/backend/bookmarks/bookmarks-detail-view-pk-delete_swd3xv.png"
        alt="Ultimate M Car API">
        <figcaption>Bookmarks API</figcaption>
</figure>
</details>

### Reviews Test

| Feature | Action | Expected Result | PASS/FAIL |
| ------- | ------ | --------------- | --------- |
| Review List | Display | The Review list page should display all reviews in the database. | PASS |
| Add Review | Input | Entering a valid review in the review input field and clicking "Post" should add the review to the database. | PASS |
| Review Content | Display | The added review should be displayed in the review section with the all the correct serialized fields. | PASS |
| User Can Review Once | Submit | Attempting to submit a review for the same event multiple times with the same user account should display an error message. | PASS |
| Review Visibility | Display | After adding a review, the review should be visible on the event detail page with the user's name, rating, comment, and timestamp. | PASS |

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
        <figcaption>Reviews API</figcaption>
</figure>
</details>

---
## PEP8 Validator
Code Institute [CI Python Linter](https://pep8ci.herokuapp.com/) was used to validate all python files.

## Python validation

All files containing custom Python code were then validated using the [Code Institute Python Linter](https://pep8ci.herokuapp.com/):

- `drf_api_ultimate_m_car/asgi.py`: no errors found
- `drf_api_ultimate_m_car/permissions.py`: no errors found
- `drf_api_ultimate_m_car/settings.py`: no errors found other than "line too long errors"
- `drf_api_ultimate_m_car/serializers.py`: no errors found
- `drf_api_ultimate_m_car/urls.py`: no errors found
- `drf_api_ultimate_m_car/views.py`: no errors found
- `drf_api_ultimate_m_car/wsgi.py`: no errors found except "line too long error"

- `posts/admin.py`: no errors found
- `posts/models.py`: no errors found
- `posts/serializers.py`: no errors found
- `posts/urls.py`: no errors found
- `posts/views.py`: no errors found

- `comments/admin.py`: no errors found
- `comments/models.py`: no errors found
- `comments/serializers.py`: no errors found
- `comments/urls.py`: no errors found
- `comments/views.py`: no errors found

- `likes/admin.py`: no errors found
- `likes/models.py`: no errors found
- `likes/serializers.py`: no errors found
- `likes/urls.py`: no errors found
- `likes/views.py`:no errors found

- `profiles/admin.py`: no errors found
- `profiles/models.py`: no errors found
- `profiles/serializers.py`: no errors found
- `profiles/urls.py`: no errors found
- `profiles/views.py`: no errors found

- `followers/admin.py`: no errors found
- `followers/models.py`: no errors found
- `followers/serializers.py`: no errors found
- `followers/urls.py`: no errors found
- `followers/views.py`: no errors found

- `events/admin.py`: no errors found
- `events/models.py`: no errors found
- `events/serializers.py`: no errors found
- `events/urls.py`: no errors found
- `events/views.py`: no errors found

- `reviews/admin.py`: no errors found
- `reviews/models.py`: no errors found
- `reviews/serializers.py`: no errors found
- `reviews/urls.py`: no errors found
- `reviews/views.py`: no errors found

- `bookmarks/admin.py`: no errors found
- `bookmarks/models.py`: no errors found
- `bookmarks/serializers.py`: no errors found
- `bookmarks/urls.py`: no errors found
- `bookmarks/views.py`: no errors found

---
## Bugs
### Fixed Bugs

