import {
  Home,
  About,
  Exhibitions,
} from './pages';

export default {
  home: { path: '/', name: 'Home', component: Home },
  exhibitions: { path: '/exhibitions', name: 'Exhibitions', component: Exhibitions },
  about: { path: '/about', name: 'About', component: About },
};
