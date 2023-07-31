const MyComponents = (props) => {
  const { name, children } = props;

  return (
    <>
      {/* props, children */}
      {/* <div>안녕하세요 제 이름은 {props.name}</div>
      <div>children값은 {props.children} </div> */}

      <div>안녕하세요 제 이름은 {name}</div>
      <div>children값은 {children}</div>
    </>
  );
};

export default MyComponents;
