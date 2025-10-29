# Azure Web App deployment configuration
# This file contains the necessary steps to deploy your React application to Azure App Service

# Prerequisites:
# 1. Create an Azure Web App in the Azure portal
# 2. Download the publish profile from your Azure Web App
# 3. Add the publish profile as a secret named 'AZURE_WEBAPP_PUBLISH_PROFILE' in your GitHub repository

# Instructions:
# 1. Replace 'your-app-name' in the workflow file with your actual Azure Web App name
# 2. Ensure your Azure Web App is configured for Node.js
# 3. Set up the GitHub repository secrets as described below

# Required GitHub Secrets:
# - AZURE_WEBAPP_PUBLISH_PROFILE: Download from Azure portal > Your Web App > Get publish profile

# Optional: Alternative deployment using Service Principal
# If you prefer using a service principal instead of publish profile:
# - AZURE_CREDENTIALS: JSON object with subscription details
# - AZURE_WEBAPP_NAME: Your Azure Web App name
# - AZURE_RESOURCE_GROUP: Your resource group name

# Azure Web App Configuration:
# - Platform: Linux or Windows
# - Runtime stack: Node.js 18 LTS
# - App settings may need:
#   - WEBSITE_NODE_DEFAULT_VERSION: 18-lts
#   - SCM_DO_BUILD_DURING_DEPLOYMENT: true