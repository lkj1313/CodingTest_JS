A=int(input())
B=int(input())
C=int(input())

multiplication = A*B*C

S= str(multiplication)
result = ''
for i in range(10):
    print(S.count(str(i)))

