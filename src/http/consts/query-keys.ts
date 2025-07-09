export const QUERY_KEYS = {
  getRooms: ['get-rooms'],
  getRoomQuestions: (roomId: string) => ['get-room-questions', roomId] as const,
} as const
