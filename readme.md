# HTML Starter Framework #

# Setting Up #

This document will help you setup this site on your local development machine.

### What You'll Need ###

#### OSX ####

* MAMP
* Homebrew Installed
* Node.js Installed (http://blog.teamtreehouse.com/install-node-js-npm-mac)
* Gulp and Bower Installed
* Text Editor or IDE of your choice.

#### Windows ####

* XAMPP
* Node.js Installed (http://blog.teamtreehouse.com/install-node-js-npm-windows)
* Gulp and Bower Installed
* Text Editor or IDE of your choice.

### Setting Up Your Local Environment ###

#### OSX ####

On OSX using MAMP, setup should be relatively painless.

1. Download these files and place them into the root of your project directory. If you cloned this repository, remove it from version control before you link it with your project repository by running *rm -rf .git* in the root of your cloned project.
2. Setup MAMP to serve the site from *client-name.dev*.

#### Windows ####

On Windows, the instructions are similar to OSX, though you'll need to know how to configure the following:

* Setting up XAMPP for virtual hosting, and modifying your *hosts* file. (http://sawmac.com/xampp/virtualhosts/)

### Installing Packages and Creating Pages ###

You'll need to do the following to create the static assets.

1. From the root directory, run *npm install*, *bower install*, *gulp build*. This will build your static assets.
2. Run *gulp watch* to run browser sync and build the site on the fly.

### Questions? ###

* Contact support@visitpluto.com for additional information, or 208-392-1480.
