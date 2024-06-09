# Next.js + StyleX Starter Project

Welcome to your Next.js + StyleX starter project! This repository serves as a starting point for building web applications with Next.js and StyleX. Follow the instructions below to get started.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Learn More](#learn-more)
- [License](#license)

## Getting Started

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/nextjs-stylex-starter.git
cd nextjs-stylex-starter
npm install
```

### Running the Development Server

Run the following command to start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your application running.

### Building for Production

To build the application for production, run:

```bash
npm run build
```

This will create an optimized production build in the `.next` directory.

### Running the Production Build

After building the application, you can start the production server with:

```bash
npm start
```

## Project Structure

This project is structured as follows:

```
/nextjs-stylex-starter
├── src
│   ├── app            # Main application logic and entry point
│   ├── assets         # Static assets like images, fonts, etc.
│   ├── components     # Reusable components
│   ├── configs        # Configuration files
│   ├── contexts       # React context providers
│   ├── styles         # Global styles and StyleX configurations
│   └── utils          # Utility functions and helpers
├── .gitignore         # Git ignore file
├── package.json       # Project dependencies and scripts
├── README.md          # Project documentation
```

### Key Files and Directories

- **`src/app/`**: Contains the main application logic and entry points.
- **`src/assets/`**: Contains static assets such as images, fonts, etc.
- **`src/components/`**: Contains reusable UI components.
- **`src/configs/`**: Contains configuration files for the project.
- **`src/contexts/`**: Contains React context providers.
- **`src/styles/`**: Contains global CSS and StyleX configurations.
- **`src/utils/`**: Contains utility functions and helpers.

## Available Scripts

In the project directory, you can run the following scripts:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm start`: Runs the built app in production mode.
- `npm run lint`: Runs ESLint to check for code quality issues.

## Learn More

To learn more about Next.js and StyleX, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [StyleX Documentation](https://stylex.dev/docs) - Learn how to style your components with StyleX.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
