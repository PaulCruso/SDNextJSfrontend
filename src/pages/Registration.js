import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../slices/authSlice";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import * as yup from "yup";

const SignUpValidationSchema = yup.object({
  email: yup.string().email().required("Please Enter Your Email"),
  password: yup
      .string()
      .matches(
          /^(?=.*[!@#$%^&*])/g,
          "Must be at least 8 characters and use at least one special character."
      )
      .min(8)
      .required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
      useFormik({
        initialValues: initialValues,
        validationSchema: SignUpValidationSchema,
        onSubmit: (values) => {
          dispatch(registerUser(values));
        },
      });

  useEffect(() => {
    if (auth._id) {
      navigate("/account");
    }
  }, [auth._id, navigate]);

  return (
      <>
        <Header />
        <div className="page-content bg-black">
          <section className="content-inner contact-form-wraper style-1">
            <div className="container" style={{ minHeight: "93vh" }}>
              <div className="row align-items-center">
                {/* Contact Information Section */}
                <div className="col-xl-5 col-lg-5 m-b30 mt-5">
                  <div className="info-box">
                    <div className="info">
                      <h2>Contact Information</h2>
                    </div>
                    <div className="widget widget_about">
                      <div className="widget widget_getintuch">
                        <ul>
                          <li>
                            <i className="fa fa-phone"></i>
                            <span>+14129513882</span>
                          </li>
                          <li>
                            <i className="fa fa-envelope"></i>
                            <span>
                                                info@secondarydao.com
                                                <br />
                                                secondarydao@gmail.com
                                            </span>
                          </li>
                          <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>
                                                6 State RD, Suite 117
                                                <br />
                                                Mechanicsburg, PA 17050-7957
                                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="social-box dz-social-icon style-3">
                      <h6>Our Socials</h6>
                      <ul className="social-icon">
                        <li>
                          <a
                              className="social-btn"
                              target="_blank"
                              rel="noreferrer"
                              href="https://www.linkedin.com/company/SecondaryDAO/"
                          >
                            <i className="fa-brands fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a
                              className="social-btn"
                              target="_blank"
                              rel="noreferrer"
                              href="https://www.twitter.com/secondaryDAO"
                          >
                            <i className="fa-brands fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                              className="social-btn"
                              target="_blank"
                              rel="noreferrer"
                              href="https://www.youtube.com/channel/UCbAfRu0udgs0Ur2LsVXLbyA"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Sign Up Form */}
                <div className="col-xl-7 col-lg-7 mt-5">
                  <div className="contact-box mt-5">
                    <div className="card">
                      <div className="card-body">
                        <div className="mb-4">
                          <h2 className="mb-0">Sign Up</h2>
                          <p className="mb-0 font-18 text-primary">
                            Enter your personal details below:
                          </p>
                        </div>
                        <form className="dzForm" onSubmit={handleSubmit}>
                          <div className="row">
                            {/* Email */}
                            <div className="col-xl-6 mb-3 mb-md-4">
                              <input
                                  type="email"
                                  className="form-control"
                                  id="email"
                                  name="email"
                                  placeholder="Email Address"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.email}
                              />
                              {errors.email && touched.email && (
                                  <div className="error">{errors.email}</div>
                              )}
                            </div>
                          </div>
                          {/* Password */}
                          <div className="col-xl-6 mb-3 mb-md-4">
                            <label htmlFor="password"></label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-control"
                                placeholder="Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {errors.password && touched.password && (
                                <div className="error">{errors.password}</div>
                            )}
                          </div>
                          {/* Submit Button */}
                          <div className="row">
                            <div className="col-xl-12 mb-3 mb-md-4 mt-3">
                              <button
                                  name="submit"
                                  type="submit"
                                  value="Submit"
                                  className="btn btn-primary"
                                  style={{ position: "unset" }}
                              >
                                {auth.rigisterStatus === "pending"
                                    ? "Submitting..."
                                    : "Submit Now"}
                              </button>
                              {auth.registerStatus === "rejected" ? (
                                  <p>{auth.registerError}</p>
                              ) : null}
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </>
  );
};

export default Registration;