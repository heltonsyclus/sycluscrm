
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',name:'Dashboard', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', name:'Login', component: () => import('pages/Login.vue') },
      { path: '/problema-login', name:'ProblemaLogin', component: () => import('pages/ProblemaLogin.vue') }
    ]
  },
  {
    path: '/atividade',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'Atividade', component: () => import('pages/Atividade.vue') },
    ]
  },

  {
    path: '/projeto',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'projeto', component: () => import('pages/Projeto.vue') },
    ]
  },
  {
    path: '/cliente',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'cliente', component: () => import('pages/Cliente.vue') },
    ]
  },
  {
    path: '/ocorrencia',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'ocorrencia', component: () => import('pages/Ocorrencia.vue') },
    ]
  },
  {
    path: '/agenda',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'agenda', component: () => import('pages/Agenda.vue') },
    ]
  },
  {
    path: '/workflow',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'workflow', component: () => import('pages/WorkFlow.vue') },
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
