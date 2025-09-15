import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'mini-backend',
    timestamp: new Date().toISOString()
  })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Backend escuchando en http://localhost:${PORT}`)
})
