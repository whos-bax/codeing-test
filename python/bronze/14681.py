# 첫 줄에는 정수 x가 주어진다. (−1000 ≤ x ≤ 1000; x ≠ 0) 다음 줄에는 정수 y가 주어진다. (−1000 ≤ y ≤ 1000; y ≠ 0)

# 점 (x, y)의 사분면 번호(1, 2, 3, 4 중 하나)를 출력한다.

x = int(input())
y = int(input())

def functionBoolean(number):
    if number > 0:
        return True
    else:
        return False

def quadrant(x, y):
    if x and y:
        print(1)
    elif not x and y:
        print(2)
    elif not x and not y:
        print(3)
    else:
        print(4)

if x != 0 and y != 0 and x >= -1000 and y >= -1000 and x <= 1000 and y <= 1000:
    quadrant(functionBoolean(x), functionBoolean(y))