---
title: Blogdown
repo: rstudio/blogdown
homepage: https://bookdown.org/yihui/blogdown
language:
  - R
license:
  - GPL-3
templates:
  - R
  - R Markdown
description: Create Blogs and Websites with R Markdown
---

[![Build Status](https://travis-ci.org/rstudio/blogdown.svg)](https://travis-ci.org/rstudio/blogdown)
[![Coverage status](https://codecov.io/gh/rstudio/blogdown/branch/master/graph/badge.svg)](https://codecov.io/github/rstudio/blogdown?branch=master)
[![Downloads from the RStudio CRAN mirror](https://cranlogs.r-pkg.org/badges/blogdown)](https://cran.r-project.org/package=blogdown)

<a href="https://bookdown.org/yihui/blogdown"><img src="https://bookdown.org/yihui/blogdown/images/logo.png" alt="blogdown logo" align="right" /></a>

An open-source (GPL-3) R package to generate static websites based on [R Markdown](https://rmarkdown.rstudio.com) and [Hugo](https://gohugo.io). You can install the package via CRAN or GitHub:

```r
## Install from CRAN
install.packages('blogdown')

## Or, install from GitHub
remotes::install_github('rstudio/blogdown')
```

You may create a new site via the function `blogdown::new_site()` under an _empty_ directory. It will create a skeleton site, download a Hugo theme from Github, add some sample content, launch a web browser and you will see the new site. The sample blog post `hello-world.Rmd` should be opened automatically, and you can edit it. The website will be automatically rebuilt and the page will be refreshed after you save the file.

If you use RStudio, you can create a new RStudio project for your website from the menu `File -> New Project -> New Directory -> Website using blogdown`.

The function `blogdown::serve_site()` may be the most frequently used function in this package. It builds the website, loads it into your web browser, and automatically refreshes the browser when you update the Markdown or R Markdown files. Do not use the command line `hugo server` to build or serve the site. It only understands plain Markdown files, and cannot build R Markdown.

You may not be satisfied with the default site created from `new_site()`. There are two things you may want to do after your first successful experiment with **blogdown**:

1. Pick a Hugo theme that you like from http://themes.gohugo.io. All you need is its Github user and repository name, to be passed to the `theme` argument of `new_site()`.
2. Add more content (pages or posts), or migrate your existing website.

The full documentation is the **blogdown** book freely available at https://bookdown.org/yihui/blogdown/. You are expected to read at least the first chapter.
You are welcome to send us feedback using [Github issues](https://github.com/rstudio/blogdown/issues) or ask questions on [StackOverflow](http://stackoverflow.com/questions/tagged/blogdown) with the `blogdown` tag.
