// var mongoose = require("mongoose");

// // Save a reference to the Schema constructor
// var Schema = mongoose.Schema;

// // Using the Schema constructor, create a new UserSchema object
// // This is similar to a Sequelize model
// var articleSchema = new Schema({
  
//   title: {
//     type: String,
//     required: true
//   },

//   summary: {
//     type: String,
//     required: true
//   },

//   note: {
//     type: Schema.Types.ObjectId,
//     ref: "Note"
//   }

// });

// // This creates our model from the above schema, using mongoose's model method
// var Article = mongoose.model("Article", articleSchema);

// // Export the Article model
// module.exports = Article;
