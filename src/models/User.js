const mongoose = require("mongoose");
const { isEmail } = require('validator');

/**
 * @openapi
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          example: "5fc9d33b8f8f8f8f8f8f8f8f"
 *        userName:
 *          type: string
 *          example: "juan123"
 *        email:
 *          type: string
 *          example: "juan@test.com"
 *        phone:
 *          type: number
 *          example: 1234567890
 *        firstName:
 *          type: string
 *          example: "Juan"
 *        lastName:
 *          type: string
 *          example: "Pérez"
 *        country:
 *          type: string
 *          example: "México"
 *        city:
 *          type: string
 *          example: "Ciudad de México"
 */
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, 'Username is required'],
    trim: true,
    unique: true,
    minlength: [4, 'Username must be at least 4 characters long']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    validate: [isEmail, 'Enter a valid email']
  },
  phone: {
    type: Number,
    required: [true, 'Phone number is required'],
    min: [1000000000, 'Phone number should be at least 10 digits']
  },
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true
  },
  country: {
    type: String,
  },
  city: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
