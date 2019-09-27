# Extend Movie Listing

Extend Movie Listing is a website to allow users to view a list of the top 10 most popular movies from each of the last 5 years.

Movies are grabbed from [The Movie Database Api](https://developers.themoviedb.org/)
[Basic Wireframe Design](file://./asset/wireframe.pdf')

- [Dependencies](#dependencies)
- [Setup](#setup)
- [User Experience](#userexperience)
- [Assumptions](#assumptions)
- [Learnings](#learnings)

## Dependencies

Many uses are to make things simple and quick.
App created with the [Create React App](https://github.com/facebookincubator/create-react-app)

Below you will find a list of the dependencies that was added on top of the [Create React App](https://github.com/facebookincubator/create-react-app)

- [font-awesome](https://fontawesome.com/?from=io)
- [node-sass](https://github.com/sass/node-sass)
- [react-bootstrap](https://react-bootstrap.github.io/)
- [react-redux](https://react-redux.js.org/)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [redux](https://redux.js.org/)
- [redux-thunk](https://github.com/reduxjs/redux-thunk)
- [prop-types](https://www.npmjs.com/package/prop-types)
- [query-string](https://www.npmjs.com/package/query-string)

## Setup

To install all dependencies
```
npm install
```

To start the server
```
npm start
```

To view it locally in your browser, go to:
```
http://localhost:3000/
```

## User Experience

As a user, you should be able to experience the following:
There should be a dropdown with the different years (the last 5 years). Selecting the dropdown should refreash the list of movies thumbnails. There should also be a dropdown to change the sort order.

Clicking on a movie thumbnail should refresh the top detail section with additional movie information. If the movie has videos, a video play button should appear. Clicking that button should play that video.

All year, movie, and video "pages" should have unique url paths.

## Assumptions

1. **Video Page** - Currently video page will link to a unique url externally (example. youtube video url) to play the video.
1. **Video Play** - Currently only grabbed the first available video link to play.
1. **Video Link** - Currently assuming all videos are from youtube.

## Learnings

Things I would modify or do if I had more time:

1. **Refreshing Route** - Saving the sort order so when you refresh the same route the sort order will keep consistent
1. **Video Page** - Actually have a separate video page with video embedded (would need to do research) to keep user on website without sending them to external site. Also would potentially need separate design for the use case in which there are multiple videos for one movie.
