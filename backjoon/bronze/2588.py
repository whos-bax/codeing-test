a = int(input())
b = int(input())

firstB = b % 10
secondB = (b % 100 - firstB)
thirdB = (b % 1000 - secondB)

print(a * firstB)
print(a * int(secondB / 10))
print(a * int(thirdB / 100))
print(a*b)