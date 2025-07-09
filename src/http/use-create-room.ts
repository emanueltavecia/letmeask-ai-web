import { useMutation, useQueryClient } from '@tanstack/react-query'
import { QUERY_KEYS } from './consts/query-keys'
import type { CreateRoomRequest } from './types/create-room-request'
import type { CreateRoomResponse } from './types/create-room-response'

export function useCreateRoom() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: CreateRoomRequest) => {
      const response = await fetch(
        `${import.meta.env.VITE_PUBLIC_API_BASE_URL}/rooms`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      )

      const result: CreateRoomResponse = await response.json()

      return result
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [...QUERY_KEYS.getRooms],
      })
    },
  })
}
