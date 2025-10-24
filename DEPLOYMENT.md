# Land Access Assessment - Local Deployment Instructions

This document provides step-by-step instructions for deploying and running the Land Access Assessment application locally.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18 or higher)
  - Download from: https://nodejs.org/
  - Verify installation: `node --version`

- **npm** (comes with Node.js)
  - Verify installation: `npm --version`

## Installation Steps

### 1. Navigate to the Project Directory

Open your terminal/command prompt and navigate to the project root directory:

```bash
cd /workspaces/spark-template
```

Or if you cloned the repository to a different location:

```bash
cd /path/to/spark-template
```

### 2. Install Dependencies

Install all required npm packages:

```bash
npm install
```

This will install all dependencies listed in `package.json`, including:
- React and React DOM
- TypeScript
- Vite (development server)
- Tailwind CSS
- shadcn/ui components
- Phosphor Icons
- And other required libraries

The installation process may take a few minutes depending on your internet connection.

### 3. Start the Development Server

Once the dependencies are installed, start the development server:

```bash
npm run dev
```

You should see output similar to:

```
  VITE v6.3.5  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### 4. Access the Application

Open your web browser and navigate to:

```
http://localhost:5173
```

The Land Access Assessment application should now be running!

## Using the Application

### Step 1: Form Input Screen

1. **Scope of Work**: Enter a description of the work to be performed
2. **Construction Controls**: Specify the construction controls in place
3. **File Uploads**: Upload three required documents:
   - HSM Search Report (accepts PDF, DOC, DOCX)
   - Conservation Plan (accepts PDF, DOC, DOCX)
   - Heritage Gazette (accepts PDF, DOC, DOCX)

4. Click **"Submit for Assessment"** when all fields are complete

### Step 2: Assessment Results Screen

After submission, you'll see:
- **Assessment Report**: Significance assessment details
- **Approval Required**: Yes/No badge indicating approval status
- **Assessment Details**: Comprehensive breakdown of the assessment
- **Action Buttons**:
  - **Generate Assessment Report**: Downloads the formal report
  - **Q&A**: Access questions and answers feature
  - **Back**: Return to the form to modify inputs

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically try the next available port (5174, 5175, etc.). Check the terminal output for the actual URL.

### Dependencies Installation Fails

If `npm install` fails:

1. Clear npm cache:
   ```bash
   npm cache clean --force
   ```

2. Delete `node_modules` folder and `package-lock.json`:
   ```bash
   rm -rf node_modules package-lock.json
   ```

3. Try installing again:
   ```bash
   npm install
   ```

### Application Won't Start

1. Ensure Node.js version is 18 or higher:
   ```bash
   node --version
   ```

2. Check if all files are present:
   - `index.html` in root
   - `src/App.tsx`
   - `src/main.tsx`
   - `package.json`

3. Try stopping the server (Ctrl+C) and starting again

### File Upload Issues

The file upload component accepts:
- PDF files (.pdf)
- Word documents (.doc, .docx)
- Maximum file size: 10MB per file

## Building for Production

To create a production-ready build:

```bash
npm run build
```

This will create a `dist` folder with optimized static files that can be deployed to any web server.

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
spark-template/
├── index.html                 # Entry HTML file
├── package.json              # Dependencies and scripts
├── src/
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   ├── index.css            # Global styles and theme
│   ├── components/
│   │   ├── FileUpload.tsx   # File upload component
│   │   └── ui/              # shadcn UI components
│   ├── hooks/               # Custom React hooks
│   └── lib/                 # Utility functions
├── PRD.md                   # Product requirements document
└── DEPLOYMENT.md            # This file
```

## Technology Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui v4
- **Icons**: Phosphor Icons
- **State Management**: React hooks + KV storage
- **Notifications**: Sonner (toast notifications)

## Support

For issues or questions:
1. Check the terminal/console for error messages
2. Review the PRD.md file for design decisions
3. Verify all prerequisites are installed correctly
4. Ensure you're in the correct project directory

## Stopping the Server

To stop the development server:
- Press `Ctrl + C` in the terminal where the server is running
- Or close the terminal window

---

**Note**: This application uses mock data for assessment generation. In a production environment, you would integrate with a real backend API for processing assessments.
