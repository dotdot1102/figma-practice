import { useEffect, useRef, useState } from 'react'
import MCurrentExhibitionList from './MCurrentExhibitionList'
import iconArrowLeft from '../../assets/icons/arrow/icon-arrow-left.png'
import iconArrowRight from '../../assets/icons/arrow/icon-arrow-right.png'
import './CurrentExhibitionMenuBar.css'

/**
 * 현재전시메뉴바 — 모바일 전시관 탭을 좌우 화살표로 넘겨 보는 메뉴바
 * Figma: 현재전시메뉴바 (820:12526) — 현재전시1(맨 앞) / 2(가운데) / 3(맨 끝)
 * 사용 컴포넌트: m/현재전시/목록
 *
 * 사용 예)
 *   const [selected, setSelected] = useState(0)
 *   <CurrentExhibitionMenuBar selectedIndex={selected} onSelect={setSelected} />
 *
 * @param {Array}    items          탭 글자 목록 (없으면 m/현재전시/목록 기본값)
 * @param {number}   selectedIndex  선택된 탭 번호 (0부터 시작)
 * @param {Function} onSelect       탭을 눌렀을 때 번호를 받아 실행할 함수
 */
function CurrentExhibitionMenuBar({ items, selectedIndex = 0, onSelect }) {
  const viewRef = useRef(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  // 지금 스크롤 위치에서 왼쪽/오른쪽으로 더 갈 수 있는지 확인
  const updateArrows = () => {
    const view = viewRef.current
    if (!view) return
    setCanPrev(view.scrollLeft > 0)
    setCanNext(view.scrollLeft + view.clientWidth < view.scrollWidth - 1)
  }

  useEffect(() => {
    updateArrows()
    window.addEventListener('resize', updateArrows)
    return () => window.removeEventListener('resize', updateArrows)
  }, [])

  // 화살표를 누르면 보이는 너비의 절반만큼 이동
  const scroll = (direction) => {
    const view = viewRef.current
    view.scrollBy({ left: (direction * view.clientWidth) / 2, behavior: 'smooth' })
  }

  return (
    <div className="current-exhibition-menu-bar">
      <div className="current-exhibition-menu-bar__view" ref={viewRef} onScroll={updateArrows}>
        <MCurrentExhibitionList items={items} selectedIndex={selectedIndex} onSelect={onSelect} />
      </div>

      {canPrev && (
        <button
          type="button"
          className="current-exhibition-menu-bar__arrow current-exhibition-menu-bar__arrow--prev"
          aria-label="이전 전시관 보기"
          onClick={() => scroll(-1)}
        >
          <img src={iconArrowLeft} alt="" width="24" height="24" />
        </button>
      )}
      {canNext && (
        <button
          type="button"
          className="current-exhibition-menu-bar__arrow current-exhibition-menu-bar__arrow--next"
          aria-label="다음 전시관 보기"
          onClick={() => scroll(1)}
        >
          <img src={iconArrowRight} alt="" width="24" height="24" />
        </button>
      )}
    </div>
  )
}

export default CurrentExhibitionMenuBar
