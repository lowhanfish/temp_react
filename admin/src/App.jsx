import { useState } from 'react'

import { Button, Typography, Container } from "@mui/material";


import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container sx={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h3" gutterBottom>
        Halo Material UI 🚀
      </Typography>
      <Typography variant="body1">
        Kamu sudah klik tombol ini {count} kali.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: 2 }}
        onClick={() => setCount(count + 1)}
      >
        Klik Saya
      </Button>
    </Container>
  )
}

export default App
