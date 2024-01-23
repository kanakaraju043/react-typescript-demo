import React from "react";
type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};
const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      {props.isLoggedIn ? (
        <div>
          Welcome {props.name}!. You have {messageCount} messsages
        </div>
      ) : (
        <div>Welcom guest</div>
      )}
    </div>
  );
};

export default Greet;
