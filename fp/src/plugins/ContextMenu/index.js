export default {
    install(Vue) {
        if (this.installed) {
            return
        }
        this.install = true
        this.caller = null
        Vue.prototype.$contextMenu = {
            EventBus: new Vue(),
            show({ event, items }) {
                const caller = event.target;
                if (caller != this.caller) {
                    this.caller = caller
                    this.EventBus.$emit('show', { items, caller })
                } else {
                    this.close()
                    this.caller = null
                }

                console.log('show', items)
            },
            close() {
                this.EventBus.$emit('close')
                console.log('hide')
            }
        }
    }
}