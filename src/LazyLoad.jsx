import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

const images = [
  "https://picsum.photos/id/1018/1000/600/",
  "https://picsum.photos/id/1015/1000/600/",
  "https://picsum.photos/id/1019/1000/600/",
  "https://picsum.photos/id/1016/1000/600/",
  "https://picsum.photos/id/1020/1000/600/",
  "https://picsum.photos/id/1021/1000/600/",
  "https://picsum.photos/id/1022/1000/600/",
  "https://picsum.photos/id/1023/1000/600/",
  "https://picsum.photos/id/1024/1000/600/",
  "https://picsum.photos/id/1025/1000/600/",
  "https://picsum.photos/id/1026/1000/600/",
  "https://picsum.photos/id/1027/1000/600/",
  "https://picsum.photos/id/1028/1000/600/",
  "https://picsum.photos/id/1029/1000/600/",
  "https://picsum.photos/id/1031/1000/600/",
  "https://picsum.photos/id/1032/1000/600/",
  "https://picsum.photos/id/1033/1000/600/",
  "https://picsum.photos/id/1035/1000/600/",
]

function LazyLoad() {
  return (
    <div className="lazy-load-container">
      {images.map((src, index) => (
        <div key={index} className="image-container">
          <LazyLoadImage
            alt={`Image ${index + 1}`}
            effect="blur"
            src={src}
            width="100%"
            height="100%"
            threshold={100}
          />
        </div>
      ))}
    </div>
  )
}

export default LazyLoad
