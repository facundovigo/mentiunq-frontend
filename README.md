# mentiunq-frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
## To launch the project with docker

### We build the Docker image
```
docker build -t menti-unq/menti-unq-app .       
```

#### Run the image with Docker
```
docker run -it -p 8080:80 --rm --name menti-unq-app menti-unq/menti-unq-app
```
### Enter the url
```
http://localhost:8080/
```
