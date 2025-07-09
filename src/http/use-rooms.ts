import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from './consts/query-keys'
import type { GetRoomsResponse } from './types/get-rooms-response'

export function useRooms() {
  return useQuery({
    queryKey: [...QUERY_KEYS.getRooms],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_PUBLIC_API_BASE_URL}/rooms`
      )
      const result: GetRoomsResponse = await response.json()

      return result
    },
  })
}
