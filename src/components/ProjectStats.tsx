"use client"

import * as React from "react"
import { Pie, PieChart, Cell, ResponsiveContainer } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { category: "Pembangunan Proyek", value: 33.3, fill: "hsl(222, 47%, 11%)" },
  { category: "Pelanggan rumah", value: 38.1, fill: "hsl(226, 100%, 60%)" },
  { category: "Pengembangan Sistem", value: 6.7, fill: "hsl(187, 85%, 35%)" },
  { category: "Instalasi Kamera & Kabel", value: 12.4, fill: "hsl(192, 95%, 45%)" },
  { category: "Lainnya", value: 9.5, fill: "hsl(187, 70%, 75%)" },
]

const chartConfig = {
  value: {
    label: "Persentase",
  },
  "Pembangunan Proyek": {
    label: "Pembangunan Proyek",
    color: "hsl(222, 47%, 11%)",
  },
  "Pelanggan rumah": {
    label: "Pelanggan rumah",
    color: "hsl(226, 100%, 60%)",
  },
  "Pengembangan Sistem": {
    label: "Pengembangan Sistem",
    color: "hsl(187, 85%, 35%)",
  },
  "Instalasi Kamera & Kabel": {
    label: "Instalasi Kamera & Kabel",
    color: "hsl(192, 95%, 45%)",
  },
  "Lainnya": {
    label: "Lainnya",
    color: "hsl(187, 70%, 75%)",
  },
} satisfies ChartConfig

export default function ProjectStats() {
  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          
          {/* Left Column: Title & Info */}
          <div className="w-full lg:w-1/3 space-y-4 text-center lg:text-left">
            <div className="space-y-2">
              <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-primary/40">
                Performance Portfolio
              </p>
              <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary leading-tight uppercase tracking-tighter">
                Proyek Sukses <br className="hidden md:block" /> 2020-2026
              </h2>
              <div className="w-16 h-1 bg-primary/30 mt-3 mx-auto lg:ml-0" />
            </div>
            
            <p className="text-muted-foreground text-xs md:text-sm max-w-sm mx-auto lg:ml-0 leading-relaxed">
              Analisis distribusi proyek kami selama 6 tahun terakhir menunjukkan kepercayaan pelanggan yang tinggi pada sektor residensial dan infrastruktur.
            </p>
            
            <div className="pt-6 hidden lg:block">
              <p className="text-[9px] font-bold tracking-[0.3em] uppercase opacity-40">
                indonesia technology bangga.
              </p>
            </div>
          </div>

          {/* Right Column: Diagram - Adjusted height for better mobile fit */}
          <div className="w-full lg:w-2/3 h-[250px] md:h-[450px] relative">
            <ChartContainer config={chartConfig} className="h-full w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="category"
                    innerRadius={50}
                    outerRadius={80}
                    strokeWidth={3}
                    stroke="#fff"
                    paddingAngle={2}
                    label={({ value }) => `${value}%`}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            
            {/* Custom Legend for Mobile - more compact */}
            <div className="grid grid-cols-2 gap-2 mt-4 lg:hidden text-[8px] font-bold uppercase tracking-tight text-primary/60 max-w-[300px] mx-auto">
              {chartData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.fill }} />
                  <span className="truncate">{item.category}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:hidden text-center w-full mt-6">
            <p className="text-[9px] font-bold tracking-[0.3em] uppercase opacity-40">
              indonesia technology bangga.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}