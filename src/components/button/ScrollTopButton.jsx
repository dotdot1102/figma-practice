import iconSquareDefault from '../../assets/icons/ui/icon-square-default.png'
import iconSquareHover from '../../assets/icons/ui/icon-square-hover.png'
import iconArrowUp from '../../assets/icons/arrow/icon-arrow-up.png'
import './ScrollTopButton.css'

/**
 * 상단이동버튼 — 누르면 페이지 맨 위로 이동
 * Figma: 상단이동버튼 (255:5298) — 기본(검정) / 호버(파랑)
 *
 * 사용 예)
 *   <ScrollTopButton />
 */
function ScrollTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button type="button" className="scroll-top-button" aria-label="맨 위로 이동" onClick={scrollToTop}>
      <img className="scroll-top-button__bg scroll-top-button__bg--default" src={iconSquareDefault} alt="" width="40" height="40" />
      <img className="scroll-top-button__bg scroll-top-button__bg--hover" src={iconSquareHover} alt="" width="40" height="40" />
      <img className="scroll-top-button__up" src={iconArrowUp} alt="" width="40" height="40" />
    </button>
  )
}

export default ScrollTopButton
