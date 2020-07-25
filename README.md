# The Resumeker


## Project Description
**Resumeker** is a web project for Engineering undergrads aiming to build impressive Resumes for their co-mates with no back-end web technologies used.


***


## Problem Seen
Not many Engineers are good at working with MS Word to put their creativity in making Resume templates of their own.

## Solution Found
They can be helped by providing a platform with different Resume templates to choose from. Later, they must be filling out a form with all their details and these details can be accessed by developer in real-time, put them into Resume template chosen and mail them back.

> It is estimated that, it would take around _5-7_ minutes for the developer to put on the data into Resume template _(Provided that the Resume template is available before hand)_ and thus, this project is assumed to work well for little to low traffic.
>> _Developer can also move a step ahead and opt to receive / listen to his co-mates template design ideas and design them. These new templates can be simply pushed to the website by shooting few lines of code_.

### Designed and Developed Using
HTML, CSS and JavaScript

### Code Length
__~1300__ lines

### Editors / Tools Used
Visual Studio Code, Git Bash 

### Web Hosting Platform Used
Netlify

### Mail Automation Platform Used
Zapier


***


## Make Use of It
### Prerequisites
1. [GitHub account](https://github.com "Create a GitHub account")
2. [Netlify account](https://app.netlify.com "Create a Netlify account")
3. [Zapier account](https://zapier.com "Create a Zapier account")
4. [Git Bash Software](https://git-scm.com/downloads "Download Git Bash")

Once you are up with all the prerequisites, you can jump in and clone the repository with no worries.


### Cloning the Repository
To make use of this project, it has to be cloned into your own GitHub repository and the process flow for the same is detailed below :

*  Copy this clone link `https://github.com/raghu-sanikommu/resumeker.git`
* Browse to your required folder where you wish to save this repository.
* Choose the option _**'Git Bash Here'**_ on right click. Later, type in the following commands in the command line appeared :
   - `git clone paste-the-clone-URL`
   - Delete the _**.git**_ folder from repository created, to bypass troubles of future pushes that might occur. _(Check-In the 'View Hidden Files' option to view this folder)_
   - `git init`
   - `git add .`
   - `git commit -m 'your-commit-name'`
   - Create your own repository in github.com
   - `git remote add https://github.com/your-github-username/repo-name.git`
   - `git push -u origin master`
   - Refresh your repository in github.com


### Deploying the Website
Once you have successfully cloned the repository, you are half way through and lets now deploy the website using the most famous free web hosting platform named **Netlify**.

* Sign In to your Netlify account and click on _'**New site from Git**'_ option appeared on the landing page.
* Follow OAuth process of GitHub appeared.
* Select your repository and branch which has to be deployed.
* Give it some time to deploy and then change your site name from _'**site settings**'_ option if required.
* In a couple of minutes, the website will go live through that URL.


### Working with Form Submissions

> All Resume templates in _.doc_ and _.pdf_ formats are available in _**resume-templates**_ folder of this repository.

Your website is now **live on web** which can be accessed by anyone in the **world** and time has arrived to get your hands dirty by taking data from users and putting them back onto Resume Templates chosen by them. With no more delay lets quickly get that job done.

* Form submissions and data extraction here happens in real time. 
* Once the user submits the form, all that data will be available in _'**Form Submissions**'_ section of your website on Netlify platform. _(Special Thanks to Netlify for their amazing features)_
* Use that data to put into Resume template chosen by user and once done, mail that Resume to the user. 



### Working with Automation of Email's
Lets now make our project a business class model by embedding automation feature to it.

* Create a _'**Netlify to Gmail**'_ Zap in Zapier.
* Zapier intelligently walks you through the Zap, which when followed gives you the best automation experience ever.


### Adding New Resume Templates
**Kudos** for moving a step ahead and making new Resume Templates. Lets walk through the process to get things done.

* Add the image in _.png_ format to _**img**_ folder of the repository.
* Open a code editor _(preferably VS code)_ and browse to _**index.html**_ file.
* Scroll over to the `<section class="templates">` code block.
* Add a new `<li>` code snippet similar to one that already exists in `<ul>` and make sure that you are putting your own template name in `<a>`, `<img>` and `<p>` tags.
* Save the template in _.doc_ and _.pdf_ formats in _**resume-templates**_ folder of the repository.
* Open Git Bash in repository on right click and type in the following commands :
  - `git add .`
  - `git commit -m 'your-commit-name'`
  - `git push`
* You are done! Netlify automatically pushes the changes onto your website.


> Thanks for reading and **forks** if any are welcomed.


***


##### Designed and Developed by [Raghu Sanikommu](https://raghu-sanikommu.netlify.app "Know More about Raghu Sanikommu")

##### Licensed under [MIT License](LICENSE)
