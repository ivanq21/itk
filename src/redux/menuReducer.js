let initState = [
    {icon: '☠', title: 'Dialogs', path: '/dialogs'},
    {icon: '☡', title: 'Profile', path: '/profile'},
    {icon: '☢', title: 'News', path: '/news'},
    {icon: '☣', title: 'Music', path: '/music'},
    {icon: '☤', title: 'Settings', path: '/settings'},
];

const menuReducer = (state = initState, action) => {
  return state;
}

export default menuReducer;