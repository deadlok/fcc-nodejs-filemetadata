var express = require('express');
var cors = require('cors');
require('dotenv').config()
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), uploaded )

function uploaded(req, res) {
  console.log('file uploaded')
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  })
}

//{"name":"top-right.png","type":"image/png","size":1454}

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
