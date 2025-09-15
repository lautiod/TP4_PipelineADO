import React, { useEffect, useState } from 'react'

export default function App() {
  const [health, setHealth] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/api/health')
      .then(r => r.json())
      .then(setHealth)
      .catch(err => setError(err.message))
  }, [])

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
      <h1>- Interfaz -</h1>
      <p>Consumo del endpoint <code>/api/health</code> del backend:</p>
      {error && <p style={{color:'crimson'}}>Error: {error}</p>}
      {health ? (
        <pre style={{ background:'#f6f8fa', padding: 12, borderRadius: 8 }}>
{JSON.stringify(health, null, 2)}
        </pre>
      ) : (
        !error && <p>Cargando...</p>
      )}
    </main>
  )
}
