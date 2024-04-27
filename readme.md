# Express API Project

## Introduction

This project is an assessment designed to measure understanding and practical implementation of Node.js and Express features. The project aims to demonstrate the creation of a server application with Node and Express, creation of a RESTful API, utilization of middleware, handling of static files, and rendering views using a template engine.

## Objectives

- Create a server application with Node and Express.
- Develop a RESTful API using Express.
- Implement Express middleware for error handling and custom logic.
- Utilize a template engine for rendering views.
- Interact with the API through HTML forms.

## Requirements

1. **Create and use at least two pieces of custom middleware.**
   - [x] Completed: Implemented two custom middleware functions (`permission` and `storage`) in the `index.js` file and used them appropriately.

2. **Create and use error-handling middleware.**
   - [x] Completed: Implemented error-handling middleware functions in the `index.js`, `userRoutes.js`, `petsRoutes.js`, and `addressRoutes.js` files to handle errors throughout the application.

3. **Use at least three different data categories (e.g., users, posts, or comments).**
   - [x] Completed: Manages data for users, pets, and addresses.

4. **Utilize reasonable data structuring practices.**
   - [x] Completed: Structured data for users, pets, and addresses in a reasonable and organized way.

5. **Create GET routes for all data that should be exposed to the client.**
   - [x] Completed: Created GET routes in `userRoutes.js`, `petsRoutes.js`, and `addressRoutes.js` to expose data for users, pets, and addresses to the client.

6. **Create POST routes for data, as appropriate. At least one data category should allow for client creation via a POST request.**
   - [x] Completed: Implemented POST routes in `userRoutes.js`, `petsRoutes.js`, and `addressRoutes.js` to allow for creating users, pets, and addresses.

7. **Create PATCH or PUT routes for data, as appropriate. At least one data category should allow for client manipulation via a PATCH or PUT request.**
   - [x] Completed: Implemented PATCH routes in `userRoutes.js`, `petsRoutes.js`, and `addressRoutes.js` to allow for updating users, pets, and addresses.

8. **Create DELETE routes for data, as appropriate. At least one data category should allow for client deletion via a DELETE request.**
   - [x] Completed: Implemented DELETE routes in `userRoutes.js`, `petsRoutes.js`, and `addressRoutes.js` to allow for deleting users, pets, and addresses.

9. **Include query parameters for data filtering, where appropriate. At least one data category should allow for additional filtering through the use of query parameters.**
   - [x] Completed: Used query parameters for filtering users in `userRoutes.js`.

10. **Utilize route parameters, where appropriate.**
    - [x] Completed: Used route parameters in `userRoutes.js`, `petsRoutes.js`, and `addressRoutes.js` to handle dynamic routes for specific resources.

11. **Adhere to the guiding principles of REST.**
    - [x] Completed: The application follows RESTful principles by using appropriate HTTP methods and URIs for resource manipulation.

12. **Create and render at least one view using a view template and template engine.**
    - [x] Completed: Rendered views using the EJS template engine in `home.ejs`, `createPet.ejs`, and `viewPets.ejs`.

13. **Use simple CSS to style the rendered views.**
    - [x] Completed: Applied simple CSS styling to rendered views in `home.ejs` and `petCard.ejs`.

14. **Include a form within a rendered view that allows for interaction with your RESTful API.**
    - [x] Completed: Included a form in `createPet.ejs` that allows users to interact with the RESTful API to create a pet.

15. **Utilize reasonable code organization practices.**
    - [x] Completed: Code is organized into separate route files (`userRoutes.js`, `petsRoutes.js`, `addressRoutes.js`), middleware files, and follows a logical structure within each file.

16. **Ensure that the program runs without errors.**
    - [x] Completed: Implemented error handling and ensured that the program runs without errors by handling exceptions appropriately.

17. **Commit frequently to the git repository.**
    - [x] Completed: Made frequent commits to the Git repository for version control.

18. **Include a README file that contains a description of your application.**
    - [x] Completed: Provided a `README` file that contains a description of the application, including information about endpoints, dependencies, and usage instructions.

19. **Level of effort displayed in creativity, presentation, and user experience.**
    - [x] Effort was put into organizing code, implementing functionality, and providing clear instructions and feedback to users. A lot of creativity was displayed by coming up with an idea for a custom middleware considering the simplicity of the project

### Bonus:
20. **Practical Usage of Regular Expressions within Route Paths**
    - [x] Effectively utilized regular expressions to handle the pattern accepted for phone number, allowing the use of '+', '-', '()' and '.' as well as white space besides only numbers

21. **Effective Use of at Least One Third-Party Node Package**
    -[x] Used 2 Third Part Node Packages: Multer for file handling when submitting an image through a form; and Store2 to handle states and localStorage and for middleware usage

## Implementation Details

The project consists of multiple routes and middleware for handling user, pet, and address data. Below is a summary of key components:

- **index.js**: Entry point for the server application, containing route definitions, middleware setup, and server initialization.
- **Routes**: Separate files for user, pet, and address routes, each defining CRUD operations for their respective data categories.
- **Middlewares**: Custom middleware for error handling and permission checks.
- **Views**: Templates for rendering HTML views, including forms for user interaction.
- **Static Files**: CSS files for styling rendered views.
- **Data Handling**: Use of Store2 library for managing data and Multer for handling file uploads.

## Usage

1. Clone the repository locally.
2. Install dependencies using `npm install`.
3. Run the server using `npm start`.
4. Access the application through the provided routes.
