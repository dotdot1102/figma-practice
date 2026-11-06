import MPopup from './MPopup'
import './DPopup.css'

/**
 * 예약 확정 팝업 (데스크탑) — 모바일 팝업(MPopup)과 내용·구조가 같고 크기만 큼
 * Figma: d/팝업창 (279:4538) — m/팝업창을 약 3배 키운 모양
 * 사용 컴포넌트: MPopup
 *
 * 사용 예)
 *   <DPopup place="수원시립아트스페이스광교" dateText="2026.10.15 (월) 10:00~18:00" onConfirm={...} />
 *
 * @param {object} props  MPopup과 같은 값 (title, place, dateText, confirmLabel, onConfirm)
 */
function DPopup(props) {
  return <MPopup {...props} className="d-popup" />
}

export default DPopup
