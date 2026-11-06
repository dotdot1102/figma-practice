import './ReservationDate.css'

/**
 * 선택한 날짜 표시 — "2026 - 10 - 15 (목) 시간"
 * Figma: 예약/선택확인 (270:7476)
 *
 * 사용 예)
 *   <ReservationDate date={new Date(2026, 9, 15)} />
 *
 * @param {Date} date  선택한 날짜
 */
const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토']

function ReservationDate({ date }) {
  return (
    <p className="reservation-date">
      <span>{date.getFullYear()}</span>
      <span aria-hidden="true">-</span>
      <span>{date.getMonth() + 1}</span>
      <span aria-hidden="true">-</span>
      <span>{date.getDate()}</span>
      <span>({WEEKDAYS[date.getDay()]})</span>
      <span>시간</span>
    </p>
  )
}

export default ReservationDate
