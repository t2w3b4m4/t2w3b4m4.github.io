import {
  Home,
  About,
  Exhibitions,
  Tools,
  ADictionaryOfColorCombinations,
} from './pages';

export default {
  home: { path: '/', name: 'Home', component: Home },
  about: { path: '/about', name: 'About', component: About },
  exhibitions: { path: '/exhibitions', name: 'Exhibitions', component: Exhibitions },
  tools: { path: '/__tools__', name: 'Tools', component: Tools },
  colors: { path: '/__colors__', name: 'A Dictionary of Color Combinations', component: ADictionaryOfColorCombinations },
};
