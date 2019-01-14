const app = express();

app.get('/user/register', function(req,res){
    console.log(req.body())
});

app.get('/user/sign-in', function(req,res){
    req.body()
});

app.post('/user/check_role/{roleId}', function(req,res){
    req.body()
});