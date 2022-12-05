import './write.css'
import React from "react";


export default function Write() {
  return (
    <div className='write'>
      <img className='writeImg' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ebb844d9-5471-461a-bfde-a00ea8b326cb/d9pjiau-ed23f8e6-a071-4aaf-8705-622e31fc1def.png/v1/fill/w_1192,h_670,q_70,strp/wallpaper_deathly_hallows__harry_potter__by_suzigan96_d9pjiau-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcL2ViYjg0NGQ5LTU0NzEtNDYxYS1iZmRlLWEwMGVhOGIzMjZjYlwvZDlwamlhdS1lZDIzZjhlNi1hMDcxLTRhYWYtODcwNS02MjJlMzFmYzFkZWYucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.omQUFsHNOvNi68tXGB_cp3edXrJ7Uc5eWS9oMmflrmI" alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
              <label htmlFor="fileInput">
                <i class="writeIcon fa-solid fa-plus"></i>
              </label>
              <input type="file" id="fileInput"/>
              <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
              <textarea placeholder='Tell your story...' type="text" className='writeInput writeText'></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
