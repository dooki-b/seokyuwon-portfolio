"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, scrollReveal } from "@/app/lib/motion";

const STATS = [
  { value: "4", unit: "months", label: "개발 기간 (학습 시작 ~ 출시 직전)" },
  { value: "0", unit: "건", label: "TypeScript 컴파일 에러" },
  { value: "10", unit: "건", label: "P0+P1 검증 시나리오 통과" },
  { value: "5", unit: "건", label: "출시 직전 발견·해결" },
  { value: "5,850", unit: "줄", label: "박제 문서 합계" },
  { value: "+732", unit: "줄", label: "마지막 정합성 작업 추가" },
  { value: "-253", unit: "줄", label: "마지막 정합성 작업 삭제" },
  { value: "9", unit: "개", label: "변경된 파일 수" },
  { value: "5", unit: "조항", label: "약관 면책 분산 배치" },
  { value: "6", unit: "months", label: "AI 입출력 로그 자동 보존" },
  { value: "$0.30", unit: "/1M", label: "Gemini 2.5 Flash 입력 토큰" },
  { value: "$2.50", unit: "/1M", label: "Gemini 2.5 Flash 출력 토큰" },
  { value: "14~15", unit: "원", label: "1회 차감 풀 사이클 비용" },
  { value: "15~25", unit: "원", label: "한국 보상형 광고 1회 수익" },
  { value: "0~+27", unit: "원", label: "광고 마진 (시나리오별)" },
];

export default function Numbers() {
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
            05 / Numbers
          </p>
          <h2 className="heading-display text-[clamp(2.5rem,7vw,5rem)] text-balance">
            숫자로 보는 산출물
          </h2>
          <p className="body-text text-fg-muted mt-6 max-w-xl text-pretty">
            출시 전 시점 기준. 토큰 사용량은 추정치이며,
            실제 평균은 <code className="font-mono bg-accent-soft px-1.5 py-0.5 text-sm">ai_logs</code>로
            출시 후 측정·정밀화합니다.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-divider"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-bg p-6 md:p-8 hover:bg-accent-soft/50 transition-colors"
            >
              <div className="font-display text-3xl md:text-4xl lg:text-5xl font-medium leading-none">
                {stat.value}
                {stat.unit && (
                  <span className="font-mono text-xs md:text-sm text-fg-muted ml-1 align-baseline">
                    {stat.unit}
                  </span>
                )}
              </div>
              <p className="font-mono text-[0.7rem] md:text-xs uppercase tracking-wider text-fg-muted mt-3 leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
