import { useId, useState } from 'react'
import MenuBar from './MenuBar'
import './DGnb.css'

/**
 * d/gnb — 데스크탑 GNB 드롭다운 (마우스를 올리거나 제목을 누르면 하위 메뉴가 열림)
 * Figma: d/gnb (210:4075) — gnb닫기 / gnb열기
 *   - 하위 메뉴 상자는 제목 아래에 떠서 열림 (아래 내용을 밀어내지 않음)
 *   - 마우스가 벗어나거나, 키보드 포커스가 빠지거나, Esc를 누르면 닫힘
 * 사용 컴포넌트: 메뉴바 (하위 메뉴 한 줄)
 *
 * 사용 예)
 *   <DGnb
 *     title="관람"
 *     items={[{ label: '관람안내', href: '/guide' }, ...]}
 *   />
 *
 * @param {string}  title        상위 메뉴 이름
 * @param {Array}   items        하위 메뉴 목록 [{ label, href }]
 * @param {boolean} defaultOpen  처음에 열려 있을지 여부
 */
function DGnb({ title, items = [], defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  const listId = useId()
  const hasItems = items.length > 0

  // 포커스가 이 메뉴 밖으로 나가면 닫기
  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') setOpen(false)
  }

  return (
    <div
      className="d-gnb"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      <button
        type="button"
        className="d-gnb__title"
        aria-expanded={hasItems ? open : undefined}
        aria-controls={hasItems ? listId : undefined}
        onClick={() => setOpen(!open)}
      >
        {title}
      </button>

      {open && hasItems && (
        <ul id={listId} className="d-gnb__list">
          {items.map((item) => (
            <li key={item.label}>
              <MenuBar label={item.label} href={item.href} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DGnb
