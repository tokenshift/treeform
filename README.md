Treeform
========

Tree transformation and HTML templating JavaScript library.

## Concepts

A *node* in Treeform can be anything; an object, a function, a string, a
number, whatever you want to use to represent your tree. What Treeform needs to
know is how to get a list of the nodes children (the `getChildren` function),
and how to update that list of children (the `setChildren` function).
Alternately, you can provide a string specifying what property of a node
contains its children.

### Transformations

A *transformation* is a combination of a matcher, a function that is called
with a node and returns true if that node should be transformed; and the
transformation itself, which is called with the same node and returns a
new/transformed node (or `null`, to delete the node; or a list of nodes, to
replace a single node with multiple).

## Usage

	var root = { val: 1, children: [{ val: 2 }, { val: 3 }] };
	var result = Treeform('children').transform(root,
		matcher1, transformation1,
		matcher2, transformation2);

## Treeform.html

**Treeform.html** adds HTML parsing, matchers based on CSS selectors, and HTML-
focused transformations (like adding classes or setting element attributes) to
Treeform.
