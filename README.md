# Dev-Starter-Kit
ANDREAS �NDRADE DETTA
    //"webpack-md5-hash": "0.0.6", bytte denna mot nedan och �ndrade i webpack config
So I built this for all the new web developers... My Goal is to save you time from the bullsh*t of spending hours looking for ways to speed up your learning. Sometimes all we want to do is just code.
(if you are coming from my [youtube channel CodingPhase ](https://www.youtube.com/channel/UC46wWUso9H5KPQcoL9iE3Ug) I will base all my tutorials from this starter kit)

I broke it down in simple steps to get you going.

START
Skapa en dnnmodul med dnn template 
skapa sedan en ny mapp med samma namn + JSCode där webpack och gulpprojektet läggs
länka sedan till publicmappen i dnnmodulen så att alla genererade filer hamnar där.

good to go! :)


## Steps

**Download or Pull This Repo**
	Top of this page you can see where it says clone or download

 **Install Node**
	https://nodejs.org/en/

**Download Atom (OPTIONAL)**
	https://atom.io/
	

 **Install all the node packages** 
On the root of this project run on your terminal (if you want you can do this with yarn but thats optional)
```bash
  
   
    npm install
    npm install har-validator@latest --save-dev
    npm install gulp-cli --save-dev
    npm install gulp@3.9.1 --save-dev
    npm install webpack@4.25.1 --save-dev
    npm install webpack-cli@3.1.2 --save-dev
    npm i --save-dev gulp-sass gulp-autoprefixer gulp-concat gulp-sourcemaps child_process
    //kan behöva avinstallera prettier: npm uninstall prettier
    npm i prettier@1.12.1 --save-dev --save-exact
```

**Start the dev server**
```bash
  npm run watch
```

**Start the dev server with proxy**
```bash
  npm run proxy
```

**Build files for production**
```bash
  npm run build
```

## Instructions to run starter kit on any backend
Coming Soon

# EACCESS ERROR FIX
```diff
- how to fix the EACCESS ERROR
- lets say for example you trying to install webpack
- sudo npm install webpack@4.25.1 -g
- and get an error
- Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/webpack/node_modules/fsevents/build'
- then try again to install it but with this at the end "--unsafe-perm=true --allow-root"
- for example
- sudo npm install webpack@4.25.1 -g --unsafe-perm=true --allow-root
```

