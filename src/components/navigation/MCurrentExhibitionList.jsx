import MExhibitionGnb from './MExhibitionGnb'
import './MCurrentExhibitionList.css'

/**
 * m/현재전시/목록 — 모바일 전시관 탭 목록 (하나만 선택됨)
 * Figma: m/현재전시/목록 (270:5718) — 목록1~5 (= 1~5번째 탭 선택)
 * 사용 컴포넌트: m/전시gnb (탭 한 칸)
 *
 * 사용 예)
 *   const [selected, setSelected] = useState(0)
 *   <MCurrentExhibitionList selectedIndex={selected} onSelect={setSelected} />
 *
 * @param {Array}    items          탭 글자 목록 (\n 은 줄바꿈)
 * @param {number}   selectedIndex  선택된 탭 번호 (0부터 시작)
 * @param {Function} onSelect       탭을 눌렀을 때 번호를 받아 실행할 함수
 */
const DEFAULT_ITEMS = [
  '전체',
  '수원시립미술관\n행궁 본관',
  '수원시립만석\n전시관',
  '수원시립\n아트스페이스 광교',
  '수원시립북수원\n전시관',
]

function MCurrentExhibitionList({ items = DEFAULT_ITEMS, selectedIndex = 0, onSelect }) {
  return (
    <div className="m-current-exhibition-list" role="group" aria-label="전시관 선택">
      {items.map((label, index) => (
        <MExhibitionGnb
          key={label}
          label={label}
          selected={index === selectedIndex}
          onClick={() => onSelect?.(index)}
        />
      ))}
    </div>
  )
}

export default MCurrentExhibitionList
