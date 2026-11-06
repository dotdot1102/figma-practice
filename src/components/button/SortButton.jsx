import { useId, useState } from 'react'
import iconSort from '../../assets/icons/ui/icon-sort.png'
import './SortButton.css'

/**
 * 정렬 버튼 — 누르면 정렬 목록이 열리고, 고르면 닫힘
 * Figma: 정렬버튼 (248:5180) — 닫힘 / 열림, 정렬버튼/기본 (220:4464)
 *
 * 사용 예)
 *   const [sort, setSort] = useState('종료 임박순')
 *   <SortButton value={sort} onChange={setSort} />
 *
 * @param {Array}    options   정렬 목록
 * @param {string}   value     지금 고른 정렬
 * @param {Function} onChange  정렬을 골랐을 때 고른 값을 받아 실행할 함수
 */
const DEFAULT_OPTIONS = ['종료 임박순', '전시중', '종료된 전시']

function SortButton({ options = DEFAULT_OPTIONS, value = options[0], onChange }) {
  const [open, setOpen] = useState(false)
  const listId = useId()

  const handleSelect = (option) => {
    onChange?.(option)
    setOpen(false)
  }

  return (
    <div className="sort-button">
      <button
        type="button"
        className="sort-button__toggle"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen(!open)}
      >
        <img src={iconSort} alt="" width="26" height="26" />
        <span>정렬 :</span>
        <span>{value}</span>
      </button>

      {open && (
        <ul id={listId} className="sort-button__list">
          {options.map((option) => (
            <li key={option}>
              <button
                type="button"
                className="sort-button__option"
                aria-pressed={option === value}
                onClick={() => handleSelect(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SortButton
