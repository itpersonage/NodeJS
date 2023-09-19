const art = require('ascii-art');

art.reverseArtFile('ssd', (err, text) => {
    if(err) {
        return;
    }
    console.log(text);
} )




