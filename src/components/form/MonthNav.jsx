import iconArrowLeft from '../../assets/icons/arrow/icon-arrow-left.png'
import iconArrowRight from '../../assets/icons/arrow/icon-arrow-right.png'
import './MonthNav.css'

/**
 * 달 이동 — "‹ 2026 . 10 ›"
 * Figma: 날짜 (270:7420)
 *
 * 사용 예)
 *   <MonthNav year={2026} month={10} onPrev={...} onNext={...} />
 *
 * @param {number}   year    연도
 * @param {number}   month   월 (1~12)
 * @param {Function} onPrev  이전 달 버튼을 눌렀을 때 실행할 함수
 * @param {Function} onNext  다음 달 버튼을 눌렀을 때 실행할 함수
 */
function MonthNav({ year, month, onPrev, onNext }) {
  return (
    <div className="month-nav">
      <button type="button" className="month-nav__arrow" aria-label="이전 달" onClick={onPrev}>
        <img src={iconArrowLeft} alt="" width="24" height="24" />
      </button>

      <p className="month-nav__label" aria-live="polite">
        <span>{year}</span>
        <span aria-hidden="true">.</span>
        <span className="sr-only">년</span>
        <span>{month}</span>
        <span className="sr-only">월</span>
      </p>

      <button type="button" className="month-nav__arrow" aria-label="다음 달" onClick={onNext}>
        <img src={iconArrowRight} alt="" width="24" height="24" />
      </button>
    </div>
  )
}

export default MonthNav
