# Testing
## Table of Contents

- [Testing](#testing)
  - [Table of Contents](#table-of-contents)
  - [Automated Testing](#automated-testing)
  - [PEP8 Validator](#pep8-validator)
      - [DRF API Ultimate M Car](#drf-api-ultimate-m-car)
      - [Profiles](#profiles)
      - [Posts](#posts)
      - [Comments](#comments)
      - [Likes](#likes)
      - [Followers](#followers)
  - [Bugs](#bugs)
    - [Fixed Bugs](#fixed-bugs)

---

## Automated Testing

---
## PEP8 Validator
Code Institute [CI Python Linter](https://pep8ci.herokuapp.com/) was used to validate all python files.

#### DRF API Ultimate M Car

<details>
    <summary>asgi.py</summary>
</details>
<details>
    <summary>permissions.py</summary>
</details>
<details>
    <summary>serializers.py</summary>
</details>
<details>
    <summary>settings.pyg</summary>
</details>
<details>
    <summary>urls.py</summary>
</details>
<details>
    <summary>views.py</summary>
</details>
<details>
    <summary>wsgi.py</summary>
</details>

#### Profiles

<details>
    <summary>admin.py</summary>
</details>
<details>
    <summary>apps.py</summary>
</details>

<details>
    <summary>models.py</summary>
</details>
<details>
    <summary>serializers.py</summary>
</details>
<details>
    <summary>urls.py</summary>
</details>
<details>
    <summary>views.py</summary>
</details>

#### Posts

<details>
    <summary>admin.py</summary>
</details>
<details>
    <summary>apps.py</summary>
</details>
<details>
    <summary>models.py</summary>
</details>
<details>
    <summary>serializers.py</summary>
</details>
<details>
    <summary>urls.py</summary>
</details>
<details>
    <summary>views.py</summary>
</details>
<details>
    <summary>serializers.py</summary>
</details>
<details>
    <summary>serializers.py</summary>
</details>

#### Comments

<details>
    <summary>admin.py</summary>
</details>
<details>
    <summary>apps.py</summary>
</details>
<details>
    <summary>models.py</summary>
</details>
<details>
    <summary>serializers.py</summary>
</details>
<details>
    <summary>urls.py</summary>
</details>
<details>
    <summary>views.py</summary>
</details>
<details>
    <summary>serializers.py</summary>
</details>
<details>
    <summary>serializers.py</summary>
</details>

#### Likes

<details>
    <summary>admin.py</summary>
</details>
<details>
    <summary>apps.py</summary>
</details>
<details>
    <summary>models.py</summary>
</details>
<details>
    <summary>serializers.py</summary>
</details>
<details>
    <summary>urls.py</summary>
</details>
<details>
    <summary>views.py</summary>
</details>
<details>
    <summary>serializers.py</summary>
</details>
<details>
    <summary>serializers.py</summary>
</details>

#### Followers

<details>
    <summary>admin.py</summary>
</details>
<details>
    <summary>apps.py</summary>
</details>
<details>
    <summary>models.py</summary>
</details>
<details>
    <summary>serializers.py</summary>
</details>
<details>
    <summary>urls.py</summary>
</details>
<details>
    <summary>views.py</summary>
</details>
<details>
    <summary>serializers.py</summary>
</details>
<details>
    <summary>serializers.py</summary>
</details>

---
## Bugs
### Fixed Bugs
- Installing whitenoise. Static files was not loading on deployed site. In tasty_tales project, `settings.py` file Needed to move `cloudingry_storage` to below the `django.contrib.staticfiles`
