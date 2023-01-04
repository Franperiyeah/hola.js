// Create the $ object
var $ = function(selector) {
  // Return a new object with the selected elements
  return new $.fn.init(selector);
};

// Add methods to the $ object
$.fn = $.prototype = {
  // The selected elements
  elements: [],
  
  // Initialize the object
  init: function(selector) {
    // If the selector is a string, find the matching elements
    if (typeof selector === "string") {
      this.elements = document.querySelectorAll(selector);
    }
    // If the selector is an element, add it to the elements array
    else if (selector.nodeType) {
      this.elements = [selector];
    }
    // If the selector is an array-like object, convert it to an array and assign it to the elements array
    else {
      this.elements = [].slice.call(selector);
    }
  },
  
  // Add a class to the elements
  addClass: function(className) {
    this.elements.forEach(function(element) {
      element.classList.add(className);
    });
    return this;
  },
  
  // Remove a class from the elements
  removeClass: function(className) {
    this.elements.forEach(function(element) {
      element.classList.remove(className);
    });
    return this;
  },
  
  // Toggle a class on the elements
  toggleClass: function(className) {
    this.elements.forEach(function(element) {
      element.classList.toggle(className);
    });
    return this;
  },
  
  // Set the text content of the elements
  text: function(text) {
    this.elements.forEach(function(element) {
      element.textContent = text;
    });
    return this;
  }
};

// Set the prototype of the init function to the $ prototype
$.fn.init.prototype = $.fn;

// Add the $ object to the global scope
window.$ = $;

// Set the HTML content of the elements
html: function(html) {
  this.elements.forEach(function(element) {
    element.innerHTML = html;
  });
  return this;
}

// Get the HTML content of the first element
html: function() {
  return this.elements[0].innerHTML;
}

// Set the value of a CSS property for the elements
css: function(property, value) {
  this.elements.forEach(function(element) {
    element.style[property] = value;
  });
  return this;
}

// Get the value of a CSS property for the first element
css: function(property) {
  return getComputedStyle(this.elements[0])[property];
}

// Attach an event listener to the elements
on: function(event, callback) {
  this.elements.forEach(function(element) {
    element.addEventListener(event, callback);
  });
  return this;
}

// Remove an event listener from the elements
off: function(event, callback) {
  this.elements.forEach(function(element) {
    element.removeEventListener(event, callback);
  });
  return this;
}

// Append an element to the elements
append: function(element) {
  this.elements.forEach(function(el) {
    el.appendChild(element);
  });
  return this;
},

// Append an HTML string to the elements
append: function(html) {
  this.elements.forEach(function(el) {
    el.innerHTML += html;
  });
  return this;
}

// Insert an element before the elements
before: function(element) {
  this.elements.forEach(function(el) {
    el.parentNode.insertBefore(element, el);
  });
  return this;
},

// Insert an HTML string before the elements
before: function(html) {
  this.elements.forEach(function(el) {
    el.insertAdjacentHTML("beforebegin", html);
  });
  return this;
}

// Insert an element after the elements
after: function(element) {
  this.elements.forEach(function(el) {
    el.parentNode.insertBefore(element, el.nextSibling);
  });
  return this;
},

// Insert an HTML string after the elements
after: function(html) {
  this.elements.forEach(function(el) {
    el.insertAdjacentHTML("afterend", html);
  });
  return this;
}

// Select an element from the collection
eq: function(index) {
  return $(this.elements[index]);
}

// Filter the elements based on a selector
filter: function(selector) {
  return $(this.elements.filter(function(element) {
    return element.matches(selector);
  }));
},

// Filter the elements based on a function
filter: function(fn) {
  return $(this.elements.filter(function(element) {
    return fn(element);
  }));
}

// Find descendant elements that match a selector
find: function(selector) {
  var elements = [];
  this.elements.forEach(function(element) {
    elements = elements.concat([].slice.call(element.querySelectorAll(selector)));
  });
  return $(elements);
}