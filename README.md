[![Contributors][contributors-shield]][contributors-url] [![Forks][forks-shield]][forks-url] [![Issues][issues-shield]][issues-url]
# u10-business-idea-snusmumriken-barn
<details open="open">

<summary><h2 style="display: inline-block">Table of Contents</h2></summary>

<ol>

<li><a href="#about-the-project">About The Project</a>
    <ul>
        <li><a href="#figma-sketch">Figma Sketch</a></li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#database-sketch">Built With</a></li>
        <li><a href="#code-standards">Code Standards</a></li>
        <li><a href="#api-sample">API Sample</a></li>
        <li><a href="#economic-calculation">Economic Calculation</a></li>
        <li><a href="#deployed-website">Deployed Website</a></li>
    </ul>
</li>
<li><a href="#setting-up-the-application">Setting up the application</a>
    <ul>
        <li><a href="#getting-started-with-frontend-react">Getting started with frontend React</a></li>
        <li><a href="#getting-started-with-frontend-react">Getting started with backend Laravel</a></li>
    </ul>

</li>
    <li><a href="#page-and-route-descriptions">Page and Route Descriptions</a></li>
    <li><a href="#developers">Developers</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#future-development-ideas">Future Development Ideas</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>

</ol>

</details>

## About The Project<br>

The idea came from the many enthusiastic forums about wine, beer, cigars, weed, etc. and we felt the need for a forum about the brown gold was much needed.
Here you get all snus-enthusiasts around the world in the same forum where they can share snus recipes, discuss their favourite snuses in our forum posts and much more!

<img src="https://i.imgur.com/56CHSKk.png" />

### Figma Sketch
[figma.com](https://www.figma.com/file/GeBkfYMbt61M3Lec1RUkR0/u10-Snus?node-id=0%3A1)


### Built With
This application was built with:
* [React.js](https://reactjs.org/)
* [Laravel](https://laravel.com/)
* [Docker](https://www.docker.com/)


### Code Standards
* [JavaScript](http://airbnb.io/projects/javascript/)
* [HTML/CSS](https://google.github.io/styleguide/htmlcssguide.html)
* [PHP](https://www.php-fig.org/psr/psr-12/)


### Database Sketch
[draw.io](https://app.diagrams.net/#G1NGWY1s4TLEN6tDkRtfDoxssnLPw4PbVJ)

### API Sample
<img src="https://i.imgur.com/HTFpLjG.png" />

### Economic Calculation
[Budget](https://docs.google.com/document/d/13KDwhIvNXFuv98ILRNuPZxMr4k6nqL9afMC050u6EV0/edit)

### Deployed Website
- [snusare.surge.sh](http://snusare.surge.sh/) Frontend
- [backend](https://snusare-backend.herokuapp.com/) Backend


## Setting up the application
### Getting started with frontend React
- Clone this repo
 ```sh
https://github.com/chas-academy/u10-business-idea-snusmumriken-barn.git
```
- cd into the frontend folder
 ```sh
 npm install
 ```
#### Deploy to surge
If you have access to deploy frontend to surge, accept the invite first and then follow these instructions:
- cd into the frontend folder

```sh
npm install --global surge
```
```sh
npm run-script build && cd build && cp index.html 200.html && surge --domain snusare.surge.sh .
```
Next time you will deploy to surge:
- cd into the frontend folder
```sh
npm run-script deploy
```
The page is deployed to snusare.surge.sh
### Getting started with backend Laravel
- If not already done; clone this repo
- cd into the backend folder
```sh
    docker run --rm \
        -u “$(id -u):$(id -g)” \
        -v $(pwd):/opt \
        -w /opt \
        laravelsail/php80-composer:latest \
        composer install --ignore-platform-reqs
```
- Rename ".env-example" to ".env"
- Generate base key
```sh
.vendor/bin/sail up
```
or:
```sh
.vendor/bin/sail artisan key:generate
```
- Open the application at localhost:80
- If Laravel gives error that you are missing a key, click the generate button

#### Setting up database connection

```sh
./vendor/bin/sail exec mysql bash
```
```sh
mysql
```
```sh
show databases;
```
```sh
CREATE USER 'sail'@'172.**.0.7' IDENTIFIED BY 'password';
```
```sh
GRANT ALL ON *.* TO 'sail'@'172.**.0.7';
```
```sh
FLUSH PRIVILEGES;
```

#### Install jwt in backend folder
```sh
./vendor/bin/sail composer require tymon/jwt-auth --ignore-platform-reqs
```
```sh
./vendor/bin/sail artisan jwt:secret
```

## Page and Route Descriptions
| Command | Description |
| --- | --- |
| /snuses | ger alla snuser och dess snittbetyg. benämnt snuses |
| /snuses/{id} | ger alla data om en snus baserat på id. benämnt snus |
| /reviews | ger alla reviews. benämnt reviews |
| /reviews/{id} | ger all data om en review baserat på id. benämnt review |
| /store-review | sparar en review, vill ha följande data -snuses_id -body -rating (går även att lägga till title om så önskas) |
| /delete-comments/{id} | tar bort en comment baserat på dess id |
| /store-comments | sparar en comment, vill ha följande data |
| /comments/{id} | ger all data om en comment. benämnt comment |
| /comments | ger alla comments. benämnt comments |
| /flavours/{id} | ger all data om en flavour. benämnt flavour |
| /flavours | ger alla flavours. benämnt flavours |
| /categorys/{id} | ger all data om en category. benämnt category|
| /categorys | ger alla categorys. benämnt categorys|
| /delete-posts/{id} | tar bort en post baserat på dess id |
| /store-posts |sparar en post, vill ha följande data |
| /posts/{id} | ger all data om en post baserat på id. benämnt post |
| /posts | ger alla posts. benämnt posts |
| /delete-review/{id} | tar bort en specifik review baserat på dess id |
| /favourites | returns a list of all  favourites available  |
| /favourites/{userID}| returns a list of specified users favourites |
| /store-favourites | saves a flavour to logged in users favourites req: flavourID |
| /delete-favourites/{id} | tar bort en favorite baserat på dess id |
| /user-profile | Ger all data om den inloggade usern. benämnt user|

[contributors-shield]: https://img.shields.io/github/contributors/chas-academy/u10-business-idea-snusmumriken-barn.svg?style=for-the-badge

[contributors-url]: https://github.com/chas-academy/u10-business-idea-snusmumriken-barn/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/chas-academy/u10-business-idea-snusmumriken-barn.svg?style=for-the-badge

[forks-url]: https://github.com/chas-academy/u10-business-idea-snusmumriken-barn/network/members

[issues-shield]: https://img.shields.io/github/issues/chas-academy/u10-business-idea-snusmumriken-barn.svg?style=for-the-badge

[issues-url]: https://github.com/chas-academy/u10-business-idea-snusmumriken-barn/issues

<!-- CONTRIBUTING -->
## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Development Ideas
* A admin panel for strict CRUD operations such as adding/deleting snuses to the database, removing users posts and comments if vaiolation occurs. Right now all users can use CRUD wich is not safe! 
* Match favourite snus flavours and get recommendations on other snus brands that fits the users taste.
* Rating on stores that sells snus and if it's not an online store, where they are located.
* Ability for companys to market on the site.

## Developers
* [Adebayo Ajayi](https://github.com/Braggedtooth)
* [Alex Bierhance](https://github.com/Aiiion)
* [Anna Paajarvi](https://github.com/apaajarvi)
* [Emanuel Popa](https://github.com/emapopa)
* [Henrik Frohm](https://github.com/HenrikFrohm)
* [Otto Reimers](https://github.com/ottoreimers)
* [Pernilla Hällgren](https://github.com/pernilla-hallgren)
* [Viktor Pavlov](https://github.com/ViktorP1)


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Project Link: [https://github.com/chas-academy/u10-business-idea-snusmumriken-barn](https://github.com/chas-academy/u10-business-idea-snusmumriken-barn)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Bootstrap](https://react-bootstrap.github.io/)
* [React Moment](https://www.npmjs.com/package/react-moment)
* [MIT](https://opensource.org/licenses/MIT)


