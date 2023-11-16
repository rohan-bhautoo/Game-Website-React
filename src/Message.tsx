let count = 0;

function Message() {
  count++;
  return <div>{count}</div>;
}

export default Message;
