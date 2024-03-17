---
title: "Liris Art Collection"
date: 2024-02-04T20:36:05+08:00
lastmod: 
tags: ["Html/Css","Node.js", "Myphpadmin","MySQL"]
summary: "This is a simple website for Liris, a singer who sings very well and makes beautiful drawings.
There are simple implementations such as using the YouTube API"
slug: liris
description: "This is a simple website for Liris, a singer who sings very well and makes beautiful drawings.
There are simple implementations such as using the YouTube API"
---

<div style="display:flex;justify-content:center">
  <a style="margin-left:5px"  target="_blank" href="https://liris-art.art/">Liris-art</a>
</div>

## Liris-Art 

This project is a portfolio for Liris, showcasing her drawings, videos, and covers all in one place. The website includes a homepage where highlights of the portfolio are presented such as pixel art drawings on a canvas and specific sections to view drawings and videos.

## Technologies Used

- **Frontend**:
  - Nginx was used to serve frontend static files configured on the host.
  - Canvas was employed to render pixel art drawings interactively.
  - Integration with Google Cloud to display videos hosted on YouTube.
  - JavaScript was used to create interactivity and dynamism on the pages.

- **Backend**:
  - Node.js with Express was used to develop the backend server.
  - MySQL was the chosen database to store and manage website data.
  - API endpoints: `/drawings` to access drawings and `/ping` to test server connection.

- **phpMyAdmin**:
  - phpMyAdmin interface to manage MySQL database.

## Local Setup and Execution

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/xDaswx/liris-art.art.git
   cd liris-art
   ```

2. **Check index.html in a web browser**.

4. **Run the Backend**:
   Note: Set necessary environment variables to connect to MySQL database and other specific configurations, some adjustments are required.
   ```bash
   git clone -b backend https://github.com/xDaswx/liris-art.art.git
   cd api
   npm i
   npm run start
   ```

## API Endpoints (https://api.liris-art.art)

- **Drawings**:
  - `GET /drawings`: Returns all client's drawings.

- **Ping**:
  - `GET /ping`: Returns a "pong" status to check server availability.

## Access

- **Homepage**: [https://liris-art.art/](https://liris-art.art/)
- **Drawings**: [https://api.liris-art.art/drawings](https://api.liris-art.art/drawings)
- **Pong**: [https://api.liris-art.art/ping](https://api.liris-art.art/ping)

---