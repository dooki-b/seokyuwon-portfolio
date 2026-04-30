"use client";

import { motion } from "framer-motion";
import { scrollReveal, staggerContainer, fadeUp } from "@/app/lib/motion";

const MY_ROLES = [
  "기획·정책 설계",
  "검증 기준 정의",
  "결과물 리뷰",
  "정합성 확인",
  "박제 문서 관리",
];

const AI_ROLES = [
  "실제 코드 작성",
  "라이브러리 선택",
  "구현 패턴 적용",
  "1차 검증 (TS 컴파일)",
  "수정 사항 반영",
];

const HALLUCINATION_LAYERS = [
  { layer: "1차", action: 'AI에게 "이 라이브러리·함수 진짜 있어?" 재차 확인' },
  { layer: "2차", action: "본인이 공식 문서 영어 원문 검색해서 대조" },
  { layer: "3차", action: "다른 AI(Claude vs Gemini)에 같은 질문 해서 일관성 확인" },
  { layer: "4차", action: "실제 빌드해서 컴파일 통과 여부 검증" },
];

export default function Approach() {
  return (
    <section id="approach" className="py-32 border-t border-divider bg-fg text-bg">
      <div className="container-content">
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-bg/60 mb-4">
            02 / Approach
          </p>
          <h2 className="heading-display text-[clamp(2.5rem,7vw,5rem)] text-balance">
            AI 협업 방식
          </h2>
          <p className="body-text text-bg/70 mt-6 max-w-2xl">
            가장 자주 받는 질문입니다. 작업 방식을 솔직히 풀어드립니다.
          </p>
        </motion.div>

        {/* 저 vs AI 대비 */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-24"
        >
          <motion.div variants={fadeUp} className="border-l-2 border-accent pl-6">
            <p className="font-mono text-xs uppercase tracking-wider text-accent mb-4">
              저 (서규원)
            </p>
            <ul className="space-y-3 font-display text-2xl md:text-3xl">
              {MY_ROLES.map((role, i) => (
                <li key={i} className="text-bg">
                  {role}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="border-l-2 border-bg/30 pl-6">
            <p className="font-mono text-xs uppercase tracking-wider text-bg/60 mb-4">
              AI 에이전트
            </p>
            <ul className="space-y-3 font-display text-2xl md:text-3xl text-bg/70">
              {AI_ROLES.map((role, i) => (
                <li key={i}>{role}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* 사용 도구 */}
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-24 border-t border-bg/20 pt-12"
        >
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-bg/60 mb-6">
            사용 도구
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-sm">
            {[
              { name: "Claude CLI 에이전트", role: "메인 코딩" },
              { name: "Claude Cowork", role: "정책 설계·문서" },
              { name: "VSCode", role: "IDE" },
              { name: "Git / GitHub", role: "버전 관리" },
            ].map((tool, i) => (
              <div key={i} className="border border-bg/20 p-4">
                <p className="text-bg font-medium">{tool.name}</p>
                <p className="text-bg/60 mt-1">{tool.role}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 할루시네이션 다층 검증 */}
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="border-t border-bg/20 pt-12"
        >
          <h3 className="heading-display text-3xl md:text-4xl mb-3">
            할루시네이션 대응 — 다층 검증
          </h3>
          <p className="body-text text-bg/70 mb-10 max-w-xl text-pretty">
            AI 에이전트는 처음부터 완벽하지 않습니다.
            존재하지 않는 함수를 만들거나, 라이브러리 버전을 잘못 알고 있는 경우가 있습니다.
            이걸 잡는 방법은 <span className="italic">다층 검증</span>입니다.
          </p>

          <div className="space-y-4">
            {HALLUCINATION_LAYERS.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="grid grid-cols-12 items-baseline gap-4 py-4 border-b border-bg/10"
              >
                <div className="col-span-2 md:col-span-1 font-mono text-accent text-lg">
                  {item.layer}
                </div>
                <div className="col-span-10 md:col-span-11 body-text text-bg">
                  {item.action}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="body-text text-bg/70 mt-10 max-w-xl italic text-pretty">
            13년간 게임 패치 노트를 뜯어보던 습관이 그대로 적용됐습니다.
            메타가 바뀔 때 라이엇 공식 발표만 믿지 않고
            여러 출처를 대조하던 그 작업과 같습니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
