<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="_README.md/icon.png?" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Github_Explorer</h3>
</p>

This is a project of mine that display information of projects of GitHub. The information this application return is 100% accurate as this project was made by getting and displaying the information from the [GitHub API](https://api.github.com/).

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
  </ol>
</details>

</br>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

</br>

### Prerequisites

What things you need to install the software and how to install them

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

### Running

In a terminal inside the project folder use the code:

```
yarn start
```

With that the app will be running!!!

