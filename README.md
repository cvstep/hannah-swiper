[comment]: <> (Text attributes _italic_, *italic*, __bold__, **bold**, `monospace`. A [link](http://example.com). - [Social](#social) - [Dependencies title](#dependencies-title) )
# Eupraxia

eupraxia-api


## Table of Contents

[TOC]


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Swagger api [location](./config/swagger.json)

### Prerequisites


What things you need to install the software and how to install them

https://docs.microsoft.com/en-us/azure/best-practices-api-implementation

```
Windows 10
```

### Installing

A step by step series of examples that tell you how to get a development env running

```
set OCI_LIB_DIR=D:\app\vananke\product\11.2.0\dbhome_1\OCI\lib\MSVC
set OCI_INC_DIR=D:\app\vananke\product\11.2.0\dbhome_1\OCI\include
npm install oracledb --msvs_version=2015
$Env:OCI_LIB_DIR='D:/app/vananke/product/11.2.0/dbhome_1/OCI/lib/MSVC' ; $Env:OCI_INC_DIR='D:/app/vananke/product/11.2.0/dbhome_1/OCI/include'
```



## Task Runner

* [Grunt](https://www.npmjs.com/) - Task Runner


## Running the tests

```
grunt test
```


### And coding style tests

* [ESlint](http://whatthecommit.com/)

## Production

## Built With
* [NodeJS v6.9.3](https://nodejs.org/dist/latest-v6.x/docs/api/) - Web Server
* [Express 4](http://expressjs.com/en/4x/api.html) - Web Framework
* [Swagger](http://swagger.io/) - API Framework
* [npm](https://www.npmjs.com/) - Dependency Management
* [Grunt](https://www.npmjs.com/) - Task Runner

## Contributing

Please read [CONTRIBUTING.md](https://) for details on our code of conduct, and the process for submitting code review.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://).
> Given a version number MAJOR.MINOR.PATCH, increment the:

> MAJOR version when you make incompatible API changes,
> MINOR version when you add functionality in a backwards-compatible manner, and
> PATCH version when you make backwards-compatible bug fixes.
> Additional labels for pre-release and build meta-data are available as extensions to the MAJOR.MINOR.PATCH format.
