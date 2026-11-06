import './ExhibitionGnb.css'

/**
 * 전시gnb — 데스크탑 전시 탭 한 칸 (예: "전체")
 * Figma: 전시gnb (255:5277) — 기본(선택됨: 검정 + 밑줄) / 클릭(선택 안 됨: 회색)
 *
 * 사용 예)
 *   <ExhibitionGnb label="전체" selected onClick={...} />
 *
 * @param {string}   label     탭 글자
 * @param {boolean}  selected  선택 여부
 * @param {Function} onClick   클릭했을 때 실행할 함수
 */
function ExhibitionGnb({ label, selected = false, onClick }) {
  return (
    <button
      type="button"
      className={selected ? 'exhibition-gnb exhibition-gnb--selected' : 'exhibition-gnb'}
      aria-pressed={selected}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default ExhibitionGnb
