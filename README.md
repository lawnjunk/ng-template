ng template
=======
> codefellows-401-javascript starter scaffold for working with angular

# Setup
* Clone and rename this repository
``` bash
git clone https://github.com/slugbyte/ng-template.git <new-project-name>
```
* cd into your new repository
``` bash
cd  <new-project-name>
```
* Create a **.env** file in your repository 
 * this file will **not** be tracked by git
 * requires `NODE_ENV`, `TITLE`, and `API_URL`
``` bash
# example .env file
NODE_ENV="dev"
TITLE="Photo Gallery"
API_URL="http://localhost/3000"
```
* Install dependencies
``` bash
npm i
```
* Start webpack-dev-server
``` bash
npm run build-watch
```
* Write your app

# Setup GitHub
* Create a new repository on github
* Over write the origin remote alias in your project
``` bash
git remote set-url origin <your-github-repository-url>
```
* push to git hub
``` bash
git push origin master
```
