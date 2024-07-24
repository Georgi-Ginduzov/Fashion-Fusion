import PropTypes from 'prop-types';

export default function NavigationItem({ label, href }) {
    if (label === undefined || href === undefined) {
        return null; // or some fallback UI
    }

    return (
        <li>
            <a href={href}>{label}</a>
        </li>
    );
}

NavigationItem.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};