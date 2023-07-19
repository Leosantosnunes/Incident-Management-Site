let mongoose = require('mongoose');

//Create Model of Project
const projectModel = mongoose.Schema(
    {
      ptitle: String,
      pdescription: String,
      pdeadline: {
        type: Date,
        get: function (value) {
          // Formatting the date as YYYY-MM-DD
          return value.toISOString().split('T')[0];
        }
      }
    },
    {
      collection: 'OngoingProjects'
    }
  );
  

module.exports = mongoose.model('Project', projectModel);