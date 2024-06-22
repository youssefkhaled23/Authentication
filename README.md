# Login and Registration with React, Vite, React Hook Form, TypeScript, and Redux

## Introduction
This project demonstrates how to implement login and registration functionality in a React application using Vite, React Hook Form, TypeScript, and Redux. The project includes the following features:

1. **Login**: Users can log in to the application using their email and password.
2. **Registration**: Users can create a new account by providing their name, email, and password.
3. **Form Validation**: Both the login and registration forms are validated using React Hook Form, ensuring that all required fields are filled out correctly.
4. **State Management**: The application uses Redux to manage the global state, including the user's authentication status and any error messages.

## Technologies Used
- **React**: The main JavaScript library for building user interfaces.
- **Vite**: A fast, modern, and opinionated build tool for frontend development.
- **React Hook Form**: A library for managing forms in React applications.
- **TypeScript**: A superset of JavaScript that adds static typing to the language.
- **Redux**: A predictable state container for JavaScript applications.

## Getting Started
To get started with the project, follow these steps:

1. Clone the repository:
```
git clone https://github.com/youssefkhaled23/Authentication.git
```

2. Install the dependencies:
```
cd Authentication
npm install
```

3. Start the development server:
```
npm run dev
```

The application should now be running at `http://localhost:3000`.

## Code Structure
The project's code is organized as follows:

```
src/
├── actions/
│   ├── authActions.ts
│   └── index.ts
├── components/
│   ├── LoginForm.tsx
│   └── RegistrationForm.tsx
├── reducers/
│   ├── authReducer.ts
│   └── index.ts
├── store/
│   └── index.ts
├── types/
│   ├── actions.ts
│   └── state.ts
├── App.tsx
└── main.tsx
```

- `actions/`: Contains the action creators for the Redux store.
- `components/`: Contains the React components for the login and registration forms.
- `reducers/`: Contains the Redux reducers for managing the application state.
- `store/`: Contains the Redux store configuration.
- `types/`: Contains the TypeScript type definitions for the application.
- `App.tsx`: The main application component.
- `main.tsx`: The entry point of the application, which is configured with Vite.

## Usage
To use the login and registration functionality, follow these steps:

1. Click on the "Login" or "Register" button in the navigation.
2. Fill out the form with the required information.
3. If the form is valid, the application will dispatch the appropriate action to the Redux store, updating the application state.
4. If the login or registration is successful, the user will be redirected to the appropriate page.

## Customization
To customize the application, you can modify the following:

- **Form Validation**: Update the validation rules in the `LoginForm.tsx` and `RegistrationForm.tsx` components to fit your application's requirements.
- **Redux Actions and Reducers**: Modify the action creators and reducers in the `actions/` and `reducers/` directories to handle additional functionality or state changes.
- **User Interface**: Update the styling and layout of the components in the `components/` directory to match the design of your application.
- **Vite Configuration**: Modify the Vite configuration in the `main.tsx` file to customize the build process or add additional plugins.

## Contribution
If you find any issues or have suggestions for improvements, feel free to open a new issue or submit a pull request. Contributions are always welcome!
