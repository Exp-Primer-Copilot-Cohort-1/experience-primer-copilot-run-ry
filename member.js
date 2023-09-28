function skillMember() {
  return {
    name: 'skillMember',
    path: 'skillMember',
    component: () => import('@/views/skill/member'),
    meta: {
      title: '技能成员',
      icon: 'skill',
      roles: ['admin', 'editor']
    }
  }
} 