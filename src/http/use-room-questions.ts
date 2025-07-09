import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from './consts/query-keys'
import type { GetRoomQuestionsResponse } from './types/get-room-questions-response'

export function useRoomQuestions(roomId: string) {
  return useQuery({
    queryKey: [...QUERY_KEYS.getRoomQuestions(roomId)],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`
      )
      const result: GetRoomQuestionsResponse = await response.json()

      return result
    },
  })
}
