nums = list(map(int, input().split()))

reversed_nums = [int(str(n)[::-1]) for n in nums]

reversed_nums.sort()

print(reversed_nums[1])