# 꼬마 정민이는 이제 A + B 정도는 쉽게 계산할 수 있다. 이제 A + B + C를 계산할 차례이다!

# 첫 번째 줄에 A, B, C (1 ≤ A, B, C ≤ 10^12)이 공백을 사이에 두고 주어진다.

a,b,c = map(int, input().split(" "))

lc = 1
gc = 10 ** 12

if (a >= lc and b >= lc and c >= lc and a <= gc and b <= gc and c <= gc):
    print(a+b+c)