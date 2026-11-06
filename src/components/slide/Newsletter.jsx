import { useState } from 'react'
import DNewsCard from '../card/DNewsCard'
import SlideButton from '../button/SlideButton'
import iconArrowLeftWhite from '../../assets/icons/arrow/icon-arrow-left-white.png'
import newsletter10 from '../../assets/images/newsletter/newsletter-10.png'
import newsletter09 from '../../assets/images/newsletter/newsletter-09.png'
import newsletter08 from '../../assets/images/newsletter/newsletter-08.png'
import newsletter07 from '../../assets/images/newsletter/newsletter-07.png'
import './Newsletter.css'

/**
 * 뉴스레터 슬라이드 — 뉴스 카드 4장 + 마지막 "더보기" 카드를 좌우 버튼으로 넘겨 봄
 * Figma: 뉴스레터 (544:5671) — Property 1 = 1 ~ 5 (보이는 카드 번호), 기기 = 모바일 / 데스크탑
 *   기기 차이(글자 크기 20px ↔ 28px)는 화면 너비 768px 기준 반응형으로 처리
 * 사용 컴포넌트: DNewsCard (d/뉴스카드), SlideButton (버튼)
 *
 * 사용 예)
 *   <Newsletter moreHref="/newsletter" />
 *
 * @param {Array}  items     뉴스 카드 목록 (없으면 Figma 시안 4개)
 * @param {string} moreHref  "더보기" 카드를 눌렀을 때 이동할 주소
 */
const DEFAULT_ITEMS = [
  {
    month: '10월',
    title: '수원시립미술관 소식',
    imageSrc: newsletter10,
    imageAlt: 'SUMA 뉴스레터 VOL.65 2026년 10월호 표지',
  },
  {
    month: '10월', // Figma 시안 글자 그대로 (이미지는 9월호)
    title: '수원시립미술관 소식',
    imageSrc: newsletter09,
    imageAlt: 'SUMA 뉴스레터 VOL.64 2026년 9월호 표지',
  },
  {
    month: '10월', // Figma 시안 글자 그대로 (이미지는 8월호)
    title: '수원시립미술관 소식',
    imageSrc: newsletter08,
    imageAlt: 'SUMA 뉴스레터 VOL.63 2026년 8월호 표지',
  },
  {
    month: '10월', // Figma 시안 글자 그대로 (이미지는 7월호)
    title: '수원시립미술관 소식',
    imageSrc: newsletter07,
    imageAlt: 'SUMA 뉴스레터 VOL.62 2026년 7월호 표지',
  },
]

function Newsletter({ items = DEFAULT_ITEMS, moreHref }) {
  const [index, setIndex] = useState(0)
  const slideCount = items.length + 1 // 마지막 "더보기" 카드 포함
  const lastIndex = slideCount - 1

  return (
    <section className="newsletter" aria-roledescription="carousel" aria-label="SUMA 뉴스레터">
      <div className="newsletter__view">
        <ul className="newsletter__track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {items.map((item, i) => (
            <li
              key={item.imageSrc}
              className="newsletter__item"
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${slideCount}`}
              aria-hidden={i !== index}
              inert={i !== index}
            >
              <DNewsCard {...item} />
            </li>
          ))}

          {/* 더보기카드 */}
          <li
            className="newsletter__item"
            aria-roledescription="slide"
            aria-label={`${slideCount} / ${slideCount}`}
            aria-hidden={lastIndex !== index}
            inert={lastIndex !== index}
          >
            <a className="newsletter__more" href={moreHref}>
              <span className="newsletter__more-icon">
                <img src={iconArrowLeftWhite} alt="" width="24" height="24" />
              </span>
              <span className="newsletter__more-label">
                더보기<span className="sr-only"> — 뉴스레터 전체 보기</span>
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="newsletter__prev">
        <SlideButton
          direction="prev"
          size="lg"
          label="이전 뉴스레터"
          disabled={index === 0}
          onClick={() => setIndex(index - 1)}
        />
      </div>
      <div className="newsletter__next">
        <SlideButton
          direction="next"
          size="lg"
          label="다음 뉴스레터"
          disabled={index === lastIndex}
          onClick={() => setIndex(index + 1)}
        />
      </div>

      <p className="sr-only" aria-live="polite">
        {slideCount}개 중 {index + 1}번째
      </p>
    </section>
  )
}

export default Newsletter
