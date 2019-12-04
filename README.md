# A gender study on Spotify
a study conducted by INFO_402 research group 7 on how gender preoccupation affects research results on Spotify app

## How to contribute to this repo

1. Before getting started, please make sure your Node is up-to-date. Docusaurus works well with Yarn. If you happen to have Yarn installed on your machine, check its version as well. 

    > Node >= 8.0 and Yarn >= 1.5 (if you have one).

2. Change your directory to project root and clone the repository to your machine with:

```
$ git clone https://github.com/benjaminsihi/A_Gender_study_on_Spotify
```

The repository contains a structure similar to this:

```
root-directory
├── Dockerfile
├── README.md
├── docker-compose.yml
├── docs
│   ├── doc_1.md
│   ├── doc_2.md
│   ├── assests
│   │   ├── picture_1.png
│   │   └── picture_2.png
│   ├── doc_3.md
│   ├── doc_4.md
│   └── more docs.md file
└── website
    ├── blog (we don't include blog in build)
    │   ├── 2019-03-11-blog-post.md
    │   ├── 2019-04-10-blog-post.md
    │   ├── 2018-09-25-blog-post.md
    │   ├── 2018-09-26-blog-post.md
    │   └── 2017-10-24-blog-post.md
    ├── core
    │   └── Footer.js
    ├── package.json
    ├── pages
    │   └── en
    │       ├── index.js
    │       ├── page_1.js
    │       └── page_2.js
    ├── sidebars.json
    ├── siteConfig.js
    └── static
        ├── css
        └── img
```

3. Change your directory to ./user-site and run one of the commands below:
```
$ npm install docusaurus        ||       $ yarn add docusaurus
```
You can update docusaurus by: 
```
$ npm update docusaurus        ||       $ yarn upgrade docusaurus --latest 
```

4. When you have docusaurus installed:
    * `cd website`
    * Within the website directory, run the local server using one of the following commands:
    
```
$ npm start        ||       $ yarn start 
```

Load the example site at [http://localhost:3000](http://localhost:3000) if it did not already open automatically through you browser. If default port 3000 has already been taken, another port will be used. 

**Congratulations !** You now have the site running on your local machine.

5. When you are ready to commit your changes. `control + c` to terminate the local server, if you have the one running. Run one of the following script from the website directory.
```
$ yarn run build        ||       $ npm run build
```
After the build is completed, use one of the following scripts to update your changes. (replace <USER_NAME> with your GitHub user name.)
```
$ GIT_USER=<USER_NAME> CURRENT_BRANCH=master USE_SSH=true npm run publish-gh-pages

$ GIT_USER=<USER_NAME> CURRENT_BRANCH=master USE_SSH=true yarn run publish-gh-pages
```
| Name          | Description   |
| ------------- | ------------- | 
| `GIT_USER`      | Your personal GitHub account. |
| `USE_SSH`       | When set to `true`, SSH is used instead of HTTPS for the connection to GitHub repo. Keep this value as `true`. The default connection is HTTPS if this value is not set.|
| `CURRENT_BRANCH` | The branch that contains the latest docs changes that will be deployed. It could be any branch instead of `gh-pages`|


## Documentation

>Check out [markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) if you need some help on markdown syntax. 
>Check out [markdown guideline](https://docusaurus.io/docs/en/doc-markdown) on docusarus io for additional information.

```md

---
id: id
title: my_title
sidebar_label: my_sidebar_label
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elementum massa eget nulla aliquet sagittis. Proin odio tortor, vulputate ut odio in, ultrices ultricies augue.

Consectetur adipiscing elit. Vivamus elementum massa eget nulla,
tempor eros aliquam consequat. Lorem ipsum dolor sit amet.
```

### Header_Attributes
Markdown header field is encolsed by `---` on either side. It has four optional attributes.

* `id`: A non-duplicated document id. If this field is not present, the document's id will default to its file name.

* `title`: The title of your document. If this field is not present, the document's title will default to its id.

* `hide_title`: Whether to hide the title at the top of the doc.

* `sidebar_label`: The text shown in the document sidebar and in the next/previous button for this document. If this field is not present, the document's sidebar_label will default to its title.

If you want to include a image in the markdown file, you need to store your content in ./user-site/assets. Therefore, you can refer to the image through relative path. For reference on markdown syntax, check out the [markdown syntax guide](https://www.markdownguide.org/basic-syntax/).