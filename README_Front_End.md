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
- [React](https://react.dev/) was used to create the frontend user interface.
- [Cloudinary](https://cloudinary.com/) was used to store the images.

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

#### 4. Preparing React to connect to the Django API

- 4.1 Open the package.json file in the frontend directory, and at the bottom of the file, add a new key to the JSON object

    `"proxy": "http://localhost:8000/"`

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
