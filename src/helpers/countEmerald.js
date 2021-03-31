export const countEmerald = (products) => {
    let emeraldValue = 10000; // it's actual maximum account value

    products.forEach(product => {
        emeraldValue-= product.cmp_fund
    });

    return emeraldValue;
}