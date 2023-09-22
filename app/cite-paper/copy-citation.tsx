'use client'
import { Button } from '@/components/ui/button'

export function CopyCitation({ citation }: { citation: string }) {
  return (
    <Button
      variant="outline"
      onClick={() => {
        // TODO: Show a toast message
        navigator.clipboard.writeText(citation)
      }}
    >
      Copy
    </Button>
  )
}
