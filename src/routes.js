import {
  Home,
  About,
  Exhibitions,
  Contact,
} from './pages';

export default {
  home: { path: '/', name: 'Home', component: Home },
  exhibitions: { path: '/exhibitions', name: 'Exhibitions', component: Exhibitions },
  about: { path: '/about', name: 'About', component: About },
  contact: { path: '/contact', name: 'Contact', component: Contact },
};
