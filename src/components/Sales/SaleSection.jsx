import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSaleProducts } from '../../redux/features/sale/saleSlice'
import { NavLink } from 'react-router-dom'
import styles from './SaleSection.module.css'

function SaleSection() {
  const dispatch = useDispatch()
  const saleState = useSelector((state) => state.sale) || {
    items: [],
    loading: false,
    error: null,
  }
  const { items, loading, error } = saleState

  useEffect(() => {
    dispatch(fetchSaleProducts())
  }, [dispatch])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  const top4 = items.slice(0, 4)

  return (
    <section className={styles.sale}>
      <div>
        {' '}
        <h2>Sale</h2>
        <div className={styles.line}></div>
        <NavLink to="/sales">
          <button className={styles.btnSale}>All sales</button>
        </NavLink>
      </div>
      <div>
        {top4.map((p) => (
          <div key={p.id}>
            {/*ProductCard product={p}/> */}
            <pre>{p.title}</pre>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SaleSection
