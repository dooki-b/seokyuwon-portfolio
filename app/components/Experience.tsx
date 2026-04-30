"use client";

import { motion } from "framer-motion";
import { scrollReveal, staggerContainer, fadeUp } from "@/app/lib/motion";

const MAPPINGS = [
  {
    num: "01",
    title: "메타 분석 = AI 에이전트 검증",
    body: "E스포츠에서 '메타'를 분석하듯, AI 에이전트가 만든 코드를 검증했습니다. 13년간 패치 노트를 뜯어보며 \"이 변경이 무엇을 깨뜨리는가\"를 보던 시선이 그대로 옮겨졌습니다.",
  },
  {
    num: "02",
    title: "PM Director Head Coach 경험",
    body: "Gen.G Global Academy LoL 부서 PM Director Head Coach. 부서 운영 총괄 + 커리큘럼·프로그램 개발 + 학습 설계. 그해 원생 5배 증가, Gold→Challenger 학생 배출. 같은 방식으로 AI 에이전트를 다뤘습니다.",
  },
  {
    num: "03",
    title: "코칭 = AI 결과물 리뷰",
    body: "선수들의 플레이를 보며 피드백하던 시선을 AI가 만든 코드에 돌렸습니다. AI는 \"왜 그렇게 했는지\" 묻기 전까진 수정하지 않습니다. 사람이 매번 의심하고 캐물어야 진짜 견고한 코드가 나옵니다.",
  },
  {
    num: "04",
    title: "이중언어 환경",
    body: "캐나다 밴쿠버 중·고등학교. AI 공식 문서·모델 가이드라인·프롬프트 엔지니어링 사례·Stack Overflow가 거의 모두 영어 1차 자료. 번역을 기다리지 않고 바로 읽을 수 있어 AI 협업 속도가 빨랐습니다.",
  },
];

const CAREER = [
  { period: "2013~2015", role: "리그 오브 레전드 프로게이머 (Najin E-MFire / Team Dark Passage 연습생)" },
  { period: "2015~2017", role: "콩두컴퍼니 — 하스스톤 프로게이머 + SKT T1 LoL Twitch Stream 통역·매니지먼트" },
  { period: "2017~2018", role: "히어로즈 오브 더 스톰 프로게이머 (Team PSR, Team NTL) — 2018 HGC KR Open Division 우승" },
  { period: "2018~2019", role: "왕자영요 프로게이머·해설·코치 (KingZone DragonX, OGN, ESC 729)" },
  { period: "2019~2020", role: "BBQ Olivers, 서라벌게이밍, ESC Shane — LoL 프로팀 코치 (LCK CL 6위)" },
  { period: "2020~2021", role: "Gen.G Global Academy — LoL 부서 PM Director Head Coach (원생 5배 증가)" },
  { period: "2021~2022", role: "Liiv SandBox WildRift 감독 (WCK 4위·5위, WGC 3위)" },
  { period: "2022~2024", role: "은평 메디텍 고교 E스포츠과 교사" },
  { period: "2023~2024", role: "T1 Esports Academy — LoL 프로그램 코치 (PTP·PTE·TBC X T1A 운영)" },
  { period: "2024~2026", role: "호남대학교 E스포츠 학과 LoL 전담 코치" },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 border-t border-divider">
      <div className="container-content">
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted mb-4">
            04 / Experience
          </p>
          <h2 className="heading-display text-[clamp(2.5rem,7vw,5rem)] text-balance">
            E스포츠 13년이
            <br />
            어떻게 도움이 되었나
          </h2>
        </motion.div>

        {/* 4가지 매핑 */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-12 mb-32"
        >
          {MAPPINGS.map((m, i) => (
            <motion.article
              key={i}
              variants={fadeUp}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-8 border-b border-divider"
            >
              <div className="lg:col-span-2">
                <span className="font-display text-6xl lg:text-7xl font-light text-accent">
                  {m.num}
                </span>
              </div>
              <div className="lg:col-span-9">
                <h3 className="heading-display text-2xl md:text-3xl mb-4">{m.title}</h3>
                <p className="body-text text-fg-muted text-pretty max-w-2xl">{m.body}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* 경력 표 */}
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="border-t-2 border-fg pt-12"
        >
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted mb-8">
            전체 경력 — 13년의 흐름
          </h3>
          <div className="space-y-px">
            {CAREER.map((c, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="grid grid-cols-12 gap-4 py-4 border-b border-divider hover:bg-accent-soft/40 transition-colors"
              >
                <div className="col-span-3 md:col-span-2 font-mono text-sm text-accent">
                  {c.period}
                </div>
                <div className="col-span-9 md:col-span-10 body-text text-sm md:text-base">
                  {c.role}
                </div>
              </motion.div>
            ))}
          </div>

          {/* 학력 */}
          <div className="mt-12 pt-12 border-t border-divider">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted mb-6">
              학력
            </h3>
            <div className="space-y-2">
              <p className="body-text text-sm">
                <span className="text-fg-muted">2008~2011 · </span>
                CaribooHill Secondary School, Canada Vancouver
              </p>
              <p className="body-text text-sm">
                <span className="text-fg-muted">2011 · </span>
                Simon Fraser University, Canada (서류 통과 후 한국 귀국)
              </p>
            </div>
            <p className="font-mono text-xs text-fg-muted mt-6 uppercase tracking-wider">
              Languages: 한국어 (모국어) · 영어 (이중언어 환경)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
