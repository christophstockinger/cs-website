# Boilerplate 2.0.0-beta

The second version of my boilerplate.

## 🆕  These points are completely new:
* Webpack 4 is used with a split configuration
* Template engine `TWIG` is intregrated
* Browser Sync with own written configuration file and hot reload
* new folder structure in the `./src`
* new structure: modules and componets  
Only modules are awolled in the page files.  
A Module includes one or more component
* Generate function to generate pattern files for a new module or component
* New grid system like susy
* Development tools:  
First dev-tools is a grid overlay

## 💻 Installation
1.  Git-Repository clone
```
git clone https://github.com/christophstockinger/boilerplate.git
```

2. Install NodeJS
First download the current version of NodeJS. The current version you find [here](https://nodejs.org/en/).

3. Node-Modules install via NPM
```
npm i
```

## 🏃‍ Run the project
* Run server, webpack in development mode and watching mode and twig watching mode
```
npm start
```

* Run webpack in development mode
```
npm run dev
```

* Run webpack in development and watching mode
```
npm run watch
```

* Run webpack in production mode
```
npm run production
```

* Clean Dist-Folde, run webpack in production mode and render twig to html
```
npm run build
```

* run server for check the production build
```
npm run build-check
```

* run browser sync server with own configuration file
```
npm run serve
```

* render twig files to html
```
npm run twig
```

* Watch Task for render twig files to html with [`cli-watch`](https://www.npmjs.com/package/cli-watch)
```
npm run twig:watch
```

* Clean the `dist` Folder. Using follow npm package [`rimraf`](https://www.npmjs.com/package/rimraf)
```
npm run clean
```

* Task for create pattern files for a new module or component
```
npm run generate
```

## 🚧 Report Bugs
[https://github.com/christophstockinger/boilerplate/issues](https://github.com/christophstockinger/boilerplate/issues)

## 🌐 Visit me on my websites
[http://www.coding77.de](http://www.coding77.de)

[http://www.christophstockinger.de](http://www.christophstockinger.de)

## ❓ Questions
For private and Open-Source-Projects send me a mail to cs@christophstockinger.de

For business questions send a mail to info@coding77.de
