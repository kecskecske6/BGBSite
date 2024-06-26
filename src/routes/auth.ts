import passport from "passport";
import express from 'express';

const router = express();

router.get('/discord', passport.authenticate('discord'));

router.get('/discord/redirect', passport.authenticate('discord'), (req, res) => {
    res.redirect(process.env['DASHBOARD'] == undefined ? '' : process.env['DASHBOARD']);
});

router.get('/', (req, res) => {
    if (req.user) res.send(req.user);
    else res.send(200);
});

router.post('/logout', (req, res) => {
    req.logOut(err => console.log(err));
    res.end();
});

export default router;