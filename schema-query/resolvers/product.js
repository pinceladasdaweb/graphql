const discountedPrice = (product) => {
  if (product.discount) {
    return product.price * (1 - product.discount)
  }

  return product.price
}

module.exports = { discountedPrice }
