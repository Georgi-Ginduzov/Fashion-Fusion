import Navigation from "./navigation/Navigation";
import Slideshow from "./slideshow/Slideshow";

import "./Header.module.css";
import "./navigation/Navigation.module.css";
import "./slideshow/Slideshow.css";

export default function Header() {
	const imagePaths = [
		"/images/carousel/woman.jpg",
		"/images/carousel/man.jpg",
		"/images/carousel/children.jpg",
	];

	return (
		<header>
			<Navigation />

			<Slideshow imagePaths={imagePaths} />

			
		</header>
	);
}
