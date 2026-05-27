"use client";

import { useState } from "react";
import type { QuizQuestion } from "@/content/modules";

interface QuizProps {
  questions: QuizQuestion[];
}

export default function Quiz({ questions }: QuizProps) {
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  function handleSelect(qIndex: number, optIndex: number) {
    if (revealed[qIndex]) return;
    setSelected((prev) => ({ ...prev, [qIndex]: optIndex }));
  }

  function handleCheck(qIndex: number) {
    setRevealed((prev) => ({ ...prev, [qIndex]: true }));
  }

  return (
    <section className="mb-14 rounded-xl border border-border bg-surface p-6">
      <h2 className="mb-6 text-sm uppercase tracking-wider text-foreground/70">
        Quick Check
      </h2>

      <div className="space-y-8">
        {questions.map((q, qi) => (
          <div key={qi}>
            <p className="mb-4 text-sm text-foreground">{q.question}</p>

            <div className="space-y-2">
              {q.options.map((opt, oi) => {
                const isSelected = selected[qi] === oi;
                const isRevealed = revealed[qi];
                const isCorrect = oi === q.correctIndex;

                let optionStyle =
                  "border border-border bg-background text-foreground/75";
                if (isRevealed && isCorrect) {
                  optionStyle =
                    "border border-accent bg-accent-light text-accent-dark";
                } else if (isRevealed && isSelected && !isCorrect) {
                  optionStyle =
                    "border border-red-300 bg-red-50 text-red-700";
                } else if (isSelected) {
                  optionStyle =
                    "border border-charcoal bg-charcoal/5 text-foreground";
                }

                return (
                  <button
                    key={oi}
                    onClick={() => handleSelect(qi, oi)}
                    disabled={isRevealed}
                    className={`block w-full rounded-lg px-4 py-2.5 text-left text-sm transition-colors ${optionStyle} ${
                      !isRevealed ? "cursor-pointer hover:border-charcoal/40" : ""
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {selected[qi] !== undefined && !revealed[qi] && (
              <button
                onClick={() => handleCheck(qi)}
                className="mt-4 rounded-lg bg-charcoal px-5 py-2 text-sm text-white transition-colors hover:bg-charcoal-light"
              >
                Check answer
              </button>
            )}

            {revealed[qi] && (
              <p className="mt-3 text-xs text-muted">
                {selected[qi] === q.correctIndex
                  ? "Nice work."
                  : `The answer is: ${q.options[q.correctIndex]}`}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
