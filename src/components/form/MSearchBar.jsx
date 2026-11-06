import { useId } from 'react'
import iconSearch from '../../assets/icons/ui/icon-search-m.png'
import iconVoice from '../../assets/icons/ui/icon-voice.png'
import './MSearchBar.css'

/**
 * m/검색창 — 모바일 검색 입력창
 * Figma: m/검색창 (292:4694)
 *
 * 사용 예)
 *   <MSearchBar onSearch={(keyword) => ...} onVoice={() => ...} />
 *
 * @param {string}   placeholder  안내 문구
 * @param {Function} onSearch     Enter를 눌렀을 때 검색어를 받아 실행할 함수
 * @param {Function} onVoice      음성 버튼을 눌렀을 때 실행할 함수
 */
function MSearchBar({ placeholder = '작품명 또는 작가명을 입력해주세요.', onSearch, onVoice }) {
  const inputId = useId()

  const handleSubmit = (event) => {
    event.preventDefault()
    const keyword = new FormData(event.currentTarget).get('q')
    onSearch?.(keyword)
  }

  return (
    <form className="m-search-bar" role="search" onSubmit={handleSubmit}>
      <img src={iconSearch} alt="" width="24" height="24" />
      <label htmlFor={inputId} className="sr-only">
        검색어
      </label>
      <input id={inputId} name="q" type="search" placeholder={placeholder} />
      <button type="button" className="m-search-bar__voice" aria-label="음성으로 검색" onClick={onVoice}>
        <img src={iconVoice} alt="" width="24" height="24" />
      </button>
    </form>
  )
}

export default MSearchBar
