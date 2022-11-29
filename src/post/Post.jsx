import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img src="https://c4.wallpaperflare.com/wallpaper/95/92/857/harry-potter-hermione-granger-emma-watson-hd-wallpaper-preview.jpg" alt="HermionePic" className="postImg"/>
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                You belong with me
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>

    </div>
  )
}
