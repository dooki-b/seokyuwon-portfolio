# 서규원 포트폴리오 사이트

> v6 마스터 마크다운(`SEO_KYUWON_PORTFOLIO_v6.md`) 기반의 Vercel 배포용 Next.js 포트폴리오.

---

## 🎨 디자인 컨셉

- **미학**: Editorial × Refined Motion (편집 디자인 + 세련된 모션)
- **타이포**: Fraunces (디스플레이) + Geist Sans (본문) + JetBrains Mono (코드/숫자)
- **컬러**: 아이보리 `#FAF7F2` + 차콜 `#1A1A1A` + 코랄 `#C2410C`
- **레이아웃**: 12컬럼 그리드 + 비대칭 컴포지션
- **모션**: Framer Motion 스크롤 트리거 + 스태거드 리빌

---

## 🛠️ 기술 스택

```
Next.js 14 (App Router) + React 18 + TypeScript
Tailwind CSS (스타일)
Framer Motion (모션)
@vercel/analytics (무료 분석)
```

---

## 📁 파일 구조

```
seokyuwon-portfolio/
├── app/
│   ├── layout.tsx          ← 루트 레이아웃 + 폰트 + 메타데이터
│   ├── page.tsx            ← 메인 페이지 (모든 섹션 통합)
│   ├── globals.css         ← 글로벌 스타일
│   ├── components/
│   │   ├── Header.tsx      ← 스티키 네비
│   │   ├── Hero.tsx        ← 히어로 (정체성 한 줄)
│   │   ├── About.tsx       ← 왜 이 길을 택했나
│   │   ├── Approach.tsx    ← AI 협업 방식 (시그니처)
│   │   ├── Project.tsx     ← CookDex 도전 1+2
│   │   ├── Experience.tsx  ← E스포츠 13년 + 경력 표
│   │   ├── Numbers.tsx     ← 수치 자료 15개
│   │   ├── Strengths.tsx   ← 강점·한계 솔직
│   │   ├── Contact.tsx     ← 연락처 CTA
│   │   └── Footer.tsx      ← AI 협업 명시
│   └── lib/
│       └── motion.ts       ← Framer Motion variants
├── public/                  ← 정적 자료 (이미지·아이콘 추후 추가)
├── docs/
│   └── SITE_DESIGN_SPEC.md ← 사이트 설계서
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

---

## 🚀 로컬 실행 (A to Z)

### 1단계: 사전 준비

```bash
# Node.js 설치 확인 (v18 이상)
node --version

# Node.js 없으면 https://nodejs.org 에서 LTS 버전 설치
```

### 2단계: 프로젝트 다운로드 + 의존성 설치

```bash
# 프로젝트 폴더로 이동
cd seokyuwon-portfolio

# 의존성 설치 (1~2분 소요)
npm install

# Geist 폰트 추가 (Next.js 자동 포함 안 될 수 있음)
npm install geist
```

### 3단계: 개발 서버 실행

```bash
npm run dev
```

→ 브라우저에서 `http://localhost:3000` 접속하여 확인

### 4단계: 빌드 검증

```bash
npm run build
npm run start
```

→ 프로덕션 빌드 확인 (TypeScript 에러 0건이어야 함)

---

## ☁️ Vercel 배포 (A to Z)

### 1단계: GitHub 저장소 생성

1. https://github.com 접속 → 로그인
2. 우측 상단 `+` → `New repository`
3. Repository name: `seokyuwon-portfolio` (또는 본인이 원하는 이름)
4. **Public** 선택 (Vercel 무료 플랜 호환)
5. `Create repository` 클릭

### 2단계: 로컬 Git 초기화 + 푸시

```bash
# 프로젝트 폴더에서 실행
git init
git add .
git commit -m "Initial commit: portfolio v1"

# GitHub 저장소 연결 (URL은 1단계에서 생성한 거)
git remote add origin https://github.com/[YOUR_USERNAME]/seokyuwon-portfolio.git
git branch -M main
git push -u origin main
```

### 3단계: Vercel 가입 + 연동

1. https://vercel.com 접속
2. `Sign Up` → **GitHub로 가입** (계정 연동 자동)
3. 가입 후 대시보드 → `Add New...` → `Project`
4. `Import Git Repository` → 방금 만든 `seokyuwon-portfolio` 선택
5. `Import` 클릭

### 4단계: 배포 설정

Vercel이 자동으로 감지:
- Framework Preset: **Next.js** (자동)
- Build Command: `next build` (자동)
- Output Directory: `.next` (자동)
- Install Command: `npm install` (자동)

→ 그대로 `Deploy` 버튼 클릭

### 5단계: 배포 완료 확인

- 1~2분 후 빌드 완료
- 자동 URL 발급: `https://seokyuwon-portfolio.vercel.app` (또는 비슷한 형태)
- 우측 상단 `Visit` 클릭하여 사이트 확인

### 6단계: 커스텀 도메인 연결 (선택)

원하는 도메인이 있으면:

1. Vercel 대시보드 → 프로젝트 선택 → `Settings` → `Domains`
2. 본인 도메인 입력 (예: `seokyuwon.com`)
3. Vercel이 안내하는 DNS 레코드를 도메인 등록 사이트(가비아·후이즈 등)에 추가
4. 1~24시간 내 자동 연결

⚠️ **참고**: 도메인 구매는 별도 비용 (연 1~3만원). 일단 무료 `.vercel.app` 도메인으로 시작 가능.

### 7단계: 자동 재배포

이후 GitHub에 코드 푸시할 때마다 Vercel이 **자동으로 재배포**합니다.

```bash
# 코드 수정 후
git add .
git commit -m "Update: 변경 사항 설명"
git push

# → Vercel이 자동으로 1~2분 내 재배포
```

---

## ✍️ 콘텐츠 수정 가이드

### 텍스트 수정

각 컴포넌트 파일에서 직접 수정:
- `Hero.tsx` — 메인 헤드라인·서브 카피
- `About.tsx` — 전향 동기 본문
- `Project.tsx` — CookDex 도전 1·2 내용
- `Approach.tsx` — AI 협업 방식
- 기타 동일

### 새 섹션 추가

1. `app/components/` 폴더에 새 컴포넌트 파일 생성 (예: `Essay.tsx`)
2. 기존 컴포넌트 파일 참조해서 같은 구조로 작성
3. `app/page.tsx`에 import + 적절한 위치에 삽입

### 디자인 변경

- 색상 변경: `tailwind.config.ts`의 `colors` 섹션
- 폰트 변경: `app/layout.tsx`의 `next/font` 설정
- 모션 변경: `app/lib/motion.ts`의 variants

---

## 🔍 SEO 최적화 체크리스트

- [x] 메타데이터 (`app/layout.tsx`)
- [x] OpenGraph 태그
- [x] Twitter Card
- [x] 시맨틱 HTML (`<header>`, `<main>`, `<section>`, `<footer>`)
- [x] 한국어 lang="ko"
- [ ] OG 이미지 추가 (`public/og-image.png`, 1200×630)
- [ ] 파비콘 추가 (`public/favicon.ico`)
- [ ] sitemap.xml (자동 생성 권장)
- [ ] robots.txt

추후 추가 권장.

---

## 📊 분석 (Vercel Analytics)

- `@vercel/analytics` 자동 통합됨 (코드에 포함)
- Vercel 대시보드 → 프로젝트 → `Analytics` 탭에서 확인
- 무료 플랜: 월 2,500 페이지뷰까지

---

## 🤖 AI 에이전트 확장

이 프로젝트는 AI 에이전트(Cursor·Cline·Claude Code)에게 위임 가능한 구조로 설계됐습니다.
추후 디자인·기능 확장 시 `docs/AI_AGENT_EXTENSION_PROMPT.md`를 활용하세요.

---

## ⚠️ 솔직 안내

이 사이트는 **Claude AI가 작성하고 서규원이 검증·배포**했습니다.
이 명시는 v6 정체성("AI 협업 PM")과의 정합성을 위해 푸터에도 박혀 있습니다.

---

## 📞 문의

- 📧 koreanfu@gmail.com
- 📞 +82 10-4851-9146

---

**최종 갱신**: 2026-04-30  
**다음 갱신 예정**: 출시 후 (CookDex 스크린샷 + 첫 사용자 데이터 추가)
