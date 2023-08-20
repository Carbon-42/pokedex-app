# pokedex-app

Key Features:
Load data from an external source (API) View a list of items Search for items to be displayed On user action (e.g., by clicking on a list item)

Dependencies:
Polyfills Promise polyfill Fetch polyfill Frameworks Bootstrap ESLint rules Prettier configuration

Used resources:
PokéAPI used for this application

<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Carbon-42/pokedex-app">
    <img src="./public/meet-app-192.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Pokédex App</h3>
<a href="https://carbon-42.github.io/pokedex-app" target="_blank">Live URL</a>

  <p align="center">
    <!-- project_description -->
    <br />
    <a href="https://github.com/Carbon-42/pokedex-app"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Carbon-42/pokedex-app">View Demo</a>
    ·
    <a href="https://github.com/Carbon-42/pokedex-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/Carbon-42/pokedex-app/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#user-stories">User Stories</a></li>
    <li><a href="#features">Features</a></li>
    <!-- <li> -->
      <!-- <a href="#getting-started">Getting Started</a> -->
      <!-- <ul> -->
        <!-- <li><a href="#prerequisites">Prerequisites</a></li> -->
        <!-- <li><a href="#installation">Installation</a></li> -->
      <!-- </ul> -->
    <!-- </li> -->
    <!-- <li><a href="#usaxge">Usage</a></li> -->
    <!-- <li><a href="#contributing">Contributing</a></li> -->
    <!-- <li><a href="#license">License</a></li> -->
    <!-- <li><a href="#contact">Contact</a></li> -->
    <!-- <li><a href="#acknowledgments">Acknowledgments</a></li> -->
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<img src="./public/Screenshot.png">

Pokédex app is a a small web application built with HTML, CSS, and JavaScript. It loads data from an external API and enables the viewing of Pokémon details on demand.

<!-- Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `Carbon-42`, `pokedex-app`, ``, `brad-richardson-6`, `email_client`, `email`, `A Time & Place`, `project_description` -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With

- HTML
- CSS
- JavaScript ES6 (using polyfills for older browsers)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

<!-- ## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/Carbon-42/pokedex-app.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = "ENTER YOUR API";
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- USAGE EXAMPLES -->

<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- ## User Stories -->

## User Stories

1. Users should be able to view a list of all Pokémon.
   <br>
2. Users should be able to view more details for a given Pokémon on demand.
   <br>
3. User should be able to search the list.
   <br>

<!-- ## Features -->

## Features

   <br>

#### FEATURE 1: LOAD DATA FROM AN EXTERNAL SOURCE (API)

Scenario 1: When user loads the page fetch external data.

> **Given** user loads the page
> **When** the user opens the app  
> **Then** the external API data will be fetched

<br>

#### FEATURE 2: VIEW A LIST OF ALL POKÉMON

Scenario 1: After the external data has been fetch, display the data.

> **Given** user is viewing the pokémon list  
> **When** the user sees a pokémon
> **Then** the pokémon details will be hidden by default

<br>

#### FEATURE 3: VIEW DETAILS ABOUT A SPECIFIC POKÉMON

Scenario 1: When user clicks on a pokémon it opens a modal with further details.

> **Given** the user has made a selection  
> **When** the user clicks on a pokémon
> **Then** the details modal will appear

Scenario 2: When user clicks outside a pokémon modal it disappears.

> **Given** the user is viewing a pokémon's details  
> **When** the user clicks outside the modal
> **Then** the modal disappears

<br>

#### FEATURE 4: SEARCH THE LIST OF POKÉMON

Scenario 1: When user types in the search bar it filters the list

> **Given** the user is typing in the search bar
> **When** the user types a letter
> **Then** the list will be filtered by the input letter

Scenario 2: Show empty list message when search filter contains no pokémon

> **Given** the user has typed something in the searchbar
> **When** the entry does not match any pokémon
> **Then** the list will disapear and show a message saying no pokémon match the search

<br>

---

See the [open issues](https://github.com/Carbon-42/pokedex-app/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request -->

<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- LICENSE -->

<!-- ## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- CONTACT -->

<!-- ## Contact -->

<!-- Your Name - [@](https://twitter.com/) - email@email_client.com

Project Link: [https://github.com/Carbon-42/pokedex-app](https://github.com/Carbon-42/pokedex-app)

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- ACKNOWLEDGMENTS -->

<!-- ## Acknowledgments

- []()
- []()
- []() -->

<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Carbon-42/pokedex-app.svg?style=for-the-badge
[contributors-url]: https://github.com/Carbon-42/pokedex-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Carbon-42/pokedex-app.svg?style=for-the-badge
[forks-url]: https://github.com/Carbon-42/pokedex-app/network/members
[stars-shield]: https://img.shields.io/github/stars/Carbon-42/pokedex-app.svg?style=for-the-badge
[stars-url]: https://github.com/Carbon-42/pokedex-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/Carbon-42/pokedex-app.svg?style=for-the-badge
[issues-url]: https://github.com/Carbon-42/pokedex-app/issues
[license-shield]: https://img.shields.io/github/license/Carbon-42/pokedex-app.svg?style=for-the-badge
[license-url]: https://github.com/Carbon-42/pokedex-app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/brad-richardson-6
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
