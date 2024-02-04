const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

/**
 * @openapi
 * /auth/github:
 *  get:
 *    tags:
 *      - Auth
 *    summary: Start authentication with GitHub
 *    description: Redirects the user to log in with GitHub.
 *    responses:
 *      302:
 *        description: Redirected to GitHub for authentication.
 */

router.get('/github', authController.githubAuth);

/**
 * @openapi
 * /auth/github/callback:
 *  get:
 *    tags:
 *      - Auth
 *    summary: GitHub authentication callback
 *    description: Callback route after GitHub authentication.
 *    responses:
 *      200:
 *        description: Successful authentication, user redirected.
 *      401:
 *        description: Authentication failed.
 */
router.get('/github/callback', authController.githubAuthCallback, authController.githubCallback);

/**
 * @openapi
 * /auth/login:
 *  post:
 *    tags:
 *      - Auth
 *    summary: Log in
 *    description: Logs a user into the system.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: "user@example.com"
 *              password:
 *                type: string
 *                example: "password123"
 *    responses:
 *      200:
 *        description: Successfully logged in.
 *      401:
 *        description: Incorrect email or password.
 */
router.post('/login', authController.login);

/**
 * @openapi
 * /auth/logout:
 *  get:
 *    tags:
 *      - Auth
 *    summary: Log out
 *    description: Logs out the current user.
 *    responses:
 *      200:
 *        description: Successfully logged out.
 */
router.get('/logout', authController.logout);

module.exports = router;