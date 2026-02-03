
# Blueprint: Affiliate Management Admin

## 1. Overview

This document outlines the plan for creating an affiliate management admin webpage. The goal is to build a web interface for listing and managing business affiliates, with a feature for sending partnership proposal emails.

## 2. Core Features

- **Affiliate List Page:** A page to display a list of affiliates that meet specific criteria:
    1. Life-friendly
    2. Technology integration
    3. Public value
    4. Data integration
- **Email Sending Page:** A page that allows sending business partnership proposal emails to the selected affiliates from the list.

## 3. Design Guidelines

- The design will be based on the provided image templates.
- The layout will be clean, modern, and intuitive.
- The application will be responsive, ensuring it works on various screen sizes.
- Modern CSS features and web components will be used to create a rich user experience.

## 4. Development Plan

1.  **Initialize Project:**
    - Create a `blueprint.md` file to document the project.
    - Clear the content of `index.html`, `style.css`, and `main.js` to start fresh.

2.  **HTML Structure (`index.html`):**
    - Create a main layout with a side navigation bar and a content area.
    - The side navigation will have links to "Dashboard" and "Affiliate Management".
    - The content area will initially display the affiliate list.
    - A table will be used to list affiliates with columns for: No, Category, Affiliate Service Name, Partner Company, Integration Date, and Status.
    - Add a button to navigate to the email sending page.

3.  **Styling (`style.css`):**
    - Apply a modern design aesthetic inspired by the provided images.
    - Use CSS variables for a consistent color scheme.
    - Style the navigation, table, buttons, and other elements to be visually appealing and user-friendly.

4.  **JavaScript Logic (`main.js`):**
    - Use ES Modules to organize the code.
    - Create mock data for the affiliates to simulate a real-world scenario.
    - Dynamically render the affiliate list in the table.
    - Implement the functionality for the email sending page (initially as a separate view or modal).
    - Use Web Components to create reusable UI elements, such as the affiliate list table.

## 5. Current Task

- Initialize the project by creating this `blueprint.md` and clearing the existing HTML, CSS, and JavaScript files.
