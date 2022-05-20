from itertools import permutations
import numpy as np


# Online Python compiler (interpreter) to run Python online.
# Write Python 3 code in this online editor and run it.
print("Hello world")

param = [1,2,3]

list_permutations = list(permutations(param))

output = []

for permutation in list_permutations:
    output.append(np.asarray(permutation))


print(output)
