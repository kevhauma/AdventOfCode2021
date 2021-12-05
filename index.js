const fs = require('fs');

const folders = fs.readdirSync('./')

for (const folder of folders) { 
    if(!folder.includes('.'))   
        require(`./${folder}/index.js`)    
}
