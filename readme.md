# 백준 문제 JavaScript 테스트 하기

## 1. node.js 사용하기
Node.js 다운 사이트 : https://nodejs.org/
## 2. vscode 세팅
확장 플러그인 Code Runner 사용하기
실행 단축키 : ctrl + option + n
## 3. 실행환경 구성
실행 JS : index.js
예시 담길 txt 파일 : example.txt
풀이 파일 저장 폴더 : baekjoon/submit
## 4. 실행 순서
1) 예제 복사 붙여넣기 -> example.txt
2) index.js 로 테스트 -> readFileSync('example.txt')
3) 업로드 파일 만들기 -> readFileSync('/dev/stdin')
## 5. gitignore
문제 풀이 마다 example.txt와 index.js 는 계속 바뀌므로 무시
## 6. 예제 입력 받기
1) 한 줄에 공백으로 값이 들어올 때
=> .split(' ');
2) 한 줄에 하나씩 값이 들어올 때
=> .split('\n');

참고 : https://velog.io/@eundada064/%EB%B0%B1%EC%A4%80-JavaScript-VSCode-%ED%99%98%EA%B2%BD-%EC%84%B8%ED%8C%85