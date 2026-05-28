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
    <section className="mb-14 rounded-2xl border-2 border-foreground bg-card p-6 shadow-hard">
      <h2 className="mb-6 text-xs font-bold uppercase tracking-wider text-foreground">
        Quick Check
      </h2>

      <div className="space-y-8">
        {questions.map((q, qi) => (
          <div key={qi}>
            <p className="mb-4 text-sm font-medium text-foreground">{q.question}</p>

            <div className="space-y-2">
              {q.options.map((opt, oi) => {
                const isSelected = selected[qi] === oi;
                const isRevealed = revealed[qi];
                const isCorrect = oi === q.correctIndex;

                let optionStyle =
                  "border-2 border-border bg-background text-foreground/75";
                if (isRevealed && isCorrect) {
                  optionStyle =
                    "border-2 border-foreground bg-quaternary/20 text-foreground shadow-hard-sm";
                } else if (isRevealed && isSelected && !isCorrect) {
                  optionStyle =
                    "border-2 border-secondary bg-secondary/10 text-secondary";
                } else if (isSelected) {
                  optionStyle =
                    "border-2 border-foreground bg-accent/10 text-foreground shadow-hard-sm";
                }

                return (
                  <button
                    key={oi}
                    onClick={() => handleSelect(qi, oi)}
                    disabled={isRevealed}
                    className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${optionStyle} ${
                      !isRevealed ? "cursor-pointer hover:border-foreground hover:-translate-y-0.5" : ""
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
                className="btn-candy mt-4"
              >
                Check answer
              </button>
            )}

            {revealed[qi] && (
              <p className="mt-3 text-xs font-bold text-muted-foreground">
                {selected[qi] === q.correctIndex
                  ? "Nice work!"
                  : `The answer is: ${q.options[q.correctIndex]}`}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
