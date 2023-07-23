import { defineStore } from 'pinia'

export type AlertType = 'info' | 'success' | 'warning' | 'error'

export type Alert  = {
    type: AlertType,
    text: string
}

export const useAlertsStore = defineStore('alerts', {
    state: () => ({
        value: new Map<number, Alert>(),
        count: 0
    }),
    actions: {
        add (alert: Alert) {
            this.value.set(this.count, alert)
            this.count++
            this.timeout(this.count - 1)
        },

        remove (index: number): boolean  {
            return this.value.delete(index)
            
        },

        timeout (index: number) {
            setTimeout(() => {
                this.remove(index);
            }, 1e4)
        }
    },
})