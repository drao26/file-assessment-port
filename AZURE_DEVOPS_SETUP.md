# Azure DevOps Setup Guide for React App Deployment

## Prerequisites
1. Azure subscription
2. Azure DevOps organization and project
3. Azure App Service (Web App) created

## Step-by-Step Setup

### 1. Create Azure App Service
```bash
# Using Azure CLI (optional - you can also use Azure Portal)
az group create --name rg-file-assessment --location "East US"
az appservice plan create --name plan-file-assessment --resource-group rg-file-assessment --sku B1 --is-linux
az webapp create --name your-unique-app-name --resource-group rg-file-assessment --plan plan-file-assessment --runtime "NODE|18-lts"
```

### 2. Configure Azure DevOps Service Connection
1. Go to Azure DevOps → Project Settings → Service connections
2. Click "New service connection"
3. Select "Azure Resource Manager"
4. Choose "Service principal (automatic)"
5. Select your subscription and resource group
6. Name it (e.g., "azure-file-assessment-connection")
7. Save the connection name for the pipeline

### 3. Update Pipeline Variables
Edit `azure-pipelines.yml` and update:
- `azureServiceConnectionId`: Your service connection name
- `webAppName`: Your Azure Web App name
- `environmentName`: Your deployment environment name

### 4. Create Environment in Azure DevOps
1. Go to Pipelines → Environments
2. Click "New environment"
3. Name it "production" (or match your environmentName variable)
4. Select "None" for resource type
5. Click "Create"

### 5. Repository Setup
1. Push your code to Azure Repos or connect your GitHub repository
2. Ensure `azure-pipelines.yml` is in the repository root
3. Go to Pipelines → New pipeline
4. Select your repository
5. Choose "Existing Azure Pipelines YAML file"
6. Select `azure-pipelines.yml`
7. Click "Run"

### 6. Required App Settings (if needed)
Add these in Azure Portal → Your Web App → Configuration → Application Settings:
- `WEBSITE_NODE_DEFAULT_VERSION`: 18-lts
- `SCM_DO_BUILD_DURING_DEPLOYMENT`: false (since we're building in pipeline)

## Pipeline Features
- Triggers on main and develop branches
- Node.js 18.x environment
- Installs dependencies with `npm ci`
- Builds the React app with `npm run build`
- Archives the dist folder
- Deploys to Azure App Service with proper SPA configuration
- Uses PM2 to serve the static files with SPA routing support

## Troubleshooting
- Ensure your Web App is configured for Linux and Node.js 18-lts
- Check that the service connection has proper permissions
- Verify the Web App name matches exactly
- Monitor pipeline logs for any build or deployment errors