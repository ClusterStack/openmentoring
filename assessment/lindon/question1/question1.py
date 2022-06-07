string = 'Hello World'
vowels = 0

for x in string:
    # print(x)
    if(
        x == 'a' or
        x == 'e' or
        x == 'i' or
        x == 'o' or
        x == 'u'
    ):
        vowels += 1


print(f'Total amount of vowels is {vowels}')
