# :computer: Assessment

## :page_facing_up: Prompt:

> A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.
> 
> A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction
>
> (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).
> 
> Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total.
> 
> - [x] Use React JS (do not use TypeScript)
> - [x] Simulate an asynchronous API call to fetch data
> - [x] Make up a data set to best demonstrate your solution
> - [x] Check solution into GitHub

## How to Use:

 1. Fork and clone the repo
 1. Install Dependencies using either `npm install` or `yarn add`
 1. Create local `.env` file with `PORT` and `SERVER_PORT` variables set to the local ports you would like to run the client and server on
 1. Start the server using `npm run server:dev` or `yarn server:dev`
 1. Start the front end client using `npm run build` or `yarn build`
 1. Clicking the "Import Records" button will perform a pseudo async call to the API to retrieve the client's previous sales records and points from the database and, upon the completion of the API call, calculate the total number of points
