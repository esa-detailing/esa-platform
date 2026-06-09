import './Flex.css'

export default function Flex({ children, gap = 20 }) {
  return (
    <div className="flex" style={{ gap }}>
      {children}
    </div>
  )
}
