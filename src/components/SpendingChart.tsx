import { useState } from 'react';
import { CURRENCY, TREND_LABELS, type TrendPoint } from '../data';

interface Props {
  trend: number[];
  points?: TrendPoint[];
  compact?: boolean;
}

export default function SpendingChart({ trend, points, compact = false }: Props) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const maxVal = Math.max(...trend, 1);
  
  // Build fallback points if not provided
  const trendPoints: TrendPoint[] = points || trend.map((v, i) => {
    const estAmount = Math.round((v / 100) * 12000);
    return {
      label: TREND_LABELS[i] || `W${i + 1}`,
      weekName: `Week ${i + 1}`,
      amount: estAmount,
      heightPct: v,
    };
  });

  // Calculate SVG curve path points using unitless numeric coordinates (0..100 x scale)
  const chartHeight = compact ? 120 : 160;
  const paddingY = 16;
  const usableHeight = chartHeight - paddingY * 2;

  const svgPoints = trendPoints.map((pt, i) => {
    const x = Number(((i / (trendPoints.length - 1)) * 100).toFixed(2));
    const y = Number((chartHeight - paddingY - (pt.heightPct / 100) * usableHeight).toFixed(2));
    return { x, y, pt };
  });

  // Generate smooth SVG cubic bezier path string without '%' symbols inside 'd' attribute
  const pathD = svgPoints.reduce((acc, point, i, a) => {
    if (i === 0) return `M ${point.x} ${point.y}`;
    const prev = a[i - 1];
    const cx1 = Number((prev.x + (point.x - prev.x) / 2).toFixed(2));
    const cy1 = prev.y;
    const cx2 = Number((prev.x + (point.x - prev.x) / 2).toFixed(2));
    const cy2 = point.y;
    return `${acc} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${point.x} ${point.y}`;
  }, '');

  const areaD = `${pathD} L 100 ${chartHeight} L 0 ${chartHeight} Z`;

  const activePoint = activeIdx !== null ? trendPoints[activeIdx] : null;

  return (
    <div className="relative w-full select-none">
      {/* Dynamic Hover Tooltip Banner */}
      <div className="flex items-center justify-between h-7 mb-2 px-1">
        {activePoint ? (
          <div className="flex items-center gap-2 text-xs transition-all duration-200">
            <span className="font-medium text-ink">{activePoint.weekName}:</span>
            <span className="font-semibold text-accent tabular-nums">
              {CURRENCY(activePoint.amount)}
            </span>
            {activePoint.change && (
              <span className={`text-[11px] px-2 py-0.5 rounded-full font-semibold ${
                activePoint.change.startsWith('+') 
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                  : 'bg-slate-100 text-slate-700 border border-slate-200'
              }`}>
                {activePoint.change}
              </span>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-2 text-[11px] text-ink-soft">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
            <span>Weekly spending trend</span>
            <span className="text-line">•</span>
            <span className="hidden sm:inline">Hover over bars for weekly details</span>
          </div>
        )}
      </div>

      {/* Main Chart Area */}
      <div className={`relative w-full ${compact ? 'h-32' : 'h-40 sm:h-44'} rounded-xl bg-bg p-3 border border-line overflow-hidden`}>
        {/* Horizontal grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between p-3 pointer-events-none opacity-40">
          <div className="border-b border-dashed border-line w-full" />
          <div className="border-b border-dashed border-line w-full" />
          <div className="border-b border-dashed border-line w-full" />
        </div>

        {/* SVG Trend Line Overlay */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none p-3 overflow-visible"
          preserveAspectRatio="none"
          viewBox={`0 0 100 ${chartHeight}`}
        >
          <defs>
            <linearGradient id="chartGradientViolet" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#635BFF" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#635BFF" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path d={areaD} fill="url(#chartGradientViolet)" />
          <path
            d={pathD}
            fill="none"
            stroke="#635BFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-500"
          />
        </svg>

        {/* Interactive Bar Column Pillars */}
        <div className="relative z-10 flex items-end justify-between gap-1.5 sm:gap-3 h-full pt-4">
          {trendPoints.map((pt, i) => {
            const heightPct = Math.max(12, Math.min(100, Math.round((pt.heightPct / maxVal) * 100)));
            const isHovered = activeIdx === i;

            return (
              <div
                key={i}
                onMouseEnter={() => setActiveIdx(i)}
                onMouseLeave={() => setActiveIdx(null)}
                onFocus={() => setActiveIdx(i)}
                onBlur={() => setActiveIdx(null)}
                tabIndex={0}
                role="button"
                aria-label={`${pt.weekName}: ${CURRENCY(pt.amount)}`}
                className="group relative flex-1 flex flex-col items-center h-full justify-end cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-t"
              >
                {/* Individual Bar */}
                <div className="relative w-full max-w-[28px] flex items-end h-full justify-center">
                  <div
                    className={`w-full rounded-t-md transition-all duration-200 ${
                      isHovered
                        ? 'bg-accent shadow-[0_0_12px_rgba(99,91,255,0.4)] scale-x-105'
                        : 'bg-slate-800 hover:bg-accent/80'
                    }`}
                    style={{
                      height: `${heightPct}%`,
                    }}
                  />

                  {/* Dot on top of bar */}
                  <div 
                    className={`absolute -top-1.5 h-3 w-3 rounded-full border-2 border-surface transition-all duration-200 ${
                      isHovered ? 'bg-accent scale-125 shadow-md' : 'bg-slate-700 opacity-0 group-hover:opacity-100'
                    }`}
                    style={{ bottom: `${heightPct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* X-Axis Labels */}
      <div className="flex items-center justify-between gap-1.5 sm:gap-3 px-3 mt-2 text-[11px] text-ink-soft font-medium tabular-nums">
        {trendPoints.map((pt, i) => (
          <div
            key={i}
            className={`flex-1 text-center transition-colors ${
              activeIdx === i ? 'text-accent font-semibold' : 'text-ink-soft'
            }`}
          >
            {pt.label}
          </div>
        ))}
      </div>
    </div>
  );
}
