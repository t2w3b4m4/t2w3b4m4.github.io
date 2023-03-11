import {
  Home,
  About,
  Exhibitions,
  Tools,
} from './pages';

export default {
  home: { path: '/', name: 'Home', component: Home },
  about: { path: '/about', name: 'About', component: About },
  exhibitions: { path: '/exhibitions', name: 'Exhibitions', component: Exhibitions },
  tools: { path: '/__tools__', name: 'Tools', component: Tools },
};
