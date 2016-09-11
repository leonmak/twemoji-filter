# Get a subset of twemojis by categories

From my blog post: [Twemojis for React & Mapbox gl](http://leonmak.me/Twemojis-for-React-Mapbox-gl) 

Due to Mapbox Studio's 500 sprite upload limit, I had to choose a subset of [twemojis](https://github.com/twitter/twemoji) to upload to Mapbox Studio and to use with [react-emoji-picker](https://github.com/chadoh/react-emoji-picker) in our app.

# Usage
To get the emojis from the people and objects category that are used in react-emoji-picker:
Or uncomment emojis you want in `emoji-name-category.js` and comment out those you don't want.

```sh
npm i
node my-script.js
```

Selected svg emojis are copied to the `out` folder.