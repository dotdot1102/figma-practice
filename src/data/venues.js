import mapGwanggyo from '../assets/images/map/map-gwanggyo.png'
import mapHaenggung from '../assets/images/map/map-museum.png'

/**
 * 전시관별 관람 안내 — 전시상세의 현재전시카드·유의사항·장소(지도·오시는 길)에 사용
 *   광교:       Figma 3-4. 완성 / mobile3 (전시상세) 시안 내용
 *   행궁·만석:  ※ 시안에 없어 공개 정보로 채움 — 공식 누리집(suma.suwon.go.kr)에서 확인 필요
 *              관람시간은 메인 '미술관' 카드(Figma) 기준
 *
 * 선택 항목 — 없으면 화면에서 숨김: phone, subway, mapSrc(지도 이미지) → 없으면 mapEmbedUrl(구글 지도 임베드) → 없으면 mapUrl(구글 지도 링크)
 */

// 모든 관 공통 유의사항 (Figma 광교 시안 문구)
const COMMON_VISIT_NOTICES = [
  '미술관을 방문한 관람객 모두가 즐겁게 관람할 수 있도록 관람 예절을 지켜주세요.',
  '전시관람 시에는 전시장 바닥의 선이나 줄을 넘어서지 않도록 유의해주세요. 작품과 충분한 거리를 두고 감상할 때, 작품 전체를 조망할 수 있습니다.',
  '관람 안내문구를 꼭 지켜주세요. 작품이 훼손되지 않도록 눈으로만 감상해주세요.',
  '자원봉사자는 관람객의 전시 감상과 작품 안전을 위해 자발적으로 봉사하는 분들입니다. 상냥하게 대해주세요.',
]

const COMMON_RESERVATION_NOTICES = [
  '홈페이지 신청 후 불가피하게 참석이 어려울 경우 사전에 취소 부탁드립니다. 취소를 하지 않으신 경우에는 불참처리가 되어 다음 프로그램 참여에 제한을 받으실 수 있습니다.',
  '프로그램 참여자의 초상 모습이 사진, 영상물에 기록될 경우, 향 후 관련 홍보에 활용될 수 있습니다.',
  '도슨트 단체해설은 별도의 사전신청을 받지 않습니다. 정규해설 시간 이용 부탁드립니다.',
]

export const VENUES = {
  haenggung: {
    hours: '10:00 ~ 19:00 (11월 ~ 2월 10:00 ~ 18:00)',
    fee: '성인 4,000원', // ※ 확인 필요
    note: '입장마감 관람 종료 1시간 전',
    mapName: '수원시립미술관 행궁 본관',
    mapSrc: mapHaenggung,
    mapUrl: 'https://maps.app.goo.gl/k8BfUNzkvU3vqJVy7', // 구글 지도
    mapAlt: '수원시립미술관 행궁 본관 위치 지도 — 화성행궁 신풍루 북쪽, 정조로 옆',
    visitNotices: [
      '수원시립미술관 행궁 본관 관람료는 성인 4,000원이며, 주차는 화성행궁 공영주차장을 이용해주세요. (주차료 유료)',
      '관람시간은 3월~10월 10:00~19:00, 11월~2월 10:00~18:00이며 관람 종료 1시간 전까지 입장 가능합니다. 매주 월요일은 휴관합니다.',
      ...COMMON_VISIT_NOTICES,
    ],
    reservationNotices: COMMON_RESERVATION_NOTICES,
    address: '경기도 수원시 팔달구 정조로 833 (남창동) 수원시립미술관',
    phone: '031-5191-3800', // 푸터 대표번호
    subway: {
      line: '1',
      station: ['수원역', '(1호선)'],
      guide: '수원역 버스정류장에서 화성행궁 방면 버스 환승 → 화성행궁 하차',
    },
    bus: ['화성행궁·팔달문 방면 버스 → 화성행궁 정류장 하차 → 도보 3분 → 수원시립미술관 도착'],
    parking: ['화성행궁 공영주차장 이용 (유료)'],
  },

  manseok: {
    hours: '10:00 ~ 18:00',
    fee: '무료',
    note: '입장마감 17 : 00',
    mapName: '수원시립만석전시관',
    mapUrl: 'https://maps.app.goo.gl/zDntGdcZQJmudZ3W6', // 구글 지도
    mapEmbedUrl: 'https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1z7IiY7JuQ7Iuc66a966eM7ISd7KCE7Iuc6rSA!6i16!3m1!1sko!5m1!1sko', // 지도 이미지 대신 구글 지도 임베드
    visitNotices: [
      '수원시립만석전시관 관람료는 무료이며, 주차는 만석공원 공영주차장을 이용해주세요.',
      '수원시립만석전시관 관람시간은 10:00~18:00이며 17:00까지 입장 가능합니다. 매주 월요일은 휴관합니다.',
      ...COMMON_VISIT_NOTICES,
    ],
    reservationNotices: COMMON_RESERVATION_NOTICES,
    address: '경기도 수원시 장안구 송정로 19 (정자동) 만석공원 내',
    bus: ['만석공원 방면 버스 → 만석공원 정류장 하차 → 도보 5분 → 수원시립만석전시관 도착'],
    parking: ['만석공원 공영주차장 이용'],
  },

  gwanggyo: {
    // 데스크탑 현재전시카드(desktop3)에 보이는 관람 정보
    hours: '10:00 ~ 18:00',
    fee: '무료',
    note: '입장마감 시간 17 : 30',
    mapName: '수원시립 아트스페이스 광교',
    mapSrc: mapGwanggyo,
    mapAlt: '수원시립아트스페이스광교 위치 지도 — 수원컨벤션센터 지하 1층, 광교중앙역 근처',
    visitNotices: [
      '수원시립아트스페이스광교 관람료는 무료이며, 주차는 수원컨벤션센터 주차장을 이용해주세요. (주차료 유료)',
      '수원시립아트스페이스광교 관람시간은 10:00~18:00이며 17:00까지 입장 가능합니다.',
      ...COMMON_VISIT_NOTICES,
    ],
    reservationNotices: COMMON_RESERVATION_NOTICES,
    address: '[16302] 경기도 수원시 영통구 광교중앙로 140 (하동 864-10) 수원컨벤션센터 지하 1층',
    phone: '031-5191-4195',
    subway: {
      line: '신분당',
      station: ['광교중앙역', '(신분당선)'],
      guide: '4번 출구 도보 10분 이동 → 수원컨벤션센터 도착',
    },
    bus: [
      '서울역 : M5115, M5121, M5422 → 광교중앙·아주대환승센터 하차 → 4번 출구, 도보 10분 → 수원컨벤션센터 도착5-4',
      '강남역 : 19, 20, 32, 32-3, 32-4, 670, 720-3, 999 → 수원컨벤션센터·롯데아울렛 하차 → 도보 3분 → 수원컨벤션센터 도착',
    ],
    parking: ['1회 주차요금 9,500원', '(30분 초과 후 (10분마다) : 400원)'],
  },
}
