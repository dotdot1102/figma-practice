import { useState } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import VisitLegend from '../components/form/VisitLegend'
import MonthNav from '../components/form/MonthNav'
import Calendar from '../components/form/Calendar'
import AmPmSelect from '../components/form/AmPmSelect'
import MMoreButton from '../components/button/MMoreButton'
import MPopup from '../components/popup/MPopup'
import SearchOverlay from '../components/popup/SearchOverlay'
import { findExhibition } from '../data/exhibitions'
import { ROUTES } from '../routes'
import './ReservationPage.css'

/**
 * 관람 예약 화면 — Figma 3-4. 완성 / mobile4 (292:5922) · mobile5 (292:6487, 예약 확정 팝업)
 *   날짜·시간을 고르고 [예약하기] → 예약 확정 팝업 → [예약확정] → 메인
 *   (시안의 휴대폰 키보드 그림은 실제 화면 요소가 아니라 만들지 않음)
 *
 * @param {string} id  전시 id (주소 #/reservation/<id>)
 */
const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토']
const SLOTS = [
  { startTime: '10 : 00', endTime: '18 : 00', text: '10:00~18:00' },
  { startTime: '18 : 00', endTime: '21 : 00', text: '18:00~21:00' },
]

const pad = (number) => String(number).padStart(2, '0')
const formatDate = (date) =>
  `${date.getFullYear()}.${pad(date.getMonth() + 1)}.${pad(date.getDate())} (${WEEKDAYS[date.getDay()]})`

function ReservationPage({ id }) {
  const [today] = useState(() => new Date()) // 화면을 연 날 (다시 그려도 바뀌지 않게 한 번만 계산)
  const exhibition = findExhibition(id)

  const [searchOpen, setSearchOpen] = useState(false)
  const [view, setView] = useState({ year: today.getFullYear(), month: today.getMonth() + 1 })
  const [selectedDate, setSelectedDate] = useState(today) // 시안: 오늘 날짜가 선택된 상태
  const [slotIndex, setSlotIndex] = useState(0) // 시안: 오전(10:00~18:00) 선택된 상태
  const [popupOpen, setPopupOpen] = useState(false)

  const moveMonth = (step) => {
    const next = new Date(view.year, view.month - 1 + step, 1)
    setView({ year: next.getFullYear(), month: next.getMonth() + 1 })
  }

  return (
    <div className="reservation-page">
      <a className="skip-link" href="#main">
        본문 영역으로 바로가기
      </a>

      <Header homeHref={ROUTES.home} onSearchClick={() => setSearchOpen(true)} />

      <main id="main" className="reservation-page__main">
        <h1 className="sr-only">{exhibition ? `${exhibition.title} 관람 예약` : '관람 예약'}</h1>

        {/* 달력섹션 */}
        <section className="reservation-page__calendar" aria-label="관람일 선택">
          <div className="reservation-page__legend">
            <VisitLegend />
          </div>
          <div className="reservation-page__month">
            <MonthNav
              year={view.year}
              month={view.month}
              onPrev={() => moveMonth(-1)}
              onNext={() => moveMonth(1)}
            />
            <Calendar
              year={view.year}
              month={view.month}
              selectedDate={selectedDate}
              minDate={today}
              onSelect={setSelectedDate}
            />
          </div>
        </section>

        {/* 시간예약버튼 */}
        <section className="reservation-page__time" aria-label="관람 시간 선택">
          <AmPmSelect slots={SLOTS} selectedIndex={slotIndex} onSelect={setSlotIndex} />
          <div className="reservation-page__submit">
            <MMoreButton label="예약하기" onClick={() => setPopupOpen(true)} />
          </div>
        </section>
      </main>

      <Footer />

      {/* m/팝업창 — 예약 확정 */}
      {popupOpen && (
        <div className="reservation-page__popup" ref={(el) => el?.querySelector('button')?.focus()}>
          <MPopup
            place={exhibition ? exhibition.place : ''}
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

export default ReservationPage
