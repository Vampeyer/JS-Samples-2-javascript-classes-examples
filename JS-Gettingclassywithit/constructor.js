// The constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class — a SyntaxError is thrown if the class contains more than one occurrence of a constructor method.

// A constructor can use the super keyword to call the constructor of the super class.

// You can create instance properties inside the constructor:

// JS
// Copy to Clipboard
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}