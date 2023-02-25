const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='find a user...' />
      </div>
      <div className='userChat'>
        <img src='https://media.istockphoto.com/id/1369508766/photo/beautiful-successful-latin-woman-smiling.jpg?s=170667a&w=0&k=20&c=Qg_c17d0FvJuVo0a-P5BvbSgGu87LlWl0gvHhxyriTc=' alt='user' />
        <div className='userChatInfo'>
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search 