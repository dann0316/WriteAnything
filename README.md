# Write anything (커뮤니티)

## 📌 프로젝트 소개  
Next 기반의 커뮤니티 형식의 웹 애플리케이션입니다.
회원가입, 소셜 로그인, ID/PW 로그인, 로그아웃이 가능한 페이지이고, 글을 올리고 글을 볼 수 있으며 해당 글에 댓글까지 달 수 있습니다.

## 🚀 주요 기능
- 회원가입, 소셜 로그인, ID/PW 로그인, 로그아웃
- 글 발행
- 글 수정
- 글 목록
- 댓글 발행
- 댓글 수정
- 댓글 삭제

## 📁 폴더 구조
/src/app
  /components   # UI 컴포넌트
  ButtonLink.tsx
  Footer.tsx
  Header.txs
  LoginBtn.tsx
  LogoutBtn.tsx
  SideBanner.tsx
  /detail/[id]  # 글 상세 페이지
  page.tsx
  /list  # 글 목록 페이지
  page.tsx
  /register # 회원가입 페이지
  page.tsx
  /update # 글 수정 페이지
  page.tsx
  /write # 글 발행 페이지
  page.tsx
global.css
layout.tsx
page.module.css
page.tsx
provider.tsx
  /util  #데이터 베이스 파일
  database.ts
README.md

## 🛠 사용 기술
-프론트엔드: NextJS, Tailwind, Typescript
-API 호출: Fetch API
-백엔드: NextJS
-DB: MongoDB
