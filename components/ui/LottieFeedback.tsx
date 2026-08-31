"use client";

import { Lottie } from "lottie-react";

// Minimal JSON checkmark animation for Lottie
const checkAnimationData = {
  v: "5.5.7",
  fr: 30,
  ip: 0,
  op: 30,
  w: 60,
  h: 60,
  nm: "Check",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Checkmark",
      sr: 1,
      ks: {
        o: { k: 100 },
        r: { k: 0 },
        p: { k: [30, 30, 0] },
        a: { k: [0, 0, 0] },
        s: { k: [100, 100, 100] },
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "sh",
              ks: {
                k: {
                  i: [[0, 0], [0, 0], [0, 0]],
                  o: [[0, 0], [0, 0], [0, 0]],
                  v: [[-12, 0], [-3, 9], [12, -8]],
                  c: false,
                },
              },
            },
            {
              ty: "st",
              c: { k: [0.08, 0.55, 0.28, 1] },
              w: { k: 3.5 },
              lc: 2,
              lj: 2,
            },
            {
              ty: "tr",
              p: { k: [0, 0] },
              a: { k: [0, 0] },
              s: { k: [100, 100] },
              r: { k: 0 },
              o: { k: 100 },
            },
          ],
        },
      ],
      ip: 0,
      op: 30,
      st: 0,
    },
  ],
};

export default function LottieFeedback({ size = 18 }: { size?: number }) {
  return (
    <div className="inline-flex items-center justify-center">
      <Lottie
        src={checkAnimationData}
        autoplay
        loop={false}
        style={{ width: size, height: size }}
      />
    </div>
  );
}
