A, B = map(int, input().split())

def size(A,B):
    if A>B:
        print('>')
    if A==B:
        print('==')
    if A<B:
        print('<')


size(A,B)