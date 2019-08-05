// BLOCKING CODE

posts = loadPostsSync();
// ...wait til posts are fetched
// ...do something with posts

doTheNextThing();

// NONBLOCKING (ASYNCHRONOUS) CODE

loadPostsAsync(function(){
    // ...wait til posts are fetched
    // ...do something with posts
});

doTheNextThing(); // Doesn't have to wait until posts load

// Most async code will be part of an API or library

// XMLHttpRequest & Fetch
// JQuery Ajax, Axios and other HTTP libraries
// Node.js fs (filesystem) module

// Ways to work with async code:
// - callbacks
// - promises
// - async/await