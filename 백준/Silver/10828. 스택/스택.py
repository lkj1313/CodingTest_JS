import sys
stack = []
N= int(sys.stdin.readline())
for _ in range(N):
    command = sys.stdin.readline().strip()
    if command.startswith('push'):
        _,num = command.split()
        stack.append(num)
    elif command == 'pop':
        print(stack.pop() if stack else -1)
    elif command =='size':
        print(len(stack))
    elif command == 'empty':
        if len(stack)==0:
            print(1)
        else:
            print(0)
    elif command == 'top':
        print(stack[-1] if stack else -1)
