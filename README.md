# Code-Challenge-Algos

1) findGreatestSum
  - Given an array of positive and/or negative integers, find the greatest sum of consecutive integers. For example:
    * when given the array [2, 4, 6], findGreatestSum should return 12 as (2 + 4 + 6) is the greatest sum of consecutive integers.
    * When given the array [2, -4, 6], findGreatestSum should return 6, as 6 is greater than 2, (2 + -4), (2 + -4 + 6) and (-4 + 6).
    * When given the array [4, -2, 4], findGreatestSum should return 6, as 6 is greater than 4 and also greater than (4 + -2).

2) findArithmeticSequences
  - A collection is considered Arithmetic if each adjacent number in the collection has an equal difference AND the collection has a minimum length of 3. For example, [ 1, 2, 3, 4, 5 ] would be considered Arithmetic since each adjacent element has a difference of one. [ 2, 4 ] would not be considered Arithmetic (even though each integer in the collection has a difference of two, it is not a minimum length of 3).
  - When given a collection of whole integers, find the total number of Arithmetic sequences within the collection. For example, the collection [ -1, 1, 3, 3, 3, 2, 1, 0] should return 5, as the Arithmetic sequences are located at elements: [ [ 0, 2 ], [ 2, 4 ], [ 4, 6 ], [ 4, 7 ], [ 5, 7 ] ].
