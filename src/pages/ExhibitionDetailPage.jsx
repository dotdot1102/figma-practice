import { useState } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import SectionTitle from '../components/section/SectionTitle'
import MExhibitionCard from '../components/card/MExhibitionCard'
import CurrentExhibitionCard from '../components/card/CurrentExhibitionCard'
import MMoreButton from '../components/button/MMoreButton'
import MoreButton from '../components/button/MoreButton'
import VisitLegend from '../components/form/VisitLegend'
import MonthNav from '../components/form/MonthNav'
import Calendar from '../components/form/Calendar'
import AmPmSelect from '../components/form/AmPmSelect'
import MapMuseum from '../components/map/MapMuseum'
import MMap from '../components/map/MMap'
import SubwayLine from '../components/badge/SubwayLine'
import DPopup from '../components/popup/DPopup'
import SearchOverlay from '../components/popup/SearchOverlay'
import { findExhibition } from '../data/exhibitions'
import { VENUES } from '../data/venues'
import { ROUTES } from '../routes'
import iconSquare from '../assets/icons/ui/icon-square.png'
import './ExhibitionDetailPage.css'

/**
 * 전시상세 화면
 *   모바일 — Figma mobile3 (292:5593): 전시 카드 + [예약하기] → 관람 예약 화면으로 이동
 *   데스크탑 — Figma desktop3 (544:11575) · desktop4 (587:12423):
 *     현재전시카드 + 오른쪽 달력·시간·[예약하기] → 예약 확정 팝업(d/팝업창) → [예약확정] → 메인
 *   공통 — 관람·예약 유의사항 / 지도 / 오시는 길
 *   ※ 유의사항·지도·오시는 길은 시안에 광교 내용만 있어, 광교 전시에서만 보여 줌
 *
 * @param {string} id  전시 id (주소 #/exhibitions/<id>)
 */
const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토']
const SLOTS = [
  { startTime: '10 : 00', endTime: '18 : 00', text: '10:00~18:00' },
  { startTime: '18 : 00', endTime: '21 : 00', text: '18:00~21:00' },
]

const pad = (number) => String(number).padStart(2, '0')
const formatDate = (date) =>
  `${date.getFullYear()}.${pad(date.getMonth() + 1)}.${pad(date.getDate())} (${WEEKDAYS[date.getDay()]})`

// "2026 . 08 . 28 ~ 2026 . 12 . 20" → "2026-08-28 ~ 2026-12-20" (데스크탑 카드 표기)
const toDashPeriod = (period) => period.replace(/ \. /g, '-')

function ExhibitionDetailPage({ id }) {
  const [today] = useState(() => new Date()) // 화면을 연 날 (다시 그려도 바뀌지 않게 한 번만 계산)
  const [searchOpen, setSearchOpen] = useState(false)
  const [view, setView] = useState({ year: today.getFullYear(), month: today.getMonth() + 1 })
  const [selectedDate, setSelectedDate] = useState(today)
  const [slotIndex, setSlotIndex] = useState(0)
  const [popupOpen, setPopupOpen] = useState(false)

  const exhibition = findExhibition(id)
  const venue = exhibition && VENUES[exhibition.museum]

  const moveMonth = (step) => {
    const next = new Date(view.year, view.month - 1 + step, 1)
    setView({ year: next.getFullYear(), month: next.getMonth() + 1 })
  }

  // 데스크탑 현재전시카드 정보 — 관 안내가 있으면 관람시간·관람료·특이사항까지
  const details = exhibition
    ? [
        { label: '전시기간', value: toDashPeriod(exhibition.period) },
        venue && { label: '관람시간', value: venue.hours },
        { label: '전시장소', value: exhibition.place },
        venue && { label: '관람료', value: venue.fee },
        venue && { label: '특이사항', value: venue.note },
      ].filter(Boolean)
    : []

  return (
    <div className="exhibition-detail-page">
      <a className="skip-link" href="#main">
        본문 영역으로 바로가기
      </a>

      <Header homeHref={ROUTES.home} onSearchClick={() => setSearchOpen(true)} />

      <main id="main" className="exhibition-detail-page__main">
        {!exhibition ? (
          <p className="exhibition-detail-page__empty">
            전시 정보를 찾을 수 없습니다. <a href={ROUTES.exhibitions}>전시 목록으로 이동</a>
          </p>
        ) : (
          <>
            <hr className="exhibition-detail-page__line exhibition-detail-page__desktop" />

            {/* 현재전시카드 (모바일) */}
            <section className="exhibition-detail-page__mobile exhibition-detail-page__card" aria-label="전시 정보">
              <MExhibitionCard
                title={exhibition.title}
                place={exhibition.place}
                period={exhibition.period}
                imageSrc={exhibition.imageSrc}
                imageAlt={exhibition.imageAlt}
              />
              <div className="exhibition-detail-page__reserve">
                <MMoreButton label="예약하기" href={ROUTES.reservation(exhibition.id)} />
              </div>
            </section>

            {/* 상단/예약 (데스크탑) — 현재전시카드 + 달력섹션 */}
            <section className="exhibition-detail-page__desktop exhibition-detail-page__top" aria-label="전시 정보와 관람 예약">
              <div className="exhibition-detail-page__top-card">
                <CurrentExhibitionCard
                  title={exhibition.title}
                  details={details}
                  imageSrc={exhibition.imageSrc}
                  imageAlt={exhibition.imageAlt}
                />
              </div>

              <div className="exhibition-detail-page__booking">
                <div className="exhibition-detail-page__legend">
                  <VisitLegend />
                </div>
                <div className="exhibition-detail-page__month">
                  <MonthNav year={view.year} month={view.month} onPrev={() => moveMonth(-1)} onNext={() => moveMonth(1)} />
                </div>
                <Calendar
                  year={view.year}
                  month={view.month}
                  selectedDate={selectedDate}
                  minDate={today}
                  onSelect={setSelectedDate}
                />
                <div className="exhibition-detail-page__time">
                  <AmPmSelect slots={SLOTS} selectedIndex={slotIndex} onSelect={setSlotIndex} />
                  <MoreButton label="예약하기" onClick={() => setPopupOpen(true)} />
                </div>
              </div>
            </section>

            {venue && (
              <>
                {/* 유의사항섹션 */}
                <section className="exhibition-detail-page__notices">
                  <div className="exhibition-detail-page__notice">
                    <h2 className="exhibition-detail-page__notice-title">
                      <img src={iconSquare} alt="" width="21" height="21" />
                      관람 시 유의 사항
                    </h2>
                    <ul className="exhibition-detail-page__notice-body">
                      {venue.visitNotices.map((text) => (
                        <li key={text}>※ {text}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="exhibition-detail-page__notice">
                    <h2 className="exhibition-detail-page__notice-title">
                      <img src={iconSquare} alt="" width="21" height="21" />
                      예약 시 유의사항
                    </h2>
                    <ol className="exhibition-detail-page__notice-body exhibition-detail-page__notice-body--numbered">
                      {venue.reservationNotices.map((text) => (
                        <li key={text}>{text}</li>
                      ))}
                    </ol>
                  </div>
                </section>

                {/* 장소 — 지도 + 지도본문 (데스크탑은 좌우 배치) */}
                <section className="exhibition-detail-page__place" aria-labelledby="exhibition-detail-place">
                  <div className="exhibition-detail-page__place-title">
                    <SectionTitle id="exhibition-detail-place" title="장소" />
                  </div>

                  <div className="exhibition-detail-page__place-body">
                    <div className="exhibition-detail-page__map">
                      <div className="exhibition-detail-page__mobile">
                        <MapMuseum name={venue.mapName} />
                      </div>
                      <MMap imageSrc={venue.mapSrc} imageAlt={venue.mapAlt} />
                    </div>

                    {/* 지도본문 — 주소·전화·지하철·버스·주차 */}
                    <dl className="exhibition-detail-page__directions">
                      <div className="exhibition-detail-page__row">
                        <dt>주소</dt>
                        <dd>{venue.address}</dd>
                      </div>
                      <div className="exhibition-detail-page__row exhibition-detail-page__row--inline">
                        <dt>전화</dt>
                        <dd>
                          <a href={`tel:${venue.phone}`}>{venue.phone}</a>
                        </dd>
                      </div>
                      <div className="exhibition-detail-page__row">
                        <dt>지하철</dt>
                        <dd>
                          <span className="exhibition-detail-page__subway">
                            <SubwayLine line={venue.subway.line} />
                            <span>
                              {venue.subway.station[0]}
                              <br />
                              {venue.subway.station[1]}
                            </span>
                          </span>
                          <span>{venue.subway.guide}</span>
                        </dd>
                      </div>
                      <div className="exhibition-detail-page__row">
                        <dt>버스</dt>
                        <dd className="exhibition-detail-page__bus">
                          {venue.bus.map((text) => (
                            <p key={text}>{text}</p>
                          ))}
                        </dd>
                      </div>
                      <div className="exhibition-detail-page__row">
                        <dt>주차장 이용안내</dt>
                        <dd>
                          {venue.parking[0]}
                          <br />
                          {venue.parking[1]}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </section>
              </>
            )}
          </>
        )}
      </main>

      <Footer />

      {/* d/팝업창 — 예약 확정 (데스크탑) */}
      {popupOpen && exhibition && (
        <div className="exhibition-detail-page__popup" ref={(el) => el?.querySelector('button')?.focus()}>
          <DPopup
            place={exhibition.place}
            dateText={`${formatDate(selectedDate)} ${SLOTS[slotIndex].text}`}
            onConfirm={() => {
              window.location.hash = ROUTES.home
            }}
          />
        </div>
      )}

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </div>
  )
}

export default ExhibitionDetailPage
