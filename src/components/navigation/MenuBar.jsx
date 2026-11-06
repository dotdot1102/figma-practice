import './MenuBar.css'

/**
 * 메뉴바 — 데스크탑 GNB 메뉴 한 칸
 * Figma: 메뉴바 (201:15083) — 기본 / 호버 / 비활성화
 *
 * 사용 예)
 *   <MenuBar label="전시" href="/exhibitions" />
 *   <MenuBar label="전시" disabled />
 *
 * @param {string}   label     메뉴 글자
 * @param {string}   href      이동할 주소 (있으면 링크 <a>, 없으면 버튼)
 * @param {boolean}  disabled  비활성화 여부 (회색 글자, 클릭 불가)
 * @param {Function} onClick   클릭했을 때 실행할 함수
 */
function MenuBar({ label, href, disabled = false, onClick }) {
  if (href && !disabled) {
    return (
      <a className="menu-bar" href={href} onClick={onClick}>
        {label}
      </a>
    )
  }

  return (
    <button type="button" className="menu-bar" disabled={disabled} onClick={onClick}>
      {label}
    </button>
  )
}

export default MenuBar
