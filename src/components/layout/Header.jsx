import SearchIconButton from '../button/SearchIconButton'
import LanguageButton from '../button/LanguageButton'
import DGnb from '../navigation/DGnb'
import logo from '../../assets/images/logo/logo.png'
import iconMenu from '../../assets/icons/ui/icon-menu.png'
import iconLogin from '../../assets/icons/ui/icon-login.png'
import './Header.css'

/**
 * 헤더 — 로고 · 검색 · 메뉴
 * Figma: 상단/로고메뉴 (모바일 289:4289) · 상단로고메뉴 + 메뉴바 (데스크탑 375:8684 · 375:8696)
 *   - 모바일: 로고 + 검색 아이콘 + 메뉴(햄버거) 아이콘
 *   - 데스크탑: 로고 + 로그인 + 언어버튼, 아래 줄에 d/gnb 7개 + 검색 아이콘
 * 사용 컴포넌트: SearchIconButton (버튼/검색아이콘), LanguageButton (언어버튼), DGnb (d/gnb)
 *
 * 사용 예)
 *   <Header onSearchClick={() => setSearchOpen(true)} />
 *
 * @param {Array}    menus          데스크탑 메뉴 [{ title, items: [{ label, href }] }]
 * @param {string}   homeHref       로고를 눌렀을 때 이동할 주소
 * @param {string}   loginHref      로그인 주소
 * @param {Function} onSearchClick  검색 아이콘을 눌렀을 때 실행할 함수
 * @param {Function} onMenuClick    (모바일) 메뉴 아이콘을 눌렀을 때 실행할 함수
 */
const DEFAULT_MENUS = [
  { title: '관람', items: [] },
  { title: '전시', items: [] },
  { title: '교육', items: [] },
  { title: '문화프로그램', items: [] },
  { title: '라이브러리·소장품', items: [] },
  { title: '소식·홍보', items: [] },
  { title: '미술관소개', items: [] },
]

function Header({ menus = DEFAULT_MENUS, homeHref = '/', loginHref, onSearchClick, onMenuClick }) {
  return (
    <header className="header">
      <div className="header__top">
        <a className="header__logo" href={homeHref}>
          <img src={logo} alt="수원시립미술관 홈" width="121" height="41" />
        </a>

        {/* 모바일 — 검색 + 메뉴 */}
        <div className="header__mobile-actions">
          <SearchIconButton onClick={onSearchClick} />
          <button type="button" className="header__menu-button" aria-label="전체 메뉴" onClick={onMenuClick}>
            <img src={iconMenu} alt="" width="24" height="24" />
          </button>
        </div>

        {/* 데스크탑 — 로그인 + 언어 */}
        <div className="header__desktop-actions">
          <a className="header__login" href={loginHref} aria-label="로그인">
            <img src={iconLogin} alt="" width="32" height="32" />
          </a>
          <LanguageButton />
        </div>
      </div>

      {/* 데스크탑 — 메뉴바 */}
      <nav className="header__nav" aria-label="주 메뉴">
        <ul className="header__gnb">
          {menus.map((menu) => (
            <li key={menu.title}>
              <DGnb title={menu.title} items={menu.items} />
            </li>
          ))}
        </ul>
        <div className="header__nav-search">
          <SearchIconButton onClick={onSearchClick} />
        </div>
      </nav>
    </header>
  )
}

export default Header
