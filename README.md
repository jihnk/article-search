### 사용 기술

- react
- typescript
- redux toolkit (+ redux-persist)
- recoil, recoil persist
- react query
- axios
- tailwindcss
- moment
- react-datepicker

### 실행 방법

      npm i && npm start

### 파일 구조
 TODO

### 구현 내용

- 홈 화면

  - [x] new york times의 api 호출
  - [x] 무한 스크롤 적용 (intersection observer)
  - [x] 필터 영역 클릭시 필터 모달 노출
  - [x] 홈 headline, pub_date 필터링 적용 (api), 국가는 ui만 구현
  - [x] 스크랩 추가/제거 기능 + alert 노출
  - [x] 리스트 기사 클릭시 new york times의 기사 웹페이지로 리다이렉트

- 스크랩 화면

  - [x] 스크랩 제거 기능 + alert 노출
  - [x] 스크랩 기사 없으면 no data 노출 +스크랩 하러 가기 버튼 클릭시 홈화면 이동
  - [x] 필터링 된 no data에서 스크랩 하러 가기 버튼 클릭시 홈화면 이동 + 스크랩 필터만 reset
  - [x] 스크랩 필터 headline, pub_date 필터링 적용(filter), 국가는 ui만 구현
  - [x] 리스트 기사 클릭시 new york times의 기사 웹페이지로 리다이렉트
  - [x] 웹을 껐다 켜도 스크랩된 데이터 유지 - redux persist


## TODO
컴포넌트 정리
스크랩 개선