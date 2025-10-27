# System Architecture

## Overview
DevOps Simulator follows a **microservices architecture** designed for high availability and flexibility.  
It supports both **production** and **development** environments.  
- **Production**: optimized for performance, security, and scalability.  
- **Development**: simplified for local testing and container-based workflows (Docker).

---

## Components

### 1. Application Server
- **Technology**: Node.js + Express  
- **Production Port**: 8080  
- **Development Port**: 3000  
- **Scaling**: Horizontal auto-scaling (production only)  
- **Development Features**: Hot reload and debug mode  

---

### 2. Database Layer
- **Database**: PostgreSQL 14  
- **Production**: Master-slave replication with automated backups  
- **Development**: Single local instance with seed data  

---

### 3. Monitoring System
- **Production**: Prometheus + Grafana with email alerts  
- **Development**: Console logging with verbose output  
- **Metrics Monitored**: CPU, Memory, Disk, Network  

---

## Deployment Strategy
- **Production**: Automated CI/CD pipeline via GitHub Actions and Kubernetes deployment.  
- **Development**: Docker Compose for local container setup and rapid iteration.  
