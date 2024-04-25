import "../../styles/modern-normalize.css";
import "../../styles/style.css";
import "../../styles/components/header.css";
import "../../styles/components/hero.css";
import "../../styles/components/menu.css";
import "../../styles/components/cart.css";
import "../../styles/components/footer.css";
import "../../styles/components/mobile-nav.css";
import "../../styles/utils.css";
import showMobileNav from "../../src/utils/mobile-nav.js";
import themeChange from "../../src/utils/theme.js";
import displayProducts from "../../src/utils/displayproduct.js";


showMobileNav();
themeChange();
displayProducts();
