import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './SalePage.module.css'
import { fetchSaleProducts } from '../../redux/features/sale/saleSlice'

function SalePage() {
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

  return (
    <div className={styles.allSales}>
      <h1>All sales</h1>
      <div>
        {items.map((p) => (
          <div key={p.id}>{p.title}</div>
        ))}
      </div>
    </div>
  )
}

export default SalePage
