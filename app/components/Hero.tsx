"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, clipReveal } from "@/app/lib/motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-16">
      <div className="container-content">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* 메타 라벨 */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-12 mb-8"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
              Portfolio · 2026 · Seoul, Korea
            </p>
          </motion.div>

          {/* 메인 헤드라인 */}
          <motion.div
            variants={clipReveal}
            className="lg:col-span-10"
          >
            <h1 className="heading-display text-balance">
              <span className="block text-[clamp(2.5rem,8vw,5.5rem)]">
                좋은 코드보다,
              </span>
              <span className="block text-[clamp(2.5rem,8vw,5.5rem)]">
                좋은 <span className="text-accent">판단</span>을 만드는 일.
              </span>
            </h1>
          </motion.div>

          {/* 서브 카피 */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-6 lg:col-start-1 mt-12"
          >
            <p className="body-text text-pretty text-fg-muted">
              13년 코칭에서 길러온 분석·정책 설계 시야로,
              AI 에이전트가 만드는 결과물을 검증하고 정책으로 박습니다.
              첫 프로젝트 <span className="font-mono">CookDex</span>가 출시 직전에 있습니다.
            </p>
          </motion.div>

          {/* 메타 정보 + CTA */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-12 mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 font-mono text-sm"
          >
            <a
              href="mailto:koreanfu@gmail.com"
              className="accent-link uppercase tracking-wider"
            >
              koreanfu@gmail.com →
            </a>
            <span className="text-fg-muted">+82 10-4851-9146</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
