import React from "react";
import "../blocks/header/header.css";

const PlaceholderAvatar = ({ name }) => {
    const initial = name ? name.charAt(0).toUpperCase() : "?";

    return (
        <div className="header__placeholder-avatar">
            {initial}
        </div>
    )
}

export default PlaceholderAvatar;