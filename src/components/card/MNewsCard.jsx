import './MNewsCard.css'

/**
 * 뉴스 카드 (모바일) — 사진 + 소식 제목·설명
 * Figma: m/뉴스카드 (276:7891)
 *
 * 사용 예)
 *   <MNewsCard title="10월 수원시립미술관 소식" description="[SUMA 뉴스레터] 10월 수원시립미술관 소식" />
 *
 * @param {string} title        소식 제목
 * @param {string} description  소식 설명
 * @param {string} imageSrc     사진 주소 (없으면 분홍 빈 칸)
 * @param {string} imageAlt     사진 설명
 */
function MNewsCard({ title, description, imageSrc, imageAlt = '' }) {
  return (
    <article className="m-news-card">
      <div className="m-news-card__image">{imageSrc && <img src={imageSrc} alt={imageAlt} />}</div>

      <div className="m-news-card__body">
        <h3 className="m-news-card__title">{title}</h3>
        <p className="m-news-card__description">{description}</p>
      </div>
    </article>
  )
}

export default MNewsCard
