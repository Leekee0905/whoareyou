# 프로젝트명: Who are you?(누구세요?)

내일배움캠프 2조 IIIII 팀의 팀원 소개 페이지입니다.

링크: https://leekee0905.github.io/whoareyou/

## 프로젝트 구조

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d2e7cef1-2ab0-4107-a0ee-44a42d48bc4d/e61d1ff7-71d4-4496-b21e-0fc097311b36/Untitled.png)

하나의 html 파일과 여러 js파일을 통해 구성된 반응형 소개 페이지입니다.

## 개발 환경

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d2e7cef1-2ab0-4107-a0ee-44a42d48bc4d/bf91c5e3-0347-4f7a-8cd4-eec795dcd112/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d2e7cef1-2ab0-4107-a0ee-44a42d48bc4d/bc1c70d2-1979-4c90-a343-c0b04c255b60/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d2e7cef1-2ab0-4107-a0ee-44a42d48bc4d/519fb789-86e8-4bfe-9fd2-d51dd4530543/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d2e7cef1-2ab0-4107-a0ee-44a42d48bc4d/b5e71841-3f0d-489a-94a8-a06493ef522a/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d2e7cef1-2ab0-4107-a0ee-44a42d48bc4d/4d594a64-818c-4ec2-b94a-56e34de6b41c/Untitled.png)

- **VSCODE**
- **Firebase**
- **HTML,CSS,JAVASCRIPT**
- **jQuery**
- **Bootstrap**

## 페이지 구성

### 첫 화면

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d2e7cef1-2ab0-4107-a0ee-44a42d48bc4d/ee3fd8f2-28b4-487f-95ea-44e305c70c11/Untitled.png)

### 팀 목표

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d2e7cef1-2ab0-4107-a0ee-44a42d48bc4d/7fb3305a-4565-4b2b-b381-2ffdd56440eb/Untitled.png)

- 팀 목표 구역
- 페이지 상단에서 벗어나면 나타나는 우측 하단 Top Scroll 버튼 구현
- 각 팀원 별 구역 mouse over시 css 변화


### 팀 약속

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d2e7cef1-2ab0-4107-a0ee-44a42d48bc4d/2055b5b4-b175-47a3-bb5d-1ba421fa0882/Untitled.png)

- 팀 약속 구역
- 카드를 통해 팀 약속 표현
- 팀 좌우명 - 기간 내에 완수하자

### 팀 소개

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d2e7cef1-2ab0-4107-a0ee-44a42d48bc4d/2c9bc3e8-3a55-4377-b73b-65dd51199f55/Untitled.png)

- 현재 구역 부터는 **Firebase**를 통한 데이터 관리
- 카드 이미지와 이름, mbti 정보를 Firebase를 사용하여 관리
- mouse-over시 흑백에서 컬러로 볼 수 있음
- 각 멤버 구역 클릭 시 해당 팀원의 소개란으로 스크롤하여 이동


### 팀원 소개

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d2e7cef1-2ab0-4107-a0ee-44a42d48bc4d/70f84a02-1a60-4f79-bb40-c2fbead7ce4b/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d2e7cef1-2ab0-4107-a0ee-44a42d48bc4d/8d672b7c-47b8-48b6-968a-45ea334a7979/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d2e7cef1-2ab0-4107-a0ee-44a42d48bc4d/585d9da5-c545-40ed-a4f1-ea630d499d8d/Untitled.png)

- 각 프로필 이미지는 팀 소개와 마찬가지로 mouse-over시 컬러로 전환
- 깃허브와 블로그 링크 이동
- Firebase를 통한 이미지, 소개 정보 연동


### 댓글 CRUD

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/d2e7cef1-2ab0-4107-a0ee-44a42d48bc4d/5c838237-cd7b-4989-8d3c-014def848b0f/Untitled.png)

- Firebase를 통한 댓글 등록 및 수정 삭제 기능 구현
- 튜터님의 조언을 통해 비밀번호로 수정 삭제 통제 ⇒ 개인적으로 암호화를 하고 싶었으나 시간 관계상 텍스트 데이터로 대체


## 개발 이슈 및 해결

### Conflict!

```jsx
<<<<<<< HEAD(Current Change)
hello world!
========
bye world!
<<<<<<< BRANCH(Incoming Change)
```

첫 main, branch 병합 과정에서 일어난 Conflict, 삭제할 부분을 잘못 삭제하고 병합, html태그 주석 처리 과정에서 닫는 태그가 날아가 css가 망가지는 에러가 발생.

해결: 마지막으로 병합한 Branch의 코드를 찾아가서 복사 붙여 넣기 후 날아간 남은 코드 합친 후 다시 push

⇒ Branch의 중요성을 깨닳음, 서로의 이름으로 브랜치를 팠지만 예전에 기능별로 브랜치를 하나씩 팠던 기억이 나서 다음부터는 한 브랜치가 아닌 하나의 기능마다 브랜치를 파서 버전을 늘려야겠다고 생각

### autofocus

페이지가 새로고침 때마다 자동으로 스크롤이 중간 지점으로 향하는 에러를 발견.

해결: 구글링을 해도 찾지 못해 ChatGPT에게 자동으로 스크롤 될만한 HTML,CSS,JS 속성들이 있는지 질문하여 autofocus라는 속성이 존재함을 알게 되었고 이것이 자동 스크롤을 유발하는 것을 알게 됨.

⇒ 댓글 CRUD input태그에 autofocus속성이 설정되어 있었음 
