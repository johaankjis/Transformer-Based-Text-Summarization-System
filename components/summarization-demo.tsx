"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Sparkles } from "lucide-react"

const SAMPLE_TEXT = `Artificial intelligence has made remarkable progress in natural language processing over the past decade. Transformer architectures, introduced in 2017, revolutionized the field by enabling models to process text in parallel rather than sequentially. These models use self-attention mechanisms to weigh the importance of different words in a sentence, allowing them to capture long-range dependencies and contextual relationships. Modern language models built on transformer architectures have achieved human-level performance on many benchmarks, including text summarization, translation, and question answering. The key innovation lies in the attention mechanism, which allows the model to focus on relevant parts of the input when generating each word of the output. This has led to significant improvements in both accuracy and efficiency compared to previous recurrent neural network approaches.`

const SAMPLE_SUMMARY = `Transformer architectures revolutionized NLP by using self-attention mechanisms to process text in parallel, capturing long-range dependencies. These models achieve human-level performance on tasks like summarization and translation, significantly improving upon previous RNN approaches.`

export function SummarizationDemo() {
  const [inputText, setInputText] = useState(SAMPLE_TEXT)
  const [summary, setSummary] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [metrics, setMetrics] = useState<{
    rouge1: number
    rouge2: number
    rougeL: number
    compressionRatio: number
  } | null>(null)

  const handleSummarize = async () => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setSummary(SAMPLE_SUMMARY)
    setMetrics({
      rouge1: 0.87,
      rouge2: 0.82,
      rougeL: 0.85,
      compressionRatio: 0.38,
    })
    setIsLoading(false)
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-chart-1" />
          Live Summarization Demo
        </CardTitle>
        <CardDescription>Test the transformer model with your own text or use the sample</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Input Text</label>
            <Textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter text to summarize..."
              className="min-h-[200px] font-mono text-sm bg-muted/50"
            />
            <div className="text-xs text-muted-foreground">{inputText.split(" ").length} words</div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Generated Summary</label>
            <div className="min-h-[200px] p-3 rounded-md border border-border bg-muted/50 font-mono text-sm">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                </div>
              ) : summary ? (
                <p className="text-foreground">{summary}</p>
              ) : (
                <p className="text-muted-foreground">Summary will appear here...</p>
              )}
            </div>
            {summary && <div className="text-xs text-muted-foreground">{summary.split(" ").length} words</div>}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Button onClick={handleSummarize} disabled={isLoading || !inputText}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Summarizing...
              </>
            ) : (
              "Generate Summary"
            )}
          </Button>

          {metrics && (
            <div className="flex gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">ROUGE-L:</span>{" "}
                <span className="font-mono text-chart-2">{metrics.rougeL.toFixed(2)}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Compression:</span>{" "}
                <span className="font-mono text-chart-4">{(metrics.compressionRatio * 100).toFixed(0)}%</span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
