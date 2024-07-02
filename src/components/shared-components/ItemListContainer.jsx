const ItemListContainer = props => {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl ">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1544472991-1324437fe348?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Comprar ahora</button>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
