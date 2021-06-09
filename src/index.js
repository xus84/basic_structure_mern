require('dotenv').config();

import app from './app'
require('./database'); 

async function main() {
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'))
}

main();

