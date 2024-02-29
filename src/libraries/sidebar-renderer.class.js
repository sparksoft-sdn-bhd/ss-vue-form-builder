
export default class SidebarRenderer {
    runnerId = '' // to recognize which components are triggering...
    component = null
    data = {}
    color = ''

    constructor(
        runnerId,
        component,
        data = {},
        color = ''
    ) {
        this.runnerId = runnerId
        this.component = component
        this.data = data
        this.color = color
    }
}
