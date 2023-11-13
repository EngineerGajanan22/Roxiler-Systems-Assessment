# Product Transaction Management - Frontend

This frontend project is designed to interact with the backend APIs created for managing and analyzing product transactions. The frontend provides a user interface with a table and charts based on the fetched data from the backend.

## Usage

To use the frontend application, follow the instructions below:

1. Ensure the backend API is deployed and accessible.
2. Clone the frontend repository to your local machine.
3. Install the necessary dependencies using the package manager of your choice (e.g., npm or yarn).

```bash
npm install
# or
yarn install

Features
Transactions Table
Select Month Dropdown:

Displays January to December months as options.
Defaults to March month.
Allows selecting a different month to display transactions.
Transactions List:

Utilizes the transactions listing API to list transactions in a table.
Displays transactions of the selected month irrespective of the year using the API.
Search transaction box filters transactions based on title/description/price using the API.
Clears the search box to display the initial list of transactions for the selected month using the API.
Next and Previous buttons load the next and previous page data from the API.
Transactions Statistics
Displays total sale amount, total sold items, and total not sold items for the selected month.
Fetches data from the created API to populate the statistics box.
Transactions Bar Chart
Displays a bar chart showing the price range and the number of items in that range for the selected month.
Applies the selected month from the dropdown (above the table) to fetch data from the API.
Feel free to explore and interact with the frontend application to analyze product transactions. If you have any questions or issues, please refer to the documentation or contact the project maintainers.

Enjoy using the product transaction management system!

Deployment
The frontend application is deployed and can be accessed at xyz.com.
