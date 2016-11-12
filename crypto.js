const crypto = require('crypto');

const cryptoConfig = function(secret){
    const hash = crypto.createHmac('sha256', secret)
                    //sets the secret key to generate the hash 
                   .update('cookie monster')
                   .digest('hex');
    return hash ; 
}; 


module.exports = cryptoConfig; 

