import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle } from "lucide-react"

const models = [
  {
    name: "Transformer v2.4.1",
    status: "production",
    rouge: 0.87,
    latency: 105,
    memory: 42,
    features: ["Mixed Precision", "Quantized", "Core ML"],
  },
  {
    name: "Transformer v2.3.0",
    status: "baseline",
    rouge: 0.85,
    latency: 131,
    memory: 70,
    features: ["Mixed Precision"],
  },
  {
    name: "LSTM Baseline",
    status: "deprecated",
    rouge: 0.78,
    latency: 189,
    memory: 95,
    features: ["Sequential"],
  },
]

export function ModelComparison() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Model Comparison</h2>
        <p className="text-sm text-muted-foreground">Compare different model versions and architectures</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {models.map((model) => (
          <Card key={model.name} className="bg-card border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{model.name}</CardTitle>
                {model.status === "production" ? (
                  <CheckCircle2 className="h-5 w-5 text-chart-2" />
                ) : (
                  <Circle className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
              <CardDescription>
                <Badge variant={model.status === "production" ? "default" : "secondary"}>{model.status}</Badge>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">ROUGE-L</span>
                  <span className="font-mono text-foreground">{model.rouge.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Latency</span>
                  <span className="font-mono text-foreground">{model.latency}ms</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Memory</span>
                  <span className="font-mono text-foreground">{model.memory}MB</span>
                </div>
              </div>

              <div className="pt-2 border-t border-border">
                <div className="text-xs text-muted-foreground mb-2">Features</div>
                <div className="flex flex-wrap gap-1">
                  {model.features.map((feature) => (
                    <Badge key={feature} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
