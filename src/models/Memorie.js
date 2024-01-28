const mongoose = require('mongoose');

/**
 * @openapi
 * components:
 *  schemas:
 *    Memorie:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          example: "5fc9a79b5c295b9c3b6a468b"
 *        title:
 *          type: string
 *          example: "Mi Viaje a París"
 *        content:
 *          type: string
 *          example: "Un recuerdo inolvidable en la Torre Eiffel..."
 *        creationDate:
 *          type: date
 *          example: "2023-08-15"
 *        imgUrl:
 *          type: string
 *          example: "http://test.com/mi-foto.jpg"
 */
const memorieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  content: {
    type: String,
    required: [true, 'Content is required'],
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
  imgUrl: {
    type: String,
    match: [/^https?:\/\/.+/, 'Please enter a valid URL'] 
  }
});

module.exports = mongoose.model('Memorie', memorieSchema);