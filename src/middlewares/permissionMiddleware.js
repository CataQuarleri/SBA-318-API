const store = require('store2');
const error = require('./errorHandling');

function permission(req, res, next){
    let petCreated = store.get('petInfo')
    if(!petCreated){
        next(error(401, 'You are not authorize to see the cute pets. You must first create your own pet'))
    } else {
        next()
    }
}
module.exports = permission