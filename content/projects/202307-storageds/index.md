---
title: "Storageds temp file hosting"
date: 2023-07-17T12:14:12+08:00
tags: ["Html/Css", "Aws","Node.js"]
summary: "Free temporary file hosting for everyone! AWS Cloud"
slug: storageds
description: "Free temporary file hosting for everyone!"
---

---


<div style="display:flex;justify-content:center">
  <a style="margin-left:5px"  target="_blank" href="https://storageds.cloud/">Storage-Ds</a>
</div>
I used this when I didn't have discord nitro, so I could send files to discord even if I exceeded the file size limit

# StorageDS

StorageDS is a platform for temporary file storage, developed using Mustache, Node.js, Express, Typescript, PostgreSQL, and AWS S3. You can access the fullstack application [here](https://storageds.cloud/). For the source code, please visit the [Git Repo](https://github.com/xDaswx/custom-file-storage).

## Overview

StorageDS allows users to temporarily store files securely. It features dynamic frontend development using the Mustache Engine and robust backend integration with Node.js and AWS S3 for scalable file storage. Additionally, PostgreSQL is used for database management, and file flow control is achieved with Lifecycle present in the S3 Bucket.

## Technologies Used

- **Frontend**:
  - Mustache Engine
  - Dynamic frontend development

- **Backend**:
  - Node.js
  - Express
  - Typescript

- **Database**:
  - PostgreSQL

- **File Storage**:
  - AWS S3
  - File flow control with Lifecycle in S3 Bucket

## Project Structure

The project consists of several main components:

1. **Frontend**:
   - Dynamic frontend development using the Mustache Engine.
   - Static assets are served using Express and stored in the `public` directory.

2. **Backend**:
   - Built with Node.js and Express.
   - Utilizes Typescript for improved maintainability and scalability.
   - Endpoints for file upload, retrieval, and deletion are defined in the `routes` folder.
   - Middleware for handling file upload validation and error handling.

3. **Database**:
   - PostgreSQL is used to manage data related to file uploads, user sessions, etc.

4. **File Storage**:
   - AWS S3 integration for scalable file storage.
   - Utilizes AWS SDK to interact with S3 buckets.
   - Lifecycle policies are implemented for efficient file flow control.

## How to Run Locally

1. **Clone the Repository**:
   ```bash
   git clone git_repo_link_here
   cd project_directory
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Environment Variables**:
   - Ensure you have the necessary environment variables set up, including those required for AWS S3, PostgreSQL connection, etc. Refer to the `.env.example` file for guidance.

4. **Run the Application**:
   ```bash
   npm start
   ```

5. **Access the Application**:
   - Once the application is running locally, you can access it via your web browser at the specified port.

## Endpoints

- **Upload File**:
  - `POST /upload`: Endpoint to upload files. Middleware ensures file validation and error handling.

- **Remove File**:
  - `GET /remove/:id`: Endpoint to delete a file based on its ID.

- **View File**:
  - `GET /media/:id`: Endpoint to view/download a file based on its ID.

## Conclusion

StorageDS provides a reliable platform for temporary file storage, leveraging modern technologies such as Mustache, Node.js, Express, PostgreSQL, and AWS S3. Whether you're looking to store images, videos, or other files securely, StorageDS has you covered.

---
