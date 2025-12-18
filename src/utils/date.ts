import { formatDistance } from "date-fns"

export function relativeTime(dateString: Date) {
    const now = new Date()
    return formatDistance(dateString, now, {
        addSuffix: true
    })
}