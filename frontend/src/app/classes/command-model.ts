import { Command } from "../interfaces/command";

export class CommandModel implements Command {
    name = '';
    description = '';
    category = '';
    usage = '';
}
