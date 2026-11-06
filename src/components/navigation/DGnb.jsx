import { useId, useState } from 'react'
import MenuBar from './MenuBar'
import './DGnb.css'

/**
 * d/gnb — 데스크탑 GNB 드롭다운 (제목을 누르면 하위 메뉴가 열리고 닫힘)
 * Figma: d/gnb (210:4075) — gnb닫기 / gnb열기
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

  return (
    <div className="d-gnb">
      <button
        type="button"
        className="d-gnb__title"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen(!open)}
      >
        {title}
      </button>

      {open && (
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
