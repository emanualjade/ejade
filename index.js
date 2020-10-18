#!/usr/bin/env node
const pkgJSON = require("./package.json");
const welcome = require("cli-welcome");
const chalk = require("chalk");

const log = console.log;
const twitterColor = chalk.hex(`#1da1f2`).bold.inverse
const githubColor = chalk.hex(`#6cc644`).bold.inverse
const brandColor = chalk.hex(`#6937ff`).bold.inverse
const dim = chalk.dim
const italic = chalk.italic

welcome({
  title: "Emanual Jade",
  tagLine: `Howdy, nice to meet ya!`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#6937ff`,
  color: `#000000`,
  bold: true,
  clear: true,
});

log(`
${italic(`Software Engineer`)}

${twitterColor(` Twitter `)} ${dim(`emanualjade`)}
${githubColor(` Github `)} ${dim(`emanualjade`)}
${brandColor(` Blog `)} ${dim(`cracklehat`)}
`);
