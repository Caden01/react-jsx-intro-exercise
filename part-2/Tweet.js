const Tweet = ({ username, name, date, message }) => {
  return (
    <div className="tweet">
      <span>{name}</span>
      <span>{username}</span>
      <span>{date}</span>
      <p>{message}</p>
    </div>
  );
};
