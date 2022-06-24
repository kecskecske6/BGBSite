import express from "express";
import news from './news';
import commands from './commands';
import pages from './pages';
import auth from './auth';

const router = express();

router.use('/news', news);
router.use('/commands', commands);
router.use('/pages', pages);
router.use('/auth', auth);

export default router;