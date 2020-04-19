var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/users');

//passport.use(new LocalStrategy(Admin.authenticate()));
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//passport.use(new LocalStrategy(Tutor.authenticate()));
// passport3.use('tutorLocal', new LocalStrategy(Tutor.authenticate()));
// passport3.serializeUser(Tutor.serializeUser());
// passport3.deserializeUser(Tutor.deserializeUser());




