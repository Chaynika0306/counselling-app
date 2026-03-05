import { useNavigate } from "react-router-dom";
import { getToken, getUser, logout } from "../utils/auth";
import PageWrapper from "../components/PageWrapper";
import "../App.css";

function Home() {
  const navigate = useNavigate();
  const token = getToken();
  const user = getUser();

  if (!token) {
    navigate("/login");
    return null;
  }

  return (
    <PageWrapper>
      <div className="container center">
        <h1>Life Mentor</h1>

        <p className="welcome">
          Welcome, <strong>{user?.name}</strong>
        </p>

        <div className="card">

          {/* ✅ CLIENT OPTIONS */}
          {user?.role === "client" && (
            <>
              <button
                className="primary-btn"
                onClick={() => navigate("/book-session")}
              >
                Book a Session
              </button>

              <button
                className="primary-btn"
                onClick={() => navigate("/my-appointments")}
              >
                My Appointments
              </button>

              <button
                className="primary-btn"
                onClick={() => navigate("/rate-session")}
              >
                ⭐ Rate Your Experience
              </button>
            </>
          )}

          {/* ✅ COUNSELLOR OPTIONS */}
          {user?.role === "counsellor" && (
            <>
            <button
              className="primary-btn"
              onClick={() => navigate("/dashboard")}
            >
              View Appointments
            </button>

             <button
                className="primary-btn"
                onClick={() => navigate("/ratings")}
              >
                ⭐ View Ratings
              </button>
            </>
          )}

          {/* 👤 ABOUT COUNSELLOR (Visible to ALL roles) */}
          <button
            className="primary-btn"
            onClick={() => navigate("/profile")}
          >
            About Counsellor
          </button>

          {/* 🔴 LOGOUT */}
          <button
            className="logout-btn"
            onClick={() => {
              logout();
              navigate("/login");
            }}
          >
            Logout
          </button>

        </div>
      </div>
    </PageWrapper>
  );
}

export default Home;