import TopSection from './TopSection'
import banner1Image from '../../assets/images/banner/top-section-poster.png'
import banner2Image from '../../assets/images/banner/top-section-banner-2.png'
import banner3Image from '../../assets/images/banner/top-section-banner-3.png'
import banner4Image from '../../assets/images/banner/top-section-banner-4.png'

/**
 * 상단 섹션 배너 — 전시별 상단 섹션 4종
 * Figma: 상단섹션배너 (499:12805) — Property 1 = 배너1 / 배너2 / 배너3 / 배너4
 * 사용 컴포넌트: TopSection (Figma 상단섹션)
 *
 * 사용 예)
 *   <TopSectionBanner banner={2} href="/exhibitions/2" />
 *
 * @param {1|2|3|4} banner  배너 번호 (Figma Property 1)
 * @param {string}  href    전시 상세 주소
 */
const BANNERS = {
  // 배너1 (499:12804)
  1: {
    title: '그린그린 뮤지엄 : 감각 노트',
    period: '2026-08-11 ~ 2026-12-04',
    imageSrc: banner1Image,
    imageAlt:
      '그린그린 뮤지엄: 감각 노트 포스터 — 수원시립만석전시관 참여형 교육전시, 2026. 8. 11. ~ 12. 4., 양지윤 · 임현경 · 이혜영',
  },
  // 배너2 (499:12801)
  2: {
    title: '2026 국제전《패트리샤 피치니니: 킨쉽》',
    period: '2026-07-23 ~ 2026-11-01',
    imageSrc: banner2Image,
    imageAlt: 'patricia piccinini 패트리샤 피치니니: 킨쉽 Kinship 포스터 — 2026. 7. 23. ~ 11. 1., 수원시립미술관',
  },
  // 배너3 (499:12803)
  3: {
    title: '확장팩: 아티스틱 리서치',
    period: '2026-08-28 ~ 2026-12-20',
    imageSrc: banner3Image,
    imageAlt:
      '확장팩: 아티스틱 리서치 EXPANSION PACK: ARTISTIC RESEARCH 포스터 — 2026. 8. 28. ~ 12. 20., 수원시립아트스페이스광교',
  },
  // 배너4 (499:12802)
  4: {
    title: '2026 소장품전《블랑 블랙 파노라마》',
    period: '2026-02-12 ~ 2027-03-01',
    imageSrc: banner4Image,
    imageAlt:
      '2026 수원시립미술관 소장품전 블랑 블랙 파노라마 Blanc Black Panorama 포스터 — 2026. 2. 12. ~ 2027. 3. 1.',
  },
}

function TopSectionBanner({ banner = 1, href }) {
  const data = BANNERS[banner] ?? BANNERS[1]
  return <TopSection {...data} href={href} />
}

export default TopSectionBanner
