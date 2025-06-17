# Brewery
### Description
Brewery is a CLI (Command-Line Interface) application for the Brewery Cafe.This system helps users select products and generates a detailed bill with applicable discounts.


## Table of Contents
- [Description](#description)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Author](#author)
## Features 
 1. Order Item : 
 - Product Search with Validation
 -  Quantity Input with Error Handling
 - Cup Size Selection for Beverages
 - ➕ Add Multiple Products in One Session
 2. Billing 
 - Display Final Bill: Lists all selected products with quantity and cost.
 - Total Calculation: Computes total cost of all selected items.
 - Automatic Discount: Applies a 10% discount if total exceeds ₹1000.
 - Payment Confirmation: Asks for user confirmation before proceeding.
## Tech Stack 

**TypeScript** 
   - TypeScript download and installation guide - visit : https://www.typescriptlang.org/download/


##  Getting Started

### 1. Clone the repository

```bash
git clone git@github.com:shaik-mahammad-rafi01/brewery-cli-app.git
cd brewery-cli-app
```

### 2. Install Dependencies 

  #### Install Node.js using NVM (Node Version Manager)
  - In Terminal, run this command to install NVM
  ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
  ```
##### Install Node.js Using NVM
- With NVM installed, you can now install Node.js. To install the latest LTS (Long Term Support) version, run:
```
nvm install --lts 
```
##### Verify the installation : 
- Once installed, you can check the Node.js version using:
```
node -v
```

#### Install TypeScript 
- Install TypeScript Globally
  - Open your terminal and run the following command to install TypeScript globally:

  ```
  npm install -g typescript
  ```
- Verify that TypeScript is installed by checking its version:
  ```
     tsc -v
  ```


### 3. Run the Project 
- Compile the Typescript files 
```bash 
  tsc 
```
- Run the compiled JavaScript
```
npm start
```
## Author
Shaik Mahammad Rafi  
📧 [rafi.shaik@everest.engineering](mailto:rafi.shaik@everest.engineering)  
