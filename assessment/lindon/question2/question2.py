# # Exercise 2

# Write a Python Program to Check Common Letters in Two Input Strings

# # Example 1

# Input 1 : string = `Hello`
# Input 2 : string = `How are you`

# Output: string[] = ["H","e","o"]


string1 = 'Hello'
string2 = 'How are you'
arr = []

for x in string1:
    for y in string2:
        if x == y:
            if x not in arr:
                arr.append(x)

print(arr)
