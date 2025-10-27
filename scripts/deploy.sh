#!/bin/bash
set -e

echo "==== DevOps Simulator Deployment Script ===="

read -p "Enter deployment environment (production/development): " DEPLOY_ENV

if [ "$DEPLOY_ENV" = "production" ]; then
  echo "Deploying to Production..."
  DEPLOY_REGION="us-east-1"
  APP_PORT=8080
  echo "Environment: $DEPLOY_ENV"
  echo "Region: $DEPLOY_REGION"
  echo "Starting production server..."
  # Example production command
  python3 manage.py runserver 0.0.0.0:$APP_PORT

elif [ "$DEPLOY_ENV" = "development" ]; then
  echo "Deploying to Development environment..."
  DEPLOY_MODE="docker-compose"
  APP_PORT=3000
  echo "Environment: $DEPLOY_ENV"
  echo "Mode: $DEPLOY_MODE"
  echo "Installing dependencies..."
  npm install
  echo "Starting development server..."
  npm start

else
  echo "Invalid environment! Please enter production or development."
  exit 1
fi

echo "==== Deployment Completed Successfully ===="
