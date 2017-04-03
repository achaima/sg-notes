
ANGULAR FILTER
Using filters in view templates
Filters can be applied to expressions in view templates using the following syntax:

{{ expression | filter }}
E.g. the markup {{ 12 | currency }} formats the number 12 as a currency using the currency filter. The resulting value is $12.00.

Filters can be applied to the result of another filter. This is called "chaining" and uses the following syntax:

{{ expression | filter1 | filter2 | ... }}
Filters may have arguments. The syntax for this is

{{ expression | filter:argument1:argument2:... }}

How we used it in this document:
<li class="item" ng-repeat="item in todo.allTodos | incompleteTodos">



Further reading:
Angular sort 
