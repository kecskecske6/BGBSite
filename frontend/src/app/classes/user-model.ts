import { User } from "../interfaces/user";

export class UserModel implements User {
    avatar = null;
    guilds = undefined;
    userId = '';
    tag = '';
}
