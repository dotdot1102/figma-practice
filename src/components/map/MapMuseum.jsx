import iconBadge from '../../assets/icons/badge/icon-badge.png'
import './MapMuseum.css'

/**
 * 지도/미술관 — 지도 위에 표시하는 미술관 이름표
 * Figma: 지도/미술관 (270:6039)
 *
 * 사용 예)
 *   <MapMuseum name="수원시립 아트스페이스 광교" />
 *
 * @param {string} name  미술관 이름
 */
function MapMuseum({ name }) {
  return (
    <div className="map-museum">
      <img src={iconBadge} alt="" width="24" height="24" />
      <span>{name}</span>
    </div>
  )
}

export default MapMuseum
