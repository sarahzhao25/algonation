## Other Approach (ignore, but see for thought process)
Set up a hashmap where the key is the x index * length of a row (5) + y. The value is the number of neighbors. You only add in to a hashmap if your value is NOT a zero - only rivers.
you can do a search then -> you start with one of the keys on the hashmap to see how many neighbors it has. for every neighbor, you add that onto a queue to check its neighbors, and then you add the key into a Set (already been to). You start the size at 1.
now until the neighbors are done:
you want to check if any of its neighbors already exist. => do not add to queue.
you can do some math to get all the possible  neighbors, and then check the hashmap's keys if it is a zero.
you keep adding 1, and also adding its new neighbors onto the queue until the queue is empty.
when the queue is empty: you have hit 1 river, and you can then delete the existing neighbors from this huge hashmap, and add this size to a size array.
and you continue until the hashmap is empty
