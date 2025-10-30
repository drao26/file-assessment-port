<<<<<<< HEAD
# Land Access Assessment

A modern web application for assessing land access and heritage compliance. Submit scope of work documentation and receive automated assessment reports.

## Prerequisites

Before running this application locally, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)

## Getting Started

Follow these steps to run the application on your local device:

### 1. Clone or Download the Repository

If you haven't already, clone this repository or download the source code to your local machine.

### 2. Install Dependencies

Open a terminal in the project directory and run:

```bash
npm install
```

This will install all required packages and dependencies.

### 3. Start the Development Server

Run the following command to start the local development server:

```bash
npm run dev
```

### 4. Open in Browser

Once the server starts, you'll see a message with the local URL (typically `http://localhost:5173`). 

Open your browser and navigate to the provided URL to access the application.

## Usage

1. Fill in the **Scope of Work** field with project details
2. Enter **Construction Controls** information
3. Upload required documents:
   - HSM Search Report
   - Conservation Plan
   - Heritage Gazette
4. Click **Submit for Assessment** to generate the report
5. Review the assessment results and download the report as needed

## Project Structure

```
.
├── src/
│   ├── App.tsx              # Main application component
│   ├── components/          # React components
│   │   ├── ui/             # shadcn UI components
│   │   └── FileUpload.tsx  # File upload component
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   └── index.css           # Global styles and theme
├── index.html              # HTML entry point
└── package.json            # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **Framer Motion** - Animations
- **Phosphor Icons** - Icon library

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically try the next available port. Check the terminal output for the correct URL.

### Installation Errors

If you encounter errors during `npm install`, try:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Browser Compatibility

This application works best on modern browsers (Chrome, Firefox, Safari, Edge). Ensure your browser is up to date.

## Support

For issues or questions, please refer to the project documentation or contact the development team.
=======
# Introduction 
TODO: Give a short introduction of your project. Let this section explain the objectives or the motivation behind this project. 

# Getting Started
TODO: Guide users through getting your code up and running on their own system. In this section you can talk about:
1.	Installation process
2.	Software dependencies
3.	Latest releases
4.	API references

# Build and Test
TODO: Describe and show how to build your code and run the tests. 

# Contribute
TODO: Explain how other users and developers can contribute to make your code better. 

If you want to learn more about creating good readme files then refer the following [guidelines](https://docs.microsoft.com/en-us/azure/devops/repos/git/create-a-readme?view=azure-devops). You can also seek inspiration from the below readme files:
- [ASP.NET Core](https://github.com/aspnet/Home)
- [Visual Studio Code](https://github.com/Microsoft/vscode)
- [Chakra Core](https://github.com/Microsoft/ChakraCore)
>>>>>>> 716b2f2e465e06ee3bf36768ff17d1e4d15bc705
