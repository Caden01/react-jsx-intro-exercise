const App = () => {
  return (
    <div>
      <Tweet
        name="Caden"
        username="caden01"
        date={new Date().toDateString()}
        message="This is a test"
      />
      <Tweet
        name="Pam"
        username="pam25"
        date={new Date().toDateString()}
        message="Hello testtt"
      />
      <Tweet
        name="Jacob"
        username="jacob04"
        date={new Date().toDateString()}
        message="Woww testtt"
      />
    </div>
  );
};
