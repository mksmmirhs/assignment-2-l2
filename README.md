# Mongoose Express CRUD Mastery

To run this server locally follow the following steps

1. Download the [Node.js](https://nodejs.org/en/) and install it. Recommended version 20.9.4 or higher.
2. Clone the project using following command

```
git clone https://github.com/mksmmirhs/assignment-2-l2.git
```

3. cd into directory and run

```
npm install
```

4. Run following command to build the server

```
npm run build
```

5. Start the server

```
npm run start
```

# Useful commands for development:

- Start the development server

```

npm run start:dev

```

- Checks the eslint error

```

npm run lint

```

- Fixing eslint error automatically

```

npm run lint:fix

```

- Prettier to format all JavaScript, TypeScript, and JSON files under the ./src/

```
npm run prettier
```

# Routes:

1.  Create a new user
    > Endpoint: POST /api/users
2.  Retrieve a list of all users
    > Endpoint: GET /api/users
3.  Retrieve a specific user by ID
    > Endpoint: GET /api/users/:userId
4.  Update user information
    > Endpoint: PUT /api/users/:userId
5.  Delete a user
    > Endpoint: DELETE /api/users/:userId
6.  Add New Product in Order
    > Endpoint: PUT /api/users/:userId/orders
7.  Retrieve all orders for a specific user
    > Endpoint: GET /api/users/:userId/orders
8.  Calculate Total Price of Orders for a Specific User
    > Endpoint: GET /api/users/:userId/orders/total-price

- Working server [Link](https://l2-assignment2-five.vercel.app/)
