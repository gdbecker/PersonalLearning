## Type Annotations and Type Inference

### Type Annotations

- Code we add to tell TypeScript what type of value a variable will refer to
- We (developers) tell TypeScript the type
- When to use:
  - When we declare a variable on one line and then initialize later
  - When we want a variable to have a type that can't be inferred
  - When a function returns the 'any' type and we need to clarify the value

### Type Inference

- TypeScript tries to figure out what type of value a variable refers to
- TypeScript guesses the type
- If declaration and initialization are on the same line, TypeScript will figure out the type of the variable for us
- When to use:
  - Always!

### The 'Any' Type

- Definition: it's a type, just as 'string' or 'boolean' are
- Means TypeScript has no idea what this is - can't check for correct property references
- Avoid variables with 'any' at all costs
