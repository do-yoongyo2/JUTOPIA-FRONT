import React, { useState } from "react";
import Image from "next/image";

interface PostLikeProps {
  initialLikes: number;
}

const PostLike: React.FC<PostLikeProps> = ({ initialLikes }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(initialLikes);

  const handleLikeClick = () => {
    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <div className="flex cursor-pointer items-center" onClick={handleLikeClick}>
      <Image
        className="mr-2"
        src={liked ? "/challenge/like2.png" : "/challenge/like1.png"}
        alt="Likes"
        width={24}
        height={24}
      />
      <span>{likesCount} Likes</span>
    </div>
  );
};

export default PostLike;
