import React, { useState } from "react";
import Image from "next/image";
import PostLike from "./ChallengePostLikeButton";

interface CommentLikeSectionProps {
  initialComments: number;
  initialLikes: number;
}

const CommentLikeSection: React.FC<CommentLikeSectionProps> = ({
  initialComments,
  initialLikes,
}) => {
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState("");
  const [commentsCount, setCommentsCount] = useState(initialComments);

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleCommentUpload = () => {
    if (!comment.trim()) return;

    console.log("Comment uploaded:", comment);
    setComment("");
    setCommentsCount(commentsCount + 1);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommentUpload();
    }
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div>
      <div className="flex items-center justify-between px-2 py-4">
        <div
          className="flex cursor-pointer items-center"
          onClick={toggleComments}
        >
          <Image
            className="mr-2"
            src="/challenge/comment.png"
            alt="Comments"
            width={24}
            height={24}
          />
          <span>{commentsCount} Comments</span>
        </div>
        <PostLike initialLikes={initialLikes} />
      </div>
      {showComments && (
        <div className="px-4 py-1">
          <div className="mb-2 rounded-md bg-gray-100 p-2">
            <p>Comment 1</p>
            <p>Comment 2</p>
            {/* 실제 코멘트 데이터로 대체 */}
          </div>
        </div>
      )}
      <div className="flex items-center rounded-md border border-gray-300 p-2">
        <input
          className="w-full border-none focus:outline-none"
          type="text"
          placeholder="Write comment"
          value={comment}
          onChange={handleCommentChange}
          onKeyPress={handleKeyPress}
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
  );
};

export default CommentLikeSection;
