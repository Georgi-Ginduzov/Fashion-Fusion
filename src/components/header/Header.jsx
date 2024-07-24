import Navigation from "./navigation/Navigation";
import Slideshow from "./slideshow/Slideshow";


import "./Header.module.css";
import "./navigation/Navigation.module.css";
import "./slideshow/Slideshow.css";

export default function Header() {
	

	return (
		<header>
			<Navigation />
			<Slideshow images={["C:/Users/Asus/source/repos/Fashion_Fusion/FashionFusion/src/assets/images/slideshow-images/woman-fashion.jpg", "../../assets/images/slideshow-images/men-s-fashion.jpg", "../../assets/images/slideshow-images/children.jpg"]} />

            
		</header>
	);
}
