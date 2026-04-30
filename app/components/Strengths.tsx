"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, scrollReveal } from "@/app/lib/motion";

const STRENGTHS = [
  "AI 에이전트 검증 (할루시네이션·deprecated 패턴·운영 위험 감지)",
  "정책 설계 (13년간 길러온 운영 시야)",
  "단위 경제 사고 (흑자/적자 계산 → 정책)",
  "박제 정합성 (코드·정책·문서 100% 일치)",
  "영어 1차 자료 독해 (캐나다 유학 베이스)",
  "여러 트랙 동시 운영 (PM Director 시절 능력)",
];

const LIMITATIONS = [
  "직접 코딩 능력 — AI에게 지시·검증, 화이트보드 알고리즘 면접 불통과",
  "딥 인프라 (AWS, Kubernetes, Redis, SQL) 입문 수준",
  "전산학과 정통 영역 (자료구조·알고리즘·OS 내부) 약함",
  "첫 모바일 앱 — iOS·대규모 트래픽·실시간 통신 경험 없음",
];

const LEARNING = [
  "AI 에이전트와의 더 정교한 협업 패턴 (Multi-agent 등)",
  "App Store 심사 대응 + 1만 명 이상 트래픽 운영",
  "결제·정산 시스템 (한국 PG 연동 보안)",
  "코드 직접 작성 능력 점진적 향상 (메인 무기 X)",
];

const NOT_IDEAL = [
  "화이트보드 알고리즘 위주의 채용 과정이 중심인 환경",
  "신입으로 시니어의 코드 리뷰를 받으며 기초부터 배우는 자리",
];

export default function Strengths() {
  return (
    <section className="py-32 border-t border-divider">
      <div className="container-content">
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted mb-4">
            06 / Honest
          </p>
          <h2 className="heading-display text-[clamp(2.5rem,7vw,5rem)] text-balance">
            강점과 한계
          </h2>
          <p className="body-text text-fg-muted mt-6 max-w-xl text-pretty">
            솔직함이 무기입니다.
            잘하는 것과 못하는 것을 분명히 적어야 맞는 자리에서 일할 수 있습니다.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          <motion.div variants={fadeUp}>
            <p className="font-mono text-xs uppercase tracking-wider text-accent mb-6 pb-3 border-b-2 border-accent">
              잘하는 것
            </p>
            <ul className="space-y-4">
              {STRENGTHS.map((s, i) => (
                <li key={i} className="body-text text-sm md:text-base flex gap-3 text-pretty">
                  <span className="text-accent flex-shrink-0">✓</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="font-mono text-xs uppercase tracking-wider text-fg-muted mb-6 pb-3 border-b-2 border-fg-muted">
              앞으로 보완할 것
            </p>
            <ul className="space-y-4">
              {LIMITATIONS.map((l, i) => (
                <li key={i} className="body-text text-sm md:text-base text-fg-muted flex gap-3 text-pretty">
                  <span className="flex-shrink-0">—</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="font-mono text-xs uppercase tracking-wider mb-6 pb-3 border-b-2 border-fg">
              배우고 싶은 것
            </p>
            <ul className="space-y-4">
              {LEARNING.map((l, i) => (
                <li key={i} className="body-text text-sm md:text-base flex gap-3 text-pretty">
                  <span className="flex-shrink-0">→</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* 어떤 자리 매칭 */}
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-24 pt-16 border-t-2 border-fg"
        >
          <h3 className="heading-display text-3xl md:text-4xl mb-10 text-balance">
            함께하고 싶은 환경
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-divider p-8 hover:border-accent transition-colors">
              <p className="font-mono text-xs uppercase tracking-wider text-accent mb-4">
                ✓ 선호하는 환경
              </p>
              <ul className="space-y-3 body-text text-sm">
                <li className="text-pretty">1인·소규모 팀에서 PM·기획·운영 통합 책임</li>
                <li className="text-pretty">AI 에이전트를 적극 활용하는 스타트업 Tech-PM</li>
                <li className="text-pretty">신규 프로젝트 기획·검증 본업</li>
              </ul>
            </div>

            <div className="border border-divider p-8 opacity-60">
              <p className="font-mono text-xs uppercase tracking-wider text-fg-muted mb-4">
                · 다소 결이 다른 환경
              </p>
              <ul className="space-y-3 body-text text-sm text-fg-muted">
                {NOT_IDEAL.map((item, i) => (
                  <li key={i} className="text-pretty">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
