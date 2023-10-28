## Table Of Contents

1. <details open>
    <summary><a href='#ux-design'>UX Design</a></summary>
    </details>
2. [User Stories](#user-stories)
3. [Wireframes](#wireframes)
4. [Agile Metodology](#agile-methodology)
5. [Typography](#typography)
6. [Colour Scheme](#colour-scheme)
7. [Database Diagram](#database-diagram)
8. <details open>
    <summary><a href="#features">Features</a></summary>

    - [](#)
    - [](#)
    - [](#)
    - [](#)
    </details>
9. [Future Features](#future-features)
10. [Technologies Used](#technologies-used)
11. [Testing](#testing)
12. [Deployment and Initial Setup](#deployment-and-initial-setup)
13. [Final Deployment](#final-deployemt)
14. [Credits](#credits)
15. [Acknowledgments](#acknowledgements)

---

## Technologies Used

- [Github](https://www.github.com) was used to store the code.
- [Codeanywhere](https://codeanywhere.com/) was used to create this site and then push everything to github.
- [Django](https://www.djangoproject.com/) was the framework that was used.
- [Python](https://en.wikipedia.org/wiki/Python_(programming_language)), django is a python framework.
- [Cloudinary](https://cloudinary.com/) was used to store the images.

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
