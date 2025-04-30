import Post from "@/types/post.type";
import RoundedPicture from "./RoundedPicture";

const UserInfo = ({ post }: { post: Post }) => {
  const {
    userInfo: { username, picture },
  } = post;

  return (
    <>
      <div className="flex flex-row items-center gap-4">
        <RoundedPicture src={picture} width={32} height={32} size="sm" />
        <span className="text-sm font-semibold text-gray-800">{username}</span>
      </div>
    </>
  );
};

export default UserInfo;
