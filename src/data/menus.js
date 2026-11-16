import { ROUTES } from '../routes'

/**
 * 데스크탑 메뉴바 상위·하위 메뉴
 *   상위 메뉴: Figma 메뉴바 (375:8696)
 *   하위 메뉴: Figma 상단gnb/하위gnb (210:3986)
 *   - 교육 · 문화프로그램은 시안에서 하위메뉴가 비어 있음
 *
 * href가 없는 항목은 아직 페이지가 없어 클릭해도 이동하지 않음
 */
export const MENUS = [
  {
    title: '관람',
    items: [
      { label: '관람안내' },
      { label: '단체관람예약' },
      { label: '대관안내' },
      { label: '멤버십안내' },
      { label: '오시는길' },
    ],
  },
  {
    title: '전시',
    items: [
      { label: '현재전시', href: ROUTES.exhibitions },
      { label: '예정전시', href: ROUTES.exhibitions },
      { label: '지난전시', href: ROUTES.exhibitions },
      { label: '온라인전시' },
    ],
  },
  { title: '교육', items: [] },
  { title: '문화프로그램', items: [] },
  {
    title: '라이브러리·소장품',
    items: [{ label: '라이브러리' }, { label: '아카이브' }, { label: '소장품' }],
  },
  {
    title: '소식·홍보',
    items: [
      { label: '새소식' },
      { label: '보도자료' },
      { label: '뉴스레터' },
      { label: '자주묻는 질문' },
      { label: '설문조사' },
    ],
  },
  {
    title: '미술관소개',
    items: [
      { label: '미술관소개' },
      { label: '수원시립미술관행궁본관' },
      { label: '수원시립만석전시관' },
      { label: '수원시립아트스페이스광교' },
      { label: '수원시립북수원전시관' },
    ],
  },
]
