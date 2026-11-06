import iconBadgeExhibiting from '../../assets/icons/badge/icon-badge-exhibiting.png'
import iconBadgeEnding from '../../assets/icons/badge/icon-badge-ending.png'
import iconBadgeEnded from '../../assets/icons/badge/icon-badge-ended.png'
import './StatusBadge.css'

/**
 * 상태 뱃지 — 카드 위에 붙는 상태 표시 (색 + 글자를 함께 표시)
 * Figma: 상태뱃지 (260:4079) — 뱃지-전시중 / 뱃지-종료임박 / 뱃지-종료 / 뱃지-휴관일
 *
 * 사용 예)
 *   <StatusBadge status="exhibiting" />   → 전시중
 *   <StatusBadge status="ending" />       → 종료 임박
 *   <StatusBadge status="ended" />        → 종료
 *   <StatusBadge status="closed" />       → 휴관일
 *
 * @param {'exhibiting'|'ending'|'ended'|'closed'} status  상태 종류
 * @param {string}                                 label   표시 글자 (없으면 상태별 기본 글자)
 */
const ICONS = {
  exhibiting: iconBadgeExhibiting,
  ending: iconBadgeEnding,
  ended: iconBadgeEnded,
}

const DEFAULT_LABELS = {
  exhibiting: '전시중',
  ending: '종료 임박',
  ended: '종료',
  closed: '휴관일',
}

function StatusBadge({ status = 'exhibiting', label }) {
  return (
    <span className={`status-badge status-badge--${status}`}>
      {ICONS[status] && <img src={ICONS[status]} alt="" width="18" height="18" />}
      {label ?? DEFAULT_LABELS[status]}
    </span>
  )
}

export default StatusBadge
