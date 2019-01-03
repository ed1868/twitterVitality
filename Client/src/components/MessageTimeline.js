import React from "react";
import MessageList from "../containers/MessageList";
import UserAside from "../components/UserAside";

const MessageTimeline = props => {
  return (
    <div className="row">
      <UserAside
        profileImageUrl={props.url}
        username={props.username}
      />
      <MessageList />
    </div>
  );
};

export default MessageTimeline;
