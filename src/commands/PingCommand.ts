import { Command } from "@ortio/core";
import { Message } from "discord.js";

const command: Command = new Command("ping");

command
  .setInitialCommandHandler((message: Message) => {
    message.reply("Pong!");
  })
  .addSubCommand("twice", (message: Message) => {
    message.reply("Pong pong!");
  });

export default command;
