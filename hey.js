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

// Prepend an element to the elements
prepend: function(element) {
  this.elements.forEach(function(el) {
    el.insertBefore(element, el.firstChild);
  });
  return this;
},

// Prepend an HTML string to the elements
prepend: function(html) {
  this.elements.forEach(function(el) {
    el.innerHTML = html + el.innerHTML;
  });
  return this;
}

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
}

// Select the parent element of each element
parent: function() {
  var parents = [];
  this.elements.forEach(function(element) {
    parents.push(element.parentNode);
  });
  return $(parents);
}

// Set the text content of the elements
text: function(text) {
  this.elements.forEach(function(element) {
    element.textContent = text;
  });
  return this;
},

// Get the text content of the first element
text: function() {
  return this.elements[0].textContent;
}

// Select the child elements of the elements
children: function() {
  var children = [];
  this.elements.forEach(function(element) {
    children = children.concat([].slice.call(element.children));
  });
  return $(children);
},

// Select the sibling elements of the elements
siblings: function() {
  var siblings = [];
  this.elements.forEach(function(element) {
    siblings = siblings.concat([].slice.call(element.parentNode.children).filter(function(child) {
      return child !== element;
    }));
  });
  return $(siblings);
}

// Hide the elements
hide: function() {
  this.elements.forEach(function(element) {
    element.style.display = "none";
  });
  return this;
}

// Show the elements
show: function() {
  this.elements.forEach(function(element) {
    element.style.display = "";
  });
  return this;
}

// Set an attribute of the elements
attr: function(name, value) {
  this.elements.forEach(function(element) {
    element.setAttribute(name, value);
  });
  return this;
},

// Get the value of an attribute of the first element
attr: function(name) {
  return this.elements[0].getAttribute(name);
}

// Remove an attribute from the elements
removeAttr: function(name) {
  this.elements.forEach(function(element) {
    element.removeAttribute(name);
  });
  return this;
}

// Trigger an event on the elements
trigger: function(eventType) {
  this.elements.forEach(function(element) {
    var event = new Event(eventType);
    element.dispatchEvent(event);
  });
  return this;
}

// Attach an event listener that will be removed after the first trigger
one: function(eventType, handler) {
  this.elements.forEach(function(element) {
    element.addEventListener(eventType, function oneHandler() {
      handler.apply(this, arguments);
      element.removeEventListener(eventType, oneHandler);
    });
  });
  return this;
}

// Attach mouseenter and mouseleave event listeners to the elements
hover: function(enterHandler, leaveHandler) {
  this.elements.forEach(function(element) {
    element.addEventListener("mouseenter", enterHandler);
    element.addEventListener("mouseleave", leaveHandler);
  });
  return this;
}

$("input").focus(function() {
  console.log("Input element focused");
});

$("input").blur(function() {
  console.log("Input element blurred");
});

$("form").submit(function(event) {
  event.preventDefault();
  console.log("Form submitted");
});

$("input").change(function() {
  console.log("Input value changed");
});

$("input").keydown(function() {
  console.log("Key pressed down");
});

$("input").keyup(function() {
  console.log("Key released");
});

$("div").mousemove(function() {
  console.log("Mouse moved over element");
});

