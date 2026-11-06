import ScrollTopButton from '../button/ScrollTopButton'
import Sns from '../navigation/Sns'
import logo from '../../assets/images/logo/logo.png'
import './Footer.css'

/**
 * 푸터 — 상단이동버튼, SNS, 개인정보 처리방침, 주소·연락처, 저작권, 로고
 * Figma: m/푸터섹션 (544:11314) · d/푸터섹션 (587:12916)
 * 사용 컴포넌트: ScrollTopButton (상단이동버튼), Sns (sns)
 *
 * 사용 예)
 *   <Footer privacyHref="/privacy" snsLinks={{ instagram: 'https://...' }} />
 *
 * @param {string} privacyHref  개인정보 처리방침 주소
 * @param {Object} snsLinks     SNS 주소 { instagram, facebook, youtube, blog, channel }
 */
function Footer({ privacyHref, snsLinks }) {
  return (
    <footer className="footer">
      <div className="footer__scroll-top">
        <ScrollTopButton />
      </div>

      <div className="footer__body">
        <div className="footer__content">
          <div className="footer__sns">
            <Sns links={snsLinks} />
          </div>

          <a className="footer__privacy" href={privacyHref}>
            개인정보 처리방침
          </a>

          <address className="footer__address">
            (우 16252) 경기도 수원시 팔달구 정조로 833 (신풍동)
            <br />
            TEL: 031-5191-3800
            <br />
            홈페이지의 모든 내용들은 무단 복제가 불가합니다.
          </address>

          <p className="footer__copyright">Copyright © 2019 SUWON MUSEUM OF ART. ALL RIGHTS RESERVED.</p>

          <img className="footer__logo" src={logo} alt="수원시립미술관" width="248" height="83" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
