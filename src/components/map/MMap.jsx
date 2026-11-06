import mapMuseum from '../../assets/images/map/map-museum.png'
import './MMap.css'

/**
 * 지도 (모바일) — 미술관 위치 지도 이미지
 * Figma: m/지도 (279:2850)
 *
 * 사용 예)
 *   <MMap />
 *   <MMap imageSrc={otherMap} imageAlt="광교관 위치 지도" />
 *
 * @param {string} imageSrc  지도 이미지 (기본: Figma 시안의 행궁 본관 지도)
 * @param {string} imageAlt  지도 설명
 */
function MMap({ imageSrc = mapMuseum, imageAlt = '수원시립미술관 행궁 본관 위치 지도' }) {
  return (
    <div className="m-map">
      <img src={imageSrc} alt={imageAlt} />
    </div>
  )
}

export default MMap
