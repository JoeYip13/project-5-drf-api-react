# Ultimate M Car

This is the Read Me Testing for the Frontend. Click [here](https://github.com/JoeYip13/project-5-drf-api-react/blob/testing/README.md) if you like to see the Read Me for the Frontend.

## Frontend Testing

## Table of Contents

- [Ultimate M Car](#ultimate-m-car)
  - [Frontend Testing](#frontend-testing)
  - [Table of Contents](#table-of-contents)
  - [Validator testing](#validator-testing)
  - [W3C Validator](#w3c-validator)
  - [ESLint Validator](#eslint-validator)
  - [Responsive](#responsive)
  - [PageSpeed Insights](#pagespeed-insights)
  - [Manual Testing](#manual-testing)
    - [Navigation Bar](#navigation-bar)
    - [Feed Page](#feed-page)
    - [Events Page](#events-page)
    - [Sign Up Page](#sign-up-page)
    - [Sign In Page](#sign-in-page)
    - [Add Post Page](#add-post-page)
    - [Edit Post Page](#edit-post-page)
    - [Delete Post Page](#delete-post-page)
    - [Comment on Post](#comment-on-post)
    - [Edit Comment on Post](#edit-comment-on-post)
    - [Delete Comment on Post](#delete-comment-on-post)
    - [Like a Post](#like-a-post)
    - [Unlike a Post](#unlike-a-post)
    - [Add Event Page](#add-event-page)
    - [Edit Event Page](#edit-event-page)
    - [Delete Event Page](#delete-event-page)
    - [Review a Event](#review-a-event)
    - [Edit Review on Event](#edit-review-on-event)
    - [Delete Review on Event](#delete-review-on-event)
    - [Bookmark a Event](#bookmark-a-event)
    - [Unbookmark a Event](#unbookmark-a-event)
    - [Profile Page](#profile-page)
    - [Following and Unfollow a User](#following-and-unfollow-a-user)
  - [More Manual Scenario Base Testing](#more-manual-scenario-base-testing)

---

## Validator testing

## W3C Validator

The URL for Ultimate M Car underwent validation checks using both the W3C HTML Validator and the W3C CSS Validator. [W3C Html Validator](https://validator.w3.org/#validate_by_uri) and [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
No errors were identified when the deployed URL underwent validation checks using the W3C HTML validation checker. However, 8 warning messages did arise, cautioning about trailing slashes in the index.html file. Promptly addressing these warnings, I resolved the issue to ensure adherence to HTML standards.
<details>
<summary>W3C Html Validator</summary>
<figure align="center">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701347145/ultimate-m-car/Testing/w3c_html_dzcnhb.png" alt="W3C validator">
        <figcaption>W3C Html Validator</figcaption>
</figure>
</details>
<details>
<summary>W3C CSS Validator</summary>
<figure align="center">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701347281/ultimate-m-car/Testing/w3c_css_awmyvl.png" alt="W3C validator">
        <figcaption>W3C CSS Validator</figcaption>
</figure>
</details>

## ESLint Validator

[ES Lint](https://eslint.org/docs/latest/use/getting-started) was installed using the following terminal commands.<br>
`npm install --save-dev eslint`<br>
`npx eslint --init`<br>
The following errors were initially when running command `npx eslint src` 162 problems reported.

 1. error 'React' must be in scope when using JSX react/react-in-jsx-scope
 2. error 'spinner' is missing in props validation react/prop-types
 3. error 'ReactDOM.render is deprecated since React 18.0.0, use createRoot instead, see https://reactjs.org/link/switch-to-createroot react/no-deprecated
 4. error `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;` react/no-unescaped-entities
 5. error Do not pass children as props. Instead, nest children between the opening and closing tags react/no-children-prop
 6. error Component definition is missing display name react/display-name

To address the error "'React' must be in scope when using JSX react/react-in-jsx-scope," which indicates that, in modern React versions (from version 17 onward), you don't need to import React explicitly for JSX to work, I added a rule to disable this check in the `.eslintrc.js` file. The solution involved adding "react/react-in-jsx-scope": "off" to the ESLint configuration, allowing the code to omit the explicit import of React for JSX usage.

To address the error "'spinner' is missing in props validation react/prop-types" and other related PropTypes validation issues in ESLint, I added a rule to disable prop-types checking for the specific component. The solution involved adding "react/prop-types": "off" to the ESLint configuration, allowing the code to bypass PropTypes validation for the component in question.

To address the warning "ReactDOM.render is deprecated since React 18.0.0, use createRoot instead, see <https://reactjs.org/link/switch-to-createroot> react/no-deprecated," which indicates that ReactDOM.render is deprecated in React 18.0.0 and later versions, and createRoot should be used instead, I took the following steps:

 1. Since the project was using React version 17, where ReactDOM.render is not deprecated, I added a rule "react/no-deprecated":"off" in the ESLint configuration to suppress the warning
 2. Additionally, I included the configuration for React version detection in the eslintrc.js file with "version": "detect" to ensure ESLint correctly identifies the React version used in the project.

To resolve the error "`'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;` react/no-unescaped-entities," the solution was straightforward. I addressed the issue by replacing the `'` character with `&apos;`.

To address the error "Do not pass children as props. Instead, nest children between the opening and closing tags react/no-children-prop," I simplified the resolution by refactoring the code causing the error. Rather than passing "children" as a prop, I directly nested the content between the opening and closing tags of the React component.

To resolve the "Component definition is missing display name react/display-name" error in my MoreDropdown.js file, I identified that the issue stemmed from using a functional component without specifying a displayName property. The solution involved a straightforward fix: adding a displayName to the ThreeDots component.

<details>
<summary>ES Lint Validator</summary>
<figure alig n="center">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701367965/ultimate-m-car/Testing/eslint_install_allups.png" alt="ESLint validator">
        <figcaption>ESLint Validator Install</figcaption>
</figure>
<figure align="center">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701368287/ultimate-m-car/Testing/eslint_init_wzqdum.png" alt="ESLint validator">
        <figcaption>ESLint Validator eslint --init</figcaption>
</figure>
<figure align="center">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701368348/ultimate-m-car/Testing/eslint_file_beyghn.png" alt="ESLint validator">
        <figcaption>ESLint Validator eslintrc.js file</figcaption>
</figure>
<figure align="center">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701368366/ultimate-m-car/Testing/eslint_jsx_scope_u1iwmf.png" alt="ESLint validator">
        <figcaption>ESLint Validator react-in-jsx-scope</figcaption>
</figure>
<figure align="center">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701368390/ultimate-m-car/Testing/eslint_problems_l88sz2.png" alt="ESLint validator">
        <figcaption>ESLint Validator 162 problems</figcaption>
</figure>
<figure align="center">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701368379/ultimate-m-car/Testing/eslint_propType_ifxooh.png" alt="ESLint validator">
        <figcaption>ESLint Validator react/prop-types</figcaption>
</figure>
<figure align="center">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701368396/ultimate-m-car/Testing/eslint_problems2_zaecfy.png" alt="ESLint validator">
        <figcaption>ESLint Validator eslint 115 problems</figcaption>
</figure>
<figure align="center">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701368383/ultimate-m-car/Testing/eslint_problems3_v9pzqb.png" alt="ESLint validator">
        <figcaption>ESLint Validator eslint 12 problems</figcaption>
</figure>
<figure align="center">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701368404/ultimate-m-car/Testing/eslintrc_file_dd0wbh.png" alt="ESLint validator">
        <figcaption>ESLint Validator eslintrc.js file config</figcaption>
</figure>
<figure align="center">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701371964/ultimate-m-car/Testing/eslint_noerrors_es07j4.png" alt="ESLint validator">
        <figcaption>ESLint Validator 0 errors</figcaption>
</figure>
</details>

[Table of Contents](#table-of-contents)

---

## Responsive

<details>
<summary>Mobile view</summary>
<figure align="">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701348103/ultimate-m-car/Testing/mobile/mobile-view-nav_m8fmjv.png" width="200"
        alt="Ultimate M Car mobile view">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701348102/ultimate-m-car/Testing/mobile/mobile-view-events_noyrxs.png" width="200"
        alt="Ultimate M Car mobile view">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701348105/ultimate-m-car/Testing/mobile/mobile-view-signup_no4g5c.png" width="200"
        alt="Ultimate M Car mobile view">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701348105/ultimate-m-car/Testing/mobile/mobile-view-signin_gcjntk.png" width="200"
        alt="Ultimate M Car mobile view">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701348103/ultimate-m-car/Testing/mobile/mobile-view-signed_in_m5rqsl.png" width="200"
        alt="Ultimate M Car mobile view">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701348102/ultimate-m-car/Testing/mobile/mobile-view-profile_xmc6fb.png" width="200"
        alt="Ultimate M Car mobile view">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701348104/ultimate-m-car/Testing/mobile/mobile-view-posts_gmizvl.png" width="200"
        alt="Ultimate M Car mobile view">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701348101/ultimate-m-car/Testing/mobile/mobile-view-comments_m9y0wa.png" width="200"
        alt="Ultimate M Car mobile view">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701348100/ultimate-m-car/Testing/mobile/mobile-view-add-post_ocbixz.png" width="200"
        alt="Ultimate M Car mobile view">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701348101/ultimate-m-car/Testing/mobile/mobile-view-add-post-test-edit_swvjlc.png" width="200"
        alt="Ultimate M Car mobile view">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701348101/ultimate-m-car/Testing/mobile/mobile-view-add-post-test_yl6unp.png" width="200"
        alt="Ultimate M Car mobile view">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701348104/ultimate-m-car/Testing/mobile/mobile-view-add-post-test-updated_j6y8qw.png" width="200"
        alt="Ultimate M Car mobile view">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701348101/ultimate-m-car/Testing/mobile/mobile-view-add-post-delete_vvpcaw.png" width="200"
        alt="Ultimate M Car mobile view">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701348989/ultimate-m-car/Testing/mobile/mobile-view-signout_ekaibb.png" width="200"
        alt="Ultimate M Car mobile view">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701349066/ultimate-m-car/Testing/mobile/mobile-view-review_cv1om7.png" width="200"
        alt="Ultimate M Car mobile view">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701349158/ultimate-m-car/Testing/mobile/mobile-view-add-event_fkmgub.png" width="200"
        alt="Ultimate M Car mobile view">
        <figcaption>Mobile view</figcaption>
</figure>
</details>

<details>
    <summary>Laptop view</summary>
    <figure align="">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701424645/ultimate-m-car/Testing/laptop/laptop-feed_m2sz7q.png" width="200"
        alt="Ultimate M Car laptop view">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701424650/ultimate-m-car/Testing/laptop/laptop-events_erwb1t.png" width="200"
        alt="Ultimate M Car laptop view">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701424674/ultimate-m-car/Testing/laptop/laptop-signup_j92gzv.png" width="200"
        alt="Ultimate M Car laptop view">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701424677/ultimate-m-car/Testing/laptop/laptop-signin_fnzzs6.png" width="200"
        alt="Ultimate M Car laptop view">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701424695/ultimate-m-car/Testing/laptop/laptop-signed-in_zslx9i.png" width="200"
        alt="Ultimate M Car laptop view">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701424705/ultimate-m-car/Testing/laptop/laptop-add-post_hq69tp.png" width="200"
        alt="Ultimate M Car laptop view">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701424708/ultimate-m-car/Testing/laptop/laptop-post-view_uoca4t.png" width="200"
        alt="Ultimate M Car laptop view">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701424729/ultimate-m-car/Testing/laptop/laptop-profile_qv3xng.png" width="200"
        alt="Ultimate M Car laptop view">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701424733/ultimate-m-car/Testing/laptop/laptop-add-event_j4juv1.png" width="200"
        alt="Ultimate M Car laptop view">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701424752/ultimate-m-car/Testing/laptop/laptop-event-view_uop7iy.png" width="200"
        alt="Ultimate M Car laptop view">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701424755/ultimate-m-car/Testing/laptop/laptop-sign-out_wj2wq5.png" width="200"
        alt="Ultimate M Car laptop view">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701426465/ultimate-m-car/Testing/laptop/laptop-add-post-test_svfevh.png" width="200"
        alt="Ultimate M Car laptop view">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701426479/ultimate-m-car/Testing/laptop/laptop-add-post-success_quc72s.png" width="200"
        alt="Ultimate M Car laptop view">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701426491/ultimate-m-car/Testing/laptop/laptop-edit-post_duh4oc.png" width="200"
        alt="Ultimate M Car laptop view">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701426505/ultimate-m-car/Testing/laptop/laptop-edit-post-success_mgsvav.png" width="200"
        alt="Ultimate M Car laptop view">
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701426518/ultimate-m-car/Testing/laptop/laptop-delete-post_mufxc3.png" width="200"
        alt="Ultimate M Car laptop view">
        <figcaption>Laptop view</figcaption>
</details>

---

## PageSpeed Insights

<details>
    <summary>Feed Page</summary>
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701516467/ultimate-m-car/README/pagespeed/feed_bt2is5.png"
        alt="Ultimate M Car PageSpeed Insight">
</details>
<details>
    <summary>Post Page</summary>
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701516471/ultimate-m-car/README/pagespeed/post-id_qttgyo.png"
        alt="Ultimate M Car PageSpeed Insight">
</details>
<details>
    <summary>Events Page</summary>
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701516463/ultimate-m-car/README/pagespeed/events-pk_d3nffr.png"
        alt="Ultimate M Car PageSpeed Insight">
</details>
<details>
    <summary>Event Page</summary>
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701516463/ultimate-m-car/README/pagespeed/events-pk_d3nffr.png"
        alt="Ultimate M Car PageSpeed Insight">
</details>
<details>
    <summary>Sign Up Page</summary>
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701516469/ultimate-m-car/README/pagespeed/signup_vmgdsz.png"
        alt="Ultimate M Car PageSpeed Insight">
</details>
<details>
    <summary>Sign In Page</summary>
    <img src="https://res.cloudinary.com/dcjkzptkn/image/upload/v1701516505/ultimate-m-car/README/pagespeed/signin_polocd.png"
        alt="Ultimate M Car PageSpeed Insight">
</details>

---

## Manual Testing

### Navigation Bar

| Feature | Action | Expected Result | PASS/FAIL |
| ------- | ------ | --------------- | --------- |
| Website Logo | Display | Website logo is displayed when on homepage. | PASS |
| Navbar | Display | When user is not logged in only links to Feed, Events, Sign Up and Sign In should be displayed. | PASS |
| Navbar | Hover | On mouse hover can see the hover effect of the nav icons over the links. | PASS |
| Navbar | Display | When user is logged in only links to Feed, Events, Sign Out, User's display name with a Profile Icon and a dropdown arrow menu. | PASS |
| Navbar | Display | When user is logged in and on the Feed page, a Add Post is displayed. | PASS |
| Navbar | Display | When user is logged in and on the Events page, a Add Event is displayed. | PASS |
| Profile dropdown | Click | When a user is logged in and clicks on the dropdown arrow menu. It should display a Liked link and Bookmarked link. | PASS |
| Profile dropdown | Click | When a user is logged in and clicks on the Liked link it should open all users Liked Posts page. | PASS |
| Profile dropdown | Click | When a user is logged in and clicks on the Bookmarked link is should open all users Bookmarked Events page. | PASS |
| Profile | Click | When a user is logged in and clicks on the Profile name or Avatar link it should open to the user's profile page. | PASS |
| Website Logo | Click | Website logo link should open home page which is also the Feed page. | PASS |
| Navbar | Click | Clicking the "Feed" link will open the Feed page, and the associated icon will maintain its active effect. | PASS |
| Navbar | Click | Clicking the "Events" link will open the Events page, and the associated icon will maintain its active effect. | PASS |
| Navbar | Click | Clicking the "Sign Up" link will open the Sign Up page, and the associated icon will maintain its active effect.  | PASS |
| Navbar | Click | Clicking the "Sign In" link will open the Sign In page, and the associated icon will maintain its active effect. | PASS |
| Navbar | Click | Clicking the "Add Post" link will open the Add Post page, and the associated icon will maintain its active effect. | PASS |
| Navbar | Click | Clicking the "Add Event" link will open the Add Event page, and the associated icon will maintain its active effect. | PASS |
| Navbar | Click | Clicking the "Sign Out" link will open a modal to confirm sign out. | PASS |
| Modal | Click | Clicking the "Yes" to confirm "Sign Out" will sign the user out and redirect them to the home page and the model closes. | PASS |

[Table of Contents](#table-of-contents)

### Feed Page

| Feature | Action | Expected Result | PASS/FAIL |
| ------- | ------ | --------------- | --------- |
| Feed Content | Display | Upon navigating to the Feed page, user should see a list of posts from other users. | PASS |
| Post | Click | Clicking on a post should open the detailed view of the post. | PASS |
| Post Detail | Display | The post detail view should display the content of the post, post details, comments, and options to like and comment. | PASS |
| Like Icon | Hover | Hovering over the "Like" Icon should change the effect of the "Like" Icon. | PASS |
| Like Icon | Click | Clicking the "Like" Icon should increase the like count for the post and the icon change effect. | PASS |
| Like Icon | Click | Clicking the "Like" Icon again should decrease the like count for the post (if already liked) and revert back to original effect. | PASS |
| Comment Icon | Hover | Hovering over the "Comment" Icon should change the effect of the "Comment" Icon. | PASS |
| Comment Icon  | Click | Clicking the "Comment" Icon will direct the user to the comment page of the post. | PASS |
| Infinite Scroll | Scroll | Scrolling past 10 posts the page should load more posts. | PASS |
| Post Profile | Click | Upon clicking the profile avatar of a user who has posted, you will be directed to their respective profile page. | PASS |

[Table of Contents](#table-of-contents)

### Events Page

| Feature | Action | Expected Result | PASS/FAIL |
| ------- | ------ | --------------- | --------- |
| Event Content | Display | Upon navigating to the Event page, user should see a list of events from other users. | PASS |
| Event | Click | Clicking on a event should open the detailed view of the event. | PASS |
| Event Detail | Display | The event detail view should display the content of the event, event details such as location, date, time, reviews, and options to bookmark and review. | PASS |
| Bookmark Icon | Hover | Hovering over the "Bookmark" Icon should change the effect of the "Bookmark" Icon. | PASS |
| Bookmark Icon | Click | Clicking the "Bookmark" Icon should increase the bookmark count for the event and the icon change effect. | PASS |
| Bookmark Icon | Click | Clicking the "Bookmark" Icon again should decrease the bookmark count for the event (if already bookmarked) and revert back to original effect. | PASS |
| Review Icon | Hover | Hovering over the "Review" Icon should change the effect of the "Review" Icon. | PASS |
| Review Icon  | Click | Clicking the "Review" Icon will direct the user to the Review page of the post. | PASS |
| Infinite Scroll | Scroll | Scrolling past 10 events the page should load more events. | PASS |
| Post Profile | Click | Upon clicking the profile avatar of a user who has posted, you will be directed to their respective profile page. | PASS |

[Table of Contents](#table-of-contents)

### Sign Up Page

| Feature | Action | Expected Result | PASS/FAIL |
| ------- | ------ | --------------- | --------- |
| Sign Up Form | Display | The Sign Up page should display a form with fields for username, password, and confirm password. | PASS |
| Required Fields | Submit | Submitting the form without filling in all the required fields should display error messages indicating the missing information. | PASS |
| Username | Input | Entering a valid username should not trigger any errors. | PASS |
| Password | Inout | Entering a valid password that meets the specified criteria should not trigger any errors. | PASS |
| Confirm Password | Input | Entering the same password as in the "Password" field should not trigger any errors. | PASS |
| Submit Form | Click | Submitting the form with all valid information should create a new user account and redirect to the sign in page. | PASS |
| Sign Up Button | Click | Submitting the form with all valid information should change the button from "Sign up" to "Signing up..." | PASS |
| Sign In Link | Click | Clicking the "Sign In" link should navigate to the Sign In page. | PASS |
| Sign Up Button | Hover | Hovering over the Sign Up Button should change the effect of the Button | PASS |

[Table of Contents](#table-of-contents)

### Sign In Page

| Feature | Action | Expected Result | PASS/FAIL |
| ------- | ------ | --------------- | --------- |
| Sign In Form | Display | The Sign In page should display a form with fields for username and password. | PASS |
| Required Fields | Submit | Submitting the form without filling in all the required fields should display error messages indicating the missing information. | PASS |
| Username | Input | Entering a valid username should not trigger any errors. | PASS |
| Password | Inout | Entering a valid password that meets the specified criteria should not trigger any errors. | PASS |
| Submit Form | Click | Submitting the form with all valid information should sign the user account in and redirect to the home page/feed page. | PASS |
| Sign In Button | Click | Submitting the form with all valid information should change the button from "Sign In" to "Signing In..." | PASS |
| Sign Up Link | Click | Clicking the "Sign Up" link should navigate to the Sign Up page. | PASS |
| Sign In Button | Hover | Hovering over the Sign In Button should change the effect of the Button. | PASS |

[Table of Contents](#table-of-contents)

### Add Post Page

| Feature | Action | Expected Result | PASS/FAIL |
| ------- | ------ | --------------- | --------- |
| Post Form | Display | The Post page should display a form with fields for Image, Title, Content, Model, Year, BHP (Brake Horsepower), Location, Modified, and Colour. | PASS |
| Required Fields | Submit | Submitting the form without filling in all the required fields should display error messages indicating the missing information. | PASS |
| Title | Input | Entering a valid title for the post should not trigger any errors. | PASS |
| Image Upload | Input | Uploading a valid image file for the post should display the selected image in a preview. | PASS |
| Content | Input | Entering valid content for the post should not trigger any errors. | PASS |
| Model | Input | Entering the model information for the post should not trigger any errors. | PASS |
| Year | Input | Entering a valid manufacturing year for the post should not trigger any errors. | PASS |
| BHP | Input | Entering a valid value for Brake Horsepower should not trigger any errors. | PASS |
| Location | Input | Entering a valid location for the post should not trigger any errors. | PASS |
| Modified | Select | Selecting a valid value for Brake Horsepower should not trigger any errors. | PASS |
| Colour | Input | Entering a valid color for the post should not trigger any errors. | PASS |
| Submit Form | Click | Submitting the form with all valid information should create a new post and redirect to the post detail page. | PASS |
| Edit Post | Click | If the user owns the post, there should be an option to edit the post with pre-filled information. | PASS |
| Delete Post | Click | If the user owns the post, there should be an option to delete the post with a confirmation modal. | PASS |
| Error Handling | Submit | Submitting the form with incorrect or invalid information should display relevant error messages. | PASS |
| Image Size | Input | Uploading an image that exceeds the specified size should display an error message. | PASS |

[Table of Contents](#table-of-contents)

### Edit Post Page

| Feature | Action | Expected Result | PASS/FAIL |
| ------- | ------ | --------------- | --------- |
| Edit Post Form | Display | The Edit Post page should display a form with pre-filled fields for Image, Title, Content, Model, Year, BHP (Brake Horsepower), Location, Modified, and Colour based on the existing post. | PASS |
| Required Fields | Submit | Submitting the form without filling in all the required fields should display error messages indicating the missing information. | PASS |
| Title | Input | Modifying the title for the post should not trigger any errors. | PASS |
| Image Upload | Input | Uploading a new image file for the post should display the selected image in a preview. | PASS |
| Content | Input | Modifying the content for the post should not trigger any errors. | PASS |
| Model | Input | Modifying the model information for the post should not trigger any errors. | PASS |
| Year | Input | Modifying the manufacturing year for the post should not trigger any errors. | PASS |
| BHP | Input | Modifying the value for Brake Horsepower should not trigger any errors. | PASS |
| Location | Input | Modifying the location for the post should not trigger any errors. | PASS |
| Modified | Select | Selecting a valid value for Brake Horsepower should not trigger any errors. | PASS |
| Colour | Input | Modifying the color for the post should not trigger any errors. | PASS |
| Submit Form | Click | Submitting the form with all valid modifications should update the post and redirect to the post detail page with the changes reflected. | PASS |
| Cancel Button | Click | Clicking the "Cancel" button should navigate back to the post detail page without saving any changes. | PASS |
| Error Handling | Submit | Submitting the form with incorrect or invalid information should display relevant error messages. | PASS |
| Image Size | Input | Uploading an image that exceeds the specified size should display an error message. | PASS |

[Table of Contents](#table-of-contents)

### Delete Post Page

| Feature | Action | Expected Result | PASS/FAIL |
| ------- | ------ | --------------- | --------- |
| Delete Post Icon | Click | Clicking the "Delete" Icon should open a confirmation modal. | PASS |
| Confirmation Modal | Display | The confirmation modal should display a message asking the user to confirm the deletion of the post. | PASS |
| Cancel Button | Click | Clicking the "Cancel" button in the confirmation modal should close the modal without deleting the post. | PASS |
| Confirm Delete | Click | Clicking the "Delete" button in the confirmation modal should delete the post and redirect to the feed page. | PASS |
| Post Removal | View | After confirming deletion, the post should no longer be visible on the site. | PASS |
| Confirmation Message | Display | After successful deletion, a confirmation message should be displayed to the user. | PASS |
| Redirect | Existing User | After successful deletion, the user is redirected back to the feed page | PASS |

[Table of Contents](#table-of-contents)

### Comment on Post

| Feature | Action | Expected Result | PASS/FAIL |
| ------- | ------ | --------------- | --------- |
| Comment Section | Display | The post detail page should display a section for viewing and adding comments. | PASS |
| Add Comment | Input | Entering a valid comment in the comment input field and clicking "Post" should add the comment to the post. | PASS |
| Comment Content | Display | The added comment should be displayed in the comment section with the user's name, timestamp, and the comment content. | PASS |

### Edit Comment on Post

| Feature | Action | Expected Result | PASS/FAIL |
| ------- | ------ | --------------- | --------- |
| Edit Comment | Display | The comment section should display an option for editing comment. | PASS |
| Edit Comment | Click | If the user owns the comment, there should be an option to edit the comment. Clicking it should open an edit form. | PASS |
| Cancel Edit | Click | Clicking "Cancel" during the edit should close the edit form without saving changes. | PASS |
| Edit Comment Form | Display | If the user owns the comment, clicking on the edit button will bring up the user comments that is already pre-filled. | PASS |
| Save Edit | Click | Modifying the comment, clicking "Save" should update the comment content and display the edited version. | PASS |

### Delete Comment on Post

| Feature | Action | Expected Result | PASS/FAIL |
| ------- | ------ | --------------- | --------- |
| Delete Comment | Click | If the user owns the comment, there should be an option to delete the comment. Confirming deletion should remove the comment. | PASS |
| Delete Confirmation | Display | Confirming deletion should display a confirmation modal to ensure the user intends to delete the comment. | PASS |
| Cancel Delete | Click | Clicking "Cancel" in the delete confirmation modal should close the modal without deleting the comment. | PASS |

[Table of Contents](#table-of-contents)

### Like a Post

| Feature | Action | Expected Result | PASS/FAIL |
| ------- | ------ | --------------- | --------- |
| Like Button | Click | Clicking the "Like" button on a post should increase the like count for that post. | PASS |
| Like Indicator | Display | After liking a post, the like button should visually indicate that the user has liked the post (e.g., change in color or icon). | PASS |
| Like Count | Display | The like count for the post should be updated in real-time after liking. | PASS |
| Liked Posts Section | Display | Liked section for displaying all posts that a user has liked, check if the liked post is added to this section after liking. | PASS |

### Unlike a Post

| Feature | Action | Expected Result | PASS/FAIL |
| ------- | ------ | --------------- | --------- |
| Unlike Button | Click | If the user has already liked the post, clicking the "Like" button again (now "Unlike") should decrease the like count for that post. | PASS |
| Unlike Indicator | Display | After unliking a post, the like button should visually indicate that the user has unliked the post. | PASS |
| Unlike Count | Display | The like count for the post should be updated in real-time after unliking. | PASS |
| Liked Posts Section | Display | Liked section for displaying all posts that a user has liked, check if the unliked post is removed from the results after unliking. | PASS |

[Table of Contents](#table-of-contents)

### Add Event Page

| Feature | Action | Expected Result | PASS/FAIL |
| ------- | ------ | --------------- | --------- |
| Event Form | Display | The "Add Event" page should display a form with fields for Image, Title, Description, Event Date, Time, and Location. | PASS |
| Required Fields | Submit | Submitting the form without filling in all the required fields should display error messages indicating the missing information. | PASS |
| Title | Input | Entering a valid title for the event should not trigger any errors. | PASS |
| Image Upload | Input | Uploading a valid image file for the event should display the selected image in a preview. | PASS |
| Description | Input | Entering valid description for the event should not trigger any errors. | PASS |
| Event Date | Input | Entering a valid event date for the event should not trigger any errors. | PASS |
| Location | Input | Entering a valid location for the event should not trigger any errors. | PASS |
| Time | Input | Entering a valid value for time should not trigger any errors. | PASS |
| Submit Form | Click | Submitting the form with all valid information should create a new event and redirect to the event detail page. | PASS |
| Edit Event | Click | If the user owns the event, there should be an option to edit the event with pre-filled information. | PASS |
| Delete Event | Click | If the user owns the event, there should be an option to delete the event with a confirmation modal. | PASS |
| Error Handling | Submit | Submitting the form with incorrect or invalid information should display relevant error messages. | PASS |
| Image Size | Input | Uploading an image that exceeds the specified size should display an error message. | PASS |

[Table of Contents](#table-of-contents)

### Edit Event Page

| Feature | Action | Expected Result | PASS/FAIL |
| ------- | ------ | --------------- | --------- |
| Edit Event Form | Display | The Edit Event page should display a form with fields for Image, Title, Description, Event Date, Time, and Location. | PASS |
| Required Fields | Submit | Submitting the form without filling in all the required fields should display error messages indicating the missing information. | PASS |
| Title | Input | Modifying the title for the event should not trigger any errors. | PASS |
| Image Upload | Input | Uploading a new image file for the event should display the selected image in a preview. | PASS |
| Description | Input | Modifying the description for the event should not trigger any errors. | PASS |
| Event Date | Input | Modifying the event date for the event should not trigger any errors. | PASS |
| Location | Input | Modifying the location for the event should not trigger any errors. | PASS |
| Time | Input | Modifying the value for time should not trigger any errors. | PASS |
| Submit Form | Click | Submitting the form with all valid information should update the event and redirect to the event detail page. | PASS |
| Cancel Button | Click | Clicking the "Cancel" button should navigate back to the event detail page without saving any changes. | PASS |
| Error Handling | Submit | Submitting the form with incorrect or invalid information should display relevant error messages. | PASS |
| Image Size | Input | Uploading an image that exceeds the specified size should display an error message. | PASS |

[Table of Contents](#table-of-contents)

### Delete Event Page

| Feature | Action | Expected Result | PASS/FAIL |
| ------- | ------ | --------------- | --------- |
| Delete Event Icon | Click | Clicking the "Delete" Icon should open a confirmation modal. | PASS |
| Confirmation Modal | Display | The confirmation modal should display a message asking the user to confirm the deletion of the event. | PASS |
| Cancel Button | Click | Clicking the "Cancel" button in the confirmation modal should close the modal without deleting the event. | PASS |
| Confirm Delete | Click | Clicking the "Delete" button in the confirmation modal should delete the event and redirect to the event page. | PASS |
| Event Removal | View | After confirming deletion, the event should no longer be visible on the site. | PASS |
| Confirmation Message | Display | After successful deletion, a confirmation message should be displayed to the user. | PASS |
| Redirect | Existing User | After successful deletion, the user is redirected back to the feed page | PASS |

[Table of Contents](#table-of-contents)

### Review a Event

| Feature | Action | Expected Result | PASS/FAIL |
| ------- | ------ | --------------- | --------- |
| Review Section | Display | The Event detail page should display a section for viewing and adding reviews. | PASS |
| Add Review | Input | Entering a valid review in the review input field and clicking "Post" should add the review to the event. | PASS |
| Review Content | Display | The added review should be displayed in the review section with the user's name, timestamp, and the review content. | PASS |
| Rating | Select | Selecting a rating should not trigger any errors | PASS |
| User Can Review Once | Submit | Attempting to submit a review for the same event multiple times with the same user account should display an error message. | PASS |
| Review Visibility | Display | After adding a review, the review should be visible on the event detail page with the user's name, rating, comment, and timestamp. | PASS |

### Edit Review on Event

| Feature | Action | Expected Result | PASS/FAIL |
| ------- | ------ | --------------- | --------- |
| Edit Review | Display | The review section should display an option for editing review. | PASS |
| Edit Review | Click | If the user owns the review, there should be an option to edit the review. Clicking it should open an edit form. | PASS |
| Cancel Edit | Click | Clicking "Cancel" during the edit should close the edit form without saving changes. | PASS |
| Edit Review Form | Display | If the user owns the Review, clicking on the edit button will bring up the user review that is already pre-filled. | PASS |
| Save Edit | Click | Modifying the review, clicking "Save" should update the review content and display the edited version. | PASS |

### Delete Review on Event

| Feature | Action | Expected Result | PASS/FAIL |
| ------- | ------ | --------------- | --------- |
| Delete Review | Click | If the user owns the review, there should be an option to delete the review. Confirming deletion should remove the review. | PASS |
| Delete Confirmation | Display | Confirming deletion should display a confirmation modal to ensure the user intends to delete the review. | PASS |
| Cancel Delete | Click | Clicking "Cancel" in the delete confirmation modal should close the modal without deleting the review. | PASS |

[Table of Contents](#table-of-contents)

### Bookmark a Event

| Feature | Action | Expected Result | PASS/FAIL |
| ------- | ------ | --------------- | --------- |
| Bookmark Button | Click | Clicking the "Bookmark" button on a event should increase the bookmark count for that event. | PASS |
| Bookmark Indicator | Display | After bookmarking a event, the bookmark icon should visually indicate that the user has bookmarked the event (e.g., change in color or icon). | PASS |
| Bookmark Count | Display | The bookmark count for the event should be updated in real-time after bookmarking. | PASS |
| Bookmarked Events Section | Display | Bookmarked section for displaying all events that a user has bookmarked, check if the bookmarked event is added to this section after bookmarking. | PASS |

### Unbookmark a Event

| Feature | Action | Expected Result | PASS/FAIL |
| ------- | ------ | --------------- | --------- |
| Unbookmark Button | Click | If the user has already bookmarked the event, clicking the "bookmark" icon again (now "Unbookmark") should decrease the bookmark count for that event. | PASS |
| Unbookmark Indicator | Display | After bookmarking a event, the bookmark icon should visually indicate that the user has unbookmarked the event (e.g., change in color or icon). | PASS |
| Unbookmark Count | Display | The bookmark count for the event should be updated in real-time after bookmarking. | PASS |
| Bookmarked Events Section | Display | Bookmarked section for displaying all events that a user has bookmarked, check if the unbookmarked event is removed from the results after unbookmarking. | PASS |

[Table of Contents](#table-of-contents)

### Profile Page

| Feature | Action | Expected Result | PASS/FAIL |
| ------- | ------ | --------------- | --------- |
| Profile Information | Display | The Profile page should display the user's information, including profile image, username, bio, and other relevant details. | PASS |
| Edit Profile | Click | Clicking the "Edit Profile" button should open a edit profile form page to change profile details. | PASS |
| Image Upload | Input | Uploading a valid image file for the profile should display the selected image as the new profile image. | PASS |
| Image Size | Input | Uploading an image that exceeds the specified size should display an error message. | PASS |
| Change Username | Click | Clicking the "Change Username" button should open a form to edit the username. | PASS |
| Username Input | Input | Entering a valid new username and clicking "Save" should update the username on the profile page. | PASS |
| Username Restrictions | Input | Checking if there are any restrictions on the format or length of the username. | PASS |
| Change Password | Click | Clicking the "Change Password" button should open a form to edit the password. | PASS |
| Password Input | Input | Entering a valid new password and clicking "Save" should update the password. | PASS |
| Confirm Password | Input | Entering the same new password as in the "Password" field should not trigger any errors. | PASS |
| Bio Input | Input | Entering a valid new bio and clicking "Save" should update the bio on the profile page. | PASS |
| Cancel Changes | Click | Clicking "Cancel" button should discard any changes made and redirect user back to their profile page. | PASS |
| Redirect | Unauthorized | If a user is not logged in and tries to access the profile page, they should be redirected to the home page. | PASS |

[Table of Contents](#table-of-contents)

### Following and Unfollow a User

| Feature | Action | Expected Result | PASS/FAIL |
| ------- | ------ | --------------- | --------- |
| User Profile | Navigate | Navigate to the profile page of a user who is not currently being followed. | PASS |
| Follow Button | Display | Navigating to the profile page of a user who is not currently being followed displays a follow button. | PASS |
| Follow Button | Click | Clicking the "Follow" button on the user's profile page should initiate the follow action. | PASS |
| Following Status | Display | After clicking "Follow," the button should change to "unfollow" to reflect the user's following status. | PASS |
| Following Count | Display | The user's profile page should display the count of followers. This count should increase after following the user and decrease after unfollowing.. | PASS |
| Unfollow Button | Click | Clicking the "unfollow" button should initiate the unfollow action. | PASS |
| Unfollow Confirmation | Display | After clicking "unfollow," the button should change to "follow" to reflect the user's following status. | PASS |

[Table of Contents](#table-of-contents)

---

## More Manual Scenario Base Testing
