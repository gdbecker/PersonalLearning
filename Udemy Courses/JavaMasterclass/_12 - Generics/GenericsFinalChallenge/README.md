## GenericsFinalChallenge

Followed along with Tim's tutorial with Student and LPAStudent classes, QueryItem interface and QueryList class, and wrapping up with a final section challenge

--

In this challenge, I want you to start with some of the code we just talked about in the last video.
Be sure to start with the Student and LPAStudent classes, and the QueryItem interface and QueryList class.

In this challenge, you'll want to do the following items:
 - Change QueryList to extend ArrayList, removing the items field.
 - Add a student id field to the Student class, and Implement a way to compare Students, so that students are naturally ordered by a student id.
 - Implement at least one other mechanism for comparing Students by course or year, or for LPA Students, by percent complete.

In this challenge, you'll want to do the following items:
 - Override the matchFieldValue method on the LPAStudent class, so that you return students, not matched on percent complete equal to a value, but on percent less than or equal to a submitted value. Note: an LPA Student should be searchable by the same fields as Student as well.
 - Run your code for 25 random students, selecting students who are less than or equal to 50% done their course, and print out the list, sorted in at least two ways, first by using List.sort with the Comparator.naturalOrder() comparator, and then using your own Comparator, so first by student id, as well as one of the other ways you selected.
 - And be sure to have some fun!