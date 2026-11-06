import StatusBadge from '../badge/StatusBadge'
import './DMuseumCard.css'

/**
 * 미술관 카드 (데스크탑) — 위쪽 사진 + 관 이름, 운영시간, 휴관일
 * Figma: d/미술관카드 (279:3977)
 * 사용 컴포넌트: StatusBadge (휴관일 뱃지, 사진 오른쪽 위)
 *
 * 사용 예)
 *   <DMuseumCard
 *     name="수원시립미술관 행궁 본관"
 *     hours={[{ season: '하절기(3월 ~ 10월)', time: '10:00 ~ 19:00' }, { season: '동절기(11월 ~ 2월)', time: '10:00 ~ 18:00' }]}
 *     closedDay="매주 월요일"
 *     isClosedToday
 *   />
 *
 * @param {string}  name           관 이름
 * @param {Array}   hours          운영시간 [{ season, time }]
 * @param {string}  closedDay      휴관일
 * @param {boolean} isClosedToday  오늘 휴관이면 true (휴관일 뱃지 표시)
 * @param {string}  imageSrc       사진 주소 (없으면 회색 빈 칸)
 * @param {string}  imageAlt       사진 설명
 */
function DMuseumCard({ name, hours = [], closedDay, isClosedToday = false, imageSrc, imageAlt = '' }) {
  return (
    <article className="d-museum-card">
      <div className="d-museum-card__image">
        {imageSrc && <img src={imageSrc} alt={imageAlt} />}
        {isClosedToday && (
          <span className="d-museum-card__badge">
            <StatusBadge status="closed" />
          </span>
        )}
      </div>

      <h3 className="d-museum-card__name">{name}</h3>

      <dl className="d-museum-card__info">
        <div className="d-museum-card__hours">
          {hours.map((hour) => (
            <div key={hour.season} className="d-museum-card__row">
              <dt>{hour.season}</dt>
              <dd>{hour.time}</dd>
            </div>
          ))}
        </div>
        <div className="d-museum-card__row">
          <dt>휴관일</dt>
          <dd>{closedDay}</dd>
        </div>
      </dl>
    </article>
  )
}

export default DMuseumCard
