import iconInstagram from '../../assets/icons/sns/sns-instagram.png'
import iconFacebook from '../../assets/icons/sns/sns-facebook.png'
import iconYoutube from '../../assets/icons/sns/sns-youtube.png'
import iconBlog from '../../assets/icons/sns/sns-blog.png'
import iconChannel from '../../assets/icons/sns/sns-channel.png'
import './Sns.css'

/**
 * SNS 바로가기 — 인스타그램 · 페이스북 · 유튜브 · 블로그 · 카카오톡 채널
 * Figma: sns (499:12555) — 아이콘 모음
 *
 * 사용 예)
 *   <Sns links={{ instagram: 'https://...', youtube: 'https://...' }} />
 *
 * @param {Object} links  SNS별 주소 { instagram, facebook, youtube, blog, channel }
 */
const ITEMS = [
  { key: 'instagram', label: '인스타그램', icon: iconInstagram, width: 31, height: 31 },
  { key: 'facebook', label: '페이스북', icon: iconFacebook, width: 34, height: 33 },
  { key: 'youtube', label: '유튜브', icon: iconYoutube, width: 34, height: 33 },
  { key: 'blog', label: '블로그', icon: iconBlog, width: 34, height: 33 },
  { key: 'channel', label: '카카오톡 채널', icon: iconChannel, width: 34, height: 33 },
]

function Sns({ links = {} }) {
  return (
    <ul className="sns">
      {ITEMS.map((item) => (
        <li key={item.key}>
          <a className="sns__link" href={links[item.key]}>
            <img src={item.icon} alt={`수원시립미술관 ${item.label}`} width={item.width} height={item.height} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Sns
