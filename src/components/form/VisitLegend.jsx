import './VisitLegend.css'

/**
 * 달력 범례 — "관람일 ○  선택일 ●"
 * Figma: 관람/선택 (270:6057)
 *
 * 사용 예)
 *   <VisitLegend />
 */
function VisitLegend() {
  return (
    <ul className="visit-legend">
      <li className="visit-legend__item">
        관람일
        <span className="visit-legend__dot" aria-hidden="true" />
      </li>
      <li className="visit-legend__item">
        선택일
        <span className="visit-legend__dot visit-legend__dot--selected" aria-hidden="true" />
      </li>
    </ul>
  )
}

export default VisitLegend
