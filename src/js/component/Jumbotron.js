import React from 'react';
function Jumbotron() {
  return (
    <div className="container mt-4">
    <div className="jumbotron bg-light p-5 rounded-lg"> 
      <h1 className="display-4">A Warm Welcome!</h1>
      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus eros vel ante ultricies aliquet. Vestibulum aliquam sapien augue, sit.</p>
      <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
    </div>
    </div>
  );
};
export default Jumbotron;