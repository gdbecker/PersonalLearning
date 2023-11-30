## Set Operations Challenge

This class diagram shows you the two classes.
Task has five fields, two with enum types shown.
Task is unique by the project and description fields combined.
Task implements comparable, and is sorted by project then description.
Some test data was set up on the TaskData class, and you can get this data by calling TaskData.getData, passing it the names, Ann, Bob, or Carol, or some other string, like "all", to get all tasks.

Let's say you're a new manager, of a team that consists of three team members working under you, Ann, Bob, and Carol.
Each of these developers is working on a set of tasks.
You've asked all your developers to submit what they're working on to you.
You also have a master set of tasks, which your own boss sent to you.

You'll be using that data, to answer the following questions.
 - What is the full task list? This is the list of all tasks described by your manager or boss, and any additional tasks the employees have, that may not be on that list.
 - Which tasks are assigned to at least one of your 3 team members?
 - Which tasks still need to be assigned?
 - Which tasks are assigned to multiple employees?
To do some of this work, create three methods on your Main class.

Be sure the sets you pass to these methods, don't mutate in these methods. In other words, return a new set.
 - Create a getUnion method, that takes a List of Sets, and will return the union of all the sets.
 - Create a getIntersect method, that takes two Sets, and returns the intersection of the sets.
 - Create a getDifference method, that takes two Sets, and removes the second argument's set from the first.