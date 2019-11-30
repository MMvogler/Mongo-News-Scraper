var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var noteSchema = new Schema({
    
    title: String,
    
    body: String
});

// This creates our model from the above schema, using mongoose's model method
var Note = mongoose.model("Note", noteSchema);

// Export the Article model
module.exports = Note;
