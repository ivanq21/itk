let initialState = {
  navbar: [
    {
      link: '/profile',
      title: 'Profile'
    },
    {
      link: '/dialogs',
      title: 'Dialogs'
    },
    {
      link: '/news',
      title: 'News'
    },
    {
      link: '/music',
      title: 'Music'
    },
    {
      link: '/users',
      title: 'Users'
    },
    {
      link: '/settings',
      title: 'Settings'
    }
  ],
  friends: [
    {
      name: 'Dima',
      age: 22,
      city: 'Moskov'
    },
    {
      name: 'Nik',
      age: 34,
      city: 'SPB'
    },
    {
      name: 'Pol',
      age: 54,
      city: 'Rime'
    }

  ]
}

const sitebarReducer = (state = initialState, action) => {
  return state;
}

export default sitebarReducer;