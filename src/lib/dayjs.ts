import lib from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import ptBR from 'dayjs/locale/pt-br'

lib.extend(relativeTime)
lib.locale(ptBR)

export const dayjs = lib
