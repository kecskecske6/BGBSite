import express from "express";
import news from './news';
import commands from './commands';
import pages from './pages';
import auth from './auth';
import discord from './discord';

const router = express();

router.use('/news', news);
router.use('/commands', commands);
router.use('/pages', pages);
router.use('/auth', auth);
router.use('/discord', discord);

export default router;