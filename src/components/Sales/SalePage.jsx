import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchProducts } from '../../redux/features/products/productSlice'
import { addToCart } from '../../redux/features/cart/cartSlice'
import ProductCard from '../Cards/ProductCard'

function SalePage() {
  const dispatch = useDispatch()
  const { items, status, error } = useSelector((state) => state.products)

  useEffect(() => {
    if (status === 'idle') dispatch(fetchProducts())
  }, [dispatch, status])

  if (status === 'loading')
    return <div style={{ padding: 24 }}>Loading sales...</div>
  if (status === 'failed')
    return <div style={{ padding: 24 }}>Error: {error}</div>

  const discounted = items.filter((p) => {
    const dp = p.discount_price ?? p.discont_price
    return dp !== null && dp !== undefined && Number(dp) > 0
  })

  return (
    <section style={{ padding: 24, maxWidth: 1440, margin: '0 auto' }}>
      <h2>All sales</h2>

      {discounted.length === 0 ? (
        <p>No sale products found.</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gap: 16,
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          }}
        >
          {discounted.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onAdd={() => dispatch(addToCart(p))}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default SalePage
