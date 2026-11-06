import './SectionTitle.css'

/**
 * 섹션 제목 줄 — 제목(+왼쪽 아이콘) + 오른쪽 버튼
 * Figma: 메인 화면의 미술관(499:13549 · 375:9044) / 전시(499:13651 · 499:11919) / 뉴스(499:13653 · 499:13442) 제목 줄
 *
 * 사용 예)
 *   <SectionTitle id="museum-title" title="미술관" action={<MMoreButton label="더보기" href="/museums" />} />
 *   <SectionTitle id="news-title" title="뉴스레터" iconSrc={iconNews} />
 *
 * @param {string}    id       제목 id (섹션의 aria-labelledby와 연결)
 * @param {string}    title    제목 글자
 * @param {string}    iconSrc  제목 왼쪽 아이콘 (없으면 숨김)
 * @param {ReactNode} action   오른쪽에 둘 버튼 등 (없으면 숨김)
 */
function SectionTitle({ id, title, iconSrc, action }) {
  return (
    <div className="section-title">
      <h2 id={id} className="section-title__heading">
        {iconSrc && <img className="section-title__icon" src={iconSrc} alt="" width="42" height="42" />}
        {title}
      </h2>
      {action}
    </div>
  )
}

export default SectionTitle
