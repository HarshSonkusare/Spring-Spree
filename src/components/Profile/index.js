import React, { useState } from "react";
import styled from "styled-components";
import { QRCode } from "react-qrcode-logo";

import Offer from "./Offer";
import offerData from "./offerData";

import Field from "./Field";
import { useAuth } from "../../hooks/auth";
import { Navigate } from "react-router-dom";

import { BsCheck2Circle, BsXCircle } from "react-icons/bs";
import { useEventPayment } from "../../hooks/payment";
import Loader from "../Loader";

const BoolIcon = ({ value }) => {
  if (value) return <BsCheck2Circle color="green" />;
  return <BsXCircle color="red" />;
};

const Profile = () => {
  const { user, updateUser } = useAuth();
  const [eventToPay, setEventToPay] = useState([]);
  const eventPayment = useEventPayment();
  const total = eventToPay.reduce((pre, cur) => pre + cur.registration_fee, 0);

  const qrData = JSON.stringify({
    _id: user?._id,
    name: user?.name,
    email: user?.email,
  });

  const toggleToCart = (event) => (e) => {
    if (e.target.checked) setEventToPay([...eventToPay, event]);
    else setEventToPay(eventToPay.filter((x) => x.key !== event.key));
  };

  const checkout = async () => {
    const event = {
      key: eventToPay.map((e) => e.key).join(","),
      registration_fee: total,
      name: "Spring Spree 22 - Special events",
    };
    const res = await eventPayment.makePayment({ event, specialEvent: 1 });
    if (res) {
      await updateUser();
      alert("Payment successfull");
    }
  };

  if (!user) return <Navigate to="/" replace />;

  return (
    <Container>
      <Loader loading={eventPayment.loading} />
      <ProfileContainer>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="mt-5 pt-5">
              <div className="bg">
                <div className="row z-depth-3 card-actual">
                  <div className="col-md-4 left-card rounded-left">
                    <div className="card-block d-flex align-items-center justify-content-center">
                      <QRCode
                        size={200}
                        style={{ borderRadius: "2px" }}
                        bgColor="#f1f1f1"
                        value={qrData}
                        logoImage="/images/springspree22_74.png"
                        qrStyle="dots"
                        logoOpacity={0.2}
                        logoWidth={170}
                        eyeRadius={[
                          [10, 10, 0, 10],
                          [10, 10, 10, 0],
                          [10, 0, 10, 10],
                        ]}
                      />
                    </div>
                  </div>
                  <div className="col-md-8 rounded-right card-right">
                    <h3 className="heading mt-3 text-center">Profile</h3>
                    <hr className="hr" />

                    <div className="row field-wrapper">
                      <Field label="name">{user?.name}</Field>
                      <Field label="email">{user?.email}</Field>
                      <Field label="mobile">{user?.mobile}</Field>
                      <Field label="gender">{user?.gender}</Field>
                      <Field label="college">{user?.college}</Field>
                      <Field label="level">{user?.level}</Field>
                      <Field label="paid for event">
                        <BoolIcon value={user?.paidForEvent} />
                      </Field>
                      <Field label="Accomodation">
                        <BoolIcon value={user?.paidForAccomodation} />
                      </Field>
                      <Field label="Proshow 1">
                        <BoolIcon value={user?.paidForProshow1} />
                      </Field>
                      <Field label="Proshow 2">
                        <BoolIcon value={user?.paidForProshow2} />
                      </Field>
                      <Field label="Proshow 3">
                        <BoolIcon value={user?.paidForProshow3} />
                      </Field>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProfileContainer>

      <Billing>
        <h1> Other offers </h1>
        <hr className="hr" />
        <div className="billing-wrapper">
          {offerData
            .filter((e) => !user?.[e.slug])
            .map(({ key, name, tag, registration_fee }) => (
              <Offer
                key={key}
                name={name}
                tag={tag}
                price={registration_fee}
                onChange={toggleToCart({ key, registration_fee })}
              />
            ))}

          <div className="pay">
            <h4> Amount to be paid: &#8377;{total} </h4>
            <button onClick={checkout} className="btn btn-outline-dark mt-3">
              Complete Payment
            </button>
          </div>
        </div>
      </Billing>


      <button className="btn btn-outline-info logout"> Logout </button>
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  background: url("/images/springspree22_69.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .logout{
    display: block;
    margin: auto;
    margin-bottom: 20px;
  }

  .hr {
    width: 10%;
    margin: 0 auto 20px auto;
    height: 5px;
    color: var(--c);
    background-color: var(--c);
    opacity: 1;
  }
`;

const Billing = styled.div`
  margin-bottom: 25px;

  .pay {
    margin-top: 30px;
    text-align: center;
  }

  > h1 {
    text-align: center;
    margin-top: 100px;
  }

  > p {
    text-align: center;
  }

  .billing-wrapper {
    border: 2px solid white;
    width: 75%;
    margin: auto;
    padding: 1.3rem;
    background-color: white;
    color: black;
    border-radius: 20px;
  }
`;

const ProfileContainer = styled.div`
  @media (max-width: 650px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    /* margin-bottom: 20px; */
  }
  width: 100%;
  /* height: 100vh; */

  .field-wrapper {
    margin-bottom: 20px;
  }

  .field {
    margin-bottom: 0;
  }

  .field-value {
    margin-top: 10px;
  }

  .registration-img {
    width: 100px;
    height: auto;
  }

  .anchor {
    color: blue;
  }

  .inner-cards {
    max-height: 250px;
    overflow-y: auto;
  }

  .inner-card {
    display: flex;
    border: 2px solid gray;
    margin-bottom: 20px;
  }

  .inner-card-content {
    margin-left: 30px;
  }

  .card-actual {
    background-color: white;
    border-radius: 20px;
    box-shadow: 0px 0px 20px 20px #4e1d4e;
  }

  .card-right {
    color: black;
  }

  .profile-picture {
    margin-top: 20px;
    border-radius: 150px;
  }

  .left-card {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    padding: 1rem;
    div {
      width: 100%;
      height: 100%;
      border: 5px double black;
    }
    img {
      width: 80%;
    }
    border-right: 1px solid gray;
    @media (max-width: 650px) {
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      border-bottom-left-radius: 0;
    }
  }
`;
