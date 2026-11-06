import Button from '../button/button'
import './AmPmSelect.css'

/**
 * 오전/오후 관람 시간 선택 — 예약시간 버튼 두 개 중 하나를 고름
 * Figma: 오전/오후 (802:10703) — 오전선택 / 오후선택
 *   (예약시간/기본/오전, 예약시간/클릭/오후 등은 Button의 기본·선택 상태와 같아 따로 만들지 않음)
 * 사용 컴포넌트: Button (예약시간 버튼)
 *
 * 사용 예)
 *   const [selected, setSelected] = useState(null)
 *   <AmPmSelect selectedIndex={selected} onSelect={setSelected} />
 *
 * @param {Array}    slots          시간 목록 [{ startTime, endTime }]
 * @param {number}   selectedIndex  고른 시간 번호 (0 = 오전, 1 = 오후, 없으면 null)
 * @param {Function} onSelect       시간을 눌렀을 때 번호를 받아 실행할 함수
 */
const DEFAULT_SLOTS = [
  { startTime: '10 : 00', endTime: '18 : 00' },
  { startTime: '18 : 00', endTime: '21 : 00' },
]

function AmPmSelect({ slots = DEFAULT_SLOTS, selectedIndex = null, onSelect }) {
  return (
    <div className="am-pm-select" role="group" aria-label="관람 시간 선택">
      {slots.map((slot, index) => (
        <Button
          key={slot.startTime}
          startTime={slot.startTime}
          endTime={slot.endTime}
          selected={index === selectedIndex}
          onClick={() => onSelect?.(index)}
        />
      ))}
    </div>
  )
}

export default AmPmSelect
