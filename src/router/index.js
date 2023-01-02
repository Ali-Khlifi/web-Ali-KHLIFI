import { createRouter, createWebHashHistory }from 'vue-router'

const routes = [
    { path: '/',
     name: "Dashboard",
     component: () => import ('@/components/page/Dashboard.vue')
    },
    { path: '/CV',
     name: "CV",
     component: () => import ('@/components/page/CV.vue') 
    },
    { path: '/Projets',
     name: "Projets",
     component: () => import ('@/components/page/Projets.vue')
    },
    { path: '/Blog',
     name:"Blog",
     component: () => import ('@/components/page/Blog.vue')
    },
    { path: '/Messages',
     name: "Messages",
     component: () => import ('@/components/page/Messages.vue')
    },
    
  ]
  const router = createRouter({
    //history: createWebHistory(),
    history: createWebHashHistory(),
    routes
  })
  
  router.beforeEach((to, from, next) => {
    console.log(`Navigating to: ${to.name}`);
    next();
  });

  export default router

