import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Smartphone, Server, Package } from "lucide-react"

const deploymentTargets = [
  {
    name: "Core ML (iOS)",
    status: "deployed",
    version: "v2.4.1",
    size: "42MB",
    format: "mlmodel",
    optimizations: ["Quantization", "Pruning", "Mixed Precision"],
  },
  {
    name: "ONNX Runtime",
    status: "ready",
    version: "v2.4.1",
    size: "68MB",
    format: "onnx",
    optimizations: ["Graph Optimization", "Constant Folding"],
  },
  {
    name: "PyTorch Mobile",
    status: "testing",
    version: "v2.4.0",
    size: "55MB",
    format: "ptl",
    optimizations: ["Quantization", "Operator Fusion"],
  },
]

const deploymentMetrics = [
  { label: "Model Size Reduction", value: "40%", icon: Package },
  { label: "On-Device Latency", value: "105ms", icon: Smartphone },
  { label: "Server Throughput", value: "1.2K/s", icon: Server },
]

export function DeploymentStatus() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Deployment Status</h2>
        <p className="text-sm text-muted-foreground">Production-ready models across platforms</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {deploymentMetrics.map((metric) => (
          <Card key={metric.label} className="bg-card border-border">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  <p className="text-2xl font-bold text-foreground mt-1">{metric.value}</p>
                </div>
                <metric.icon className="h-8 w-8 text-chart-1" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {deploymentTargets.map((target) => (
          <Card key={target.name} className="bg-card border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{target.name}</CardTitle>
                {target.status === "deployed" && <CheckCircle2 className="h-5 w-5 text-chart-2" />}
              </div>
              <CardDescription>
                <Badge variant={target.status === "deployed" ? "default" : "secondary"} className="mt-1">
                  {target.status}
                </Badge>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Version</span>
                  <span className="font-mono text-foreground">{target.version}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Size</span>
                  <span className="font-mono text-foreground">{target.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Format</span>
                  <span className="font-mono text-foreground">{target.format}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-border">
                <div className="text-xs text-muted-foreground mb-2">Optimizations</div>
                <div className="flex flex-wrap gap-1">
                  {target.optimizations.map((opt) => (
                    <Badge key={opt} variant="outline" className="text-xs">
                      {opt}
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
