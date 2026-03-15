# Personal Website

## Setup python virtual environment
- `install python3.11`
- `python3.11 -m venv .venv`
- `source .venv/bin/activate`

## Setup Node.js environment
- `install npm`

## Project Creation

### Backend
- follow [Setup python virtual environment](#setup-python-virtual-environment) if you didn't follow it
- `django-admin startproject personal_website`

### Frontend
- follow [Setup Node.js environment](#setup-nodejs-environment) if you didn't follow it
- `npm create vite@latest personal_website`

<br>

## Development Setup

### Backend
- follow [Setup python virtual environment](#setup-python-virtual-environment) if you didn't follow it
- `python manage.py runserver`

### Frontend
- follow [Setup Node.js environment](#setup-nodejs-environment) if you didn't follow it
- `npm install`
- `npm run dev`

<br>

## Ideas
### Frontend pages
1. bouldering
- youtube video list
- gym locations ive been to (with map), maybe review for each
- shoes, level

<br>

2. books
- list of book recommendation + image of the book

<br>

3. projects
- title, link github, link ai demo page (within the website)

<br>

4. about me
- timeline widget (studies + work)
- interests
- short intro
- skills
- goals
- photo of me
- contact email, linkedin, github

<br>

5. ml models
- one for eye tracking
- one for RL
- one for LLMs

<br>

6. admin page to edit
7. blog page

<br>

8. landing page:
- short intro
- pitch

### Database entities
- Timeline
- TimelineItemTitle
- TimelineItemDescription
- TimelineItemType job/school
- TimelineItemAlignDescription left/right
- TimelineItemPeriod

### Widgets libraries
- Materiul UI [link](https://mui.com/material-ui/react-timeline/#basic-timeline)