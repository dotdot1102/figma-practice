import './SubwayLine.css'

/**
 * 전철노선 — 지하철 노선 번호 동그라미 (예: 1호선)
 * Figma: 전철노선 (270:6043)
 *
 * 사용 예)
 *   <SubwayLine line="1" />
 *
 * @param {string} line  노선 번호
 */
function SubwayLine({ line }) {
  return (
    <span className="subway-line">
      {line}
      <span className="sr-only">호선</span>
    </span>
  )
}

export default SubwayLine
