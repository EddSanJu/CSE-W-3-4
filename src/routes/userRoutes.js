const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

/**
 * @openapi
 * /api/users:
 *  get:
 *   tags:
 *     - Users
 *   summary: Retrieve a list of users
 *   description: Fetch all the user resources in the DB.
 *   responses:
 *     200:
 *       description: A list of users.
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 userName:
 *                   type: string
 *                   example: "user123"
 *                 email:
 *                   type: string
 *                   example: "user@example.com"
 *                 phone:
 *                   type: number
 *                   example: 1234567890
 *                 firstName:
 *                   type: string
 *                   example: "John"
 *                 lastName:
 *                   type: string
 *                   example: "Doe"
 *                 country:
 *                   type: string
 *                   example: "USA"
 *                 city:
 *                   type: string
 *                   example: "New York"
 *     500:
 *       description: Internal server error
 */
router.get("/users", userController.getAllUsers);

/**
 * @openapi
 * /api/users/{id}:
 *  get:
 *   tags:
 *     - Users
 *   summary: Retrieve a specific user
 *   description: Fetch a single user resource by its unique ID.
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *        description: Unique ID of the user resource
 *   responses:
 *     200:
 *       description: A specific user resource
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userName:
 *                 type: string
 *                 example: "user123"
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               phone:
 *                 type: number
 *                 example: 1234567890
 *               firstName:
 *                 type: string
 *                 example: "John"
 *               lastName:
 *                 type: string
 *                 example: "Doe"
 *               country:
 *                 type: string
 *                 example: "USA"
 *               city:
 *                 type: string
 *                 example: "New York"
 *     404:
 *       description: User not found
 *     500:
 *       description: Internal server error
 */
router.get("/users/:id", userController.getUserById);

/**
 * @openapi
 * /api/create-user:
 *  post:
 *   tags:
 *     - Users
 *   summary: Create a new user
 *   description: Creates a new user resource in the DB.
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             userName:
 *               type: string
 *               example: "newuser123"
 *             email:
 *               type: string
 *               example: "newuser@example.com"
 *             phone:
 *               type: number
 *               example: 9876543210
 *             firstName:
 *               type: string
 *               example: "Jane"
 *             lastName:
 *               type: string
 *               example: "Smith"
 *             country:
 *               type: string
 *               example: "Canada"
 *             city:
 *               type: string
 *               example: "Toronto"
 *   responses:
 *     201:
 *       description: User created successfully
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: "User created successfully"
 *     400:
 *       description: Bad request
 *     500:
 *       description: Internal server error
 */
router.post("/create-user", userController.createUser);

/**
 * @openapi
 * /api/update-user/{id}:
 *  put:
 *   tags:
 *     - Users
 *   summary: Update an existing user
 *   description: Updates an existing user resource in the DB by its ID.
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *        description: Unique ID of the user to update
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             userName:
 *               type: string
 *               example: "updateduser123"
 *             email:
 *               type: string
 *               example: "updateduser@example.com"
 *             phone:
 *               type: number
 *               example: 9876543210
 *             firstName:
 *               type: string
 *               example: "James"
 *             lastName:
 *               type: string
 *               example: "Brown"
 *             country:
 *               type: string
 *               example: "UK"
 *             city:
 *               type: string
 *               example: "London"
 *   responses:
 *     200:
 *       description: User updated successfully
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: "User updated successfully"
 *     404:
 *       description: User not found
 *     400:
 *       description: Bad request
 *     500:
 *       description: Internal server error
 */

router.put("/update-user/:id", userController.updateUser);

/**
 * @openapi
 * /api/delete-user/{id}:
 *  delete:
 *   tags:
 *     - Users
 *   summary: Delete an existing user
 *   description: Deletes an existing user resource from the DB by its ID.
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *        description: Unique ID of the user to delete
 *   responses:
 *     200:
 *       description: User deleted successfully
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: "User deleted successfully"
 *     404:
 *       description: User not found
 *     500:
 *       description: Internal server error
 */
router.delete("/delete-user/:id", userController.deleteUser);

module.exports = router;
