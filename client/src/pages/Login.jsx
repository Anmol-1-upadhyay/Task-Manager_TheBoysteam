import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../redux/slices/api/authApiSlice";
import { toast } from "sonner";
import { setCredentials } from "../redux/slices/authSlice";
import Loading from "../components/Loader";
import bgImage from './image.png'; // Correct import statement

const Login = () => {
  const { user } = useSelector((state) => state.auth);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const submitHandler = async (data) => {
    try {
      const result = await login(data).unwrap();
      dispatch(setCredentials(result));
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message || error.message);
    }
  };

  useEffect(() => {
    user && navigate("/dashboard");
  }, [user]);

  useEffect(() => {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const animation1 = document.getElementById('animation1');
    const animation2 = document.getElementById('animation2');
    const animation3 = document.getElementById('animation3');

    emailInput.addEventListener('focus', () => {
      animation1.style.display = "none";
      animation3.style.display = "block";
      animation2.style.display = "none";
    });

    passwordInput.addEventListener('focus', () => {
      animation1.style.display = "none";
      animation2.style.display = "block";
      animation3.style.display = "none";
    });

    const showAnimation1 = () => {
      animation1.style.display = "block";
      animation2.style.display = "none";
      animation3.style.display = "none";
    };

    emailInput.addEventListener('blur', showAnimation1);
    passwordInput.addEventListener('blur', showAnimation1);

    return () => {
      emailInput.removeEventListener('focus', () => {
        animation1.style.display = "none";
        animation3.style.display = "block";
        animation2.style.display = "none";
      });
      passwordInput.removeEventListener('focus', () => {
        animation1.style.display = "none";
        animation2.style.display = "block";
        animation3.style.display = "none";
      });
      emailInput.removeEventListener('blur', showAnimation1);
      passwordInput.removeEventListener('blur', showAnimation1);
    };
  }, []);

  return (
    <div style={styles.wrapper}>
      <div style={styles.bg}></div> {/* Background animation */}
      <div style={styles.body}>
        <div style={styles.container}>
          <div style={styles.card}>
            <div style={styles.cartoon}>
              <img src='https://i.ibb.co/98gpLCQ/l1.png' alt='' id='animation1' style={styles.image} />
              <img src='https://i.ibb.co/Vq5j4Vg/l2.png' alt='' id='animation2' style={{ ...styles.image, display: 'none' }} />
              <img src='https://i.ibb.co/Y0jsj90/l3.png' alt='' id='animation3' style={{ ...styles.image, display: 'none' }} />
            </div>
            <form onSubmit={handleSubmit(submitHandler)} style={styles.form}>
              <div style={styles.inputGroup}>
                <input
                  type='email'
                  placeholder='example@gmail.com'
                  id='email'
                  {...register("email", { required: "Email Address is required!" })}
                  style={styles.input}
                />
              </div>
              <div style={styles.inputGroup}>
                <input
                  type='password'
                  placeholder='Enter your password'
                  id='password'
                  {...register("password", { required: "Password is required!" })}
                  style={styles.input}
                />
              </div>
              <div style={styles.buttonContainer}>
                <button type='submit' style={styles.button}>
                  {isLoading ? <Loading /> : 'Login'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Inline CSS Styles
const styles = {
  wrapper: {
    position: 'relative',
    minHeight: '100vh',
    overflow: 'hidden',
    background: `url(${bgImage}) no-repeat center center fixed`, // Use imported image
    backgroundSize: 'cover',
  },
  bg: {
    animation: 'slide 3s ease-in-out infinite alternate',
    backgroundImage: 'linear-gradient(-60deg, #6c3 50%, #09f 50%)',
    bottom: 0,
    left: 0,
    opacity: 0.5,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: -1,
  },
  body: {
    fontFamily: "arial",
    margin: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    color: "#333",
  },
  container: {
    width: "100%",
    maxWidth: "400px",
  },
  card: {
    width: "100%",
    backgroundColor: "#91b2bf",
    padding: "40px",
    borderRadius: "12px",
    border: "1px solid #a7ddf5",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center items horizontally
  },
  cartoon: {
    marginBottom: "35px",
    width: "200px",
    height: "200px",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  form: {
    width: '100%', // Ensure form takes full width of its container
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center items horizontally
  },
  inputGroup: {
    width: "100%",
    marginBottom: "14px",
    display: 'flex',
    justifyContent: 'center',
  },
  input: {
    padding: "16px",
    border: "none",
    borderRadius: "5px",
    transition: "border-color 0.3s ease-in-out",
    outline: "none",
    color: "#333",
    backgroundColor: "#f4f4f4",
    width: "100%", // Ensure input takes full width of its container
    maxWidth: "100%", // Maintain max width
    boxSizing: 'border-box', // Ensure padding does not affect width
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  },
  button: {
    backgroundColor: "#2d6476",
    color: "#fff",
    padding: "16px 10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out",
    fontSize: "16px",
    textTransform: "uppercase",
    fontWeight: "600",
    letterSpacing: "1px",
    width: "100%", // Ensure button takes full width of its container
    maxWidth: "200px", // Set a max width for the button if needed
  },
};

// Keyframes animation definition
const keyframes = `
  @keyframes slide {
    0% {
      transform: translateX(-25%);
    }
    100% {
      transform: translateX(25%);
    }
  }
`;

// Add keyframes to the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = keyframes;
document.head.appendChild(styleSheet);

export default Login;
