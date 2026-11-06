import './ReservationButton.css'

/**
 * 관람 예약 버튼 — 시간을 고르기 전에는 비활성, 고른 뒤에는 "예매하기"
 * Figma: 관람예약/버튼/에약전 (270:7463), 관람예약/버튼/예약후 (270:7462)
 *
 * 사용 예)
 *   <ReservationButton ready={selectedTime !== null} onClick={...} />
 *
 * @param {boolean}  ready    관람 시간을 골랐는지 여부 (false면 회색·누를 수 없음)
 * @param {Function} onClick  "예매하기"를 눌렀을 때 실행할 함수
 */
function ReservationButton({ ready = false, onClick }) {
  return (
    <button
      type="button"
      className={ready ? 'reservation-button reservation-button--ready' : 'reservation-button'}
      disabled={!ready}
      onClick={onClick}
    >
      {ready ? '예매하기' : '관람 시간을 선택해 주세요.'}
    </button>
  )
}

export default ReservationButton
