import type { z } from 'zod'
import type { createQuestionSchema } from './schema'

export type CreateQuestionFormData = z.infer<typeof createQuestionSchema>

export interface QuestionFormProps {
  roomId: string
}
