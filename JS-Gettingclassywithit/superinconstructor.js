// The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.

// The super.prop and super[expr] expressions are valid in any method definition in both classes and object literals. The super(...args) expression is valid in class constructors.

// Try it


class Foo {
    constructor(name) {
      this.name = name;
    }
  
    getNameSeparator() {
      return '-';
    }
  }
  
  class FooBar extends Foo {
    constructor(name, index) {
      super(name);
      this.index = index;
    }
  
    getFullName() {
      return this.name + super.getNameSeparator() + this.index + super.getNameSeparator();
    }
  }
  
  const firstFooBar = new FooBar('foo', 1);
  
  console.log(firstFooBar.name);
  // Expected output: "foo"
  
  console.log(firstFooBar.getFullName());
  // Expected output: "foo-1"