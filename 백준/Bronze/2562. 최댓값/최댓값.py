nums = []

for _ in range(9):
    nums.append(int(input()))


maxValue = max(nums)
idx = nums.index(maxValue)+1

print(maxValue)
print(idx)