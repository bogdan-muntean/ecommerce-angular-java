import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import {
  faUser,
  faShoppingCart,
  faSearch,
  faHeart,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

// Only load icons actually used in the app to reduce bundle size
export const fontAwesomeIcons: IconDefinition[] = [
  faUser,
  faShoppingCart,
  faSearch,
  faHeart,
  faSignOutAlt
];