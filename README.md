# HackerRank problem solutions 🤖

__These are *most* of my HackerRank problem solutions.__

I decided to upload them to GitHub for future reference/archiving.  
I use HackerRank as one of many tools to practice, learn and improve as a coder.  
Be kind when looking at my code - remember it's a process 😌

## Environment

| Language | Version | Time limit | Memory limit | Libraries |
|:--------:|:-------:|:----------:|:------------:|:--------- |
| Javascript | [node.js v8.10.0](https://nodejs.org/) | 10 s | 512 MB | [bignumber.js@4.0.0](http://mikemcl.github.io/bignumber.js/)*, [jquery@3.2.1](https://jquery.com/), [lodash@4.17.4](https://lodash.com/), [underscore@1.8.3](https://underscorejs.org/) |
| MySQL | [Ver 5.7.21-0ubuntu0.16.04.1 (x86_64)](https://www.mysql.com/) | 60 s | 512 MB |

HackerRank has language specific environments with additional libraries available for use.  
The environment data above was provided by HackerRank. You can see their full list [here](https://www.hackerrank.com/environment).  

*\* The only library I use is __bignumber.js__, since pretty much everything else can be done natively with ES6+ syntax. However, I've noticed the version used on HackerRank is different from the one listed (it's impossible to see the exact version they use). I currently use version \^7.0.0 in my local testing environment.*


## Run scripts

### Linting

```bash
$ npm run lint
```

Run [ESLint](https://eslint.org/) on all JavaScript files in the repo.  

[Airbnb's style guide](https://github.com/airbnb/javascript#airbnb-javascript-style-guide-) is used as the base ruleset, but with a few modifications:  

* 4 spaces indentation
* It's OK to call functions before declaration
* No semicolons (except before ambiguous statements)
* Whitespace between the function keyword/name and the opening parenthesis

Linting rules can be found in the [ESLint config file](https://github.com/adamxtokyo/hackerrank/blob/master/.eslintrc.json).
