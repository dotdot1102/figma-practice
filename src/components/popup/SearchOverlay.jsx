import { useEffect, useRef } from 'react'
import SearchBar from '../form/SearchBar'
import bgImage from '../../assets/images/background/search-overlay-bg.png'
import logoWhite from '../../assets/images/logo/logo-white.png'
import iconClose from '../../assets/icons/ui/icon-close.png'
import './SearchOverlay.css'

/**
 * 검색 오버레이 — 화면 전체를 덮는 검색창 (흐린 전시장 사진 배경)
 * Figma: 검색오버레이 (844:12623)
 * 사용 컴포넌트: SearchBar (검색창)
 *
 * 사용 예)
 *   {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} onSearch={...} />}
 *
 * @param {Function} onClose   닫기 버튼이나 Esc 키를 눌렀을 때 실행할 함수
 * @param {Function} onSearch  검색할 때 검색어를 받아 실행할 함수
 */
function SearchOverlay({ onClose, onSearch }) {
  const overlayRef = useRef(null)

  useEffect(() => {
    // 열리면 바로 입력할 수 있게 검색칸에 포커스
    overlayRef.current?.querySelector('input')?.focus()

    // Esc 키로 닫기
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose?.()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="search-overlay" role="dialog" aria-modal="true" aria-label="검색" ref={overlayRef}>
      <img className="search-overlay__bg" src={bgImage} alt="" />

      <img className="search-overlay__logo" src={logoWhite} alt="수원시립미술관" width="300" height="101" />

      <button type="button" className="search-overlay__close" aria-label="검색 닫기" onClick={onClose}>
        <img src={iconClose} alt="" width="50" height="50" />
      </button>

      <div className="search-overlay__search">
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  )
}

export default SearchOverlay
