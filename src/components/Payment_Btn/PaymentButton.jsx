import React, { useState } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
function PayPalButtonComponent() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container text-center">
      <PayPalScriptProvider
        options={{
          "client-id":
            "AZfQliXJ9leHCsFi4VjsHej10D0GhWgOopbSbP-3py9z2T0PbyXGzZL0U-MlszfPVTGVJURR24mnIX2F",
        }}
      >
        <div
          style={{ backgroundColor: "rgb(120, 72, 244)" }}
          className="btn  w-100  text-white"
          onClick={() => setShowModal(true)}
        >
          Book Now
        </div>

        {/* PayPal Modal */}
        {showModal && (
          <div
            className="modal fade show"
            style={{ display: "block" }}
            tabIndex="-1"
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="mx-auto"
                    onClick={() => setShowModal(false)}
                    style={{
                      border: "none",
                      backgroundColor: "inherit",
                      fontSize: "30px",
                    }}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <PayPalButtons
                    style={{ layout: "vertical" }}
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            description: "This book is desire 100$",
                            amount: {
                              currency_code: "USD",
                              value: "100",
                            },
                          },
                        ],
                        application_context: {
                          shipping_preference: "NO_SHIPPING",
                        },
                      });
                    }}
                    onApprove={(data, actions) => {
                      return actions.order.capture().then(function(details) {
                        const { payer } = details;
                        console.log("Payment successful!");
                      });
                    }}
                    onError={(error) => {
                      console.error("Error processing payment:", error);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {/* End PayPal Modal */}
      </PayPalScriptProvider>
    </div>
  );
}

export default PayPalButtonComponent;
