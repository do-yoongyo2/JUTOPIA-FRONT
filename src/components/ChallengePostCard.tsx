import React, { useState } from "react";
import Image from "next/image";

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
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleCommentUpload = () => {
    // 코멘트 업로드 로직 추가
    console.log("Comment uploaded:", comment);
    setComment(""); // 코멘트 필드 초기화
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
        <div className="ml-4">
          <div className="text-lg font-medium">{userName}</div>
          <div className="text-sm text-gray-500">{postTime}</div>
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
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <Image
            className="mr-2"
            src="/challenge/comment.png"
            alt="Comments"
            width={24}
            height={24}
          />
          <span>{commentsCount} Comments</span>
        </div>
        <div className="flex items-center" onClick={handleLikeClick}>
          <Image
            className="mr-2 cursor-pointer"
            src={liked ? "/challenge/like2.png" : "/challenge/like1.png"}
            alt="Likes"
            width={24}
            height={24}
          />
          <span>{liked ? likesCount + 1 : likesCount} Likes</span>
        </div>
      </div>
      <div className="px-4 py-2">
        <div className="flex items-center rounded-md border border-gray-300 p-2">
          <input
            className="w-full border-none focus:outline-none"
            type="text"
            placeholder="Write comment"
            value={comment}
            onChange={handleCommentChange}
          />
          <div className="ml-2 cursor-pointer" onClick={handleCommentUpload}>
            <Image
              src="/challenge/comment-upload.png"
              alt="Upload Comment"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
