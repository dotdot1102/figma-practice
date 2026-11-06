import './MExhibitionGnb.css'

/**
 * m/전시gnb — 모바일 전시 탭 한 칸
 * Figma: m/전시gnb (270:5709) — 선택 / 비선택
 *
 * 사용 예)
 *   <MExhibitionGnb label={'수원시립미술관\n행궁 본관'} selected onClick={...} />
 *   (글자 안의 \n 은 줄바꿈으로 표시됩니다)
 *
 * @param {string}   label     탭 글자
 * @param {boolean}  selected  선택 여부
 * @param {Function} onClick   클릭했을 때 실행할 함수
 */
function MExhibitionGnb({ label, selected = false, onClick }) {
  return (
    <button
      type="button"
      className={selected ? 'm-exhibition-gnb m-exhibition-gnb--selected' : 'm-exhibition-gnb'}
      aria-pressed={selected}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default MExhibitionGnb
