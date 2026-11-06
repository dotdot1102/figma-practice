import './Language.css'

/**
 * 언어 — 언어 선택 목록의 한 줄 (예: "KO: 한국어")
 * Figma: 언어 (220:4299) — 기본 / 호버
 *
 * 사용 예)
 *   <Language code="KO" label="한국어" onClick={...} />
 *
 * @param {string}   code     언어 코드 (예: "KO")
 * @param {string}   label    언어 이름 (예: "한국어")
 * @param {Function} onClick  클릭했을 때 실행할 함수
 */
function Language({ code, label, onClick }) {
  return (
    <button type="button" className="language" onClick={onClick}>
      <span>{code}:</span>
      <span>{label}</span>
    </button>
  )
}

export default Language
