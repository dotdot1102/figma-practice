import { useId, useState } from 'react'
import Language from '../navigation/Language'
import iconLanguage from '../../assets/icons/ui/icon-language.png'
import iconArrowDown from '../../assets/icons/arrow/icon-arrow-down.png'
import './LanguageButton.css'

/**
 * 언어버튼 — 지구본 버튼을 누르면 언어 목록이 열림
 * Figma: 언어버튼 (220:4330) — 닫힘 / 열림
 * 사용 컴포넌트: 언어 (목록 한 줄)
 *
 * 사용 예)
 *   <LanguageButton onSelect={(code) => ...} />
 *
 * @param {Array}    languages  언어 목록 [{ code, label }]
 * @param {Function} onSelect   언어를 골랐을 때 코드("KO" 등)를 받아 실행할 함수
 */
const DEFAULT_LANGUAGES = [
  { code: 'KO', label: '한국어' },
  { code: 'EN', label: 'English' },
]

function LanguageButton({ languages = DEFAULT_LANGUAGES, onSelect }) {
  const [open, setOpen] = useState(false)
  const listId = useId()

  const handleSelect = (code) => {
    onSelect?.(code)
    setOpen(false)
  }

  return (
    <div className="language-button">
      <button
        type="button"
        className="language-button__toggle"
        aria-label="언어 선택"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen(!open)}
      >
        <span className="language-button__globe">
          <img src={iconLanguage} alt="" width="32" height="32" />
        </span>
        <img src={iconArrowDown} alt="" width="32" height="32" />
      </button>

      {open && (
        <ul id={listId} className="language-button__list">
          {languages.map((lang) => (
            <li key={lang.code}>
              <Language code={lang.code} label={lang.label} onClick={() => handleSelect(lang.code)} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LanguageButton
