# 서규원 포트폴리오 사이트 설계서 v1

> **대상**: Vercel 배포용 개인 포트폴리오 사이트  
> **베이스 콘텐츠**: SEO_KYUWON_PORTFOLIO_v6.md (493줄)  
> **목표 URL**: seokyuwon.vercel.app (또는 커스텀 도메인)  
> **작성일**: 2026-04-30

---

## 1. 디자인 철학 — Editorial × Refined Motion

### 1.1 왜 이 방향인가

규원님 v6의 정체성:
- **"13년 분석가"** → 진지함·전문성·분석적
- **"AI 협업 PM"** → 시대 트렌드·신생 카테고리 선구자
- **"솔직함을 무기로"** → 진실성·개방적·꾸밈없음

이 세 축이 만나는 미학 = **Editorial(신문·잡지) + Refined Motion(개발자다운 세련)**

### 1.2 회피하는 흔한 개발자 포트폴리오 클리셰

❌ 다크 모드 + Inter 폰트 + 보라/파랑 그라디언트  
❌ 카드 위주 그리드 + 부드러운 그림자  
❌ "Hi, I'm [Name]" 풍선껌 헤더  
❌ 코드 스니펫 자동 슬라이드  
❌ 의미 없는 입자(particles) 백그라운드

### 1.3 지향하는 미학

✅ **편집디자인 톤** — 신문·잡지처럼 큰 헤드라인 + 본문 단락  
✅ **비대칭 레이아웃** — 그리드를 기준으로 깨는 컴포지션  
✅ **개성 있는 타이포** — Fraunces (개성 세리프) + Geist (개발자 친화)  
✅ **세련된 모션** — 페이지 로드 시 한 번의 스태거드 리빌, 스크롤 트리거 디테일  
✅ **고대비 모노크롬 + 1색 액센트** — 차콜 + 아이보리 + 코랄

---

## 2. 디자인 시스템

### 2.1 컬러 토큰

```css
/* Tailwind config + CSS Variables */
--color-bg: #FAF7F2;        /* 아이보리 배경 (저자극) */
--color-fg: #1A1A1A;        /* 차콜 글자 (강한 대비) */
--color-fg-muted: #6B6B6B;  /* 회색 (보조 텍스트) */
--color-accent: #C2410C;    /* 코랄 (에너지·CTA) */
--color-accent-soft: #FCE5DC; /* 코랄 약화 (배경 액센트) */
--color-divider: #E5DCC9;   /* 디바이더 (베이지 톤) */
```

**적용 규칙**:
- 배경 = `#FAF7F2` (다크 모드 X — 편집 톤은 라이트가 정석)
- 모든 본문 = `#1A1A1A` (가독성 최우선)
- 액센트 = `#C2410C` 한 가지 색만 (CTA 버튼·강조 단어·구분선)

### 2.2 타이포그래피

```css
/* 디스플레이 (헤드라인) */
font-family: 'Fraunces', serif;
font-weight: 400, 600, 800;
font-feature-settings: "ss01", "ss02"; /* Fraunces 특수 글리프 */

/* 본문 */
font-family: 'Geist Sans', sans-serif;
font-weight: 300, 400, 500, 700;

/* 코드/숫자 */
font-family: 'JetBrains Mono', monospace;
font-weight: 400, 500, 700;
```

**스케일** (모바일 ↔ 데스크톱):
- Display 1: `clamp(3rem, 10vw, 7rem)` — Hero 헤드라인
- Display 2: `clamp(2rem, 5vw, 4rem)` — 섹션 헤드라인
- Heading 1: `clamp(1.5rem, 3vw, 2.25rem)` — 서브 헤드라인
- Heading 2: `1.5rem` — 카드 헤드라인
- Body Large: `1.125rem`, line-height 1.6
- Body: `1rem`, line-height 1.65
- Caption: `0.875rem`, letter-spacing 0.02em

### 2.3 그리드 시스템

12 컬럼 그리드 + 큰 거터(gap)

```
모바일 (≤ 768px):   1 컬럼, padding 24px
태블릿 (≤ 1024px):  6 컬럼, gap 24px, padding 48px
데스크톱 (≥ 1024px): 12 컬럼, gap 32px, max-width 1400px
```

**비대칭 활용**:
- Hero: 12 컬럼 중 8 컬럼만 사용 (좌측 정렬, 우측 4 컬럼 비움)
- Section 헤드라인: 4 컬럼만 사용 (오버사이즈)
- 본문 단락: 7 컬럼 (45~70자 가독성 황금비)

### 2.4 모션 원칙

**페이지 로드 (한 번만, 강력하게)**:
```
1. Background fade-in (0.3s)
2. Hero 헤드라인 스태거드 리빌 (0.5s, delay 0.1s)
3. Hero 서브텍스트 페이드 업 (0.4s, delay 0.6s)
4. CTA 버튼 페이드 인 (0.3s, delay 1.0s)
5. 헤더 슬라이드 다운 (0.4s, delay 0.2s)
```

**스크롤 트리거 (각 섹션 진입 시)**:
- 섹션 헤드라인: `clip-path` 리빌 (0.6s)
- 본문 단락: 페이드 업 (0.5s)
- 표·카드: 스태거드 페이드 인 (0.4s, stagger 0.08s)

**호버 인터랙션**:
- CTA 버튼: 미세한 scale + accent 컬러 펄스
- 링크: underline 좌→우 그리기 (0.3s)
- 표 행: 배경 색 페이드 (0.2s)

⚠️ **모션 절제**: 무한 회전 애니메이션, 입자 효과, 마우스 트레일 등 **장식적 모션 금지**. 모든 모션은 **콘텐츠 가독성을 돕는 방향**만.

---

## 3. 페이지 구조 — 단일 페이지 (One-Pager)

### 3.1 섹션 흐름 (스크롤 순서)

```
[Header / Sticky Nav]
   ↓
[Hero — 정체성 한 줄]
   ↓
[About — 왜 이 길을 택했나]
   ↓
[Project — CookDex 도전 1+2]
   ↓
[Approach — AI 협업 방식 (저 vs AI 역할)]
   ↓
[Experience — E스포츠 13년 매핑]
   ↓
[Numbers — 수치 자료 19개]
   ↓
[Operations — 출시 후 운영 워크플로우]
   ↓
[Strengths — 강점·한계 솔직]
   ↓
[Contact — 연락처]
   ↓
[Footer — AI 협업 명시 + 깃허브]
```

### 3.2 각 섹션 디자인 컨셉

#### Hero
- 100vh, 좌측 정렬
- Display 1 헤드라인: "코드는 AI가 쓰고, 저는 검증합니다."
- 또는 "13년 분석가, AI 협업 PM"
- 하단에 작은 메타 정보 (이메일·GitHub·거주지)

#### About — 왜 이 길을 택했나
- 큰 인용부호 + 본문 3단락
- 우측에 "13년" 큰 숫자 시각 표현

#### Project — CookDex
- 제목: "CookDex (뚝딱레시피)"
- 도전 1·2를 좌우 2 컬럼으로 분할 (큰 화면)
- 각 도전마다 Challenge → Decision → Outcome 흐름
- 표 (시나리오·마진) 강조

#### Approach — AI 협업 방식
- 가장 시그니처 섹션 (v6의 핵심)
- 좌: 저(서규원) 역할 / 우: AI 에이전트 역할 (대비)
- 협업 흐름 6단계 다이어그램 (CSS만으로)
- 할루시네이션 대응 4단계

#### Experience — E스포츠 13년
- 4가지 매핑 (메타 분석·PM Director·코칭·이중언어)
- 각 매핑마다 좌측에 큰 숫자(1·2·3·4) 우측에 본문
- 부록 경력 표 (10행 시기·활동)

#### Numbers — 수치 자료
- 그리드 4×5 = 19개 카드
- 각 카드는 큰 숫자 + 캡션
- JetBrains Mono로 숫자 강조

#### Operations — 운영 워크플로우
- 7개 서브섹션을 어코디언으로 (모바일 친화)
- 또는 7개 카드 그리드

#### Strengths — 강점·한계
- 3 컬럼: 잘하는 것 / 부족한 것 / 배우고 싶은 것
- 각 컬럼마다 색조 다름 (강점=차콜, 부족=회색, 배움=코랄)

#### Contact
- 큰 헤드라인 + 이메일 강조
- 보조 정보 (전화·GitHub·거주지)

#### Footer
- ⭐ "이 사이트는 Claude AI가 작성하고 서규원이 검증·배포했습니다."
- 정합성 회복 핵심 문구
- 카피라이트 + 마지막 갱신일

### 3.3 모바일 대응

- 모든 섹션 1 컬럼으로 자동 변환
- 헤더는 햄버거 메뉴로
- 폰트 크기 자동 축소 (clamp 사용)
- 모션은 데스크톱과 동일하지만 강도 ↓

---

## 4. 기술 스택

### 4.1 프레임워크

```
Next.js 14 (App Router)
├── React 18 (Server Components 기본)
├── TypeScript (필수)
├── Tailwind CSS (스타일)
├── Framer Motion (모션)
└── Vercel 배포 (자동)
```

**왜 Next.js 14인가**:
- ✅ Vercel 1-click 배포
- ✅ 이미지 자동 최적화 (`next/image`)
- ✅ SEO 메타태그 (`metadata` API)
- ✅ 폰트 자동 최적화 (`next/font`)
- ✅ App Router = 최신 표준
- ✅ TypeScript 기본 지원

### 4.2 의존성

```json
{
  "dependencies": {
    "next": "14.2.x",
    "react": "18.3.x",
    "react-dom": "18.3.x",
    "framer-motion": "11.x",
    "@vercel/analytics": "1.x"  // 무료 분석
  },
  "devDependencies": {
    "typescript": "5.x",
    "@types/react": "18.x",
    "@types/node": "20.x",
    "tailwindcss": "3.4.x",
    "postcss": "8.x",
    "autoprefixer": "10.x"
  }
}
```

### 4.3 폰트 로딩

`next/font/google`로 자동 최적화:
- Fraunces (디스플레이)
- Geist Sans (본문)
- JetBrains Mono (코드/숫자)

→ 빌드 시 자동 self-hosting + Variable font 활용

---

## 5. 파일 구조

```
seokyuwon-portfolio/
├── app/
│   ├── layout.tsx                # 루트 레이아웃 (폰트, 메타데이터)
│   ├── page.tsx                  # 메인 페이지 (모든 섹션 통합)
│   ├── globals.css               # 글로벌 스타일 + Tailwind
│   ├── components/
│   │   ├── Header.tsx            # 스티키 네비
│   │   ├── Hero.tsx              # 풀스크린 히어로
│   │   ├── About.tsx             # "왜 이 길을 택했나"
│   │   ├── Project.tsx           # CookDex 도전 1+2
│   │   ├── Approach.tsx          # AI 협업 방식 (시그니처)
│   │   ├── Experience.tsx        # E스포츠 13년
│   │   ├── Numbers.tsx           # 수치 19개
│   │   ├── Operations.tsx        # 운영 워크플로우 7개
│   │   ├── Strengths.tsx         # 강점·한계
│   │   ├── Contact.tsx           # 연락처
│   │   └── Footer.tsx            # AI 협업 명시
│   └── lib/
│       └── motion.ts             # Framer Motion variants 모음
├── public/
│   ├── og-image.png             # OG 이미지 (1200×630, 추후 추가)
│   └── favicon.ico              # 파비콘 (추후 추가)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
├── README.md                     # 배포 가이드
└── .gitignore
```

---

## 6. SEO 최적화

### 6.1 메타데이터 (layout.tsx)

```ts
export const metadata = {
  title: "서규원 — AI 협업 PM | 13년 E스포츠 베테랑의 새 길",
  description: "코드는 AI가 쓰고, 저는 검증합니다. E스포츠 13년 경력에서 AI 협업 PM으로 전향한 서규원의 포트폴리오. 첫 프로젝트 CookDex 출시 직전.",
  keywords: ["AI 협업 PM", "서규원", "CookDex", "뚝딱레시피", "1인 개발자", "E스포츠"],
  openGraph: {
    title: "서규원 — AI 협업 PM",
    description: "13년 분석가, AI 협업 PM",
    url: "https://seokyuwon.vercel.app",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "서규원 — AI 협업 PM",
    description: "13년 분석가, AI 협업 PM",
  },
};
```

### 6.2 시맨틱 HTML

- `<header>`, `<main>`, `<section>`, `<article>`, `<footer>` 정확히 사용
- `<h1>` 1개만 (Hero)
- `<h2>`는 각 섹션마다 1개
- 표는 `<table>` + `<th>` + `<caption>`
- 이미지는 `<img alt="...">` 또는 `<Image alt="...">`

### 6.3 성능 최적화

- 폰트 = `next/font` 자동 최적화
- 이미지 = `next/image` 자동 lazy loading + WebP
- 분석 = `@vercel/analytics` (무료, 가벼움)
- Lighthouse 목표: Performance 95+, SEO 100, Accessibility 95+

---

## 7. 추후 확장 (출시 후 추가)

```
[V2 예정 콘텐츠]
- CookDex 스크린샷 갤러리 (5~8장)
- CookDex 아이콘 다운로드
- 출시 후 첫 사용자 반응 (다운로드·평점)
- 블로그 섹션 (에세이 게재)
- 다크 모드 토글 (선택)
- 한·영 다국어 (선택)
```

---

## 8. 배포 워크플로우

```
[로컬 개발]
   ↓
1. npm install
2. npm run dev → localhost:3000 확인
   ↓
[Git 커밋]
3. git init
4. git remote add origin (새 저장소 URL)
5. git push
   ↓
[Vercel 연동]
6. vercel.com 가입 (GitHub 로그인)
7. "Import Project" → 저장소 선택
8. 자동 배포 (1~2분)
   ↓
[도메인 연결 (선택)]
9. Vercel 대시보드 → Domains
10. 무료 = seokyuwon.vercel.app
    유료 = 본인 도메인 연결 (연 1~2만원)
```

---

## 9. AI 에이전트 확장 가이드

이 사이트는 **AI 에이전트(Cursor·Cline·Claude Code)에게 위임 가능한 구조**로 설계됩니다. 추후 디자인 변경·기능 추가 시 별도 프롬프트(`AI_AGENT_EXTENSION_PROMPT.md`)를 활용해 본인이 직접 코딩 안 하고도 확장 가능합니다.

---

**다음 단계**: 핵심 컴포넌트 코드 작성 (Hero / About / Project / Approach / Numbers / Footer)
