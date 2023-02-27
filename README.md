[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10190805&assignment_repo_type=AssignmentRepo)
# FED Javascript 1 - Course Assignment

This is a vanilla website that displays a list of items fetched from an API.

This project was bootstrapped with Vite.

## Resources

- [Design(low-fi-wireframe)](https://www.figma.com/file/m5A9uITFfbxC1H2TgBMPyG/Untitled?node-id=0%3A1&t=hQInGHwDK0aVg39z-1)
- [Production deploy](https://delicate-donut-e0f2dc.netlify.app/)
- [Deployment CI](https://app.netlify.com/teams/hallvard-benan/overview)
- [API Docs](https://punkapi.com/documentation/v2)

## Report
In this assignment, we were tasked with finding and using an API to display a list of items, a separate details page for each item, and a contact form with validation.

Choosing the API
I chose Brewdog's Punk API because it fulfilled the requirements, had a lot of neat data about the different items, and because I saw other students using the other APIs I was considering, such as the Pokemon API and the Rick and Morty API.

Design
The design of this website is basic, but serves the purpose of displaying content across different screen sizes and color mode preferences. Using open-props made it easy to create a dark and a light mode, and it is something I will use again in the future. The gray and white colors were chosen to provide good contrast while not taking up too much focus, making the images stand out. I added some subtle hover effects and a "skeleton-UI" to make the site feel more dynamic. The accent colors (orange) represent the color of beer, which is also the color of the logo and favicon.

Challenges
I learned a lot while working on this project, mostly through making a lot of mistakes that cost me a lot of time. Firstly, I didn't realize that the API I had chosen was paginated until a day after I had started coding. This meant that I had to rewrite and rethink a lot of the project. Instead of searching by using the filter method on the array that has been fetched, I fixed the search functionality and made links to different pages using the parameters provided by the API. However, I could not fix the filter functionality the same way, so the filter still only applies to the results being displayed on the page (however, this includes search results). One limitation for which I have not found a perfect solution yet is that the last page accessible on the website is page 5, which can display up to 80 items. If the API is updated with more items, it may be necessary to manually update the code to accommodate them. However, for the time being, this is a working solution. Some of the items didn't have images, so I chose to replace them with a generic placeholder rather than remove them.

Conclusion
This project was a challenging but enjoyable learning experience, resulting in a simple but functional website with a lot of potential for improvement.



## Getting Started

In the project directory, you can run:

- install the project node module dependencies $`npm i`
- Runs the app in the development mode. `npm run dev`
- Open `http://127.0.0.1:5173/` to view it in the browser.

## Minimum acceptence criteria (Required - 50%)

All of these todo's must be done to pass the asssignment.

- [x] End-user can see a list of items of the home page.
- [x] When the End-user clicks on an item in the list they are navigated to the details page.
- [x] End-user can view atleast three properties of an item in a list.
- [x] End-user can view atleast three properties of an item on the details page.
- [x] A error message is present when the End-user encounters a error while viewing the index page.
- [x] A error message is present when the End-user encounters a error while viewing the details page.
- [x] End-user can view the title of the item on the browser tab for a details page.
- [x] End-user can view validation message when they input an incorrect name.
- [x] End-user can view validation message when they input an incorrect subject that is less than 10 characters.
- [x] End-user can view validation message when they input an incorrect Email address.
- [x] End-user can view a validation message when they input an incorrect physical address that is less than 25 characters long.

## End-user success criteria (Optional - 100%)

- [x] End-user can search for a specific item.
- [x] End-user can filter the list.
- [x] End-user can sort list by;
  - [x] Name ascending order
  - [x] Name descending order
- [x] Confirmation modal after custumer submits a successful contact form.
- [x] End-user can auto-fill the contact form using the browser auto-fill.
- [?] End-user can auto-fill the contact form using a password manager.
- [x] Validation still works when End-user uses copy and pastes into input fields.
- [x] End-user can see a postive feedback when they input correct info and pass validation.
- [ ] End-user can experience pleasant animations.
  - [ ] Each item in the list has a staggered animation.
  - [x] Contact form success modal fades in.
- [x] End-user can view a custom favicon.
- [x] CSS uses variables
- [ ] Code is dry - There are no repeating functions, variables.
- [x] My commit messages are relavant and make sense. [How to write good commit messages](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)
- [ ] [End-user experiences a complete custom UI design.](https://www.figma.com/file/KExTTAE75DRhq2xTvapFR4/FED-Whiteboard?node-id=0%3A1&t=UItKehGgT8gRlibY-1)

  - [x] Is user-friendly
  - [ ] Effective use of the pillars of design
    - [ ] Typography
    - [ ] COlour
    - [ ] Composition
    - [ ] Art Direction
    - [ ] Motion
  - [ ] Adhered to principles of design
    - [x] Contrast
    - [ ] Balance and alignment
    - [x] Emphasis
    - [ ] Proportion
    - [x] Hiearchy
    - [x] Repetition
    - [x] Ryhthem
    - [x] Pattern
    - [ ] Negative space
    - [ ] Movement

## Checklist

Make sure you go through this checklist before submitting your project to Moodle.

- [x] All pages have a meta description.
- [x] All pages have a valid title.
- [x] All pages import the correct css files.
- [x] All pages import the correct JS file.
- [x] Details page URL includes a query param.
- [x] My website makes a GET request to an API to get a list of results.
- [x] My website makes a GET request to an API to get details of one result.
- [x] Input fields have the following attributes;
- [x] All images have an alt tag;
  - [x] A name,
  - [x] A placeholder,
  - [x] A aria-describedby,
  - [x] Required
- [x] I have not copied Javascript code.
- [x] I have not used a Javascript library.
- [x] Removed all unused files.
- [x] Named all images properly.
- [x] Committed all my code to github.
- [x] My repo is publically viewable.
- [x] I've submitted/ written a report.
- [x] I've removed all todo notes in code.
- [x] I've removed all console logs in code.
- [x] Code is formatted correctly.
- [x] There are no red underlines in VSCode.
- [x] There are no error messages in the terminal when I run the project.
- [x] My code is indented correctly.
- [x] I've checked my report for grammer & spelling using grammerly or chatGPT
- [ ] I've used used [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [ ] I've checked off every todo in this README.

## Help & Tutorials

- https://web.dev/learn/forms/
- https://fed-vocational-astro-course.vercel.app/en/html-css/module-2/forms

## Application stack

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Prettier](https://prettier.io/) - An opinionated code formatter
- [Eslint](https://eslint.org/) - Find and fix problems in your JavaScript code
- [Open-props](https://open-props.style/) - Supercharged
  CSS variables.
- [Animate.css](https://animate.style/) - Just-add-water CSS animations

## Authors

- Hallvard Benan (@Hallvard-Benan)
- Monde Sineke (@S3ak)
