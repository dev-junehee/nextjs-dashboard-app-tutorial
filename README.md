## 🖤 Next.js Dashboard App Tutorial

이 프로젝트는 [Next.js Dashboard App Tutorial](https://nextjs.org/learn/dashboard-app)에 기반하여 Next.js App Routing을 공부하기 위한 프로젝트입니다.<br />
프로젝트 학습 과정과 과정 중 생긴 질의응답에 대해 기록합니다. 👩🏻‍💻

<br />

> **진행 기간** : 2023. 11. 21 (TUE) ~ 진행 중<br />**배포 사이트** : [아직이에요!]()

<br />

## 🌷 진행 과정

### 1일차

- [x] Chapter1 : 프로젝트 시작
- [x] Chapter2 : CSS 스타일링

### 2일차

- [ ] Chapter3 : 폰트 및 이미지 최적화
- [ ] Chapter4 : 레이아웃 및 페이지 만들기
- [ ] Chapter5 : 페이지 탐색
- [ ] Chapter6 : 데이터베이스 설정
- [ ] Chapter7 : 데이터 fetching
- [ ] Chapter8 : 정적 및 동적 렌더링
- [ ] Chapter9 : 스트리밍
- [ ] Chapter10 : 부분 사전 렌더링
- [ ] Chapter11 : 검색 및 페이지네이션 추가
- [ ] Chapter12 : 데이터 변형
- [ ] Chapter13 : 에러 핸들링
- [ ] Chapter14 : 접근성 개선
- [ ] Chapter15 : 인증 추가
- [ ] Chapter16 : 메타 데이터 추가

<br />

## 💬 회고

### 새롭게 알게된 것

- [clsx 라이브러리](https://github.com/lukeed/clsx)
- [next/font](https://nextjs.org/docs/pages/api-reference/components/font)

### 배운 점

- NEXT.js는 `next/font` 모듈을 사용해 폰트를 자동으로 최적화 한다. 폰트에 대한 추가 네트워크 요청이 없도록 빌드 시 폰트 파일을 다운로드 하고 다른 정적 데이터와 함께 호스팅한다.
- `next/font`는 모든 폰트 파일에 대한 내장 자동 셀프 호스팅 기능이 포함되어 있어 웹 폰트를 최적으로 로드하여 레이아웃 시프트(Layout shift) 현상이 생기지 않도록 한다.
-

### 아쉬운 점

<br />

## 📂 폴더 구조

- `/app`: 애플리케이션에 대한 모든 경로, 구성 요소 및 논리가 포함되어 있으며 여기서 주로 작업하게 됩니다.
- `/app/lib`: 재사용 가능한 유틸리티 함수, 데이터 가져오기 함수 등 애플리케이션에서 사용되는 함수가 포함되어 있습니다.
- `/app/ui`: 카드, 테이블, 양식 등 애플리케이션의 모든 UI 구성 요소가 포함되어 있습니다.
- `/public`: 이미지와 같은 애플리케이션의 모든 정적 자산을 포함합니다.
- `/scripts`: 이후 장에서 데이터베이스를 채우는 데 사용할 시드 스크립트가 포함되어 있습니다.
- `next.config.js` : 응용프로그램의 루트에 next.config.js와 같은 Config 파일도 볼 수 있습니다. 이 파일들은 대부분 create-next-app을 사용하여 새 프로젝트를 시작할 때 생성되고 미리 구성됩니다. 이 과정에서는 수정할 필요가 없습니다.

<br />

## 👀 프로젝트 테스트

### clone project

```bash
$ git clone git@github.com:dev-junehee/nextjs-dashboard-app-tutorial.git
```

### go to project

```bash
$ cd nextjs-dashboard-app-tutorial
```

### install npm

```bash
$ npm install
```

### start project

```bash
$ npm run dev
```
