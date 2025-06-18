nums = []
N = int(input())

for _ in range(N):
     nums.append(int(input()))


nums.sort()

seted = set(nums)
kk = list(seted)
kk.sort()
for char in kk:
     print(char)


