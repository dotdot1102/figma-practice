import './DNewsCard.css'

/**
 * 뉴스 카드 (데스크탑) — 사진 + "[SUMA 뉴스레터]" + 소식 제목
 * Figma: d/뉴스카드 (499:12624)
 *
 * 사용 예)
 *   <DNewsCard label="[SUMA 뉴스레터]" month="10월" title="수원시립미술관 소식" />
 *
 * @param {string} label     머리글
 * @param {string} month     월
 * @param {string} title     소식 제목
 * @param {string} imageSrc  사진 주소 (없으면 분홍 빈 칸)
 * @param {string} imageAlt  사진 설명
 */
function DNewsCard({ label = '[SUMA 뉴스레터]', month, title, imageSrc, imageAlt = '' }) {
  return (
    <article className="d-news-card">
      <div className="d-news-card__image">{imageSrc && <img src={imageSrc} alt={imageAlt} />}</div>

      <div className="d-news-card__body">
        <p>{label}</p>
        <h3 className="d-news-card__title">
          <span>{month}</span>
          <span>{title}</span>
        </h3>
      </div>
    </article>
  )
}

export default DNewsCard
