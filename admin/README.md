# Admin Panel (Frontend)

The **Admin Panel** is the frontend component of the system, built with **React** and **Vite**, designed to work closely with the **server** directory and cannot function independently.

---

## Project Overview

This project uses the following technologies and versions:

- **Frontend Framework:** ReactJS v19.1.1 – provides a component-based UI structure.
- **Bundler:** Vite – enables fast development and HMR.
- **Node.js Version:** v20.19.0 – required runtime environment.
- **CSS Framework:** Material UI v7.3.1 – for consistent styling and UI components.
- **License:** Provided by the Communication, Informatics, and Encryption Office of South Konawe Regency.

---

## Important Notes for Developers

When working on this admin application, please keep in mind the following to maintain proper functionality:

1. **Adding New Routes**  
   When adding a new route, update the `getPageTitle` function in:

   ```
   root/src/layouts/MainLayout.jsx
   ```

   This ensures page titles display correctly.

2. **Updating Sidebar/Drawer Menu**  
   To add new items to the sidebar or drawer, modify the `menuConfig` object in:

   ```
   root/src/configs/menuConfig.jsx
   ```

   This keeps the navigation consistent.

3. **Styling**  
   All styling and assets are located in the `src/assets` directory.

---

## Contribution Guidelines

If you modify any part of this application, **document your changes clearly**. Include the location, purpose, and impact of your modifications to help maintain code consistency and ease collaboration across the team.
