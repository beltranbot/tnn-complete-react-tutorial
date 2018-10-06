const initState = {
  posts: [
    {id: '1', title: 'Squirtle laid an egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, pariatur itaque molestias similique debitis incidunt eum magni reprehenderit! Laborum qui sed beatae facere odit, consectetur numquam eaque sequi illo inventore.'},
    {id: '2', title: 'Charmander laid an egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, pariatur itaque molestias similique debitis incidunt eum magni reprehenderit! Laborum qui sed beatae facere odit, consectetur numquam eaque sequi illo inventore.'},
    {id: '3', title: 'a Helix Fossil was an egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, pariatur itaque molestias similique debitis incidunt eum magni reprehenderit! Laborum qui sed beatae facere odit, consectetur numquam eaque sequi illo inventore.'}
  ]
}

const rootReducer = (state = initState, action) => {
  return state
}

export default rootReducer