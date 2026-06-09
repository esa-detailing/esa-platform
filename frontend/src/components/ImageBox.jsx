import './ImageBox.css'

export default function ImageBox({ src, alt }) {
  return <img className="image-box" src={src} alt={alt} />
}
