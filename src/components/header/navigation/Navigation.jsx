import HeadingItem from "./headingItem/HeadingItem";
import NavigationItem from "./NavigationItem";

export default function Navigation() {
	return (
		<>
			<nav>
				<ul>
					<NavigationItem href="#home" label="Home" />
					<NavigationItem href="#shop/Woman" label="Woman" />
					<NavigationItem href="#shop/man" label="Man" />
					<NavigationItem href="#shop/children" label="Children" />
				</ul>

				<HeadingItem />

				<ul>
					<NavigationItem href="#aboout" label="About us" />
					<NavigationItem href="#contact" label="Contact us" />
					<NavigationItem href="#login" label="Login" />
				</ul>
			</nav>
		</>
	);
}
