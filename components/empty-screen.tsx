import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-4xl px-4">
      <div className="flex flex-col gap-4 rounded-lg border bg-background p-8">
        <h1 className="text-2xl font-bold text-center">
          Welcome to the Product Inventory Chatbot
        </h1>
        <p className="text-center text-muted-foreground">
          Welcome to the EY Product Inventory Chatbot. This intelligent assistant is here to provide you with expert answers and real-time information about our product inventory.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">Key Features:</h2>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li>Expert Assistance</li>
              <li>Real-Time Information</li>
              <li>User-Friendly Interaction</li>
              <li>Secure and Confidential</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">How to Start:</h2>
            <p className="text-sm text-muted-foreground">
              Simply type your questions below, and the chatbot will guide you with accurate and up-to-date responses to assist you in finding the information you need quickly and efficiently.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Example: "What products are currently in stock?" or "Can you provide details on [specific product]?"
            </p>
          </div>
        </div>
        <div className="border-t mt-4 pt-4">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> This chatbot is designed to assist with product inventory inquiries related to [Government Agency/Product Name]. For other services or support, please visit our contact page or call us at [Contact Number].
          </p>
        </div>
        <div className="border-t mt-4 pt-4">
          <p className="text-sm text-muted-foreground italic">
            Disclaimer: While the chatbot aims to provide accurate and helpful information, please consult official documents or contact our support team for formal guidance.
          </p>
        </div>
      </div>
    </div>
  )
}
