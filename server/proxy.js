const express    = require('express');
const path       = require('path');
const config     = require(path.join(__dirname,"../config/global.json"));
const storage    = path.join(__dirname,"../"+config.Proxy.settings.storage_path);
const port       = config.Proxy.settings.port;
const app        = express();

/**
 *   Storage
 */
app.use(express.static(path.join(__dirname,"../"+config.Proxy.settings.storage_path)));

app.get('/stream', function (req, res) {
    res.sendFile(path.join(storage+'/stream.html'));
});

app.get('/view', function (req, res) {
    res.sendFile(path.join(storage+'/view.html'));
});

app.get('/', function (req, res) {
    res.sendFile(path.join(storage+'/index.html'));
});

app.listen(port, () => console.log(`\x1b[40m`,`\x1b[32m`,
`
     _______  __   __  ___   _______  _______ 
    |       ||  |_|  ||   | |       ||   _   |
    |    ___||       ||   | |    ___||  |_|  |
    |   |___ |       ||   | |   | __ |       |
    |    ___||       ||   | |   ||  ||       |
    |   |___ | ||_|| ||   | |   |_| ||   _   |
    |_______||_|   |_||___| |_______||__| |__|

 
    [+] Maintance      : https://github.com/eminmuhammadi/emiga-stream.git
    [+] Proxy Server   : http://localhost:${port}
    [+] Storage Path   : ${storage}

    [~] Running Proxy Server...

`,`\x1b[0m`));