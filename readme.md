# Amazon Scraper

## Description

This project utilizes Playwright to scrape data from Amazon. It specifically searches for products by name, selects the best sellers based on user input, and then captures and logs information about the top results and their reviews.

## Prerequisites

Before setting up the project, ensure you have the following:
- **Node.js**: Version 20.x or higher, which can be downloaded from [Node.js official website](https://nodejs.org/).

## Installation

To get started with the Amazon Scraper, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/david-ghulijanyan/scrapper.git
   cd your-repository-folder
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Compile the TypeScript code to JavaScript:
   ```bash
   npm run build
   ```

## Usage

Run the scraper using the following command:

```bash
npm start
```

This command will initiate the script, which navigates to Amazon, performs a search based on the specified query, sorts the results by 'Best Sellers', selects a product, and logs the reviews.

## Configuration

To change the search query or adjust scraping behavior, modify the `src/index.ts` file.

## Features

- **Playwright Automation**: Utilizes Playwright for browser automation, providing robust control over Chrome, Firefox, and WebKit with a single API.
- **Dynamic Interaction**: Handles dynamic content like pop-ups, overlays, and async-loaded elements effectively.
- **Custom Delays**: Implements custom delays between actions to mimic human behavior and reduce the likelihood of being detected as a bot.

# task-1.js: Calculate Total Meeting Time

The function calculateTotalMeetingTime is designed to calculate the total time required to hold personal meetings among a given number of participants using multiple rooms. It considers the number of participants, available rooms, and the duration of each meeting to determine the total time required for all participants to meet each other.

# task-3.sql: SQL Query for Geolocation-Based Address Search

The SQL script provided utilizes the Haversine formula to calculate the distance between a central point and each address stored in the database. It filters and returns addresses that are within a specified radius from a given central location. This approach is useful for applications requiring proximity-based address searches without relying on external libraries like PostGIS.