import axios from "axios";
import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom"; //!

const KEY =
  "pk_test_51KT4jfBN5vSkWHMandLe2c65ySN8YDgTV8kyjFpzqQekNC1OXnoRfNO9KVf4IRVuP5HFDfdJn21oSdO9vDeHgCRb00ANe8zDO6";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const navigate = useNavigate(); //!

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 349900,
          }
        );
        console.log(res.data);
        navigate("/success"); //!
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate]); //!

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {stripeToken ? (
        <span>Обработка. Пожалуйста подождите...</span>
      ) : (
        <StripeCheckout
          name="STORE"
          image="http://unsplash.it/375/375"
          billingAddress
          shippingAddress
          description="Итого к оплате 3499руб."
          amount={349900}
          currency="RUB"
          token={onToken}
          stripeKey={KEY}
          panelLabel="Оплатить"
        >
          <button
            style={{
              border: "none",
              width: 120,
              borderRadius: 5,
              padding: "20px",
              backgroundColor: "black",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Оплатить
          </button>
        </StripeCheckout>
      )}
    </div>
  );
};

export default Pay;
