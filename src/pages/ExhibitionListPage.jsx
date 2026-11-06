import { useState } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import SectionTitle from '../components/section/SectionTitle'
import MSearchBar from '../components/form/MSearchBar'
import SearchBar from '../components/form/SearchBar'
import SortButton from '../components/button/SortButton'
import CurrentExhibitionMenuBar from '../components/navigation/CurrentExhibitionMenuBar'
import MCurrentExhibitionList from '../components/navigation/MCurrentExhibitionList'
import MExhibitionCardSlide from '../components/slide/MExhibitionCardSlide'
import DExhibitionCard from '../components/card/DExhibitionCard'
import SearchOverlay from '../components/popup/SearchOverlay'
import { EXHIBITIONS, MUSEUM_TABS } from '../data/exhibitions'
import { ROUTES } from '../routes'
import './ExhibitionListPage.css'

/**
 * 전시목록 화면 — Figma 3-4. 완성 / mobile2 (292:4467) · desktop2 (375:9048)
 *   - 전시관 탭: 고른 관의 전시만 보여 줌
 *   - 검색: 전시 제목·장소에 검색어가 들어간 전시만 보여 줌
 *   - 정렬(데스크탑): 종료 임박순 = 종료일이 빠른 순 / 전시중 / 종료된 전시
 */
function filterExhibitions({ museumIndex, keyword, sort }) {
  const museum = MUSEUM_TABS[museumIndex].museum
  const word = keyword.trim()
  let list = EXHIBITIONS.filter(
    (item) =>
      (!museum || item.museum === museum) && (!word || item.title.includes(word) || item.place.includes(word)),
  )
  if (sort === '전시중') list = list.filter((item) => item.status === 'exhibiting')
  if (sort === '종료된 전시') list = list.filter((item) => item.status === 'ended')
  return [...list].sort((a, b) => a.endDate.localeCompare(b.endDate))
}

function ExhibitionListPage() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [museumIndex, setMuseumIndex] = useState(0)
  const [keyword, setKeyword] = useState('')
  const [sort, setSort] = useState('종료 임박순')

  const list = filterExhibitions({ museumIndex, keyword, sort }).map((item) => ({
    ...item,
    href: ROUTES.exhibitionDetail(item.id),
  }))
  const listKey = `${museumIndex}-${keyword}-${sort}` // 조건이 바뀌면 슬라이드를 첫 장으로

  return (
    <div className="exhibition-list-page">
      <a className="skip-link" href="#main">
        본문 영역으로 바로가기
      </a>

      <Header homeHref={ROUTES.home} onSearchClick={() => setSearchOpen(true)} />

      <main id="main" className="exhibition-list-page__main">
        <hr className="exhibition-list-page__line exhibition-list-page__desktop" />

        {/* 제목 + 검색 */}
        <section className="exhibition-list-page__search" aria-labelledby="exhibition-list-title">
          <div className="exhibition-list-page__mobile exhibition-list-page__mobile-title">
            <SectionTitle id="exhibition-list-title" title="전시" />
          </div>
          <div className="exhibition-list-page__desktop">
            <SectionTitle title="현재전시" />
          </div>
          <hr className="exhibition-list-page__line exhibition-list-page__mobile" />
          <div className="exhibition-list-page__mobile exhibition-list-page__search-mobile">
            <MSearchBar onSearch={setKeyword} />
          </div>
          <div className="exhibition-list-page__desktop exhibition-list-page__search-desktop">
            <div className="exhibition-list-page__search-field">
              <SearchBar onSearch={setKeyword} />
            </div>
            <div className="exhibition-list-page__sort">
              <SortButton value={sort} onChange={setSort} />
            </div>
          </div>
        </section>

        <hr className="exhibition-list-page__line" />

        {/* 전시관 탭 */}
        <nav className="exhibition-list-page__tabs" aria-label="전시관별 전시">
          <div className="exhibition-list-page__mobile">
            <CurrentExhibitionMenuBar
              items={MUSEUM_TABS.map((tab) => tab.mobileLabel)}
              selectedIndex={museumIndex}
              onSelect={setMuseumIndex}
            />
          </div>
          <div className="exhibition-list-page__desktop exhibition-list-page__tabs-desktop">
            <MCurrentExhibitionList
              items={MUSEUM_TABS.map((tab) => tab.desktopLabel)}
              selectedIndex={museumIndex}
              onSelect={setMuseumIndex}
            />
          </div>
        </nav>

        {/* 전시 카드 */}
        <section className="exhibition-list-page__cards" aria-label="전시 목록">
          <p className="sr-only" aria-live="polite">
            총 {list.length}건
          </p>

          {list.length === 0 ? (
            <p className="exhibition-list-page__empty">조건에 맞는 전시가 없습니다.</p>
          ) : (
            <>
              <div className="exhibition-list-page__mobile exhibition-list-page__slide">
                <MExhibitionCardSlide key={listKey} items={list} />
              </div>
              <ul className="exhibition-list-page__desktop exhibition-list-page__grid">
                {list.map((exhibition) => (
                  <li key={exhibition.title}>
                    <DExhibitionCard {...exhibition} />
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>
      </main>

      <Footer />

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </div>
  )
}

export default ExhibitionListPage
