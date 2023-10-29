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
- [Django Rest Framework](https://www.django-rest-framework.org/) building the backend Web API.
- [Django Rest Auth](https://dj-rest-auth.readthedocs.io/en/latest/installation.html) for authentication functionality like login, logout, password restt and password change.
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
