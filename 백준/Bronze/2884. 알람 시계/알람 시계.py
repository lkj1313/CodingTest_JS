H,M = list(map(int,input().split()))


if M>=45:
    M-=45
else:
    H-=1
    M = M+15
    if(H<0):
        H=23


print(H, M)