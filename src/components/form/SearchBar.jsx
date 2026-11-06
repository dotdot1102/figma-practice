import { useId } from 'react'
import iconSearch from '../../assets/icons/ui/icon-search.png'
import './SearchBar.css'

/**
 * 검색창 — 데스크탑 검색 입력창 + 검색 버튼
 * Figma: 검색창 (220:4369)
 *
 * 사용 예)
 *   <SearchBar onSearch={(keyword) => ...} />
 *
 * @param {string}   placeholder  안내 문구
 * @param {boolean}  showButton   검색 버튼 표시 여부 (Figma 속성과 동일, 기본 true)
 * @param {Function} onSearch     검색할 때 검색어를 받아 실행할 함수
 */
function SearchBar({ placeholder = '작품명 또는 작가명을 입력해주세요.', showButton = true, onSearch }) {
  const inputId = useId()

  const handleSubmit = (event) => {
    event.preventDefault()
    const keyword = new FormData(event.currentTarget).get('q')
    onSearch?.(keyword)
  }

  return (
    <form className="search-bar" role="search" onSubmit={handleSubmit}>
      <div className="search-bar__field">
        <img src={iconSearch} alt="" width="26" height="26" />
        <label htmlFor={inputId} className="sr-only">
          검색어
        </label>
        <input id={inputId} name="q" type="search" placeholder={placeholder} />
      </div>
      {showButton && (
        <button type="submit" className="search-bar__button">
          검색
        </button>
      )}
    </form>
  )
}

export default SearchBar
