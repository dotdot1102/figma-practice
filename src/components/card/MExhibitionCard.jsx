import StatusBadge from '../badge/StatusBadge'
import './MExhibitionCard.css'

/**
 * 전시 카드 (모바일) — 사진, 상태 뱃지, 전시 제목·장소·기간
 * Figma: m/전시카드 (260:4058)
 * 사용 컴포넌트: StatusBadge (전시중 뱃지)
 *
 * 사용 예)
 *   <MExhibitionCard
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
 * @param {string} imageSrc  사진 주소 (없으면 회색 빈 칸)
 * @param {string} imageAlt  사진 설명
 * @param {string} href      카드를 눌렀을 때 이동할 주소 (있으면 카드 전체가 링크)
 */
function MExhibitionCard({ title, place, period, status, imageSrc, imageAlt = '', href }) {
  return (
    <article className={href ? 'm-exhibition-card m-exhibition-card--link' : 'm-exhibition-card'}>
      <div className="m-exhibition-card__image">{imageSrc && <img src={imageSrc} alt={imageAlt} />}</div>

      {status && (
        <div className="m-exhibition-card__badge">
          <StatusBadge status={status} />
        </div>
      )}

      <div className="m-exhibition-card__body">
        <h3 className="m-exhibition-card__title">
          {href ? (
            <a className="m-exhibition-card__link" href={href}>
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <p>{place}</p>
        <p>{period}</p>
      </div>
    </article>
  )
}

export default MExhibitionCard
