import { SummarizationDemo } from "@/components/summarization-demo"
import { MetricsDashboard } from "@/components/metrics-dashboard"
import { AblationStudies } from "@/components/ablation-studies"
import { ModelComparison } from "@/components/model-comparison"
import { DeploymentStatus } from "@/components/deployment-status"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Transformer Summarization</h1>
              <p className="text-sm text-muted-foreground mt-1">PyTorch-based text summarization with ROUGE ≥ 0.85</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Model Version</div>
                <div className="text-sm font-mono text-foreground">v2.4.1</div>
              </div>
              <div className="h-2 w-2 rounded-full bg-chart-2 animate-pulse" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Summarization Demo */}
        <SummarizationDemo />

        {/* Metrics Dashboard */}
        <MetricsDashboard />

        {/* Model Comparison */}
        <ModelComparison />

        {/* Ablation Studies */}
        <AblationStudies />

        {/* Deployment Status */}
        <DeploymentStatus />
      </main>
    </div>
  )
}
