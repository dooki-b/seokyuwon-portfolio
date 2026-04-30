"use client";

import { motion } from "framer-motion";
import { scrollReveal, staggerContainer, fadeUp } from "@/app/lib/motion";

const SCENARIOS = [
  { name: "안전 추정 (eCPM $10~15)", revenue: "15~21원", cost: "약 15원", margin: "0~+6원" },
  { name: "잘 운영 시 (eCPM $20~30)", revenue: "28~42원", cost: "약 15원", margin: "+13~27원" },
];

export default function Project() {
  return (
    <section id="project" className="py-32 border-t border-divider">
      <div className="container-content">
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted mb-4">
            03 / Project
          </p>
          <h2 className="heading-display text-[clamp(2.5rem,7vw,5rem)]">
            뚝딱레시피
            <span className="text-fg-muted font-light"> (CookDex)</span>
          </h2>
          <p className="body-text text-fg-muted mt-6 max-w-xl text-pretty">
            냉장고 속 재료를 찍으면 AI가 레시피를 뚝딱 내놓는 모바일 앱.
            기획·약관·수익 모델·운영 정책 설계까지 1인이 책임졌습니다.
          </p>
        </motion.div>

        {/* 도전 1 */}
        <motion.article
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-24 pt-16 border-t border-divider"
        >
          <div className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">
              Challenge 01
            </p>
            <h3 className="font-display text-3xl mt-2">AI 안전성 책임</h3>
          </div>
          <div className="lg:col-span-9 space-y-6">
            <blockquote className="font-display italic text-2xl md:text-3xl text-balance border-l-2 border-accent pl-6">
              &ldquo;AI가 추천한 레시피대로 먹고 알레르기 사고가 터지면 누가 책임지지?&rdquo;
            </blockquote>
            <p className="body-text text-pretty max-w-xl">
              개발 중반쯤 마주한, 저에게 가장 무거운 질문이자 숙제였습니다.
              한국 법에는 아직 AI 콘텐츠에 대한 명확한 책임 소재가 없었습니다.
              AI 에이전트는 코드를 써줄 수 있지만,{" "}
              <span className="font-medium">법적 위험을 어떻게 방어할 것인가는 본인이 결정해야</span>{" "}
              합니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-divider">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-fg-muted mb-2">Decision</p>
                <p className="body-text text-sm text-pretty">
                  AllergyChecker 모듈 +<br />
                  약관 5조항 분산 +<br />
                  AI 로그 6개월 TTL
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-fg-muted mb-2">Outcome</p>
                <p className="body-text text-sm text-pretty">
                  알레르기 사전 검사 시스템<br />
                  전 화면 작동 +<br />
                  분쟁 대비 로그 자동 보존
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-fg-muted mb-2">My Role</p>
                <p className="body-text text-sm text-pretty">
                  13년 운영 경험에서<br />
                  나온 정책 설계 —<br />
                  AI는 알아서 못 만듦
                </p>
              </div>
            </div>
          </div>
        </motion.article>

        {/* 도전 2 */}
        <motion.article
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-16 border-t border-divider"
        >
          <div className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">
              Challenge 02
            </p>
            <h3 className="font-display text-3xl mt-2">단위 경제 계산</h3>
          </div>
          <div className="lg:col-span-9 space-y-6">
            <blockquote className="font-display italic text-2xl md:text-3xl text-balance border-l-2 border-accent pl-6">
              &ldquo;광고 수익이 AI API 비용을 덮을 수 있을까?&rdquo;
            </blockquote>
            <p className="body-text text-pretty max-w-2xl">
              이 계산이 어긋나면 앱이 굴러갈수록 적자만 쌓입니다.
              AI에게 물으면 그럴듯한 답은 줍니다. 하지만{" "}
              <span className="font-medium">한국 시장과 우리 사용자 패턴에 맞는지는 사람이 직접 검증</span>해야 합니다.
              Claude Cowork와 협업해 약 2주 동안 손익을 따져봤습니다.
            </p>

            {/* 시나리오 표 */}
            <div className="mt-8 pt-8 border-t border-divider">
              <p className="font-mono text-xs uppercase tracking-wider text-fg-muted mb-4">
                결과 — 마진 시나리오
              </p>
              <div className="overflow-x-auto">
                <table className="w-full font-mono text-sm">
                  <thead>
                    <tr className="border-b-2 border-fg">
                      <th className="text-left py-3 pr-4 font-medium">시나리오</th>
                      <th className="text-right py-3 px-4 font-medium">광고 1회 수익</th>
                      <th className="text-right py-3 px-4 font-medium">AI 1회 비용</th>
                      <th className="text-right py-3 pl-4 font-medium">마진</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SCENARIOS.map((s, i) => (
                      <tr key={i} className="border-b border-divider hover:bg-accent-soft transition-colors">
                        <td className="py-4 pr-4">{s.name}</td>
                        <td className="text-right py-4 px-4">{s.revenue}</td>
                        <td className="text-right py-4 px-4">{s.cost}</td>
                        <td className="text-right py-4 pl-4 text-accent font-medium">{s.margin}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="body-text text-sm text-fg-muted mt-4 italic">
                토큰 사용량은 추정치. 실제 평균은{" "}
                <code className="font-mono text-xs bg-accent-soft px-1.5 py-0.5">ai_logs</code>로 출시 후 측정하여 정밀화 예정.
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
