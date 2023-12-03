## 06 - Traversing DOM Nodes

### DOM Node Types

| Type                  | Description                                                                         | Children                                                                     |
| --------------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Element               | Represents an element                                                               | Element, Text, Comment, ProcessingInstruction, CDATASection, EntityReference |
| Attr                  | Represents a node                                                                   | Text, EntityReference                                                        |
| Text                  | Represents textual content in an element or node                                    | None                                                                         |
| CDATASection          | Represents a CDATA section in a document (text that will NOT be parsed by a parser) |                                                                              |
| EntityReference       | Represents an entity reference                                                      | Element, ProcessingInstruction, Comment, Text, CDATASection, EntityReference |
| Entity                | Represents an entity                                                                | Element, ProcessingInstruction, Comment, Text, CDATASection, EntityReference |
| ProcessingInstruction | Represents a processing instruction                                                 | None                                                                         |
| Comment               | Represents a comment                                                                | None                                                                         |
| Document              | Represents the entire document (the root-node of the DOM tree)                      | Element, ProcessingInstruction, Comment, DocumentType                        |
| DocumentType          | Provides an interface to the entities defined for the document                      | None                                                                         |
| DocumentFragment      | Represents a "lightweight" Document object, which can hold a portion of a document  | Element, ProcessingInstruction, Comment, Text, CDATASection, EntityReference |
| Notation              | Represents a notation declared in the DTD                                           | None                                                                         |

### Topics Covered

- Getting child nodes from the parent node
  - childNodes
  - firstChild
  - lastChild
- Getting parent node from the child node
  - parentNode
  - parentElement
- Sibling nodes
  - nextSibling
  - previousSibling
