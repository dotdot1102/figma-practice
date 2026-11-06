import iconArrowRightSm from '../../assets/icons/arrow/icon-arrow-right-sm.png'
import './MMoreButton.css'

/**
 * 더보기 버튼 (모바일) — "전시 상세 바로가기 ›"
 * Figma: m/더보기버튼 (290:4324)
 *
 * 사용 예)
 *   <MMoreButton label="전시 상세 바로가기" href="/exhibitions/1" />   → 링크(<a>)
 *   <MMoreButton label="예약하기" onClick={() => setPopupOpen(true)} />  → 버튼(<button>)
 *
 * @param {string}   label    버튼 글자 (목적지가 드러나게)
 * @param {string}   href     이동할 주소 (있으면 링크)
 * @param {Function} onClick  클릭했을 때 실행할 함수 (href가 없으면 버튼으로 표시)
 */
function MMoreButton({ label = '전시 상세 바로가기', href, onClick }) {
  const content = (
    <>
      {label}
      <img src={iconArrowRightSm} alt="" width="21" height="21" />
    </>
  )

  if (!href && onClick) {
    return (
      <button type="button" className="m-more-button" onClick={onClick}>
        {content}
      </button>
    )
  }

  return (
    <a className="m-more-button" href={href} onClick={onClick}>
      {content}
    </a>
  )
}

export default MMoreButton
