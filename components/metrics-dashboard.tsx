"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Zap, HardDrive, Target } from "lucide-react"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const performanceData = [
  { epoch: 1, rouge: 0.72, latency: 145 },
  { epoch: 2, rouge: 0.76, latency: 138 },
  { epoch: 3, rouge: 0.79, latency: 132 },
  { epoch: 4, rouge: 0.82, latency: 125 },
  { epoch: 5, rouge: 0.84, latency: 118 },
  { epoch: 6, rouge: 0.85, latency: 112 },
  { epoch: 7, rouge: 0.86, latency: 108 },
  { epoch: 8, rouge: 0.87, latency: 105 },
]

export function MetricsDashboard() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Performance Metrics</h2>
        <p className="text-sm text-muted-foreground">Real-time model performance and optimization results</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ROUGE Score</CardTitle>
            <Target className="h-4 w-4 text-chart-1" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">0.87</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-chart-2">+2.4%</span> from baseline
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Inference Latency</CardTitle>
            <Zap className="h-4 w-4 text-chart-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">105ms</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-chart-2">-20%</span> improvement
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Memory Footprint</CardTitle>
            <HardDrive className="h-4 w-4 text-chart-3" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">42MB</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-chart-2">-40%</span> reduction
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compression Ratio</CardTitle>
            <Activity className="h-4 w-4 text-chart-5" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">35%</div>
            <p className="text-xs text-muted-foreground">Average summary length</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Training Progress</CardTitle>
          <CardDescription>ROUGE score and latency over training epochs</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <XAxis dataKey="epoch" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                }}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="rouge"
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--chart-1))" }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="latency"
                stroke="hsl(var(--chart-4))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--chart-4))" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
