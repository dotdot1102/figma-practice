import imageExpansionPack from '../assets/images/exhibition/exhibition-expansion-pack.png'
import imageGreenGreen from '../assets/images/exhibition/exhibition-green-green.png'
import imageKinship from '../assets/images/exhibition/exhibition-kinship.png'
import imageBlancBlack from '../assets/images/exhibition/exhibition-blanc-black.png'

/**
 * 전시 목록 데이터 — Figma 3-4. 완성 시안의 전시 4개 (임시 데이터)
 *   id:      주소에 쓰는 전시 구분값 (#/exhibitions/<id>)
 *   endDate: 정렬(종료 임박순)·예약 가능 마지막 날에 쓰는 종료일
 *   museum:  전시관 탭(전체/행궁 본관/만석/광교/북수원)과 연결하는 값
 */
export const EXHIBITIONS = [
  {
    id: 'expansion-pack',
    title: '확장팩: 아티스틱 리서치',
    place: '수원시립아트스페이스광교',
    museum: 'gwanggyo',
    period: '2026 . 08 . 28 ~ 2026 . 12 . 20',
    endDate: '2026-12-20',
    status: 'exhibiting',
    imageSrc: imageExpansionPack,
    imageAlt: '확장팩: 아티스틱 리서치 포스터 — 2026. 8. 28. ~ 12. 20., 수원시립아트스페이스광교',
  },
  {
    id: 'green-green',
    title: '그린그린 뮤지엄 : 감각 노트',
    place: '수원시립만석전시관',
    museum: 'manseok',
    period: '2026 . 08 . 11 ~ 2026 . 12 . 04',
    endDate: '2026-12-04',
    status: 'exhibiting',
    imageSrc: imageGreenGreen,
    imageAlt: '그린그린 뮤지엄: 감각 노트 포스터 — 2026. 8. 11. ~ 12. 4., 수원시립만석전시관 참여형 교육전시',
  },
  {
    id: 'kinship',
    title: '2026 국제전《패트리샤 피치니니: 킨쉽》',
    place: '수원시립미술관 행궁 본관',
    museum: 'haenggung',
    period: '2026 . 07 . 23 ~ 2026 . 11 . 01',
    endDate: '2026-11-01',
    status: 'exhibiting',
    imageSrc: imageKinship,
    imageAlt: '패트리샤 피치니니: 킨쉽 Kinship 포스터 — 2026. 7. 23. ~ 11. 1., 수원시립미술관',
  },
  {
    id: 'blanc-black',
    title: '2026 소장품전《블랑 블랙 파노라마》',
    place: '수원시립미술관 행궁 본관',
    museum: 'haenggung',
    period: '2026 . 02 . 12 ~ 2027 . 03 . 01',
    endDate: '2027-03-01',
    status: 'exhibiting',
    imageSrc: imageBlancBlack,
    imageAlt: '2026 소장품전 블랑 블랙 파노라마 Blanc Black Panorama 포스터 — 2026. 2. 12. ~ 2027. 3. 1.',
  },
]

// 전시관 탭 — museum 값 순서 = 탭 순서 (null = 전체)
export const MUSEUM_TABS = [
  { museum: null, mobileLabel: '전체', desktopLabel: '전체' },
  { museum: 'haenggung', mobileLabel: '수원시립미술관\n행궁 본관', desktopLabel: '수원시립미술관행궁 본관' },
  { museum: 'manseok', mobileLabel: '수원시립만석\n전시관', desktopLabel: '수원시립만석전시관' },
  { museum: 'gwanggyo', mobileLabel: '수원시립\n아트스페이스 광교', desktopLabel: '수원시립아트스페이스 광교' },
  { museum: 'buksuwon', mobileLabel: '수원시립북수원\n전시관', desktopLabel: '수원시립북수원전시관' },
]

export const findExhibition = (id) => EXHIBITIONS.find((item) => item.id === id)
