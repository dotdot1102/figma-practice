import StatusBadge from '../badge/StatusBadge'
import './MMuseumCard.css'

/**
 * 미술관 카드 (모바일) — 관 이름, 운영시간, 휴관일 + 오른쪽 사진
 * Figma: m/미술관카드 (260:3912)
 * 사용 컴포넌트: StatusBadge (휴관일 뱃지)
 *
 * 사용 예)
 *   <MMuseumCard
 *     name="수원시립미술관 행궁 본관"
 *     hours={[{ season: '3월 ~ 10월', time: '10:00 ~ 19:00' }, { season: '11월 ~ 2월', time: '10:00 ~ 18:00' }]}
 *     closedDay="매주 월요일"
 *     isClosedToday
 *     imageSrc={photo} imageAlt="행궁 본관 전경"
 *   />
 *
 * @param {string}  name           관 이름
 * @param {Array}   hours          운영시간 [{ season, time }]
 * @param {string}  closedDay      휴관일
 * @param {boolean} isClosedToday  오늘 휴관이면 true (휴관일 뱃지 표시)
 * @param {string}  imageSrc       사진 주소 (없으면 회색 빈 칸)
 * @param {string}  imageAlt       사진 설명
 */
function MMuseumCard({ name, hours = [], closedDay, isClosedToday = false, imageSrc, imageAlt = '' }) {
  return (
    <article className="m-museum-card">
      <div className="m-museum-card__body">
        <h3 className="m-museum-card__name">{name}</h3>
        <dl className="m-museum-card__info">
          {hours.map((hour) => (
            <div key={hour.season} className="m-museum-card__row">
              <dt>{hour.season}</dt>
              <dd>{hour.time}</dd>
            </div>
          ))}
          <div className="m-museum-card__row m-museum-card__row--closed">
            <dt>휴관일</dt>
            <dd>{closedDay}</dd>
          </div>
        </dl>
        {isClosedToday && <StatusBadge status="closed" />}
      </div>

      <div className="m-museum-card__image">{imageSrc && <img src={imageSrc} alt={imageAlt} />}</div>
    </article>
  )
}

export default MMuseumCard
