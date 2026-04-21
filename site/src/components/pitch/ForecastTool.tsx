"use client";

import { useState, useMemo } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Starting point: Q1 2026 average monthly revenue = $25.1K / 3 = $8,367
const BASE_MONTHLY_REVENUE = 8367;
const BASE_MONTHLY_EXPENSES = 4617; // Q1 2026 avg = $13.8K / 3
const AVG_CONSULTING_RETAINER = 2000; // per client per month (plan: "$1K-$3K" midpoint)
const AVG_WEBSITE_BUILD_PRICE = 2999; // one-time, Professional tier (plan's default)

// Current platform MRR per Stripe (total, not per sub)
const DAWN_MRR = 950;
const BOTME_MRR = 744;
const PLATFORM_MRR = DAWN_MRR + BOTME_MRR; // $1,694/mo

const AI_TOOL_COST_PER_CLIENT = 150; // est. marginal monthly AI cost per active client

function formatK(n: number) {
  if (n >= 1000) return `$${(n / 1000).toFixed(1)}K`;
  return `$${n.toFixed(0)}`;
}

export default function ForecastTool() {
  const [newConsultingPerMonth, setNewConsultingPerMonth] = useState(1);
  const [newWebsitesPerMonth, setNewWebsitesPerMonth] = useState(2);
  const [platformMrrAddedPerMonth, setPlatformMrrAddedPerMonth] = useState(100);

  const data = useMemo(() => {
    const months: Array<{
      month: string;
      revenue: number;
      cumulative: number;
      netIncome: number;
    }> = [];

    let cumulativeRetainer = 0;
    let cumulativePlatformGrowth = 0;
    let cumulativeRevenue = 0;

    for (let i = 1; i <= 12; i++) {
      cumulativeRetainer += newConsultingPerMonth * AVG_CONSULTING_RETAINER;
      cumulativePlatformGrowth += platformMrrAddedPerMonth;
      const websitesOneTime = newWebsitesPerMonth * AVG_WEBSITE_BUILD_PRICE;

      const monthlyRevenue =
        BASE_MONTHLY_REVENUE +
        cumulativeRetainer +
        cumulativePlatformGrowth +
        websitesOneTime;

      const activeClientCount = i * newConsultingPerMonth;
      const aiVariableCost = activeClientCount * AI_TOOL_COST_PER_CLIENT;
      const monthlyExpenses = BASE_MONTHLY_EXPENSES + aiVariableCost;
      const monthlyNet = monthlyRevenue - monthlyExpenses;

      cumulativeRevenue += monthlyRevenue;

      months.push({
        month: `M${i}`,
        revenue: Math.round(monthlyRevenue),
        cumulative: Math.round(cumulativeRevenue),
        netIncome: Math.round(monthlyNet),
      });
    }

    return months;
  }, [newConsultingPerMonth, newWebsitesPerMonth, platformMrrAddedPerMonth]);

  const last = data[data.length - 1];
  const totalYearRevenue = last.cumulative;
  const m12Revenue = last.revenue;
  const totalNetIncome = data.reduce((sum, m) => sum + m.netIncome, 0);

  const baselineAnnual = BASE_MONTHLY_REVENUE * 12;
  const growthOverBaseline = totalYearRevenue - baselineAnnual;
  const allZero =
    newConsultingPerMonth === 0 &&
    newWebsitesPerMonth === 0 &&
    platformMrrAddedPerMonth === 0;

  return (
    <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 md:p-8">
      {/* Baseline callout */}
      <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
          <div>
            <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
              Baseline (Q1 2026 run-rate)
            </div>
            <div className="text-sm text-slate-700 mt-1">
              Current existing business generates{" "}
              <strong className="text-[#02222e]">
                {formatK(BASE_MONTHLY_REVENUE)}/month
              </strong>{" "}
              — annualizes to{" "}
              <strong className="text-[#02222e]">{formatK(baselineAnnual)}</strong>{" "}
              without adding anything new.
            </div>
          </div>
          <div className="text-2xl font-bold text-[#008276]">
            {formatK(BASE_MONTHLY_REVENUE)}/mo
          </div>
        </div>
        <div className="text-xs text-slate-600 pt-3 border-t border-slate-200">
          <span className="font-semibold">Platform MRR today (Stripe):</span>{" "}
          <span className="text-[#02222e] font-semibold">
            ${PLATFORM_MRR.toLocaleString()}/mo
          </span>{" "}
          — Dawn ${DAWN_MRR}/mo + Bot-Me ${BOTME_MRR}/mo (included in baseline).
        </div>
      </div>

      <div className="grid lg:grid-cols-[280px_1fr] gap-8">
        {/* Controls */}
        <div className="space-y-6">
          <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold pb-2 border-b border-slate-200">
            Add growth on top of baseline
          </div>
          <Slider
            label="New consulting clients / month"
            value={newConsultingPerMonth}
            onChange={setNewConsultingPerMonth}
            min={0}
            max={3}
            step={1}
            sub={`${newConsultingPerMonth} × ~$${AVG_CONSULTING_RETAINER.toLocaleString()}/mo retainer`}
          />
          <Slider
            label="Website builds closed / month"
            value={newWebsitesPerMonth}
            onChange={setNewWebsitesPerMonth}
            min={0}
            max={5}
            step={1}
            sub={`${newWebsitesPerMonth} × ~$${AVG_WEBSITE_BUILD_PRICE.toLocaleString()} one-time`}
          />
          <Slider
            label="Platform MRR added / month ($)"
            value={platformMrrAddedPerMonth}
            onChange={setPlatformMrrAddedPerMonth}
            min={0}
            max={500}
            step={50}
            sub={`+$${platformMrrAddedPerMonth}/mo new Dawn + Bot-Me MRR`}
          />
          <p className="text-xs text-slate-500 pt-4 border-t border-slate-200">
            Sliders at zero = baseline continues flat. Consulting retainers and
            platform MRR compound monthly; website builds are one-time per month.
            AI tooling scales with active consulting clients.
          </p>
        </div>

        {/* Chart + KPIs */}
        <div>
          <div className="grid grid-cols-3 gap-3 mb-5">
            <Stat
              label={allZero ? "Month 12 (baseline only)" : "Projected Month 12"}
              value={formatK(m12Revenue)}
            />
            <Stat
              label={allZero ? "12-month total (baseline)" : "Projected 12-month total"}
              value={formatK(totalYearRevenue)}
              sub={
                !allZero && growthOverBaseline > 0
                  ? `+${formatK(growthOverBaseline)} over baseline`
                  : undefined
              }
            />
            <Stat
              label="Projected net income"
              value={formatK(totalNetIncome)}
            />
          </div>

          <div className="h-64 md:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 10, right: 10, left: -15, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="fcGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#008276" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#008276" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#e2e8f0" vertical={false} />
                <XAxis
                  dataKey="month"
                  tick={{ fill: "#475569", fontSize: 12 }}
                  axisLine={{ stroke: "#cbd5e1" }}
                />
                <YAxis
                  tick={{ fill: "#475569", fontSize: 12 }}
                  axisLine={{ stroke: "#cbd5e1" }}
                  tickLine={false}
                  tickFormatter={(v) => formatK(v)}
                />
                <Tooltip
                  contentStyle={{
                    background: "#ffffff",
                    border: "1px solid #008276",
                    borderRadius: 8,
                  }}
                  labelStyle={{ color: "#02222e" }}
                  formatter={(v) => (typeof v === "number" ? formatK(v) : String(v))}
                />
                <ReferenceLine
                  y={BASE_MONTHLY_REVENUE}
                  stroke="#94a3b8"
                  strokeDasharray="4 4"
                  label={{
                    value: `Baseline ${formatK(BASE_MONTHLY_REVENUE)}/mo`,
                    position: "insideBottomRight",
                    fill: "#64748b",
                    fontSize: 11,
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#008276"
                  strokeWidth={2}
                  fill="url(#fcGrad)"
                  name="Monthly revenue"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slider({
  label,
  value,
  onChange,
  min,
  max,
  step,
  sub,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  sub: string;
}) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-2">
        <label className="text-sm font-medium text-slate-700">{label}</label>
        <span className="text-lg font-bold text-[#008276]">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[#008276]"
      />
      <div className="text-xs text-slate-500 mt-1">{sub}</div>
    </div>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-xl bg-gradient-to-br from-[#e6f7f4] to-white border border-[#008276]/20 p-4">
      <div className="text-xs text-slate-600 uppercase tracking-wide">{label}</div>
      <div className="text-2xl font-bold text-[#02222e] mt-1">{value}</div>
      {sub && <div className="text-xs text-[#008276] font-semibold mt-1">{sub}</div>}
    </div>
  );
}
