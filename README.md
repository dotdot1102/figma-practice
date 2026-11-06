# 수원시립미술관 모바일 웹

React + Vite + JavaScript

## 실행

```bash
npm install
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드
npm run lint     # oxlint
```

## 폴더 구조

```
src/
├─ assets/
│  ├─ icons/        # SVG 아이콘
│  └─ images/       # 이미지
├─ components/      # 공통 컴포넌트
├─ fonts/           # Pretendard GOV 웹폰트 (woff-subset: Regular·Medium·Bold)
├─ pages/           # 화면 단위 컴포넌트
├─ styles/
│  ├─ fonts.css     # @font-face 등록 (400·500·700)
│  ├─ tokens.css    # 디자인 토큰 (Figma 변수·스타일)
│  ├─ reset.css     # 브라우저 초기화
│  ├─ global.css    # 전역 스타일 · 레이아웃 · 유틸
│  └─ typography.css# 텍스트 스타일 클래스
├─ App.jsx
├─ index.css        # 스타일 진입점 (styles/* import)
└─ main.jsx
```

## 디자인 참고

- Figma: 수원시립미술관 개선 › `3-4. 완성` › 모바일 / `핸드오프 문서` 페이지
- 기준 폭 360px, 좌우 여백 16px, 폰트 Pretendard GOV
