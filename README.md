# holajs

A lightweight and easy-to-use library for manipulating the DOM and working with events.

## Features 
   - A variety of methods for selecting elements, traversing the DOM, inserting content, and handling events
   - Concise and intuitive syntax
   - Lightweight and efficient
   
## Installation

To install the library, you can use npm:

```js  {3} copy
npm i hola.js
```
 ## Usage 
 
 To use the library, you need to include it in your project and create a new instance of the $ function:
 
 ```js  copy
<script src="path/to/hola.js"></script>
<script>
  var $ = new $();
</script>
```

You can then use the various methods provided by the library to manipulate the DOM and work with events. For example:

```js  copy
// Select an element
var el = $("#my-element");

// Add a class to the element
el.addClass("active");

// Set the text content of the element
el.text("Hello, World!");

// Attach a click event listener to the element
el.on("click", function() {
  // Toggle the "active" class on the element
  el.toggleClass("active");
});
```
For more information on the available methods and how to use them, [see the documentation.](https://holajs.vercel.app/)

## Contributing

We welcome contributions to the library! If you have an idea for a new feature or a bug fix, please open an issue or a pull request on the GitHub repository.

## License

The library is released under the MIT license.



