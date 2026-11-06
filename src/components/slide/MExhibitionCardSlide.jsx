import { useState } from 'react'
import MExhibitionCard from '../card/MExhibitionCard'
import SlideButton from '../button/SlideButton'
import imageExpansionPack from '../../assets/images/exhibition/exhibition-expansion-pack.png'
import imageGreenGreen from '../../assets/images/exhibition/exhibition-green-green.png'
import imageKinship from '../../assets/images/exhibition/exhibition-kinship.png'
import imageBlancBlack from '../../assets/images/exhibition/exhibition-blanc-black.png'
import './MExhibitionCardSlide.css'

/**
 * 전시 카드 슬라이드 (모바일) — 전시 카드를 좌우 버튼으로 한 장씩 넘겨 봄
 * Figma: m/전시카드 (595:6447) — Property 1 = 전시카드슬1 ~ 전시카드슬4 (보이는 카드 번호)
 * 사용 컴포넌트: MExhibitionCard (m/전시카드), SlideButton (버튼)
 *
 * 사용 예)
 *   <MExhibitionCardSlide />
 *   <MExhibitionCardSlide items={[{ title, place, period, status, imageSrc, imageAlt }, ...]} />
 *
 * @param {Array}  items         카드 목록 (없으면 Figma 시안 4개)
 * @param {number} initialIndex  처음 보이는 카드 번호 (0부터 시작)
 */
const DEFAULT_ITEMS = [
  {
    title: '확장팩: 아티스틱 리서치',
    place: '수원시립아트스페이스광교',
    period: '2026 . 08 . 28 ~ 2026 . 12 . 20',
    status: 'exhibiting',
    imageSrc: imageExpansionPack,
    imageAlt: '확장팩: 아티스틱 리서치 포스터 — 2026. 8. 28. ~ 12. 20., 수원시립아트스페이스광교',
  },
  {
    title: '그린그린 뮤지엄 : 감각 노트',
    place: '수원시립만석전시관',
    period: '2026 . 08 . 11 ~ 2026 . 12 . 04',
    status: 'exhibiting',
    imageSrc: imageGreenGreen,
    imageAlt: '그린그린 뮤지엄: 감각 노트 포스터 — 2026. 8. 11. ~ 12. 4., 수원시립만석전시관 참여형 교육전시',
  },
  {
    title: '2026국제전《패트리샤 피치니니:킨쉽》',
    place: '수원시립미술관 행궁 본관',
    period: '2026 . 07 . 23 ~ 2026 . 11 . 01',
    status: 'ending',
    imageSrc: imageKinship,
    imageAlt: '패트리샤 피치니니: 킨쉽 Kinship 포스터 — 2026. 7. 23. ~ 11. 1., 수원시립미술관',
  },
  {
    title: '2026소장품전《블랑 블랙 파노라마》',
    place: '수원시립미술관 행궁 본관',
    period: '2026 . 02 . 12 ~ 2027 . 03 . 01',
    status: 'exhibiting',
    imageSrc: imageBlancBlack,
    imageAlt: '2026 소장품전 블랑 블랙 파노라마 Blanc Black Panorama 포스터 — 2026. 2. 12. ~ 2027. 3. 1.',
  },
]

function MExhibitionCardSlide({ items = DEFAULT_ITEMS, initialIndex = 0 }) {
  const [index, setIndex] = useState(initialIndex)
  const lastIndex = items.length - 1

  return (
    <section className="m-exhibition-card-slide" aria-roledescription="carousel" aria-label="전시 목록">
      <div className="m-exhibition-card-slide__view">
        <ul className="m-exhibition-card-slide__track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {items.map((item, i) => (
            <li
              key={item.title}
              className="m-exhibition-card-slide__item"
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${items.length}`}
              aria-hidden={i !== index}
              inert={i !== index}
            >
              <MExhibitionCard {...item} />
            </li>
          ))}
        </ul>
      </div>

      <div className="m-exhibition-card-slide__prev">
        <SlideButton direction="prev" label="이전 전시" disabled={index === 0} onClick={() => setIndex(index - 1)} />
      </div>
      <div className="m-exhibition-card-slide__next">
        <SlideButton
          direction="next"
          label="다음 전시"
          disabled={index === lastIndex}
          onClick={() => setIndex(index + 1)}
        />
      </div>

      {/* 스크린리더에 현재 위치 안내 */}
      <p className="sr-only" aria-live="polite">
        {items.length}개 중 {index + 1}번째 전시
      </p>
    </section>
  )
}

export default MExhibitionCardSlide
