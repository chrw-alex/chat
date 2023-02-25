import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img src='https://media.istockphoto.com/id/1369508766/photo/beautiful-successful-latin-woman-smiling.jpg?s=170667a&w=0&k=20&c=Qg_c17d0FvJuVo0a-P5BvbSgGu87LlWl0gvHhxyriTc=' alt='user' />
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p>Hello</p>
        <img src='https://media.istockphoto.com/id/1369508766/photo/beautiful-successful-latin-woman-smiling.jpg?s=170667a&w=0&k=20&c=Qg_c17d0FvJuVo0a-P5BvbSgGu87LlWl0gvHhxyriTc=' alt='user' />
      </div>
    </div>
  )
}

export default Message