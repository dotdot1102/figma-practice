import iconSquare from '../../assets/icons/ui/icon-square.png'
import './VisitGuideH1.css'

/**
 * 관람안내H1 — 네모 아이콘이 붙은 페이지 제목
 * Figma: 관람안내H1 (255:5334)
 *
 * 사용 예)
 *   <VisitGuideH1 title="예매 및 관람안내" />
 *
 * @param {string} title  제목 글자
 */
function VisitGuideH1({ title }) {
  return (
    <h1 className="visit-guide-h1">
      <img src={iconSquare} alt="" width="24" height="24" />
      {title}
    </h1>
  )
}

export default VisitGuideH1
