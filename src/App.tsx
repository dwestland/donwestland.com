import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./scss/main.scss";

function App() {
  const headerVariants = {
    offscreen: {
      opacity: 0,
      scale: 1.1,
      // x: 100,
    },
    onscreen: {
      opacity: 1,
      scale: 1,
      // x: 0,
      transition: {
        bounce: 0.5,
        delay: 0.4,
        stiffness: 100,
        type: "spring",
      },
    },
  };

  const asideVariants = {
    offscreen: {
      opacity: 0,
      scale: 0.8,
      y: 100,
    },
    onscreen: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        type: "Tween",
      },
    },
  };

  const sectionVariants = {
    offscreen: {
      opacity: 0,
      scale: 0.9,
      x: 40,
    },
    onscreen: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        delay: 0.2,
        bounce: 1.3,
        stiffness: 100,
        type: "spring",
      },
    },
  };

  const liVariants = {
    hover: {
      scale: 1.05,
      originX: 0.2,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  useEffect(() => {
    console.log(`
     ..oo8"""Y8b.._
    .88888888o.    "Yb.
  .d888P""Y8888b      "b.
 o88888    88888)       "b
d888888b..d8888P         'b
88888888888888"           8
(88DWB8888888P            8)
8888888888P               8
Y88888888P     ee        .P   “Clean code always looks like it was
 Y888888(     8888      oP     written by someone who cares.”
  "Y88888b     ""     oP"
    "Y8888o._     _.oP"         - Michael Feathers
      '""Y888boodP""'
    `);
  }, []);

  return (
    <div className="container">
      {/* Header */}
      <motion.header
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.6 }}
      >
        <motion.div variants={headerVariants}>
          <img src="/images/tech-logos.jpg" alt="Technology Logos" />
        </motion.div>
      </motion.header>

      {/* Preamble */}
      <div className="row preamble">
        <motion.aside
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.div variants={asideVariants}>
            <img src="/images/don-westland.jpg" alt="Don Westland" />
          </motion.div>
        </motion.aside>
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.div variants={sectionVariants}>
            <h1>Don Westland</h1>
            <h2>
              Full Stack & AI
              <br />
              Developer
            </h2>
            <ul>
              <motion.li
                variants={liVariants}
                whileHover={"hover"}
                whileTap={"tap"}
              >
                Email: <a href="mailto: don@westland.net">don@westland.net</a>
              </motion.li>
              <motion.li
                variants={liVariants}
                whileHover={"hover"}
                whileTap={"tap"}
              >
                GitHub:{" "}
                <a
                  href="https://github.com/dwestland"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/dwestland
                </a>
              </motion.li>
              <motion.li
                variants={liVariants}
                whileHover={"hover"}
                whileTap={"tap"}
              >
                Resume:{" "}
                <a href="./westland-resume-2025.pdf" target="blank">
                  westland-resume-2025.pdf
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </motion.section>
      </div>

      {/* Skills */}
      <div className="row-spacer">&nbsp;</div>
      <h3>Skills</h3>
      <p>
        <strong>Front End: </strong>Next.js 15 with Server Actions & App Router,
        TypeScript, React Hooks & Classes, React Native, JavaScript, Redux,
        Redux-Toolkit, Saga, React Query, RegEx, HTML, SCSS DevOps: Docker, AWS,
        EC2, RDS, S3, CloudFront, Linux security & administration
        <br />
        <strong>Backend: </strong>Node, Express, SSR, Python (Django, Flask),
        Nginx, Authentication, Database Administration (Postgres, MySQL, SQL,
        SQLite, MongoDB) ORMs (Prisma, Pg, Sequelize, Mongoose), Cloudflare,
        CloudFront, PM2, bash scripting, Jest
        <br />
        <strong>Team: </strong>Team Lead, Jira, Gitflow, Scrum, Agile, code
        reviews
      </p>
      <p>
        <strong>AI Skills: </strong>Retrieval-Augmented Generation (RAG) with
        Large Language Model (LLM). Cursor, GitHub Copilot, OpenAI API, Advanced
        Prompt Engineering, Vector Database (Pinecone, ChromaDB), LangChain,
        Python, Jupyter Notebook, Colab
      </p>
      <div className="row-spacer">&nbsp;</div>

      {/* Demand Force */}
      <div className="row">
        <motion.aside
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.div variants={asideVariants}>
            <img src="/images/internet-brands-logos.jpg" alt="Don Westland" />
          </motion.div>
        </motion.aside>
        <aside></aside>
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.div variants={sectionVariants}>
            <h2>Telemedicine</h2>
            <h3>
              Develop HIPAA medical applications for the healthcare industry
            </h3>
            <p>
              Create applications for doctor to patient communications. This is
              the Campaign Studio, it can design and build targeted email
              campaigns. Also provides fully-integrated automation tools like
              appointment reminders and two-way texting. This video shows some
              of the development work done on the app.
            </p>
            <div className="video-responsive">
              <iframe
                width="853"
                height="480"
                src={"https://www.youtube.com/embed/l_CLE2uUEAY"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
          </motion.div>
        </motion.section>
      </div>
      <div className="row-spacer">&nbsp;</div>

      {/* Ai Inspire Me */}
      <div className="row">
        <motion.aside
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.div variants={asideVariants}>
            <img src="/images/ai-inspire-me.jpg" alt="AI Inspire Me" />
          </motion.div>
        </motion.aside>
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.div variants={sectionVariants}>
            <h2>AI Inspire Me.com</h2>
            <h3>An app to give you inspirational messages</h3>
            <p>
              A fun app using OpenAI's GPT-3.5 Turbo API. The app gives you
              inspirational messages about the things you do through out your
              day.
            </p>
            <ul>
              <motion.li
                variants={liVariants}
                whileHover={"hover"}
                whileTap={"tap"}
              >
                Website:{" "}
                <a
                  href="https://www.aiinspireme.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  AI Inspire Me
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </motion.section>
      </div>
      <div className="row-spacer">&nbsp;</div>

      {/* Beach Cam */}
      <div className="row">
        <motion.aside
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.div variants={asideVariants}>
            <img
              src="/images/beach-cam-website.jpg"
              alt="Venice Beach Cam Website"
            />
          </motion.div>
        </motion.aside>
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.div variants={sectionVariants}>
            <h2>Beach Cam</h2>
            <h3>Streaming Live from Venice, California</h3>
            <p>
              For over 20 years, Beach Cam has been streaming live from Venice
              Beach. One of the first webcams on the Internet. Beach Cam has
              over a million visitors a year!
            </p>
            <ul>
              <motion.li
                variants={liVariants}
                whileHover={"hover"}
                whileTap={"tap"}
              >
                Website:{" "}
                <a
                  href="https://www.westland.net/beachcam/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Venice Beach Cam
                </a>
              </motion.li>
            </ul>
            <div className="video-section-footer">
              <a
                href="https://www.westland.net/beachcam/"
                rel="noreferrer"
                target="_blank"
              >
                <div className="video-link-wrapper">
                  <img
                    id="image"
                    src="https://live4.brownrice.com/cam-images/westland.jpg"
                    alt="Click for live Venice Beach Cam"
                  />
                </div>
              </a>
            </div>
          </motion.div>
        </motion.section>
      </div>
      <div className="row-spacer">&nbsp;</div>

      {/* CSS Menu */}
      <div className="row">
        <motion.aside
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.div variants={asideVariants}>
            <img src="/images/css-menu-website.jpg" alt="CSS menu on Codepen" />
          </motion.div>
        </motion.aside>
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.div variants={sectionVariants}>
            <h2>CSS Menu</h2>
            <h3>Responsive, SEO friendly menu with no JavaScript</h3>
            <p>
              This is a CSS only, dropdown horizontal nav bar that uses a simple
              HTML nested unordered list. It supports nested lists, three deep.
              It also has a responsive mobile style bottom nav with a hamburger
              menu button. Works without interfering with your JavaScript or
              framework.
            </p>
            <ul>
              <motion.li
                variants={liVariants}
                whileHover={"hover"}
                whileTap={"tap"}
              >
                Website:{" "}
                <a
                  href="https://codepen.io/dwestland/pen/PowXbLM"
                  target="_blank"
                  rel="noreferrer"
                >
                  CSS Only Menu
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </motion.section>
      </div>
      <div className="row-spacer">&nbsp;</div>

      {/* Westland Productions */}
      <div className="row">
        <motion.aside
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.div variants={asideVariants}>
            <img
              src="/images/westland-productions-website.jpg"
              alt="Don Westland"
            />
          </motion.div>
        </motion.aside>
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.div variants={sectionVariants}>
            <h2>Video Production</h2>
            <h3>Cinematographer, editor, color, sound &amp; motion graphics</h3>
            <ul>
              <motion.li
                variants={liVariants}
                whileHover={"hover"}
                whileTap={"tap"}
              >
                Website:{" "}
                <a
                  href="https://www.westlandproductions.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  WestlandProductions.com
                </a>
              </motion.li>
            </ul>
            <p>
              Passion for video production. Produce documentaries and travel
              videos. Over a million views on YouTube!
            </p>
          </motion.div>
        </motion.section>
      </div>
      <div className="row-spacer">&nbsp;</div>

      {/* USMC */}
      <div className="row">
        <motion.aside
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.div variants={asideVariants}>
            <img src="/images/marine-corps-pics.jpg" alt="Marine Corps" />
          </motion.div>
        </motion.aside>
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.div variants={sectionVariants}>
            <h2>U.S.M.C.</h2>
            <h3>United States Marine Corps Reserve</h3>
            <p>
              Helicopter Mechanic and Crew Chief
              <br />
              E-4, Honorable Discharge
            </p>
          </motion.div>
        </motion.section>
      </div>
      <div className="row-spacer">&nbsp;</div>
      <footer>
        <p>&copy; Don Westland {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
