sorry in advance if this is rushed 

# Project choice 
podcast/music player app 

# Architecture pattern 
model view controller + reactive programming 

# Stack 
- java spring boot 
- mongodb atlas 
- google translate api, functionality is there but i didnt get to use any of the functions i made :/
- react/nextjs 
- rxjs 
- chakra.ui

### one api route 
- GET http://localhost:8000/api/single{id}
- Response example : 

```{
    "id": "6225b147dd66517718370743",
    "name": "JS Party",
    "description": "a weekly celebration of JavaScript and the web",
    "title": "Modern JS tooling is too complicated. Yep? Nope?",
    "image": "https://cdn.changelog.com/uploads/covers/js-party-original.png",
    "upvotes": 0,
    "downvotes": 0,
    "source": "https://changelog.com/jsparty",
    "audio": "https://cdn.changelog.com/uploads/jsparty/89/js-party-89.mp3",
    "translation": {
        "French": "une célébration hebdomadaire de JavaScript et du Web",
        "Arabic": "احتفال أسبوعي بـ JavaScript والويب",
        "Spanish": "una celebración semanal de JavaScript y la web",
        "Mandarin": "每周一次的 JavaScript 和网络庆祝活动"
    },
    "validUpload": true
}```

## running locally: 
- clone repo 
- create mongodb atlas account or have local db 
- cd into java api and set env variables: 
``` 
    export SPRING_DATA_MONGODB_URI={your uri}
    export MONGO_DB={your database/collection name}
```
- to have the google translate api work you need to get google cloud service account, once you have it you're given a json credentals file which you should copy to the java resources folder 

- the api still runs without it just no translations

- start the java api with 
``` mvn spring-boot:run ```

- now cd into the frontend directory and replace th hardcoded urls for the hosted version with https://localhost:8000 

- run yarn install and then yarn dev to start it up after this

## architecture more in depth: 
- used MVC pattern 
- the rest api acts as the model while the frontend is split into controller and view portions 
- the controller relies heavily on reactive streams so that the view rarely has to request data

-in the rare cases the view submits data its sent to the backend by the controller and then the results are processed and placed in the stream for the view to consume 


