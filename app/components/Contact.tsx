"use client";

import { motion } from "framer-motion";
import { scrollReveal, fadeUp } from "@/app/lib/motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 border-t border-divider">
      <div className="container-content">
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          <div className="lg:col-span-12">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted mb-4">
              07 / Contact
            </p>
            <h2 className="heading-display text-[clamp(2.5rem,7vw,5.5rem)] text-balance leading-[1]">
              함께 이야기 나눠보고 싶다면<br />
              <a
                href="mailto:koreanfu@gmail.com"
                className="text-accent hover:underline underline-offset-8 decoration-2"
              >
                메일 한 통 부탁드립니다.
              </a>
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-1 mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 font-mono text-sm">
            <div>
              <p className="text-xs uppercase tracking-wider text-fg-muted mb-2">Email · Primary</p>
              <a href="mailto:koreanfu@gmail.com" className="accent-link">
                koreanfu@gmail.com →
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-fg-muted mb-2">Phone · Business</p>
              <a href="tel:+821048519146" className="text-fg hover:text-accent transition-colors">
                +82 10-4851-9146
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-fg-muted mb-2">GitHub</p>
              <a
                href="https://github.com/dooki-b/Cook-Dex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg-muted hover:text-fg transition-colors"
              >
                메인 코드 비공개. 문의 시 별도 안내.
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-fg-muted mb-2">Location</p>
              <span className="text-fg-muted">서울 광진구</span>
            </div>
          </div>

          <motion.div
            variants={fadeUp}
            className="lg:col-span-12 mt-16 pt-12 border-t border-divider"
          >
            <p className="body-text text-fg-muted text-sm md:text-base max-w-xl text-pretty">
              포트폴리오의 어떤 부분이라도
              구체적인 작업 내역·정책 결정·트레이드오프를 보고 싶으시다면
              이메일로 요청해 주세요.
              1~2일 내에 회신드리겠습니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
