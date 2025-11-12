function Test1({ name, data }) {
  const style = {
    display: "flex",
    gap: "100px"
  }

  return (
    <div>
      <h1>Name : {name}</h1>
      <div style={style}>
        {
          data.map((item) => (
            <div key={item.id}>
              <h1>Name : {item.name}</h1>
              <p>age : {item.age}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Test1
