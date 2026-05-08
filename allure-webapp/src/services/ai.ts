/**
 * AI Service Integration
 * 
 * To use actual Gemini or Claude API:
 * 1. Add your API key to a .env file: VITE_AI_API_KEY=your_key_here
 * 2. Update the fetch URL and headers according to the provider.
 */

import type { OnChunkCallback, OnFinishCallback } from '@/types/ai';

export const fetchAIResponseStream = async (
  prompt: string, 
  onChunk: OnChunkCallback,
  onFinish: OnFinishCallback
) => {
  const API_KEY = import.meta.env.VITE_AI_API_KEY;
  
  if (!API_KEY) {
    // Fallback to mock streaming if no API key is found
    const mockResponse = "The sound of rain has always been a conversation between the sky and the earth. In Bombay, it's more like a symphony of the streets, reflecting the city's own resilient rhythm.";
    let current = '';
    for (const char of mockResponse) {
      current += char;
      onChunk(current);
      await new Promise(resolve => setTimeout(resolve, 30));
    }
    onFinish();
    return;
  }

  // Example for Google Gemini API (Streaming)
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:streamGenerateContent?alt=sse&key=${API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();
    let fullText = '';

    if (reader) {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        const chunk = decoder.decode(value, { stream: true });
        // Gemini SSE format parsing (simplified)
        const lines = chunk.split('\n');
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.slice(6));
              const textChunk = data.candidates[0].content.parts[0].text;
              fullText += textChunk;
              onChunk(fullText);
            } catch (e) {
              // Ignore partial JSON
            }
          }
        }
      }
    }
    onFinish();
  } catch (error) {
    console.error("AI Streaming Error:", error);
    onChunk("Sorry, I encountered an error. Please check your API key.");
    onFinish();
  }
};
