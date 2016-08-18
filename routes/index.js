var express = require('express');
var router = express.Router();

/* route middleware and console @request */
router.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.method, req.url);
  res.render('index', { title: 'Express' });
});

/* GET hello page. */
router.get('/helloworld', function(req, res, next) {
  res.render('helloworld', { title: 'Hello' });
});

/* GET hello page. */
router.get('/h', function(req, res, next) {
  res.render('helloworld', { title: 'Hi' });
});

/* GET practice */
router.get('/g', function(req, res, next) {
  res.send( {key: 'test'});
});


/* GET practice */
router.get('/p', function(req, res, next) {
  res.render('playVideo', { videoId: 'xIPFpMy_Kc0' });
});

/* GET practice  console log shows passed object */ 
router.get('/t2', function(req, res, next) {
  var t2 = res.t2;
  //res.render('t2', { videoId: 'xIPFpMy_Kc0' });
  res.render('t2', req.body);   // res.body ?? res.params (js OK) guessed - can't test module undefined
});

/* GET practice */
router.get('/t1', function(req, res, next) {
  //res.render('t2', { videoId: 'xIPFpMy_Kc0' });
  //res.render('index', { workflowData_server: JSON.stringify(workflowData) });
  //res2.render('cotacao_response.jade', {
  //  'CotacaoDolar': CotacaoDolar
  //});
  res.render('t2', req.body );  // req.body, ?? res.params  guessed - can't test module undefined
});

/* GET load mobile orientation */
router.get('/m', function(req, res, next) {
  res.render('mobileView', { more: 'more stuff' });
});

/* GET load mobile orientation */
router.get('/i', function(req, res, next) {
  res.render('input');
});

router.get('/show', function(req, res, next) {
  res.render('showMobileState', req.body);
});

/* POST mobile orientation (update state)   render??  */ 
router.post('/mobile', function(req, res, next) {	
  res.render('mobileView', { more: 'more stuff' });
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/html/about.html'));
});

module.exports = router;
