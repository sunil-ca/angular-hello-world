# AngularHelloWorld

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4.

## Development server

Run `ng start`. Browser will open automatically. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Running the Angular on Appache

http://sunilsharma.info/angular-hello

So you would like to deploy your production build to an Apache2 server? You will notice then that

reloading pages, besides root, and
deep linking
will cause 404 errors (unless you are using the HashLocation strategy). The reason is that all Angular2 routes should be served via the index.html file.

This can be achieved by adding a .htaccess file (in the same directory where the index.html resides) with the following contents.

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . index.html [L]
</IfModule>
This piece of code makes use of the mod_rewrite module from Apache, so make sure you have this enabled. In linux this can be done as following (probably all commands have to be run as sudo):

a2enmod rewrite
Restart the apache2 service after that

service apache2 restart
Also for the rewrite module to work, the apache configuration should have AllowOverride all enabled for the directory where the Angular2 app is served. In the default case this can be done as follows:

Open the file /etc/apache2/sites-enabled/000-default.conf Then add the following piece of code inside the VirtualHost block (assuming the Angular2 app is served from /var/www/html)

<Directory "/var/www/html">
  AllowOverride All
</Directory>

Source - https://github.com/mgechev/angular-seed/wiki/Deploying-prod-build-to-Apache-2
