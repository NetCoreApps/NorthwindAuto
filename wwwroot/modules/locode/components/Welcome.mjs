import { ref } from "vue"
import { useClient } from "@servicestack/vue"
import { QueryOrders } from "../../../mjs/dtos.mjs"

const Welcome = {
    template: `<div class="pl-4">
        <h1 class="text-3xl">
            Welcome to Northwind Locode
        </h1>
        <div v-if="lastOrders.length" class="mt-8">
            <h3 class="text-xl mb-4">Here are your last {{lastOrders.length}} orders:</h3>
            <HtmlFormat class="max-w-screen-md" :value="lastOrders" />
        </div>
    </div>
`,
    setup() {
        const lastOrders = ref([])
        const client = useClient()
        client.api(new QueryOrders({ orderBy:'-Id', take:5, fields:'Id,CustomerId,OrderDate,Freight' }), { jsconfig: 'edv' })
            .then(api => {
                if (api.succeeded) {
                    lastOrders.value = api.response.results
                }
            })
        return { lastOrders }
    }
}
export default Welcome