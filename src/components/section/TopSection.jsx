import MMoreButton from '../button/MMoreButton'
import posterImage from '../../assets/images/banner/top-section-poster.png'
import './TopSection.css'

/**
 * 상단 섹션 — 전시 포스터 + 전시 제목·기간 + [전시 상세 바로가기]
 * Figma: 상단섹션 (450:9041)
 * 사용 컴포넌트: MMoreButton (Figma에서 m/더보기버튼을 사용)
 *
 * 사용 예)
 *   <TopSection
 *     title="그린그린 뮤지엄 : 감각 노트"
 *     period="2026-08-11 ~ 2026-12-04"
 *     href="/exhibitions/1"
 *   />
 *
 * @param {string} title     전시 제목
 * @param {string} period    전시 기간
 * @param {string} href      전시 상세 주소
 * @param {string} imageSrc  포스터 이미지 (기본: Figma 시안 포스터)
 * @param {string} imageAlt  포스터 설명 (이미지 속 글자를 글로 적어 줌)
 */
function TopSection({
  title,
  period,
  href,
  imageSrc = posterImage,
  imageAlt = '그린그린 뮤지엄: 감각 노트 포스터 — 수원시립만석전시관 참여형 교육전시, 2026. 8. 11. ~ 12. 4., 양지윤 · 임현경 · 이혜영',
}) {
  return (
    <section className="top-section">
      <img className="top-section__image" src={imageSrc} alt={imageAlt} />

      <div className="top-section__head">
        <div className="top-section__text">
          <h2 className="top-section__title">{title}</h2>
          <p className="top-section__period">{period}</p>
        </div>
        <MMoreButton href={href} />
      </div>
    </section>
  )
}

export default TopSection
