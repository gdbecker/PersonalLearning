## 01 - Symbols

### Topics Covered

- Examples of creating Symbol objects
- Testing Symbol equality - each Symbol created will be unique
  - But if using Symbol.for() then it will check the global Symbol registry so if two Symbols are created with .for('sameValue') then they will be equal
- Symbols are NOT enumerable
- Object.getOwnPropertyNames(Symbol) to get properties
