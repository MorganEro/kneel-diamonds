import { getOrders } from "./database.js"
import { getMetals } from "./database.js"
import { getSizes } from "./database.js"
import { getStyles } from "./database.js"


const buildOrderListItem = (order) => {
    //this is the first code i added and it ends on line 14
    const metals = getMetals()
    const sizes = getSizes()
    const styles = getStyles()

// Remember that the function you pass to find() must return true/false
const foundMetal = metals.find(
    (metal) => {
        return metal.id === order.metalId
    }
)
const foundSize =sizes.find(
    (size) => {
        return size.id === order.sizeId
    }
)
const foundStyle = styles.find(
    (style) => {
        return style.id === order.styleId
    }
)
const totalCost = foundMetal.price + foundSize.price + foundStyle.price
const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})
//added a return statement because i wasnt getting any output
return `<li>
    Order #${order.id} cost ${costString}
</li>`
 /*   
    return `<li>
        Order #${order.id} was placed on ${order.timestamp}
    </li>`
    */
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}


