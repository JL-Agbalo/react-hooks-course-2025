import React, { useState } from "react";

export const LikeUnlikeButton = () => {
    const [like, setLike] = useState(false);
    const [likeCount, setLikeCount] = useState(5);

    const handleLike = () => {
        setLike(!like);
        setLikeCount(like ? likeCount - 1 : likeCount + 1);
    }


    return (
        <div>
            <h1>Like Unlike Button</h1>
            <button onClick={handleLike}>
                {like ? "Unlike" : "Like"} {likeCount}
            </button>
        </div>
    );
}
