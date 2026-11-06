import StatusBadge from '../badge/StatusBadge'
import './DExhibitionCard.css'

/**
 * 전시 카드 (데스크탑) — 위쪽 사진(오른쪽 위 상태 뱃지) + 전시 제목·장소·기간
 * Figma: d/전시카드 (279:4035)
 * 사용 컴포넌트: StatusBadge (전시중 뱃지)
 *
 * 사용 예)
 *   <DExhibitionCard
 *     title="그린그린 뮤지엄 : 감각 노트"
 *     place="수원시립만석전시관"
 *     period="2026 . 08 . 11 ~ 2026 . 12 . 04"
 *     status="exhibiting"
 *   />
 *
 * @param {string} title     전시 제목
 * @param {string} place     전시 장소
 * @param {string} period    전시 기간
 * @param {string} status    StatusBadge 상태 (없으면 뱃지 숨김)
 * @param {string} imageSrc  사진 주소 (없으면 연회색 빈 칸)
 * @param {string} imageAlt  사진 설명
 * @param {string} href      카드를 눌렀을 때 이동할 주소 (있으면 카드 전체가 링크)
 */
function DExhibitionCard({ title, place, period, status, imageSrc, imageAlt = '', href }) {
  return (
    <article className={href ? 'd-exhibition-card d-exhibition-card--link' : 'd-exhibition-card'}>
      <div className="d-exhibition-card__image">
        {imageSrc && <img src={imageSrc} alt={imageAlt} />}
        {status && (
          <span className="d-exhibition-card__badge">
            <StatusBadge status={status} />
          </span>
        )}
      </div>

      <div className="d-exhibition-card__body">
        <h3 className="d-exhibition-card__title">
          {href ? (
            <a className="d-exhibition-card__link" href={href}>
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <div className="d-exhibition-card__meta">
          <p>{place}</p>
          <p>{period}</p>
        </div>
      </div>
    </article>
  )
}

export default DExhibitionCard
