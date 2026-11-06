import iconSearchButton from '../../assets/icons/ui/icon-search-button.png'
import './SearchIconButton.css'

/**
 * 검색 아이콘 버튼 — 누르면 검색창(검색 오버레이)을 엶
 * Figma: 버튼/검색아이콘 (239:4696)
 *
 * 사용 예)
 *   <SearchIconButton onClick={() => setSearchOpen(true)} />
 *
 * @param {Function} onClick  클릭했을 때 실행할 함수
 */
function SearchIconButton({ onClick }) {
  return (
    <button type="button" className="search-icon-button" aria-label="검색" onClick={onClick}>
      <img src={iconSearchButton} alt="" width="40" height="40" />
    </button>
  )
}

export default SearchIconButton
