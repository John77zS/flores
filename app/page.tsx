"use client";

import { useState } from "react";

const flowers = [
  // Flores del centro
  { x: 195, y: 82, s: 1.08, r: 0, d: 0.2 },

  // Segunda fila
  { x: 143, y: 112, s: 0.96, r: -8, d: 0.4 },
  { x: 247, y: 112, s: 0.98, r: 8, d: 0.55 },

  // Laterales
  { x: 92, y: 158, s: 0.82, r: -14, d: 0.75 },
  { x: 298, y: 158, s: 0.84, r: 14, d: 0.9 },

  // Flores delanteras
  { x: 135, y: 184, s: 0.72, r: -17, d: 1.05 },
  { x: 255, y: 184, s: 0.74, r: 17, d: 1.2 },

  // Pequeñas para llenar el ramo
  { x: 168, y: 210, s: 0.55, r: -10, d: 1.4 },
  { x: 222, y: 210, s: 0.58, r: 10, d: 1.55 },

  // Laterales inferiores
  { x: 110, y: 218, s: 0.55, r: -20, d: 1.7 },
  { x: 280, y: 218, s: 0.57, r: 20, d: 1.85 },
];

type FlowerProps = {
  x: number;
  y: number;
  s: number;
  r: number;
  d: number;
};

function Sunflower({ x, y, s, r, d }: FlowerProps) {
  return (
    <g
      className="sunflower"
      transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}
      style={{
        animationDelay: `${d}s`,
      }}
    >
      {/* Pétalos exteriores */}
      <g className="petals">
        {Array.from({ length: 20 }).map((_, i) => (
          <ellipse
            key={i}
            cx="0"
            cy="-30"
            rx="9"
            ry="27"
            transform={`rotate(${i * 18})`}
          />
        ))}
      </g>

      {/* Segunda capa de pétalos */}
      <g className="inner-petals">
        {Array.from({ length: 12 }).map((_, i) => (
          <ellipse
            key={i}
            cx="0"
            cy="-22"
            rx="7"
            ry="20"
            transform={`rotate(${i * 30 + 15})`}
          />
        ))}
      </g>

      {/* Centro del girasol */}
      <circle r="22" className="center-back" />
      <circle r="17" className="center-front" />

      {/* Semillas */}
      <g className="seeds">
        {Array.from({ length: 28 }).map((_, i) => {
          const angle = i * 137.5;
          const radius = 4 + (i % 5) * 2.3;

          const rad = (angle * Math.PI) / 180;

          return (
            <circle
              key={i}
              cx={Math.cos(rad) * radius}
              cy={Math.sin(rad) * radius}
              r="1.6"
            />
          );
        })}
      </g>
    </g>
  );
}

function Bouquet() {
  return (
    <svg
      viewBox="0 0 390 500"
      className="bouquet"
      aria-hidden="true"
    >
      <defs>
        {/* Papel */}
        <linearGradient
          id="paper"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0%" stopColor="#c58c4a" />
          <stop offset="45%" stopColor="#efc77d" />
          <stop offset="100%" stopColor="#aa7037" />
        </linearGradient>

        {/* Hojas */}
        <linearGradient
          id="leaf"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0%" stopColor="#284d18" />
          <stop offset="55%" stopColor="#65952b" />
          <stop offset="100%" stopColor="#315b1a" />
        </linearGradient>

        {/* Pétalos */}
        <radialGradient
          id="petal"
          cx="45%"
          cy="35%"
        >
          <stop offset="0%" stopColor="#ffe875" />
          <stop offset="55%" stopColor="#f8c52d" />
          <stop offset="100%" stopColor="#d9950e" />
        </radialGradient>

        {/* Centro */}
        <radialGradient
          id="center"
          cx="45%"
          cy="40%"
        >
          <stop offset="0%" stopColor="#875018" />
          <stop offset="65%" stopColor="#4b290d" />
          <stop offset="100%" stopColor="#281606" />
        </radialGradient>
      </defs>

      {/* ======================================
          TALLOS
      ====================================== */}

      <g
        fill="none"
        stroke="#3d691d"
        strokeWidth="5"
        strokeLinecap="round"
      >
        <path d="M190 400 C184 315 145 220 145 120" />
        <path d="M194 400 C194 290 195 175 195 88" />
        <path d="M200 400 C207 295 226 205 245 118" />
        <path d="M184 400 C160 320 123 235 105 172" />
        <path d="M207 400 C229 320 270 235 288 172" />
        <path d="M188 400 C172 350 160 275 150 205" />
        <path d="M204 400 C220 345 238 270 248 208" />
      </g>

      {/* ======================================
          HOJAS TRASERAS
      ====================================== */}

      <g fill="url(#leaf)">
        <path d="M153 285 C116 277 92 251 94 226 C122 230 145 249 153 285Z" />

        <path d="M160 245 C126 232 112 205 118 183 C145 190 159 212 160 245Z" />

        <path d="M169 330 C135 322 113 299 116 274 C144 279 164 299 169 330Z" />

        <path d="M233 286 C269 274 293 249 291 223 C263 228 241 249 233 286Z" />

        <path d="M246 331 C280 322 303 298 300 274 C273 279 251 299 246 331Z" />

        <path d="M218 235 C245 216 251 185 239 165 C216 180 207 207 218 235Z" />

        <path d="M177 229 C151 208 147 179 159 160 C181 175 187 202 177 229Z" />
      </g>

      {/* ======================================
          FLORES
      ====================================== */}

      {flowers.map((flower, index) => (
        <Sunflower
          key={index}
          {...flower}
        />
      ))}

      {/* ======================================
          HOJAS DELANTERAS
      ====================================== */}

      <g fill="url(#leaf)">
        <path d="M128 370 C92 355 75 327 84 306 C111 314 128 338 128 370Z" />

        <path d="M155 390 C120 380 102 353 109 332 C137 341 153 362 155 390Z" />

        <path d="M262 390 C297 379 315 351 308 330 C280 340 265 361 262 390Z" />

        <path d="M290 369 C326 353 342 326 333 305 C305 314 290 338 290 369Z" />
      </g>

      {/* ======================================
          PAPEL DEL RAMO
      ====================================== */}

      <path
        d="M68 335
           Q195 311 322 335
           L287 493
           Q195 474 103 493
           Z"
        fill="url(#paper)"
      />

      {/* Borde superior del papel */}
      <path
        d="M68 335
           Q195 311 322 335
           L316 358
           Q195 338 74 358
           Z"
        fill="#f3d08e"
      />

      {/* Pliegues */}
      <path
        d="M88 363 Q195 344 302 363"
        fill="none"
        stroke="#986734"
        strokeWidth="2"
        opacity=".3"
      />

      <path
        d="M108 490 L195 390 L282 490"
        fill="#f6d58f"
        opacity=".18"
      />

      {/* ======================================
          CINTA
      ====================================== */}

      <path
        d="M163 405
           Q195 389
           227 405
           Q195 421
           163 405Z"
        fill="#86572d"
      />

      <path
        d="M181 405
           Q195 398
           209 405
           Q195 412
           181 405Z"
        fill="#d0a05a"
      />
    </svg>
  );
}

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main
      className={
        opened
          ? "page opened"
          : "page"
      }
    >
      {!opened ? (
        /* ======================================
           PANTALLA INICIAL
        ====================================== */

        <section className="intro">
          <div className="intro-content">

            <h1>
              Tengo algo
              <br />
              para ti…
            </h1>

            <h2>
              ¿Estás lista?
            </h2>

            <p>
              Apreta el botón…
            </p>

            <button
              onClick={() => setOpened(true)}
            >
              Descubrir
              <span>→</span>
            </button>

          </div>
        </section>
      ) : (

        /* ======================================
           RAMO
        ====================================== */

        <section className="reveal">

          <div className="ambient" />
          <div className="falling-petals" aria-hidden="true">
  {Array.from({ length: 18 }).map((_, i) => (
    <span
      key={i}
      className="falling-petal"
      style={{
        left: `${4 + ((i * 17) % 92)}%`,
        animationDelay: `${(i * 0.37) % 4}s`,
        animationDuration: `${4.5 + ((i * 13) % 30) / 10}s`,
        transform: `rotate(${i * 31}deg)`,
      }}
    />
  ))}
</div>
          <div className="message">

            <h2>
              Estas flores
              <br />
              <em>son para ti.</em>
            </h2>

            <p>
              No necesitan agua,
              <br />
              no se marchitan
              <br />
              y espero que te saquen una sonrisa.
              <br />
              Solo quería tener un pequeño detalle contigo
              <br />
              y hacer que este día sea un poquito más bonito.
            </p>

          </div>

          <div className="bouquet-wrap">
            <Bouquet />
          </div>

        </section>
      )}
    </main>
  );
}