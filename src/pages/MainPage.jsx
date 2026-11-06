import { useState } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import SectionTitle from '../components/section/SectionTitle'
import TopSectionBanner from '../components/section/TopSectionBanner'
import MMoreButton from '../components/button/MMoreButton'
import MoreButton from '../components/button/MoreButton'
import MExhibitionCard from '../components/card/MExhibitionCard'
import DExhibitionCard from '../components/card/DExhibitionCard'
import MMuseumCard from '../components/card/MMuseumCard'
import DMuseumCard from '../components/card/DMuseumCard'
import DNewsCard from '../components/card/DNewsCard'
import MExhibitionCardSlide from '../components/slide/MExhibitionCardSlide'
import Newsletter from '../components/slide/Newsletter'
import SearchOverlay from '../components/popup/SearchOverlay'
import iconNews from '../assets/icons/ui/icon-news.png'
import imageGreenGreen from '../assets/images/exhibition/exhibition-green-green.png'
import imageExpansionPack from '../assets/images/exhibition/exhibition-expansion-pack.png'
import imageKinship from '../assets/images/exhibition/exhibition-kinship.png'
import imageBlancBlack from '../assets/images/exhibition/exhibition-blanc-black.png'
import newsletter10 from '../assets/images/newsletter/newsletter-10.png'
import newsletter09 from '../assets/images/newsletter/newsletter-09.png'
import newsletter08 from '../assets/images/newsletter/newsletter-08.png'
import newsletter07 from '../assets/images/newsletter/newsletter-07.png'
import museumHaenggung from '../assets/images/museum/museum-haenggung.png'
import museumManseok from '../assets/images/museum/museum-manseok.png'
import museumGwanggyo from '../assets/images/museum/museum-gwanggyo.png'
import museumBuksuwon from '../assets/images/museum/museum-buksuwon.png'
import { ROUTES } from '../routes'
import './MainPage.css'

/**
 * 메인 화면 — Figma 3-4. 완성 / mobile1 (289:4280) · desktop1 (292:6965)
 * 모바일(~767px)과 데스크탑(768px~)에서 보이는 구성이 달라, 각각의 블록을 CSS로 보이고 숨김
 */

// 미술관 — 모바일 m/미술관카드1·2 (Figma 시안에 2곳만 있음)
const MOBILE_MUSEUMS = [
  {
    name: '수원시립미술관 행궁 본관',
    hours: [
      { season: '3월 ~ 10월', time: '10:00 ~ 19:00' },
      { season: '11월 ~ 2월', time: '10:00 ~ 18:00' },
    ],
    closedDay: '매주 월요일',
    isClosedToday: true,
    imageSrc: museumHaenggung,
    imageAlt: '수원시립미술관 행궁 본관 건물 외관',
  },
  {
    name: '수원시립만석전시관',
    hours: [{ season: '연중', time: '10:00 ~ 18:00' }],
    closedDay: '매주 월요일',
    isClosedToday: true,
    imageSrc: museumManseok,
    imageAlt: '수원시립만석전시관 건물 외관',
  },
]

// 미술관 — 데스크탑 d/미술관카드 4개
const DESKTOP_MUSEUMS = [
  {
    name: '수원시립미술관 행궁 본관',
    hours: [
      { season: '하절기(3월 ~ 10월)', time: '10:00 ~ 19:00' },
      { season: '동절기(11월 ~ 2월)', time: '10:00 ~ 18:00' },
    ],
    closedDay: '매주 월요일',
    isClosedToday: true,
    imageSrc: museumHaenggung,
    imageAlt: '수원시립미술관 행궁 본관 건물 외관',
  },
  {
    name: '수원시립만석전시관',
    hours: [{ season: '연중', time: '10:00 ~ 18:00' }],
    closedDay: '매주 월요일',
    isClosedToday: true,
    imageSrc: museumManseok,
    imageAlt: '수원시립만석전시관 건물 외관',
  },
  {
    name: '수원시립아트스페이스광교',
    hours: [
      { season: '연중', time: '10:00 ~ 18:00' },
      { season: '동절기(11월 ~ 2월)', time: '10:00 ~ 18:00' },
    ],
    closedDay: '매주 월요일',
    isClosedToday: true,
    imageSrc: museumGwanggyo,
    imageAlt: '수원시립아트스페이스광교 건물 외관',
  },
  {
    name: '수원시립북수원전시관',
    hours: [
      { season: '연중', time: '10:00 ~ 18:00' },
      { season: '동절기(11월 ~ 2월)', time: '10:00 ~ 18:00' },
    ],
    closedDay: '매주 월요일',
    isClosedToday: true,
    imageSrc: museumBuksuwon,
    imageAlt: '수원시립북수원전시관 건물 외관',
  },
]

// 전시 — 데스크탑 d/전시카드 4개
const DESKTOP_EXHIBITIONS = [
  {
    title: '확장팩: 아티스틱 리서치',
    place: '수원시립아트스페이스광교',
    period: '2026 . 08 . 28 ~ 2026 . 12 . 20',
    status: 'exhibiting',
    imageSrc: imageExpansionPack,
    imageAlt: '확장팩: 아티스틱 리서치 포스터 — 2026. 8. 28. ~ 12. 20., 수원시립아트스페이스광교',
  },
  {
    title: '그린그린 뮤지엄 : 감각 노트',
    place: '수원시립만석전시관',
    period: '2026 . 08 . 11 ~ 2026 . 12 . 04',
    status: 'exhibiting',
    imageSrc: imageGreenGreen,
    imageAlt: '그린그린 뮤지엄: 감각 노트 포스터 — 2026. 8. 11. ~ 12. 4., 수원시립만석전시관 참여형 교육전시',
  },
  {
    title: '2026 국제전《패트리샤 피치니니: 킨쉽》',
    place: '수원시립미술관 행궁 본관',
    period: '2026 . 07 . 23 ~ 2026 . 11 . 01',
    status: 'exhibiting',
    imageSrc: imageKinship,
    imageAlt: '패트리샤 피치니니: 킨쉽 Kinship 포스터 — 2026. 7. 23. ~ 11. 1., 수원시립미술관',
  },
  {
    title: '2026 소장품전《블랑 블랙 파노라마》',
    place: '수원시립미술관 행궁 본관',
    period: '2026 . 02 . 12 ~ 2027 . 03 . 01',
    status: 'exhibiting',
    imageSrc: imageBlancBlack,
    imageAlt: '2026 소장품전 블랑 블랙 파노라마 Blanc Black Panorama 포스터 — 2026. 2. 12. ~ 2027. 3. 1.',
  },
]

// 뉴스 — 데스크탑 d/뉴스카드 4개 (글자는 Figma 시안 그대로)
const DESKTOP_NEWS = [
  { month: '10월', title: '수원시립미술관 소식', imageSrc: newsletter10, imageAlt: 'SUMA 뉴스레터 VOL.65 2026년 10월호 표지' },
  { month: '10월', title: '수원시립미술관 소식', imageSrc: newsletter09, imageAlt: 'SUMA 뉴스레터 VOL.64 2026년 9월호 표지' },
  { month: '10월', title: '수원시립미술관 소식', imageSrc: newsletter08, imageAlt: 'SUMA 뉴스레터 VOL.63 2026년 8월호 표지' },
  { month: '10월', title: '수원시립미술관 소식', imageSrc: newsletter07, imageAlt: 'SUMA 뉴스레터 VOL.62 2026년 7월호 표지' },
]

// 전시 슬라이드(모바일) — Figma 프로토타입: 카드를 누르면 전시목록(mobile2)으로 이동
const MOBILE_SLIDE_ITEMS = [
  { ...DESKTOP_EXHIBITIONS[0] },
  { ...DESKTOP_EXHIBITIONS[1] },
  { ...DESKTOP_EXHIBITIONS[2], title: '2026국제전《패트리샤 피치니니:킨쉽》', status: 'ending' },
  { ...DESKTOP_EXHIBITIONS[3], title: '2026소장품전《블랑 블랙 파노라마》' },
].map((item) => ({ ...item, href: ROUTES.exhibitions }))

function MainPage() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="main-page">
      <a className="skip-link" href="#main">
        본문 영역으로 바로가기
      </a>

      <Header homeHref={ROUTES.home} onSearchClick={() => setSearchOpen(true)} />

      <main id="main" className="main-page__main">
        {/* 대표 전시 — 모바일: 전시버튼 + m/전시카드 / 데스크탑: 상단섹션배너 */}
        <section className="main-page__featured" aria-label="대표 전시">
          <div className="main-page__mobile">
            <div className="main-page__featured-button">
              <MMoreButton label="전시 상세 바로가기" href={ROUTES.exhibitions} />
            </div>
            <div className="main-page__featured-card">
              <MExhibitionCard
                title="그린그린 뮤지엄 : 감각 노트"
                place="수원시립만석전시관"
                period="2026 . 08 . 11 ~ 2026 . 12 . 04"
                status="exhibiting"
                imageSrc={imageGreenGreen}
                imageAlt="그린그린 뮤지엄: 감각 노트 포스터 — 2026. 8. 11. ~ 12. 4., 수원시립만석전시관 참여형 교육전시"
              />
            </div>
          </div>
          <div className="main-page__desktop">
            <TopSectionBanner banner={1} href={ROUTES.exhibitions} />
          </div>
        </section>

        <hr className="main-page__line" />
        <hr className="main-page__line main-page__desktop" />

        {/* 미술관 */}
        <section className="main-page__section main-page__museums" aria-labelledby="museum-title">
          <SectionTitle
            id="museum-title"
            title="미술관"
            action={
              <span className="main-page__mobile">
                <MMoreButton label="더보기" href={ROUTES.exhibitions} />
              </span>
            }
          />
          <ul className="main-page__mobile main-page__museum-list">
            {MOBILE_MUSEUMS.map((museum) => (
              <li key={museum.name}>
                <MMuseumCard {...museum} />
              </li>
            ))}
          </ul>
          <ul className="main-page__desktop main-page__grid main-page__grid--museum">
            {DESKTOP_MUSEUMS.map((museum) => (
              <li key={museum.name}>
                <DMuseumCard {...museum} />
              </li>
            ))}
          </ul>
        </section>

        <hr className="main-page__line main-page__mobile" />

        {/* 전시 */}
        <section className="main-page__section main-page__exhibitions" aria-labelledby="exhibition-title">
          <SectionTitle id="exhibition-title" title="전시" />
          <div className="main-page__mobile main-page__exhibition-slide">
            <MExhibitionCardSlide items={MOBILE_SLIDE_ITEMS} />
          </div>
          <ul className="main-page__desktop main-page__grid main-page__grid--exhibition">
            {DESKTOP_EXHIBITIONS.map((exhibition) => (
              <li key={exhibition.title}>
                <DExhibitionCard {...exhibition} href={ROUTES.exhibitions} />
              </li>
            ))}
          </ul>
        </section>

        <hr className="main-page__line main-page__mobile" />

        {/* 뉴스레터 */}
        <section className="main-page__section main-page__news" aria-labelledby="news-title">
          <SectionTitle id="news-title" title="뉴스레터" iconSrc={iconNews} />
          <div className="main-page__mobile main-page__news-slide">
            <Newsletter moreHref={ROUTES.exhibitions} />
          </div>
          <div className="main-page__desktop">
            <ul className="main-page__grid main-page__grid--news">
              {DESKTOP_NEWS.map((news) => (
                <li key={news.imageSrc}>
                  <DNewsCard {...news} />
                </li>
              ))}
            </ul>
            <div className="main-page__news-more">
              <MoreButton label="더보기" href={ROUTES.exhibitions} />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </div>
  )
}

export default MainPage
