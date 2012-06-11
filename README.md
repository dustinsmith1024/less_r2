less_r2
=======

Node.js command line utility to run a file through the less compiler then r2 for right-to-left styling. 
Useful for local development and integrating r2 into LESS pre-processing tools.

Install
-------

```shell
$ [sudo] npm install -g less_r2
```

NPM Requirements (Should install by default):
  - https://github.com/ded/R2
  - https://github.com/cloudhead/less.js

Usage
-----

```css
body {
  color: red;
  padding-left: 30px;
  p {
    margin: 2px 4px 6px 8px;
  }
}
```

```shell
$ less_r2 test.less
body{color:red;padding-right:30px;}body p{margin:2px 8px 6px 4px;}
```  