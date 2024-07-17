const legendStore = [{
    manufacturer: "BMW",
    model: "Z4 LCI E89",
    bp_1_price: 10000,
    bp_2_price: 15000,
    bp_3_price: 20000,
    bp_4_price: 25000,
    bp_5_price: 30000,
    total: this.bp_1_price + this.bp_2_price + this.bp_3_price + this.bp_4_price + this.bp_5_price
}, {
    manufacturer: "Chevrolet",
    model: "Camaro LT",
    bp_1_price: 10000,
    bp_2_price: 15000,
    bp_3_price: 20000,
    bp_4_price: 25000,
    bp_5_price: 30000,
    total: this.bp_1_price + this.bp_2_price + this.bp_3_price + this.bp_4_price + this.bp_5_price
}, {
    manufacturer: "Lotus",
    model: "Elise Sprint 220",
    bp_1_price: 33000,
    bp_2_price: 50000,
    bp_3_price: 67000,
    bp_4_price: 84000,
    bp_5_price: 101000,
    total: this.bp_1_price + this.bp_2_price + this.bp_3_price + this.bp_4_price + this.bp_5_price  
}]

function searchManufacturer(car) {
    return car.manufacturer === "BMW"
}

const carSearch = legendStore.find(searchManufacturer)

console.log(carSearch)
