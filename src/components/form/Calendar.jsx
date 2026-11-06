import './Calendar.css'

/**
 * 달력 — 한 달 날짜 표, 날짜를 눌러 선택
 * Figma: 달력 (270:7467)
 *   - 회색 배경 날짜 = 선택할 수 없는 날 (minDate 이전)
 *   - 진한 회색 배경 + 흰 굵은 글자 = 선택한 날
 *
 * 사용 예)
 *   <Calendar
 *     year={2026}
 *     month={10}
 *     selectedDate={new Date(2026, 9, 15)}
 *     minDate={new Date()}
 *     onSelect={(date) => ...}
 *   />
 *
 * @param {number}   year          연도
 * @param {number}   month         월 (1~12)
 * @param {Date}     selectedDate  선택된 날짜
 * @param {Date}     minDate       이 날짜보다 이전은 선택할 수 없음 (없으면 모두 선택 가능)
 * @param {Function} onSelect      날짜를 눌렀을 때 Date를 받아 실행할 함수
 */
const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토']

// 시간을 뺀 날짜끼리 비교하기 위한 값 (예: 20261015)
const toDayNumber = (date) => date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate()

function Calendar({ year, month, selectedDate, minDate, onSelect }) {
  const firstWeekday = new Date(year, month - 1, 1).getDay()
  const lastDay = new Date(year, month, 0).getDate()

  // 앞쪽 빈칸 + 1일~말일을 7칸씩 줄로 나누기
  const cells = [...Array(firstWeekday).fill(null), ...Array.from({ length: lastDay }, (_, i) => i + 1)]
  while (cells.length % 7 !== 0) cells.push(null)
  const weeks = []
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7))

  return (
    <table className="calendar">
      <caption className="sr-only">
        {year}년 {month}월 달력
      </caption>
      <thead>
        <tr>
          {WEEKDAYS.map((day) => (
            <th key={day} scope="col" className="calendar__weekday">
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {weeks.map((week, weekIndex) => (
          <tr key={weekIndex}>
            {week.map((day, dayIndex) => {
              if (day === null) return <td key={dayIndex} className="calendar__cell" />

              const date = new Date(year, month - 1, day)
              const selected = selectedDate && toDayNumber(date) === toDayNumber(selectedDate)
              const disabled = minDate && toDayNumber(date) < toDayNumber(minDate)
              let className = 'calendar__day'
              if (disabled) className += ' calendar__day--disabled'
              if (selected) className += ' calendar__day--selected'

              return (
                <td key={dayIndex} className="calendar__cell">
                  <button
                    type="button"
                    className={className}
                    aria-label={`${month}월 ${day}일`}
                    aria-pressed={Boolean(selected)}
                    disabled={disabled}
                    onClick={() => onSelect?.(date)}
                  >
                    {day}
                  </button>
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Calendar
