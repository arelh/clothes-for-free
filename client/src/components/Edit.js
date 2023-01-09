import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Edit() {
  const [productInfo, setProductInfo] = useState([]);

  const [detailsObj, setDetailsObj] = useState({});
  //   const [isLoading, setIsLoading] = useState(false);
  const [errorMes, setErrorMes] = useState(null);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // setIsLoading(true);
        const { data } = await axios.get(
          `http://localhost:5002/clothesForFree/products/${params.id}`

          // `http://localhost:5000/api/calls/${params.callId}`
        );
        console.log(data);
        setProductInfo(data);
        // setIsLoading(false);
      } catch (e) {
        setErrorMes(e.message);
      }
    };
    fetchData();
  }, [params.id]);
  const handlerSubmit = async () => {
    try {
      console.log(detailsObj);
      //   setIsLoading(true);
      const { data } = await axios.patch(
        `http://localhost:5002/clothesForFree/products/update/${params.id}`,
        detailsObj
      );
      let user= JSON.parse(window.localStorage.getItem('user'));
      console.log(user._id);
      let id=user._id

      //   setIsLoading(false);
      navigate(`/productUser/${id}`);
    } catch (e) {
      //   setErrorMes(e.message);
    }
  };
  return (
    <div className="ec main editProduct">
      <h1 className="titleEdit">ערוך פריט</h1>
      <div className="ec card-group mb-10">
        {/* {isLoading && <h1 className="spinner">Spinner</h1>} */}
        {errorMes && <h2>{errorMes}</h2>}
        {productInfo && (
          <div className="ec mb-10">
            <div className="ec card mb-10 p-3">
              <p>
                {" "}
                סוג בגד -{" "}
                <input
                  placeholder={productInfo.kind}
                  onChange={({ target: { value } }) => {
                    setDetailsObj((prev) => {
                      const updateState = { ...prev };

                      updateState.kind = value;
                      return updateState;
                    });
                  }}
                ></input>
              </p>

              <p>
                {" "}
                מידה -{" "}
                <input
                  placeholder={productInfo.size}
                  onChange={({ target: { value } }) => {
                    setDetailsObj((prev) => {
                      const updateState = { ...prev };

                      updateState.size = value;
                      return updateState;
                    });
                  }}
                ></input>
              </p>
              <p>
                {" "}
                צבע -{" "}
                <input
                  placeholder={productInfo.color}
                  onChange={({ target: { value } }) => {
                    setDetailsObj((prev) => {
                      const updateState = { ...prev };

                      updateState.color = value;
                      return updateState;
                    });
                  }}
                ></input>
              </p>
              <p>
                {" "}
                עונה -{" "}
                <input
                  placeholder={productInfo.season}
                  onChange={({ target: { value } }) => {
                    setDetailsObj((prev) => {
                      const updateState = { ...prev };

                      updateState.season = value;
                      return updateState;
                    });
                  }}
                ></input>
              </p>
              <p>
                {" "}
                מין הלובש -{" "}
                <input
                  placeholder={productInfo.gender_wear}
                  onChange={({ target: { value } }) => {
                    setDetailsObj((prev) => {
                      const updateState = { ...prev };

                      updateState.gender_wear = value;
                      return updateState;
                    });
                  }}
                ></input>
              </p>
              <p>
                {" "}
                תמונה-{" "}
                <input
                  placeholder={productInfo.image}
                  onChange={({ target: { value } }) => {
                    setDetailsObj((prev) => {
                      const updateState = { ...prev };

                      updateState.image = value;
                      return updateState;
                    });
                  }}
                ></input>
              </p>

              <button
                className="ec btn btn-primary btn-block mb-4"
                onClick={handlerSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Edit;
