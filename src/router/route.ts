export const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/layouts/index.vue'),
    redirect: '/home/blog',
    name: 'home',
    children: [
      {
        name: 'blog',
        path: 'blog',
        component: () => import('@/views/Blog/index.vue')
      },
      {
        name: 'about',
        path: 'about',
        component: () => import('@/views/About/index.vue')
      },
      {
        name: 'article',
        path: 'blog/:id',
        component: () => import('@/views/Blog/article.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/layouts/AdminLayouts.vue'),
    redirect: '/admin/edit-info',
    children: [
      {
        name: 'edit-article',
        path: 'edit-article',
        meta: {
          name: '文章管理'
        },
        component: () => import('@/views/Admin/EditArticle.vue')
      },
      {
        name: 'edit-tags',
        path: 'edit-tags',
        meta: {
          name: '标签管理'
        },
        component: () => import('@/views/Admin/EditTags.vue')
      },
      {
        name: 'edit-info',
        path: 'edit-info',
        meta: {
          name: '个人资料'
        },
        component: () => import('@/views/Admin/EditInfo.vue')
      },
      {
        name: 'edit-links',
        path: 'edit-links',
        meta: {
          name: '友情链接'
        },
        component: () => import('@/views/Admin/EditLinks.vue')
      }
    ]
  }
]
