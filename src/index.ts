import "./environment";
import { Ortio, OrtioOptions } from "@ortio/core";
import client from "./client";

const options: OrtioOptions = {
  client,
  commandsPath: "./commands",
  defaultPrefix: "!",
  filterRegex: /^\w+Command\.ts$/,
};

const ortio = new Ortio(options);

ortio.automaticallyComposeCommands().then(() => {
  client.login(process.env.API_TOKEN).then(() => {
    console.log("Bot is ready..");
  });
});
