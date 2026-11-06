import iconArrowLeftWhite from '../../assets/icons/arrow/icon-arrow-left-white.png'
import './SlideButton.css'

/**
 * 슬라이드 이전/다음 버튼 — 검정 동그라미 + 흰 화살표
 * Figma: 버튼 (다음/기본 210:4257 · 다음/클릭 544:5450)
 *   - 다음/기본: 검정 → 누를 수 있음
 *   - 다음/클릭: 검정 60% → 더 넘길 슬라이드가 없음 (disabled)
 *
 * 사용 예)
 *   <SlideButton direction="prev" label="이전 전시" onClick={...} />
 *   <SlideButton direction="next" label="다음 전시" disabled />
 *
 * @param {'prev'|'next'}   direction  화살표 방향
 * @param {'md'|'lg'}       size       크기 (md: 40px — m/전시카드, lg: 42px — 뉴스레터)
 * @param {string}          label      스크린리더가 읽을 버튼 이름
 * @param {boolean}         disabled   더 넘길 슬라이드가 없을 때 true
 * @param {Function}        onClick    클릭했을 때 실행할 함수
 */
function SlideButton({ direction = 'next', size = 'md', label, disabled = false, onClick }) {
  return (
    <button
      type="button"
      className={`slide-button slide-button--${direction} slide-button--${size}`}
      aria-label={label ?? (direction === 'prev' ? '이전' : '다음')}
      disabled={disabled}
      onClick={onClick}
    >
      <img src={iconArrowLeftWhite} alt="" width="24" height="24" />
    </button>
  )
}

export default SlideButton
