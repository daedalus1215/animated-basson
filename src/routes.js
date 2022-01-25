import NotFoundPage from './pages/NotFoundPage.vue';
import CategoryListPage from './pages/todo/CategoryListPage.vue';
import TodoPage from './pages/todo/TodoPage.vue';

const routes = [
    { path: '/', redirect: '/categories' },
    { path: '/categories', component: CategoryListPage },
    { path: '/category/:id', component: TodoPage },
    { path: '/:notFound(.*)', component: NotFoundPage }
    // {
    //     path: '/coaches/:id',
    //     component: CoachDetail,
    //     props: true,
    //     children: [
    //         { path: 'contact', component: ContactCoach } // /coaches/c1/contact
    //     ]
    // },
    // { path: '/register', component: CoachRegistation },
    // { path: '/requests', component: RequestsReceived },
    // { path: '/auth', component: UserAuth },
]

export default routes;