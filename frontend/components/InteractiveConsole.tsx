"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  PlayIcon,
  CheckCircleIcon,
  ArrowPathIcon,
  CpuChipIcon,
  SignalIcon,
} from "@heroicons/react/24/outline";

interface TabData {
  id: "coderag" | "grabpic" | "eleveon";
  name: string;
  badge: string;
  runtime: string;
  p95: string;
  steps: {
    stage: string;
    detail: string;
    latency: string;
    status: "ok" | "pending" | "processing";
  }[];
  rawPayload: string;
}

const consoleData: Record<string, TabData> = {
  coderag: {
    id: "coderag",
    name: "CodeRAG MCP Agent",
    badge: "AST + Qdrant RAG",
    runtime: "Java 21 · Spring Boot · Python",
    p95: "142ms",
    steps: [
      {
        stage: "Query Ingestion",
        detail: "Prompt parsed via MCP protocol",
        latency: "12ms",
        status: "ok",
      },
      {
        stage: "Tree-Sitter AST",
        detail: "Syntactic code symbol chunking",
        latency: "34ms",
        status: "ok",
      },
      {
        stage: "Qdrant Vector",
        detail: "1536d cosine similarity search",
        latency: "58ms",
        status: "ok",
      },
      {
        stage: "Context Synthesis",
        detail: "Ranked AST chunks injected into Claude",
        latency: "38ms",
        status: "ok",
      },
    ],
    rawPayload: `{
  "agent": "CodeRAG-MCP",
  "ast_nodes": 412,
  "cosine_score": 0.942,
  "top_chunks": ["auth_service.go:42", "jwt_filter.go:18"],
  "latency": "142ms",
  "status": "SUCCESS"
}`,
  },
  grabpic: {
    id: "grabpic",
    name: "Grabpic Serverless",
    badge: "AWS SAM + DLib",
    runtime: "AWS Lambda · Docker · Python",
    p95: "450ms",
    steps: [
      {
        stage: "API Gateway",
        detail: "HTTP POST image payload validated",
        latency: "18ms",
        status: "ok",
      },
      {
        stage: "Lambda Container",
        detail: "DLib container bootstrap",
        latency: "210ms",
        status: "ok",
      },
      {
        stage: "Facial Alignment",
        detail: "128d facial landmark match",
        latency: "165ms",
        status: "ok",
      },
      {
        stage: "S3 Presigned",
        detail: "Ephemeral download link generated",
        latency: "57ms",
        status: "ok",
      },
    ],
    rawPayload: `{
  "system": "AWS-SAM-Lambda",
  "faces_detected": 6,
  "matched_user": "usr_9481a",
  "s3_key": "vault/events/401/face_0.jpg",
  "cost_delta": "-80% vs EC2",
  "status": "200_OK"
}`,
  },
  eleveon: {
    id: "eleveon",
    name: "Eleveon Cashfree Hook",
    badge: "INR 100K+ Volume",
    runtime: "Next.js · PostgreSQL · Cashfree",
    p95: "89ms",
    steps: [
      {
        stage: "Webhook Ingest",
        detail: "Cashfree payment notification",
        latency: "15ms",
        status: "ok",
      },
      {
        stage: "HMAC Check",
        detail: "Cryptographic SHA256 verify",
        latency: "8ms",
        status: "ok",
      },
      {
        stage: "Idempotency Lock",
        detail: "Atomic serializable lock acquired",
        latency: "24ms",
        status: "ok",
      },
      {
        stage: "Order Fulfillment",
        detail: "Credits committed to PostgreSQL",
        latency: "42ms",
        status: "ok",
      },
    ],
    rawPayload: `{
  "transaction_id": "cf_tx_8921094",
  "amount_inr": 4999.00,
  "idempotency_key": "cf_idemp_7721",
  "signature_verified": true,
  "status": "FULFILLED_100_PERCENT"
}`,
  },
};

export default function InteractiveConsole() {
  const [activeTab, setActiveTab] = useState<"coderag" | "grabpic" | "eleveon">("coderag");
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(3); // All complete by default

  const current = consoleData[activeTab];

  const handleSimulate = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveStep(0);

    const stepInterval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev < 3) {
          return prev + 1;
        } else {
          clearInterval(stepInterval);
          setIsSimulating(false);
          return 3;
        }
      });
    }, 450);
  };

  return (
    <div className="group relative rounded-[2rem] border border-border/80 bg-white/[0.02] p-1.5 shadow-2xl transition-all duration-300 hover:border-accent/40 w-full max-w-xl mx-auto lg:max-w-none">
      {/* Outer Shell Gradient accent shimmer */}
      <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-b from-accent/20 via-transparent to-emerald-500/10 opacity-50 pointer-events-none" />

      {/* Inner Core: Concentric calculated radius */}
      <div className="relative flex flex-col rounded-[calc(2rem-0.375rem)] bg-[#070a11] text-slate-200 p-5 sm:p-6 border border-white/[0.06] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
        {/* Top Header / Mac Chrome & System Telemetry */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-[11px] text-slate-400 font-medium tracking-tight">
              sys.telemetry // v2.6.4
            </span>
          </div>

          <div className="flex items-center gap-2.5 font-mono text-[11px] text-slate-400">
            <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              LIVE
            </span>
            <span>·</span>
            <span>p95: <strong className="text-white">{current.p95}</strong></span>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-1.5 py-3 border-b border-white/[0.06] overflow-x-auto no-scrollbar">
          {(["coderag", "grabpic", "eleveon"] as const).map((tabKey) => {
            const tab = consoleData[tabKey];
            const isActive = activeTab === tabKey;
            return (
              <button
                key={tabKey}
                onClick={() => {
                  setActiveTab(tabKey);
                  setActiveStep(3);
                }}
                className={`relative px-3 py-1.5 rounded-lg font-mono text-xs font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-white/10 text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeTabBadge"
                    className="absolute inset-0 rounded-lg border border-accent/40 bg-accent/15"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active System Metadata */}
        <div className="flex items-center justify-between py-3 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <CpuChipIcon className="h-3.5 w-3.5 text-accent" />
            <span>{current.runtime}</span>
          </div>
          <span className="rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 text-[10px]">
            {current.badge}
          </span>
        </div>

        {/* Execution Flow Pipeline */}
        <div className="my-2 space-y-2">
          {current.steps.map((step, idx) => {
            const isCompleted = activeStep >= idx;
            const isCurrentProcessing = activeStep === idx && isSimulating;

            return (
              <motion.div
                key={step.stage}
                initial={false}
                animate={{
                  opacity: isCompleted ? 1 : 0.4,
                  x: isCurrentProcessing ? 4 : 0,
                }}
                className={`flex items-start justify-between gap-3 rounded-lg border p-2.5 font-mono transition-colors ${
                  isCurrentProcessing
                    ? "border-accent/60 bg-accent/10"
                    : isCompleted
                    ? "border-white/[0.06] bg-white/[0.02]"
                    : "border-transparent bg-white/[0.01]"
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 flex h-4 w-4 items-center justify-center">
                    {isCurrentProcessing ? (
                      <ArrowPathIcon className="h-3.5 w-3.5 text-accent animate-spin" />
                    ) : isCompleted ? (
                      <CheckCircleIcon className="h-3.5 w-3.5 text-emerald-400" />
                    ) : (
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-200">
                      {step.stage}
                    </div>
                    <div className="text-[11px] text-slate-400 leading-snug">
                      {step.detail}
                    </div>
                  </div>
                </div>

                <div className="text-[10px] text-slate-400 shrink-0 font-medium">
                  {step.latency}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Telemetry Output Box */}
        <div className="mt-3 rounded-xl bg-black/60 p-3 border border-white/[0.05] overflow-hidden">
          <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1.5">
            <span>TERMINAL_OUTPUT</span>
            <span>JSON_STREAM</span>
          </div>
          <pre className="text-[11px] text-emerald-400/90 leading-tight overflow-x-auto no-scrollbar font-mono">
            {current.rawPayload}
          </pre>
        </div>

        {/* Interactive Trigger Button: Button-in-Button pattern */}
        <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
            <SignalIcon className="h-3.5 w-3.5 text-accent" />
            <span>Zero-Downtime Guarantee</span>
          </div>

          <button
            onClick={handleSimulate}
            disabled={isSimulating}
            className="group/btn relative inline-flex items-center gap-2.5 rounded-full bg-accent hover:bg-accent-hover text-white px-4 py-2 text-xs font-semibold font-sans transition-all duration-200 active:scale-98 disabled:opacity-50 cursor-pointer"
          >
            <span>{isSimulating ? "Executing Trace..." : "Simulate Pipeline"}</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 transition-transform duration-200 group-hover/btn:translate-x-0.5">
              {isSimulating ? (
                <ArrowPathIcon className="h-3 w-3 animate-spin stroke-[2.5]" />
              ) : (
                <PlayIcon className="h-3 w-3 stroke-[2.5] fill-white" />
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
