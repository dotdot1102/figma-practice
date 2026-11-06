import { useId } from 'react'
import iconCheck from '../../assets/icons/ui/icon-check.png'
import './MPopup.css'

/**
 * 예약 확정 팝업 (모바일) — 체크 아이콘, "예약이 확정되었습니다.", 장소·일시, [예약확정] 버튼
 * Figma: m/팝업창 (270:7479)
 *   위쪽 파란 빛 번짐은 Figma의 흐린 원 3개(흰색 · blue/100 · blue/800 80%)를 CSS 그라데이션으로 표현
 *
 * 사용 예)
 *   <MPopup
 *     place="수원시립아트스페이스광교"
 *     dateText="2026.10.15 (월) 10:00~18:00"
 *     onConfirm={() => setPopupOpen(false)}
 *   />
 *
 * @param {string}   title         제목
 * @param {string}   place         예약 장소
 * @param {string}   dateText      예약 일시
 * @param {string}   confirmLabel  버튼 글자
 * @param {Function} onConfirm     버튼을 눌렀을 때 실행할 함수
 * @param {string}   className     추가 클래스 (DPopup에서 데스크탑 크기로 바꿀 때 사용)
 */
function MPopup({
  title = '예약이 확정되었습니다.',
  place,
  dateText,
  confirmLabel = '예약확정',
  onConfirm,
  className = '',
}) {
  const titleId = useId()

  return (
    <div className={`m-popup ${className}`.trim()} role="dialog" aria-labelledby={titleId}>
      <div className="m-popup__head">
        <img className="m-popup__icon" src={iconCheck} alt="" width="32" height="32" />
        <p id={titleId} className="m-popup__title">
          {title}
        </p>
      </div>

      <div className="m-popup__box">
        <div className="m-popup__info">
          <p>{place}</p>
          <p>{dateText}</p>
        </div>
        <button type="button" className="m-popup__confirm" onClick={onConfirm}>
          {confirmLabel}
        </button>
      </div>
    </div>
  )
}

export default MPopup
