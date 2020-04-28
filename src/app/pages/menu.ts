export interface NavItem {
    icon: string;
    disabled: boolean;
    title: string;
    route: string;
    parent: boolean;
    children: NavItem[];
  }

export const menu = {
    list: [
        {
          icon: 'home',
          title: 'Home',
          parent: true,
          route: ''
        },
        // {
        //   icon: 'person',
        //   title: 'Users',
        //   parent: true,
        //   children: [
        //     {icon: '', title: 'Startups', parents: false,  route: '/dashboard/users/startups'},
        //     {icon: '', title: 'Mentors', parents: false,  route: '/dashboard/users/mentors'},
        //     {icon: '', title: 'Program Admins', parents: false,  route: '/dashboard/users/program-admins'},
        //     {icon: '', title: 'Id8 Admins', parents: false,  route: '/dashboard/users/id8-admins'},
        //   ]
        // },
        // {
        //   icon: 'forum',
        //   title: 'Forums',
        //   parent: true,
        //   children: [
        //     { icon: '', title: 'Channels', parent: false, route: '/dashboard/forums/channels'},
        //     { icon: '', title: 'Topics', parent: false, route: '/dashboard/forums/topics'},
        //     { icon: '', title: 'Posts', parent: false, route: '/dashboard/forums/posts'},
        //   ]
        // },
        {
          icon: 'dns',
          title: 'Program Mgmt',
          parent: true,
          children: [
            { icon: '', title: 'Programs', parent: false, route: '/dashboard/program-management/programs'},
            // { icon: '', title: 'Program Applications', parent: false, route: '/dashboard/program-management/program-applications'},
            // { icon: '', title: 'Solutions', parent: false, route: '/dashboard/program-management/solutions'},
          ]
        },
        {
          icon: 'mail',
          title: 'News & Articles',
          parent: true,
          route: '/dashboard/news-and-articles'
        },
      ],
}