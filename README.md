## How to set up

- Create a /src and /build folder
- Run `tsc --init` to generate a `tsconfig.json` file. The settings will be used to customise our Typescript compiler. Set up the `outDir` and `rootDir` directory settings.
- To run the code, we'd normally run `node build/index.js`. This is annoying to have to do everytime, so let's set up auto compilation.
- Run `npm init -y` to setup `package.json`. Then `npm install nodemon concurrently` to install libraries that help autorun our code.
- Setup the scripts section in `package.json` so we can just run `npm start` and have the scripts auto compile and watch for changes.
- Remember to `git init` and `touch .gitignore` and add files to be ignored including node_modules and build
 directories.

## Notes for myself

- If we don't set up a `tsconfig.json` file, to compile Typescript files in our terminal, run `tsc index.ts` which will compile the `index.ts` file into `index.js`.
- After setting up the config file, run `tsc -w` to continue watching new /src files and auto compile.

## What this is about

- A Sorter class that is an abstract class allowing child classes to access a (bubble) sort method.
- Child classes can currently take data that is either an array of numbers, a string or a linked list of numbers.
