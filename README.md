<<<<<<< HEAD
# Land Access Assessment Application

A modern web application for assessing land access and heritage compliance. Submit scope of work documentation and receive automated assessment reports.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Git Authentication Setup](#git-authentication-setup)
- [Local Development](#local-development)
- [Deployment Pipeline](#deployment-pipeline)
- [Verification](#verification)
- [Troubleshooting](#troubleshooting)
- [Project Structure](#project-structure)

## Prerequisites

Before getting started, ensure you have the following installed:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download here](https://git-scm.com/)
- **Azure DevOps access** to the project

## Getting Started

### 1. Clone the Repository from Azure DevOps

Clone this repository from Azure DevOps to your local machine:

```bash
git clone https://dev.azure.com/9025-CICD/APP-3594-DLZ011-App/_git/Land-Access-App
cd Land-Access-App
```

### 2. Git Authentication Setup

You'll need to authenticate with Azure DevOps to clone and push code. Choose one of the following methods:

#### Option A: Personal Access Token (PAT) - Recommended

1. **Create a PAT in Azure DevOps:**
   - Go to `https://dev.azure.com/9025-CICD`
   - Click your profile picture → "Personal access tokens"
   - Click "New Token"
   - Configure:
     - **Name**: "Local Development"
     - **Organization**: `9025-CICD`
     - **Scopes**: Select "Code (read & write)"
   - Click "Create" and **copy the token immediately**

2. **Use the PAT for authentication:**
   - **Username**: Your email address or `pat`
   - **Password**: The Personal Access Token you created

#### Option B: Telstra Corporate Credentials

If your organization allows it, use your standard Telstra login:
- **Username**: Your Telstra email address
- **Password**: Your Telstra password

#### Option C: Embed PAT in Remote URL (Alternative)

If credential prompts don't work, you can embed the PAT directly:

```bash
git remote set-url origin https://pat:YOUR_PAT_TOKEN@dev.azure.com/9025-CICD/APP-3594-DLZ011-App/_git/Land-Access-App
```

## Local Development

### 1. Install Dependencies

Navigate to the project directory and install dependencies:

```bash
npm install
```

### 2. Start Development Server

Run the development server:

```bash
npm run dev
```

### 3. Open in Browser

The application will be available at `http://localhost:5173` (or the next available port).

## Deployment Pipeline

This project uses Azure DevOps pipelines for automated deployment to Azure App Service.

### Pipeline Configuration

The pipeline is configured in `azure-pipelines.yml` and includes:

- **Service Connection**: `APP-3594-DLZ011_np`
- **Target App Service**: `tcg-npae-a3594s001-app091`
- **Resource Group**: `tcg-npae-a3594s001-rg004`
- **Build**: React/Vite application
- **Deployment**: Azure App Service (Linux)

### Setting Up the Pipeline

1. **Navigate to Azure DevOps:**
   - Go to `https://dev.azure.com/9025-CICD/APP-3594-DLZ011-App`

2. **Create New Pipeline:**
   - Go to Pipelines → New Pipeline
   - Select "Azure Repos Git"
   - Choose your repository
   - Select "Existing Azure Pipelines YAML file"
   - Point to `/azure-pipelines.yml`

3. **Configure and Run:**
   - Review the pipeline configuration
   - Click "Run" to start the deployment

### Manual Deployment Trigger

To manually trigger a deployment:

1. Make changes to your code
2. Commit and push to the `main` branch:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```
3. The pipeline will automatically trigger and deploy to Azure

## Verification

After deployment, verify the application is working:

### 1. Check Pipeline Status

- Go to Azure DevOps → Pipelines
- Verify the latest run completed successfully
- Check both Build and Deploy stages

### 2. Test the Deployed Application

- Navigate to: `https://tcg-npae-a3594s001-app091.azurewebsites.net`
- Verify the application loads correctly
- Test key functionality:
  - Form submission
  - File uploads
  - Report generation

### 3. Monitor Application Logs

If issues occur, check Azure App Service logs:
- Go to Azure Portal
- Navigate to your App Service: `tcg-npae-a3594s001-app091`
- Check "Log stream" for real-time logs
- Review "App Service logs" for detailed information

## Troubleshooting

### Common Issues

#### Authentication Errors
- **Problem**: Git authentication fails
- **Solution**: Use Personal Access Token (see Git Authentication Setup)

#### Pipeline Failures
- **Problem**: Pipeline fails during build
- **Solution**: Check Node.js version compatibility and dependencies

#### Deployment Issues
- **Problem**: App Service deployment fails
- **Solution**: Verify service connection permissions and App Service configuration

#### Port Conflicts (Local Development)
- **Problem**: Port 5173 already in use
- **Solution**: Vite will automatically use the next available port

#### Installation Errors
- **Problem**: npm install fails
- **Solution**: Clear cache and reinstall:
  ```bash
  npm cache clean --force
  rm -rf node_modules package-lock.json
  npm install
  ```

## Project Structure

```
.
├── azure-pipelines.yml      # Azure DevOps deployment pipeline
├── src/
│   ├── App.tsx              # Main application component
│   ├── components/          # React components
│   │   ├── ui/             # shadcn UI components
│   │   └── FileUpload.tsx  # File upload component
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   └── index.css           # Global styles and theme
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
└── README.md               # This file
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **Azure App Service** - Hosting platform
- **Azure DevOps** - CI/CD pipeline

## Support

For issues or questions:
1. Check this README for troubleshooting steps
2. Review Azure DevOps pipeline logs
3. Contact the development team
4. Create an issue in the Azure DevOps project

## Contributing

1. Clone the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Test locally with `npm run dev`
5. Commit changes: `git commit -m "Add your feature"`
6. Push to branch: `git push origin feature/your-feature`
7. Create a Pull Request in Azure DevOps
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
