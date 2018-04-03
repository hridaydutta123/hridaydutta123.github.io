[![HitCount](http://hits.dwyl.io/hridaydutta123/hridaydutta123.github.io.svg)](http://hits.dwyl.io/hridaydutta123/hridaydutta123.github.io)
## Academic Responsive (AR) Website Template

## A Responsive HTML5/CSS3 template for setting up an academic website.

This template is implemented in Bootstrap (a popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web). The template has been tested on iOS, Windows Phone, Android, Chrome, Safari and other browsers. Some of its features require external free components (e.g., Google Custom Search for site-search, Twitter widget for news, Smartbib for publication indexing). Additionally, having a CV in LATEX format will help to automate the generation of material and streamline consistency between your CV and your website. You will need to edit the sources with a text editor or a capable WYSIWYG editor.

The original idea for setting up this template was to make an academic profile easily accessible from a smartphone.

The template is free and open to reuse under a CC BY 4.0 licence.

Enjoy!

Copyright (c) 2015, Demetris Zeinalipour, Department of Computer Science
University of Cyprus.

All rights reserved.

## Creative Commons CC BY 4.0 licence 

The AR template is open to reuse under a CC BY 4.0 licence. This license lets others distribute, remix, tweak, and build upon AR even commercially, as long as they credit the original creation in the footer of the site. This is the most accommodating of licenses offered. Recommended for maximum dissemination and use of licensed materials.

More: http://creativecommons.org/licenses/by/4.0/legalcode

## Credits
=======
Your Jekyll blog will often be viewable immediately at <https://yourgithubusername.github.io> (if it's not, you can often force it to build by completing step 2)

![Step 1](/images/step1.gif "Step 1")

### Step 2) Customize and view your site

Enter your site name, description, avatar and many other options by editing the _config.yml file. You can easily turn on Google Analytics tracking, Disqus commenting and social icons here too.

Making a change to _config.yml (or any file in your repository) will force GitHub Pages to rebuild your site with jekyll. Your rebuilt site will be viewable a few seconds later at <https://yourgithubusername.github.io> - if not, give it ten minutes as GitHub suggests and it'll appear soon

> There are 3 different ways that you can make changes to your blog's files:

> 1. Edit files within your new username.github.io repository in the browser at GitHub.com (shown below).
> 2. Use a third party GitHub content editor, like [Prose by Development Seed](http://prose.io). It's optimized for use with Jekyll making markdown editing, writing drafts, and uploading images really easy.
> 3. Clone down your repository and make updates locally, then push them to your GitHub repository.

![_config.yml](/images/config.png "_config.yml")

### Step 3) Publish your first blog post

Edit `/_posts/2014-3-3-Hello-World.md` to publish your first blog post. This [Markdown Cheatsheet](http://www.jekyllnow.com/Markdown-Style-Guide/) might come in handy.

![First Post](/images/first-post.png "First Post")

> You can add additional posts in the browser on GitHub.com too! Just hit the + icon in `/_posts/` to create new content. Just make sure to include the [front-matter](http://jekyllrb.com/docs/frontmatter/) block at the top of each new blog post and make sure the post's filename is in this format: year-month-day-title.md

## Local Development

1. Install Jekyll and plug-ins in one fell swoop. `gem install github-pages` This mirrors the plug-ins used by GitHub Pages on your local machine including Jekyll, Sass, etc.
2. Clone down your fork `git clone https://github.com/yourusername/yourusername.github.io.git`
3. Serve the site and watch for markup/sass changes `jekyll serve`
4. View your website at http://127.0.0.1:4000/
5. Commit any changes and push everything to the master branch of your GitHub user repository. GitHub Pages will then rebuild and serve your website.

## Moar!

I've created a more detailed walkthrough, [**Build A Blog With Jekyll And GitHub Pages**](http://www.smashingmagazine.com/2014/08/01/build-blog-jekyll-github-pages/) over at the Smashing Magazine website. Check it out if you'd like a more detailed walkthrough and some background on Jekyll. :metal:

It covers:

- A more detailed walkthrough of setting up your Jekyll blog
- Common issues that you might encounter while using Jekyll
- Importing from Wordpress, using your own domain name, and blogging in your favorite editor
- Theming in Jekyll, with Liquid templating examples
- A quick look at Jekyll 2.0’s new features, including Sass/Coffeescript support and Collections

## Jekyll Now Features

✓ Command-line free _fork-first workflow_, using GitHub.com to create, customize and post to your blog  
✓ Fully responsive and mobile optimized base theme (**[Theme Demo](http://jekyllnow.com)**)  
✓ Sass/Coffeescript support using Jekyll 2.0  
✓ Free hosting on your GitHub Pages user site  
✓ Markdown blogging  
✓ Syntax highlighting  
✓ Disqus commenting  
✓ Google Analytics integration  
✓ SVG social icons for your footer  
✓ 3 http requests, including your avatar  

✘ No installing dependencies
✘ No need to set up local development  
✘ No configuring plugins  
✘ No need to spend time on theming  
✘ More time to code other things ... wait ✓!  

## Questions?

To use AR on your site, please add the following code at the end of your website:
```html
<footer>
    <small>
    <center>
        © YEAR | YOURNAME. Credits: AR template
    <a onclick="javascript:$('#credit').toggle();"><img border="0" src="images/ccby.png"/></a>
    <div style="display:none;" id="credit">[AR template available under Creative Commons CC BY 4.0 licence: 
    <a href="https://github.com/dmsl/academic-responsive-template" target="_blank">
        https://github.com/dmsl/academic-responsive-template 
    </a> ]
    </div>
    </center>
    </small>
</footer>
```

## Example Site

Available here: http://www.cs.ucy.ac.cy/~dzeina/

## Components 

Short description of the contents included in this release.

- index.html : Contains most of the website material (single-page layout). Change this accordingly.
- bio.html: Add your Short Bio
- cv.html: To generate the content of this file effectively, first generate your CV from a latex file: "latex2html -no_math -html_version 3.2,math -split 0 yourcv.tex " Then copy/paste the material onto cv.html
- publications: tenatively add your publications in bibtex format to the following file publications/demo.bib. If PHP is available on your webserver, this will show the bibtex entries neatly.
- talks: tenatively add your talks in bibtex format to the following file talks/presentations/demo.bibIf PHP is available on your webserver, this will show the bibtex entries neatly.
- Search Box: Setup a custom search box through Google. Replace the respective javascript in the HTML files to make your new search box effective.

## CR (Course Responsive) Template

Also check out the sister template designated for courses: https://github.com/dmsl/course-responsive-template


