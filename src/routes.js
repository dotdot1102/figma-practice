/**
 * 페이지 주소 — 패키지 없이 주소 뒤 #(해시)로 화면을 바꿈
 *   #/                      메인
 *   #/exhibitions           전시목록
 *   #/exhibitions/<전시id>  전시상세
 *   #/reservation/<전시id>  관람 예약
 */
export const ROUTES = {
  home: '#/',
  exhibitions: '#/exhibitions',
  exhibitionDetail: (id) => `#/exhibitions/${id}`,
  reservation: (id) => `#/reservation/${id}`,
}

// 주소(#...)를 { page, id }로 바꿈 — 모르는 주소는 메인
export function parseHash(hash) {
  const [, first, second] = hash.replace(/^#/, '').split('/')
  if (first === 'exhibitions' && second) return { page: 'detail', id: decodeURIComponent(second) }
  if (first === 'exhibitions') return { page: 'list' }
  if (first === 'reservation' && second) return { page: 'reservation', id: decodeURIComponent(second) }
  return { page: 'main' }
}
