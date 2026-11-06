import './CurrentExhibitionCard.css'

/**
 * 현재 전시 카드 — 왼쪽 사진 + 오른쪽 전시 정보 (기간·시간·장소·관람료·특이사항)
 * Figma: 현재전시카드 (279:4062)
 *
 * 사용 예)
 *   <CurrentExhibitionCard
 *     title="그린그린 뮤지엄 : 감각 노트"
 *     details={[
 *       { label: '전시기간', value: '2026-08-11 ~ 2026-12-04' },
 *       { label: '관람시간', value: '10:00 ~ 18:00' },
 *       { label: '전시장소', value: '수원시립만석전시관' },
 *       { label: '관람료', value: '무료' },
 *       { label: '특이사항', value: '입장마감 시간 17 : 30' },
 *     ]}
 *   />
 *
 * @param {string} title     전시 제목
 * @param {Array}  details   정보 목록 [{ label, value }]
 * @param {string} imageSrc  사진 주소 (없으면 연파랑 빈 칸)
 * @param {string} imageAlt  사진 설명
 */
function CurrentExhibitionCard({ title, details = [], imageSrc, imageAlt = '' }) {
  return (
    <article className="current-exhibition-card">
      <div className="current-exhibition-card__image">{imageSrc && <img src={imageSrc} alt={imageAlt} />}</div>

      <div className="current-exhibition-card__body">
        <h3 className="current-exhibition-card__title">{title}</h3>
        <dl className="current-exhibition-card__details">
          {details.map((detail) => (
            <div key={detail.label} className="current-exhibition-card__row">
              <dt>{detail.label}</dt>
              <dd>{detail.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  )
}

export default CurrentExhibitionCard
