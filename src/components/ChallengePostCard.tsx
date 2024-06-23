import React from "react";
import Image from "next/image";
import CommentLikeSection from "./ChallengePostCommentLikeSection";
import OverflowMenu from "./ChallengeOverflowMenu";

interface PostCardProps {
  userName: string;
  userAvatar: string;
  postTime: string;
  postContent: string;
  postImages: string[];
  commentsCount: number;
  likesCount: number;
}

const PostCard: React.FC<PostCardProps> = ({
  userName,
  userAvatar,
  postTime,
  postContent,
  postImages,
  commentsCount,
  likesCount,
}) => {
  const handleEdit = () => {
    console.log("Edit clicked");
  };

  const handleDelete = () => {
    console.log("Delete clicked");
  };

  return (
    <div className="mx-auto max-w-lg overflow-hidden rounded-xl bg-white shadow-md">
      <div className="flex items-center p-4">
        <Image
          className="rounded-full"
          src={userAvatar}
          alt={`${userName}'s avatar`}
          width={40}
          height={40}
        />
        <div className="ml-4 flex flex-1 items-center justify-between">
          <div>
            <div className="text-lg font-medium">{userName}</div>
            <div className="text-sm text-gray-500">{postTime}</div>
          </div>
          <OverflowMenu onEdit={handleEdit} onDelete={handleDelete} />
        </div>
      </div>
      <div className="px-4">
        <p className="text-gray-700">{postContent}</p>
        <div className="mt-4 flex flex-col sm:flex-row">
          {postImages.map((image, index) => (
            <Image
              key={index}
              className="rounded-md object-cover"
              src={image}
              alt={`Post image ${index + 1}`}
              width={300}
              height={128}
            />
          ))}
        </div>
      </div>
      <div className="px-4 py-2">
        <CommentLikeSection
          initialComments={commentsCount}
          initialLikes={likesCount}
        />
      </div>
    </div>
  );
};

export default PostCard;
