import { writeFile, readFileSync  } from 'fs';

// This is good for local dev environments, when it's better to
// store a projects environment variables in a .gitignore'd file
require('dotenv').config();

// Would be passed to script like this:
// `ts-node set-env.ts --environment=dev`
// we get it from yargs's argv object
const sourcePath = `./src/assets/config/configuration_env.json`;
const targetPath = `./src/assets/config/configuration.json`;


let fileStream = readFileSync(sourcePath, 'utf-8');

Object.keys(process.env).forEach(k => {
  fileStream = fileStream.replace(`$${k}`, process.env[k]);
});

writeFile(targetPath, fileStream, function (err) {
  if (err) {
    console.log(err);
  }

  console.log(`Output generated at ${targetPath}`);
});
