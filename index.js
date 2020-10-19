#!/usr/bin/env node
const pkgJSON = require("./package.json");
const welcome = require("cli-welcome");
const chalk = require("chalk");
const sym = require('log-symbols')

const log = console.log;
const twitterColor = chalk.hex(`#1da1f2`).bold.inverse
const githubColor = chalk.hex(`#6cc644`).bold.inverse
const brandColor = chalk.hex(`#6937ff`).bold.inverse
const dim = chalk.dim
const italic = chalk.italic

// Alerts
const success = chalk.green
const info = chalk.blue
const warning = chalk.keyword('orange')
const error = chalk.red.bold

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

console.log(`
  ${sym.success} ${success(` SUCCESS `)} Thanks for checking out my CLI.

  ${sym.info} ${info(` INFO `)} Playing with node CLI things.

  ${sym.warning} ${warning(` WARNING `)} Never do what I do.

  ${sym.error} ${error(` ERROR `)} You did it now.
`)
