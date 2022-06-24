import { News } from "../interfaces/news";

export class NewsModel implements News {
    title = '';
    imageURL = '';
    content = '';
    publishedAt = new Date();
    author = '';
    heading = '';
    _id = '';
}
