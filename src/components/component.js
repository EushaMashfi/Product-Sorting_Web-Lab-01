import products from "./ProductList";
import React from "react";

function Component() {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  function increamentVotes(a) {
    a.votes = a.votes + 1;
    forceUpdate();
  }

  products.sort((a, b) => b.votes - a.votes);

  return (
    <div >
      <body align="center">

        <div className="pageTitle">
          <font size="15"><b>Popular Products</b></font>
        </div>

        <div >
          {products.map((eachProduct) => (

            <div className="flowright" >



                <div>
                  <img src={eachProduct.productImageUrl} width="400" height="600" className="borderRadius"></img>,
                </div>
              
                <div className="bookdetails" align="left">

                  <p>
                    <b><font size="7">{eachProduct.title}</font></b>
                  </p>


                  <p>
                    <font size="6">{eachProduct.description}</font>
                  </p>


                  <br/>

                  <p>
                    <font size="5">
                      Submitted By:{" "}
                      <img src={eachProduct.submitterAvatarUrl}  height="40"></img>
                    </font>
                  </p>

           

                  <p>
                    <font size="5">
                      Vote Count:{"  "}
                    </font>

                    <button onClick={increamentVotes.bind(this, eachProduct)}>
                      <font size="5">{eachProduct.votes}</font>
                    </button>
                  </p>
      
                </div>
              </div>
              
              
              
          ))}
        </div>
      </body>
    </div>
  );
}

export default Component;