module.exports.auth = function (req, res, next) {
    // console.log(req.user);
     if (!req.user) {
         let err = new Error('You are not authenticated!');
         err.status = 403;
         console.log(req.user);
         return next(err);
     } else {
        console.log(req.user);
         next();
     }
 }


 module.exports.user = function(req, res, next)
{
    if (!req.user) 
    {
        let err = new Error('You are not authenticated!');
        err.status = 403;
        console.log(req.user);
        return next(err);
    } 
    
    else 
    {
        if(req.user.admin == false)
        {
            next();
        } 
        
        else 
        {
            let err = new Error('You are not normal User!');
            err.status = 403;
            // console.log(req.user);
            return next(err);
        }
    }
}


module.exports.admin = function(req, res, next)
{
    if (!req.user) 
    {
        let err = new Error('You are not authenticated!');
        err.status = 403;
        console.log(req.user);
        return next(err);
    } 
    
    else 
    {
        if(req.user.admin == true)
        {
            next();
        } 
        
        else 
        {
            let err = new Error('You are not admin!');
            err.status = 403;
            // console.log(req.user);
            return next(err);
        }
    }
}