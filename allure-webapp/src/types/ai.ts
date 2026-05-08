export interface AIResponseChunk {
  candidates: {
    content: {
      parts: {
        text: string;
      }[];
    };
  }[];
}

export type OnChunkCallback = (text: string) => void;
export type OnFinishCallback = () => void;
