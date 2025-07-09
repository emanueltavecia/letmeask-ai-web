import { useMutation, useQueryClient } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { QUERY_KEYS } from './consts/query-keys'
import type { CreateQuestionRequest } from './types/create-question-request'
import type { CreateQuestionResponse } from './types/create-question-response'
import type { GetRoomQuestionsResponse } from './types/get-room-questions-response'

export function useCreateQuestion(roomId: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: CreateQuestionRequest) => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      )

      const result: CreateQuestionResponse = await response.json()

      return result
    },

    onMutate: ({ question }) => {
      const questions = queryClient.getQueryData<GetRoomQuestionsResponse>([
        ...QUERY_KEYS.getRoomQuestions(roomId),
      ])

      const newQuestion = {
        id: crypto.randomUUID(),
        question,
        answer: null,
        createdAt: dayjs().toISOString(),
        isGeneratingAnswer: true,
      }

      queryClient.setQueryData<GetRoomQuestionsResponse>(
        [...QUERY_KEYS.getRoomQuestions(roomId)],
        [newQuestion, ...(questions || [])]
      )

      return { newQuestion, questions }
    },

    onError: (_error, _variables, context) => {
      queryClient.setQueryData<GetRoomQuestionsResponse>(
        [...QUERY_KEYS.getRoomQuestions(roomId)],
        context?.questions || []
      )
    },

    onSuccess: (data, _variables, context) => {
      queryClient.setQueryData<GetRoomQuestionsResponse>(
        [...QUERY_KEYS.getRoomQuestions(roomId)],
        (questions) => {
          if (!questions) {
            return questions
          }

          if (!context?.newQuestion) {
            return questions
          }

          return questions.map((question) => {
            if (question.id === context.newQuestion.id) {
              return {
                ...context.newQuestion,
                id: data.questionId,
                answer: data.answer,
                isGeneratingAnswer: false,
              }
            }
            return question
          })
        }
      )
    },
  })
}
