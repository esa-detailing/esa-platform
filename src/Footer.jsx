export default function Footer() {
  return (
    <footer
      style={{
        marginTop: '50px',
        padding: '20px 0',
        borderTop: '2px solid gold',
        background: '#111',
        color: '#ccc',
        textAlign: 'center',
        fontSize: '14px'
      }}
    >
      <p>© {new Date().getFullYear()} ESA Detailing — Liverpool</p>
      <p>Premium Mobile & Unit-Based Detailing</p>
    </footer>
  )
}
