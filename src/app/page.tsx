"use client";

import { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function Home() {
  const seated = useRef<HTMLDivElement>(null);
  const wormy = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (seated.current) {
      const animation = lottie.loadAnimation({
        container: seated.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/sited_lottie.json",
      });

      return () => animation.destroy(); // Cleanup on component unmount
    }
  }, []);

  useEffect(() => {
    if (wormy.current) {
      const animation = lottie.loadAnimation({
        container: wormy.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/wormy.json",
      });

      return () => animation.destroy(); // Cleanup on component unmount
    }
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col justify-between">
      <header className="flex justify-between items-center p-6 sm:p-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
          Task Tracker
        </h1>
        <div>
          <a
            href="/login"
            className="text-sm sm:text-base text-gray-800 dark:text-white font-semibold py-2 px-4 bg-teal-500 hover:bg-teal-600 rounded-full transition-all"
          >
            Login
          </a>
        </div>
      </header>

      <main className="flex-1 flex justify-center items-center p-6 sm:p-12">
        <div className="text-center max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Organize Your Tasks, Stay on Track!
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
            Keep your day on track with our task tracker. Create tasks, set
            priorities, and never miss a deadline.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="/signup"
              className="text-white text-lg bg-teal-500 hover:bg-teal-600 py-3 px-6 rounded-full transition-all"
            >
              Get Started
            </a>
            <a
              href="/features"
              className="text-teal-500 text-lg font-semibold hover:text-teal-600 py-3 px-6 border border-teal-500 rounded-full transition-all"
            >
              Explore Features
            </a>
          </div>

          {/* Lottie animations */}
          <div className="mt-12">
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* Lottie seated animation */}
              <div ref={seated} style={{ width: 300, height: 300 }} />
              <h3
                style={{
                  marginLeft: "20px",
                  color: "white",
                  backgroundColor: "gold",
                  fontSize: "23px",
                  fontFamily: "cursive",
                }}
              >
                track your tasks at your convinence, anytime, anywhere
              </h3>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  marginLeft: "20px",
                  color: "white",
                  backgroundColor: "#14b8a6",
                  fontSize: "23px",
                  fontFamily: "cursive",
                }}
              >
                Quickly jot down ideas, much like swiftly removing an annoying
                worm from an apple
              </h3>
              {/* Lottie worm in aaple animation */}
              <div ref={wormy} style={{ width: 500, height: 500 }} />
            </div>
          </div>
          <div>
            {/* Giving this headng a style */}
            <h3
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                color: "#14b8a6",
                textAlign: "center",
                margin: "40px 0",
                padding: "20px",
                borderTop: "3px solid #14b8a6",
                textTransform: "uppercase",
                letterSpacing: "2px",
                textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              {" "}
              ? WHY CHOOSE A TASK TRACKER ?{" "}
            </h3>
            <div>
              {/* 3 flex cards containting the benefits of using a task tracker */}
              <div className="flex justify-center gap-6">
                {/* flex card 1 */}
                <div
                  className="bg-white p-6 rounded-lg shadow-md w-full sm:w-1/3"
                  style={{
                    borderTop: "4px solid gold",
                    transition: "transform 0.2s ease-in-out",
                    cursor: "pointer",
                  }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-teal-500">
                    Benefit i
                  </h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>

                {/* flex card 2 */}
                <div
                  className="bg-white p-6 rounded-lg shadow-md w-full sm:w-1/3"
                  style={{
                    borderTop: "4px solid #14b8a6",
                    transition: "transform 0.2s ease-in-out",
                    cursor: "pointer",
                  }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-teal-500">
                    Benefit ii
                  </h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>

                {/* flex card 3 */}
                <div
                  className="bg-white p-6 rounded-lg shadow-md w-full sm:w-1/3"
                  style={{
                    borderTop: "4px solid gold",
                    transition: "transform 0.2s ease-in-out",
                    cursor: "pointer",
                  }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-teal-500">
                    Benefit iii
                  </h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-teal-500 text-white py-8 text-center">
        <p className="text-sm sm:text-base">
          Developed by Mark Drah. A VisionMark Production.
        </p>
        <p className="text-sm sm:text-base">
          © {new Date().getFullYear()} Task Tracker. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
