"use client";

import { motion } from "framer-motion";
import { scrollReveal } from "@/app/lib/motion";

export default function About() {
  return (
    <section id="about" className="py-32 border-t border-divider">
      <div className="container-content">
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16"
        >
          {/* 좌측 섹션 라벨 + 큰 숫자 */}
          <div className="lg:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted mb-6">
              01 / About
            </p>
            <h2 className="heading-display text-[clamp(2rem,4vw,3rem)] mb-8 text-balance">
              왜 이 길을<br />택했나
            </h2>
            <div className="font-mono text-sm space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-7xl font-display font-light text-accent leading-none">
                  13
                </span>
                <span className="text-fg-muted">years in esports</span>
              </div>
              <div className="flex items-baseline gap-3 mt-4">
                <span className="text-7xl font-display font-light leading-none">
                  4
                </span>
                <span className="text-fg-muted">months to first app</span>
              </div>
            </div>
          </div>

          {/* 우측 본문 */}
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 max-w-xl">
            <p className="body-text text-pretty">
              E스포츠 업계에 13년 있었습니다.
              프로게이머로 시작해 코치, 감독, 교수까지 한 분야에 오래 머물렀습니다.
              매일 게임 메타를 뜯어보고 다음 시즌의 흐름을 예측하는 게 제 일이었습니다.
            </p>
            <p className="body-text text-pretty">
              2026년 1월 호남대 교수 임기가 끝나면서 다음 행보를 고민했습니다.
              한 분야에 오래 있다 보면 같은 분석 작업을 다른 도구로 해보고 싶다는 생각이 듭니다.
              그때 마침 AI 에이전트(Claude CLI 에이전트, Claude Cowork)가
              코드를 쓸 수 있다는 사실을 알게 됐습니다.
            </p>
            <p className="body-text text-pretty">
              처음에는 직접 코딩을 배우려고 했습니다.
              그런데 며칠 시도해보니{" "}
              <span className="text-accent font-medium">저의 강점은 코드를 직접 쓰는 데 있지 않다</span>는
              게 분명해졌습니다.
              13년간 길러진 건 &ldquo;어떤 시스템이 어떻게 작동하고 어디서 무너지는가&rdquo;를
              보는 시선이지, 문법이나 라이브러리 사용법이 아니었습니다.
            </p>
            <p className="body-text text-pretty">
              그래서 결정했습니다. 코드는 AI에게 맡기고, 저는{" "}
              <em className="font-display italic font-medium">
                무엇을 어떻게 만들지 정의하고, 결과물을 검증하고, 정책으로 박는 일
              </em>
              에 집중하기로. 이게 차세대 1인 사업가의 모습이라고 믿습니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
