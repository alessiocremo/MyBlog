import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSmall">React & Node</span>
            <span className="headerTitleLarge">Blog</span>
        </div>
        <img className="headerImg" src="https://media-assets.wired.it/photos/6374ae955995f8be91bddd0a/16:9/w_1280,c_limit/harry-potter-deathly-hallows-part-2-key-art.jpg.adapt.crop16x9.575p.jpg" alt="random pic" />
    </div>
  )
}
