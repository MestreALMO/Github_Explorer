<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="_README.md/icon.png?" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Github_Explorer</h3>
</p>

This is a project of mine that display information of projects of GitHub. The information this application returns is 100% accurate as this project was made by getting and displaying the information from the [GitHub API](https://api.github.com/).

<p align="center">
  <img src="https://github.com/MestreALMO/Github_Explorer/blob/master/_README.md/app.gif?raw=true" />
</p>

</br>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li>
      <a href="#running-code">Running Code</a>
      <ul>
        <li><a href="#first-time">First Time</a></li>
        <li><a href="#running">Running</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

</br>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

</br>

### Prerequisites

The things you need to install the software and how to install them

* [Nodejs](https://nodejs.org/en/) - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* Chocolatey - Chocolatey is software management automation for Windows that wraps installers, executables, zips, and scripts into compiled packages.
  * To install execute the codes with a terminal (ex: In Windows use PowerShell):
    ```
    Get-ExecutionPolicy
    ```
    ```
    Set-ExecutionPolicy AllSigned
    ```
    ```
    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
    ```
    ```
    choco
    ```
* Node.js, Yarn, Python2 e a JDK 8
  ```
  choco install -y nodejs-lts yarn python2 jdk8
  ```

</br>

## Running Code

Now the PC is ready, we can run the code.

</br>

### First time

When running for the first time we need to run the following code in a terminal inside the project folder, so the project download the library that it uses

```
yarn
```

</br>

### Running

In a terminal inside the project folder use the code:

```
yarn start
```

With that the app will be running!!!
![test](https://github.com/MestreALMO/Github_Explorer/blob/master/_README.md/App/01.png?raw=true)

</br>

## Usage

Now with the project running, we can using it, let me give you some examples of it running.

First things first, we are using the [GitHub API](https://api.github.com/), so any GitHub project will show. In the example bellow let's use the [facebook/react](https://github.com/facebook/react) project, first we insert "facebook/react" in the input and press "Research":
![test](https://github.com/MestreALMO/Github_Explorer/blob/master/_README.md/App/02.png?raw=true)

Then we should have the project being displayed with the user icon, the project's name and it's repository description. Please notice that the information is being storaged in the "localStorage" so if you reload the page the project added to this app will continue there. In case you want it gone you can clean the "localStorage" in your browser.
![test](https://github.com/MestreALMO/Github_Explorer/blob/master/_README.md/App/03.png?raw=true)

By clicking on the project option displayed above we will go to a page that will show even more details of the project and a button to go back to the first page, the more details that are displayed are: Number of forks; number of issues; number of stars; and the name of the issues with the link for the page if you click on it.
![test](https://github.com/MestreALMO/Github_Explorer/blob/master/_README.md/App/04.png?raw=true)

So what happens if you add more projects to the Dashboard? It will all be displayed so you can choose wich one you want to see more details of:
![test](https://github.com/MestreALMO/Github_Explorer/blob/master/_README.md/App/05.png?raw=true)

You can also scroll down to see them all:
![test](https://github.com/MestreALMO/Github_Explorer/blob/master/_README.md/App/06.png?raw=true)

</br>

## Contact

My Name: André Lusegardis Miranda de Oliveira

  * lusegardis@gmail.com

  * [LinkedIn](https://www.linkedin.com/in/andr%C3%A9-lusegardis/)

  * [GitHub](https://github.com/MestreALMO)
