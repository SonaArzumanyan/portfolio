export type GeminiGenerateContentResponse = {
    candidates?: Array<{
      content?: {
        parts?: Array<{
          text?: string;
        }>;
      };
    }>;
  };
  
  export type GeminiErrorResponse = {
    error?: {
      code: number;
      message: string;
      status: string;
    };
  };