import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const ablationData = [
  { component: "Full Model", accuracy: 0.87 },
  { component: "No Multi-Head", accuracy: 0.75 },
  { component: "No Positional", accuracy: 0.71 },
  { component: "No Layer Norm", accuracy: 0.79 },
  { component: "No Residual", accuracy: 0.73 },
  { component: "Single Layer", accuracy: 0.68 },
]

const mechanismImpact = [
  {
    mechanism: "Multi-Head Attention",
    impact: "+12%",
    description: "Enables parallel processing of different representation subspaces",
  },
  {
    mechanism: "Positional Encoding",
    impact: "+16%",
    description: "Provides sequence order information to the model",
  },
  {
    mechanism: "Layer Normalization",
    impact: "+8%",
    description: "Stabilizes training and improves convergence",
  },
  {
    mechanism: "Residual Connections",
    impact: "+14%",
    description: "Facilitates gradient flow in deep networks",
  },
]

export function AblationStudies() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Ablation Studies</h2>
        <p className="text-sm text-muted-foreground">Component-wise analysis of model architecture</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Component Impact</CardTitle>
            <CardDescription>ROUGE score with different components removed</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ablationData} layout="vertical">
                <XAxis type="number" domain={[0, 1]} stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis
                  type="category"
                  dataKey="component"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  width={100}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "6px",
                  }}
                />
                <Bar dataKey="accuracy" fill="hsl(var(--chart-1))" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Mechanism Analysis</CardTitle>
            <CardDescription>Key attention mechanisms and their contributions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mechanismImpact.map((item) => (
                <div key={item.mechanism} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{item.mechanism}</span>
                    <span className="text-sm font-mono text-chart-2">{item.impact}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-chart-1 rounded-full"
                      style={{ width: `${Number.parseInt(item.impact)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
