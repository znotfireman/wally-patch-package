import { program } from "commander";
import createPatch from "./createPatch.js";
import applyPatch from "./applyPatch.js";

program
  .name("wally-patch-package")
  .version("1.2.1")
  .description("CLI tool for patching Wally packages; forked by znotfireman to add more configuration")
  .arguments("[libraryname]")
  .action((libraryname, options) => {
    console.log(options)
    if (libraryname) {
      createPatch(libraryname, options);
    } else {
      applyPatch(options);
    }
  })
  .option("-d, --debug", "output extra debugging")
  .option("--registry <url>", "set the base url of registry")
  .option("--patch <path>", "apply specific patch file")
  .option("--patchDir <path>", "target a specific directory for patches")
  .option("--packageDir <path>", "target a specific directory to patch from")
  .parse(process.argv);
