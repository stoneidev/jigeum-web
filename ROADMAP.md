# 지금 (Jigeum) Product Roadmap

> K-Beauty Discovery Platform for Global Audience

## 🎯 Vision
한국의 최신 K-Beauty 트렌드를 전 세계에 가장 빠르고 신뢰성 있게 전달하는 플랫폼

## 📊 Success Metrics
| Metric | v0.1 | v0.5 | v1.0 |
|--------|------|------|------|
| MAU | 10K | 100K | 1M |
| Avg. Session | 2min | 5min | 8min |
| Return Rate | 20% | 40% | 60% |

---

## 🚀 v0.1 - MVP Launch (Today)
**Goal:** 정보 제공에 집중, 신뢰 구축

### ✅ Core Features
- [ ] 10개 트렌딩 제품 정보 표시
- [ ] 각 제품별 실제 구매 링크 연결 (Olive Young, Amazon, StyleKorean)
- [ ] TikTok/Instagram 조회수 표시
- [ ] 카테고리 필터 (Skincare, Makeup, Device)
- [ ] 반응형 디자인 (Mobile + Desktop)

### ✅ Working Links Only
| Element | Action | Link Target |
|---------|--------|-------------|
| Shop Now 버튼 | 외부 구매 링크 | StyleKorean / Amazon |
| Brand 이름 | 브랜드 공식 사이트 | 각 브랜드 홈페이지 |
| YouTube 버튼 | 제품 리뷰 영상 | YouTube 검색 결과 |
| Instagram 버튼 | 해시태그 검색 | Instagram 해시태그 |

### ❌ Disabled Features (Coming Soon 표시)
- Sign In / Sign Up
- Search 기능
- 좋아요 / 저장 (로컬 상태만)
- 댓글 / 리뷰
- Newsletter 구독
- 알림

### 📈 Launch Checklist
- [ ] GA4 연동 확인
- [ ] SEO 메타데이터 검증
- [ ] 모든 외부 링크 테스트
- [ ] Lighthouse 성능 점수 90+
- [ ] Vercel 배포

---

## 🔄 v0.2 - Content Expansion (Week 2-3)
**Goal:** 콘텐츠 확장, 검색 유입 증가

### Features
- [ ] 제품 30개로 확장
- [ ] 검색 기능 (클라이언트 사이드)
- [ ] 제품 상세 페이지 (`/product/[id]`)
- [ ] 해시태그 필터링
- [ ] "New This Week" 섹션
- [ ] 브랜드별 페이지 (`/brand/[name]`)

### SEO
- [ ] 각 제품 페이지 메타데이터
- [ ] 구조화된 데이터 (JSON-LD)
- [ ] 블로그 섹션 시작 (`/blog`)

---

## 🔄 v0.3 - User Engagement (Week 4-5)
**Goal:** 사용자 참여 유도

### Features
- [ ] 이메일 구독 (Mailchimp/Resend 연동)
- [ ] 제품 비교 기능
- [ ] "My Wishlist" (로컬 스토리지)
- [ ] 소셜 공유 기능 (실제 동작)
- [ ] 피부 타입별 추천

### Analytics
- [ ] 클릭 이벤트 트래킹
- [ ] 스크롤 깊이 측정
- [ ] 인기 제품 히트맵

---

## 🔄 v0.4 - Community (Week 6-8)
**Goal:** 커뮤니티 형성

### Features
- [ ] 사용자 인증 (NextAuth)
- [ ] 제품 리뷰 작성
- [ ] 좋아요 / 저장 (서버 저장)
- [ ] 사용자 프로필
- [ ] "Before & After" 갤러리

### Backend
- [ ] Supabase / PlanetScale DB
- [ ] API Routes 구축

---

## 🔄 v0.5 - Monetization (Week 9-12)
**Goal:** 수익화 시작

### Features
- [ ] 어필리에이트 링크 최적화
- [ ] 스폰서 제품 표시
- [ ] 브랜드 파트너십 페이지
- [ ] 프리미엄 콘텐츠 (Early Access)

### Partnerships
- [ ] Olive Young 어필리에이트
- [ ] Amazon Associates
- [ ] StyleKorean 파트너십

---

## 🎯 v1.0 - Full Platform (Month 4-6)
**Goal:** 완전한 K-Beauty 플랫폼

### Features
- [ ] AI 피부 분석 (사진 업로드)
- [ ] 개인화 추천 알고리즘
- [ ] 실시간 가격 비교
- [ ] 다국어 지원 (EN, JP, CN, ES)
- [ ] 모바일 앱 (React Native)
- [ ] 인플루언서 협업 기능

---

## 🛠 Tech Stack

| Layer | v0.1 | v1.0 |
|-------|------|------|
| Frontend | Next.js 16, Tailwind | + React Native |
| Backend | Static | Supabase + Edge Functions |
| Database | JSON | PostgreSQL |
| Auth | - | NextAuth + OAuth |
| Analytics | GA4 | + Mixpanel |
| Hosting | Vercel | Vercel + CDN |

---

## 📅 Release Schedule

```
Week 1  ████████████████████ v0.1 Launch
Week 2  ████████░░░░░░░░░░░░ v0.2 Development
Week 3  ████████████████████ v0.2 Launch
Week 4  ████████░░░░░░░░░░░░ v0.3 Development
Week 5  ████████████████████ v0.3 Launch
Week 6  ████████░░░░░░░░░░░░ v0.4 Development
Week 8  ████████████████████ v0.4 Launch
Week 12 ████████████████████ v0.5 Launch
Month 6 ████████████████████ v1.0 Launch
```

---

## 🎯 Growth Strategy

### Phase 1: SEO & Content (v0.1-0.2)
- 롱테일 키워드 타겟팅 ("best korean sunscreen 2025")
- 제품별 상세 리뷰 콘텐츠
- Pinterest 최적화 이미지

### Phase 2: Social & Viral (v0.3-0.4)
- TikTok 콘텐츠 제작
- Instagram Reels
- Reddit r/AsianBeauty 커뮤니티

### Phase 3: Partnerships (v0.5+)
- K-Beauty 인플루언서 협업
- 브랜드 공식 파트너십
- 미디어 PR

---

## 📞 Contact
- Product: product@jigeum.today
- Partnership: partner@jigeum.today
