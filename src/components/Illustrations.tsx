type IconProps = { className?: string };

export function RobotMascot({ className = '' }: IconProps) {
  return (
    <svg
      viewBox="0 0 320 360"
      className={`w-full h-auto max-w-md mx-auto animate-float ${className}`}
      aria-hidden="true"
    >
      <defs>
        <filter id="robotGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="robotBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0a0e15" />
          <stop offset="1" stopColor="#11161f" />
        </linearGradient>
      </defs>

      <circle
        cx="160"
        cy="170"
        r="150"
        fill="none"
        stroke="#00ff88"
        strokeOpacity="0.15"
        strokeWidth="1"
        strokeDasharray="4 6"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 160 170"
          to="360 160 170"
          dur="60s"
          repeatCount="indefinite"
        />
      </circle>

      <polygon
        points="160,50 270,110 270,230 160,290 50,230 50,110"
        fill="none"
        stroke="#00ff88"
        strokeOpacity="0.2"
        strokeWidth="1"
      />

      <line x1="160" y1="65" x2="160" y2="40" stroke="#00ff88" strokeWidth="2" />
      <circle cx="160" cy="35" r="5" fill="#00ff88" filter="url(#robotGlow)">
        <animate attributeName="r" values="4;7;4" dur="2s" repeatCount="indefinite" />
      </circle>

      <rect
        x="90"
        y="70"
        width="140"
        height="120"
        rx="20"
        fill="url(#robotBody)"
        stroke="#00ff88"
        strokeWidth="2"
      />

      <rect
        x="110"
        y="110"
        width="40"
        height="20"
        rx="4"
        fill="#050608"
        stroke="#00ff88"
        strokeWidth="1"
      />
      <rect
        x="170"
        y="110"
        width="40"
        height="20"
        rx="4"
        fill="#050608"
        stroke="#00ff88"
        strokeWidth="1"
      />

      <circle cx="130" cy="120" r="5" fill="#00ff88" filter="url(#robotGlow)">
        <animate
          attributeName="opacity"
          values="1;0.4;1"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="190" cy="120" r="5" fill="#00ff88" filter="url(#robotGlow)">
        <animate
          attributeName="opacity"
          values="1;0.4;1"
          dur="3s"
          repeatCount="indefinite"
          begin="1s"
        />
      </circle>

      <g stroke="#00ff88" strokeWidth="1" opacity="0.6">
        <line x1="125" y1="155" x2="195" y2="155" />
        <line x1="125" y1="162" x2="195" y2="162" />
        <line x1="125" y1="169" x2="195" y2="169" />
      </g>

      <circle cx="80" cy="130" r="6" fill="#3b82f6" opacity="0.8">
        <animate
          attributeName="opacity"
          values="0.8;0.3;0.8"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="240" cy="130" r="6" fill="#3b82f6" opacity="0.8">
        <animate
          attributeName="opacity"
          values="0.8;0.3;0.8"
          dur="2s"
          repeatCount="indefinite"
          begin="1s"
        />
      </circle>

      <rect
        x="140"
        y="190"
        width="40"
        height="20"
        fill="url(#robotBody)"
        stroke="#00ff88"
        strokeWidth="2"
      />

      <rect
        x="60"
        y="210"
        width="200"
        height="100"
        rx="15"
        fill="url(#robotBody)"
        stroke="#00ff88"
        strokeWidth="2"
      />

      <circle
        cx="160"
        cy="255"
        r="25"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="2"
        opacity="0.6"
      >
        <animate attributeName="r" values="20;30;20" dur="3s" repeatCount="indefinite" />
        <animate
          attributeName="opacity"
          values="0.8;0.2;0.8"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="160" cy="255" r="10" fill="#00ff88" filter="url(#robotGlow)" />

      <path d="M 100 255 L 130 255" stroke="#3b82f6" strokeWidth="2" />
      <path d="M 190 255 L 220 255" stroke="#3b82f6" strokeWidth="2" />
      <path
        d="M 90 230 L 110 230"
        stroke="#00ff88"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <path
        d="M 210 230 L 230 230"
        stroke="#00ff88"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <path
        d="M 90 280 L 110 280"
        stroke="#00ff88"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <path
        d="M 210 280 L 230 280"
        stroke="#00ff88"
        strokeWidth="1.5"
        opacity="0.6"
      />

      <g stroke="#00ff88" strokeWidth="2" fill="none" opacity="0.6">
        <path d="M 30 40 L 30 60 M 30 40 L 50 40" />
        <path d="M 290 40 L 290 60 M 290 40 L 270 40" />
        <path d="M 30 330 L 30 310 M 30 330 L 50 330" />
        <path d="M 290 330 L 290 310 M 290 330 L 270 330" />
      </g>
    </svg>
  );
}

export function NeuralNetIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <g stroke="#00ff88" strokeWidth="1" opacity="0.4">
        <line x1="60" y1="15" x2="20" y2="60" />
        <line x1="60" y1="15" x2="100" y2="60" />
        <line x1="60" y1="15" x2="60" y2="60" />
        <line x1="20" y1="60" x2="60" y2="60" />
        <line x1="100" y1="60" x2="60" y2="60" />
        <line x1="20" y1="60" x2="60" y2="105" />
        <line x1="100" y1="60" x2="60" y2="105" />
        <line x1="60" y1="60" x2="60" y2="105" />
      </g>
      <circle cx="60" cy="15" r="5" fill="#00ff88">
        <animate
          attributeName="opacity"
          values="1;0.4;1"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="20" cy="60" r="5" fill="#3b82f6" />
      <circle cx="100" cy="60" r="5" fill="#3b82f6" />
      <circle cx="60" cy="60" r="7" fill="#00ff88">
        <animate attributeName="r" values="5;8;5" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="60" cy="105" r="5" fill="#00ff88" />
    </svg>
  );
}

export function CircuitIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <g stroke="#00ff88" strokeWidth="1.5" fill="none" opacity="0.7">
        <path d="M 10 30 L 50 30 L 50 60" />
        <path d="M 70 60 L 110 60" />
        <path d="M 60 10 L 60 40" />
        <path d="M 60 80 L 60 110" />
        <path d="M 10 90 L 40 90 L 40 80" />
      </g>
      <rect
        x="40"
        y="40"
        width="40"
        height="40"
        rx="3"
        fill="#050608"
        stroke="#00ff88"
        strokeWidth="2"
      />
      <text
        x="60"
        y="65"
        fontSize="10"
        fill="#00ff88"
        textAnchor="middle"
        fontFamily="monospace"
        fontWeight="600"
      >
        AI
      </text>
      <g fill="#00ff88">
        <circle cx="50" cy="30" r="3" />
        <circle cx="70" cy="60" r="3" />
        <circle cx="60" cy="10" r="3" />
        <circle cx="60" cy="110" r="3" />
        <circle cx="40" cy="80" r="3" />
      </g>
      <circle cx="10" cy="30" r="3" fill="#3b82f6" />
      <circle cx="110" cy="60" r="3" fill="#3b82f6">
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="10" cy="90" r="3" fill="#3b82f6" />
    </svg>
  );
}

function hex(cx: number, cy: number, r: number) {
  const pts: string[] = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i - Math.PI / 2;
    pts.push(`${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`);
  }
  return pts.join(' ');
}

export function HexGridIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <g fill="none" stroke="#00ff88" strokeWidth="1" opacity="0.4">
        <polygon points={hex(30, 30, 18)} />
        <polygon points={hex(60, 50, 18)} />
        <polygon points={hex(90, 30, 18)} />
        <polygon points={hex(30, 70, 18)} />
        <polygon points={hex(60, 90, 18)} />
        <polygon points={hex(90, 70, 18)} />
      </g>
      <polygon points={hex(60, 50, 18)} fill="#00ff88" opacity="0.18" />
      <polygon points={hex(30, 70, 18)} fill="#3b82f6" opacity="0.18" />
      <polygon points={hex(90, 70, 18)} fill="#00ff88" opacity="0.12" />
      <circle cx="60" cy="50" r="4" fill="#00ff88">
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

export function OrbitIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle
        cx="60"
        cy="60"
        r="50"
        fill="none"
        stroke="#00ff88"
        strokeWidth="1"
        opacity="0.3"
        strokeDasharray="2 4"
      />
      <circle
        cx="60"
        cy="60"
        r="35"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="1"
        opacity="0.4"
        strokeDasharray="3 3"
      />
      <circle
        cx="60"
        cy="60"
        r="20"
        fill="none"
        stroke="#00ff88"
        strokeWidth="1"
        opacity="0.5"
      />
      <circle cx="60" cy="60" r="7" fill="#00ff88">
        <animate attributeName="r" values="6;10;6" dur="3s" repeatCount="indefinite" />
      </circle>
      <g>
        <circle cx="110" cy="60" r="3" fill="#00ff88" />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 60 60"
          to="360 60 60"
          dur="12s"
          repeatCount="indefinite"
        />
      </g>
      <g>
        <circle cx="95" cy="60" r="3" fill="#3b82f6" />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="360 60 60"
          to="0 60 60"
          dur="8s"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  );
}

export function SignalIcon({ className = '' }: IconProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <line x1="60" y1="110" x2="60" y2="50" stroke="#00ff88" strokeWidth="2" />
      <polygon points="60,40 50,55 70,55" fill="#00ff88" />
      <line x1="40" y1="110" x2="80" y2="110" stroke="#00ff88" strokeWidth="2" />
      <path
        d="M 38 35 Q 60 18 82 35"
        fill="none"
        stroke="#00ff88"
        strokeWidth="1.5"
        opacity="0.7"
      >
        <animate
          attributeName="opacity"
          values="0.7;0;0.7"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>
      <path
        d="M 28 28 Q 60 0 92 28"
        fill="none"
        stroke="#00ff88"
        strokeWidth="1.5"
        opacity="0.5"
      >
        <animate
          attributeName="opacity"
          values="0.5;0;0.5"
          dur="2s"
          repeatCount="indefinite"
          begin="0.4s"
        />
      </path>
      <path
        d="M 18 22 Q 60 -15 102 22"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="1.5"
        opacity="0.4"
      >
        <animate
          attributeName="opacity"
          values="0.4;0;0.4"
          dur="2s"
          repeatCount="indefinite"
          begin="0.8s"
        />
      </path>
    </svg>
  );
}
