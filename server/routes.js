/*=========== EXTERNAL MODULES ===========*/

/*=========== INTERNAL MODULES ===========*/
const { salesData } = require('./../database/salesData.js');


/*=========== ROUTE HANDLERS ===========*/
const getData = (req, res) => {
  salesData()
    .then(data => res.json(data))
    .catch(err => console.error(err))
}

/*=========== EXPORTS ===========*/
module.exports = {
  getData,
}