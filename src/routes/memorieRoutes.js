const express = require("express");
const router = express.Router();
const memorieController = require("../controllers/memorieController");

/**
 * @openapi
 * /api/memories:
 *  get:
 *   tags:
 *     - Memories
 *   summary: Retrieve a list of memories
 *   description: Fetch all the memories resources in the DB.
 *   responses:
 *     200:
 *       description: A list of memories.
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   example: "My Summer Vacation"
 *                 content:
 *                   type: string
 *                   example: "It was a wonderful experience visiting the beach..."
 *                 creationDate:
 *                   type: string
 *                   format: date
 *                   example: "2023-07-21"
 *                 imgUrl:
 *                   type: string
 *                   example: "http://example.com/myimage.jpg"
 *     500:
 *       description: Internal server error
 */
router.get("/memories", memorieController.getAllMemories);

/**
 * @openapi
 * /api/memories/{id}:
 *  get:
 *   tags:
 *     - Memories
 *   summary: Retrieve a specific memorie
 *   description: Fetch a single memorie resource by its unique ID.
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *        description: Unique ID of the memorie resource
 *   responses:
 *     200:
 *       description: A specific memorie resource
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "My Summer Vacation"
 *               content:
 *                 type: string
 *                 example: "It was a wonderful experience visiting the beach..."
 *               creationDate:
 *                 type: string
 *                 format: date
 *                 example: "2023-07-21"
 *               imgUrl:
 *                 type: string
 *                 example: "http://example.com/myimage.jpg"
 *     404:
 *       description: Memorie not found
 *     500:
 *       description: Internal server error
 */
router.get("/memories/:id", memorieController.getMemorieById);

/**
 * @openapi
 * /api/create-memorie:
 *  post:
 *   tags:
 *     - Memories
 *   summary: Create a new memorie
 *   description: Creates a new memorie resource in the DB.
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *               example: "My Summer Vacation"
 *             content:
 *               type: string
 *               example: "It was a wonderful experience visiting the beach..."
 *             creationDate:
 *               type: string
 *               format: date
 *               example: "2023-07-21"
 *             imgUrl:
 *               type: string
 *               example: "http://example.com/myimage.jpg"
 *   responses:
 *     201:
 *       description: Memorie created successfully
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: "Memorie created successfully"
 *     400:
 *       description: Bad request
 *     500:
 *       description: Internal server error
 */

router.post("/create-memorie", memorieController.createMemorie);

/**
 * @openapi
 * /api/update-memorie/{id}:
 *  put:
 *   tags:
 *     - Memories
 *   summary: Update an existing memorie
 *   description: Updates an existing memorie resource in the DB by its ID.
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *        description: Unique ID of the memorie to update
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *               example: "My Winter Adventure"
 *             content:
 *               type: string
 *               example: "Exploring the snowy mountains was exhilarating..."
 *             creationDate:
 *               type: string
 *               format: date
 *               example: "2023-12-13"
 *             imgUrl:
 *               type: string
 *               example: "http://example.com/newimage.jpg"
 *   responses:
 *     200:
 *       description: Memorie updated successfully
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: "Memorie updated successfully"
 *     404:
 *       description: Memorie not found
 *     400:
 *       description: Bad request
 *     500:
 *       description: Internal server error
 */
router.put("/update-memorie/:id", memorieController.updateMemorie);

/**
 * @openapi
 * /api/delete-memorie/{id}:
 *  delete:
 *   tags:
 *     - Memories
 *   summary: Delete an existing memorie
 *   description: Deletes an existing memorie resource from the DB by its ID.
 *   parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *        description: Unique ID of the memorie to delete
 *   responses:
 *     200:
 *       description: Memorie deleted successfully
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: "Memorie deleted successfully"
 *     404:
 *       description: Memorie not found
 *     500:
 *       description: Internal server error
 */
router.delete("/delete-memorie/:id", memorieController.deleteMemorie);

module.exports = router;
