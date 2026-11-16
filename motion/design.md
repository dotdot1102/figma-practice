> 이 파일은 홍보 모션 영상의 **시각 기준(규격·색·글꼴·배경·사용 자산)**을 정리한 문서입니다. 장면 내용과 움직임은 [아이디어.md](./아이디어.md)에서 다룹니다.

# 홍보 모션 영상 디자인 기준

- 출처: Figma `수원시립미술관 개선` › `3-6. 모션` › `모바일` 섹션 (`972:2100`), `src/styles/tokens.css`
- `[확인 필요]`: 아직 확정되지 않은 값

---

## 1. 화면 규격

| 항목 | 값 | 비고 |
|---|---|---|
| 길이 | 약 30초 | |
| 화면 비율 | 9:16 세로 | |
| 해상도 | 1080 × 1920 | Figma 화면(360px 너비)을 3배로 키운 크기 |
| 초당 프레임 (fps) | 30fps `[확인 필요]` | |
| 내보내기 형식 | MP4 (H.264) `[확인 필요]` | |
| 화면 안 보이는 영역 | 360 × 640 (Figma 기준) | Figma 화면은 360 × 834라서 한 번에 위쪽 640px만 보임 |

---

## 2. 브랜드 컬러

Figma 변수와 모션 화면 5개에서 실제로 쓰인 색입니다. 미술관 공식 브랜드 컬러는 따로 정해진 것이 없어 `[확인 필요]`입니다.

### 2-1. 기본 색

| 이름 (토큰) | HEX | 용도 |
|---|---|---|
| 흰색 `--white-900` | `#FFFFFF` | 화면 배경, 팝업 배경, 어두운 버튼 위 글자 |
| 검정 `--grey-900` | `#000000` | 제목·본문 글자 |
| 진한 회색 `--color-text-dark` | `#1A1A1A` | 달력·시간 버튼 글자, 선택된 시간 버튼 배경 |
| 회색 `--grey-800` | `#343434` | 보조 글자 (요일, 안내 문구) |
| 중간 회색 `--grey-500` | `#949494` | 검색창 안내 문구, 흐린 글자 |
| 연한 회색 `--color-bg-subtle` | `#F6F6F6` | 달력 칸 배경 |
| 연한 회색 `--grey-50` | `#F4F4F4` | 구분 배경 |
| 선 `--color-line` | `#E2E3E5` | 구분선·테두리 |

### 2-2. 포인트 색 (예약·강조)

| 이름 (토큰) | HEX | 용도 |
|---|---|---|
| 예약 파랑 `--color-reservation-primary` | `#1455A2` | 예약 관련 강조, 팝업 원형 흐림 |
| 진한 파랑 `--blue-900` | `#004085` | 그림자 색 (불투명도 30%), 링크 강조 |
| 연한 파랑 `--color-reservation-page` | `#CAD4EC` | 팝업 원형 흐림 |

### 2-3. 상태 뱃지 색

| 상태 | 배경 | 글자 |
|---|---|---|
| 전시 중 | `#75D568` (불투명도 80%) | `#0D421F` |
| 종료 임박 | `#F80A0A` (불투명도 20%) | `#870707` |

---

## 3. 글꼴

### 3-1. 글꼴과 굵기

| 글꼴 | 굵기 | 파일 |
|---|---|---|
| Pretendard GOV | Regular (400) | `src/fonts/woff-subset/PretendardGOV-Regular.subset.woff` |
| Pretendard GOV | Medium (500) | `src/fonts/woff-subset/PretendardGOV-Medium.subset.woff` |
| Pretendard GOV | Bold (700) | `src/fonts/woff-subset/PretendardGOV-Bold.subset.woff` |

- 영상 편집 프로그램에서 쓰려면 woff가 아닌 OTF/TTF 원본이 필요합니다. `[확인 필요]`
- 화면 속 키보드는 Balsamiq Sans를 쓰지만, 키보드는 숨기므로 영상에서는 쓰지 않습니다.

### 3-2. 글자 크기

Figma의 모바일 텍스트 스타일 기준입니다. 영상 크기는 Figma 크기의 3배입니다.

| 스타일 | 굵기 | Figma 크기 | 영상 크기 (×3) | 쓰는 곳 |
|---|---|---|---|---|
| mobile/h1 | Bold | 24px | 72px | 화면 큰 제목 |
| mobile/h2 | Bold | 20px | 60px | 섹션 제목 |
| mobile/h3 | Bold | 20px | 60px | 카드 제목 |
| mobile/search | Medium | 16px | 48px | 검색어 |
| mobile/body | Regular | 16px | 48px | 본문 |
| mobile/cta | Bold | 16px | 48px | 버튼 글자 |
| mobile/badge | Bold | 15px | 45px | 상태 뱃지 |
| mobile/sub | Regular | 14px | 42px | 보조 글자 |
| mobile/popup | Regular | 10px | 30px | 팝업 안 장소·날짜 |
| 자막 | `[확인 필요]` | – | `[확인 필요]` | 자막을 넣을지 정하지 않음 |
| 엔딩 문구 | `[확인 필요]` | – | `[확인 필요]` | 엔딩 화면 미정 |

---

## 4. 장면 배경색 규칙

| 대상 | 배경 | 비고 |
|---|---|---|
| 앱 화면 (`mobile1` ~ `mobile5`) | `#FFFFFF` | 5개 화면 모두 흰색. 화면이 영상 전체를 채움 |
| 예약 완료 팝업 뒤 | 흐림 효과 (Layer blur 4) | 어둡게 덮는 색은 없음 |
| 인트로 첫 화면 | `#FFFFFF` `[확인 필요]` | 로고가 나오기 전 빈 화면 |
| 엔딩 화면 | `[확인 필요]` | 흰색 / 예약 파랑 `#1455A2` 중 선택 |
| 장면 전환 사이 | 따로 두지 않음 `[확인 필요]` | 화면끼리 바로 이어짐 |

---

## 5. 반복해서 쓸 모티프

시안에 있는 요소 중 영상 전체에서 반복할 수 있는 후보입니다. 실제로 쓸지는 모두 `[확인 필요]`입니다.

| 모티프 | 출처 (Node ID) | 모양 | 쓸 수 있는 곳 |
|---|---|---|---|
| 파란 원형 흐림 | `m/팝업창` (972:2412) 안 `Ellipse 1~3` | `#1455A2`(80%)·`#CAD4EC`·`#FFFFFF` 원 3개에 큰 흐림 (약 97~111) | 인트로·엔딩 배경, 장면 전환 |
| 파란 그림자 | 토큰 `--shadow-modal` | `#004085` 30%, 아래로 16px, 흐림 32px | 카드·팝업이 떠 보이게 할 때 |
| 둥근 모서리 | 토큰 `--radius-lx` | 12px (영상 36px) | 카드, 팝업, 엔딩 요소 |
| 상태 뱃지 | `상태뱃지` 컴포넌트 | 2-3의 색 | 전시 상태 강조 |
| 터치 표시 | **시안에 없음** | `[확인 필요]` | 버튼·날짜를 누르는 순간 |

---

## 6. 사용할 자산 목록

### 6-1. 화면

내보낼 파일 위치는 `motion/assets/screens/` `[확인 필요]`입니다.

| 화면 | Node ID | 내보낼 파일명 |
|---|---|---|
| mobile1 (메인) | 972:2101 | `screen-01-main.png` |
| mobile2 (전시 찾기) | 972:2165 | `screen-02-search.png` |
| mobile3 (전시 상세) | 972:2413 | `screen-03-detail.png` |
| mobile4 (날짜·시간 선택) | 972:2206 | `screen-04-reservation.png` |
| mobile5 (예약 완료) | 972:2309 | `screen-05-complete.png` |
| 예약 완료 팝업 | 972:2412 | `popup-reservation-complete.png` |

### 6-2. 로고

| 로고 | Figma (Node ID) | 파일 | 비고 |
|---|---|---|---|
| 기본 로고 (검정) | `수원시립로고 1` (컴포넌트 234:4620) | `src/assets/images/logo/logo.png` | Figma 로고는 이미지 한 장. 같은 파일인지 `[확인 필요]` |
| 흰색 로고 | – | `src/assets/images/logo/logo-white.png` | 어두운 엔딩 배경일 때 `[확인 필요]` |
| 검정 배경 로고 | – | `src/assets/images/logo/logo-black-bg.png` | 사용 여부 `[확인 필요]` |

### 6-3. 이미지

| 이미지 | Figma 레이어 이름 | 쓰는 화면 | 파일 |
|---|---|---|---|
| 전시 – 그린그린 | `그린그린 1` | mobile1, mobile2 | `src/assets/images/exhibition/exhibition-green-green.png` |
| 전시 – 확장팩 | `확장팩 1` | mobile1, mobile2, mobile3 | `src/assets/images/exhibition/exhibition-expansion-pack.png` |
| 전시 – 패트리샤 | `패트리샤 1` | mobile1, mobile2 | `src/assets/images/exhibition/exhibition-kinship.png` `[확인 필요]` (이름이 달라 같은 이미지인지 모름) |
| 전시 – 블랑블랙 | `블랑블랙 1` | mobile1, mobile2 | `src/assets/images/exhibition/exhibition-blanc-black.png` |
| 미술관 – 행궁본관 | `수원시립미술관행궁본관 1` | mobile1 | `src/assets/images/museum/museum-haenggung.png` |
| 미술관 – 만석전시관 | `수원시립만석관 1` | mobile1 | `src/assets/images/museum/museum-manseok.png` |
| 뉴스 사진 4장 | `20261014_161750 1` 외 3장 | mobile1 | `src/assets/images/newsletter/newsletter-07.png` ~ `newsletter-10.png` `[확인 필요]` (순서 대응 확인 안 함) |

- 영상에서 빼는 이미지(지도, 푸터 SNS 아이콘)는 목록에 넣지 않았습니다. 제외 목록은 [아이디어.md](./아이디어.md) 3장에 있습니다.
