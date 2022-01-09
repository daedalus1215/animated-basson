import NotFoundPage from './pages/NotFoundPage.vue';
import TodoListPage from './pages/todo/TodoListPage.vue';

const routes = [
    { path: '/', redirect: '/list' },
    { path: '/list', component: TodoListPage },
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
    { path: '/:notFound(.*)', component: NotFoundPage }
]

export default routes;