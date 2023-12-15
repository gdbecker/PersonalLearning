## Decorators

### What are decorators?

- Functions that can be used to modify/change/anything different properties or methods in the class
- Not the same as JavaScript decorators
- Used inside or on classes only
- Understanding the order in which decorators are ran are the key to understanding them
- Experimental!

### Decorators on a property, method, or accessor

- First argument is the prototype of the object
- Second argument is the key of the property/method/accessor on the object
- Third argument is the property descriptor (more on this in a second)
- Decorators are applied when the code for this class is ran (not when an instance is created)

### Property Descriptor for Methods

- writable
  - Whether or not this property can be changed
- enumerable
  - Whether or not this property get looped over by a 'for...n'
- value
  - Current value
- configurable
  - Property definition can be changed and property can be deleted
