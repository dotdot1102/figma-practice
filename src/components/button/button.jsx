import './button.css'

/**
 * 예약 시간 선택 버튼
 * Figma: 예약시간 버튼 (node 802:10703) — 기본 / 선택 두 가지 상태
 *
 * 사용 예)
 *   <Button startTime="10 : 00" endTime="18 : 00" selected onClick={...} />
 *
 * @param {string}   startTime  시작 시간 (예: "10 : 00")
 * @param {string}   endTime    종료 시간 (예: "18 : 00")
 * @param {boolean}  selected   선택 상태 여부 (true면 검정 배경)
 * @param {Function} onClick    클릭했을 때 실행할 함수
 */
function Button({ startTime, endTime, selected = false, onClick }) {
  return (
    <button
      type="button"
      className={selected ? 'button button--selected' : 'button'}
      aria-pressed={selected}
      onClick={onClick}
    >
      <span>{startTime}</span>
      <span aria-hidden="true">~</span>
      <span className="sr-only">부터</span>
      <span>{endTime}</span>
    </button>
  )
}

export default Button
