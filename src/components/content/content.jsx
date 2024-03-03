import "../content/content.css"

export default function Content() {
  return (
    <main>
      <div className="contact">
        <h1>CONTACT US</h1>
      </div>
      <div className="about">
        <p>
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.{" "}
        </p>
      </div>
      <div className="mainContent">
        <div className="fillDetails">
                  <div className="calling">
                      <div className="callingBtn">
                          <button>VIA SUPPORT CHAT</button>
                          <button>VIA CALL</button>
                      </div>
                      <div className="emailBtn">
                          <button>VIA EMAIL FORM</button>
                      </div>
          </div>
          <div className="details">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button>Submit</button>
          </div>
        </div>
        <div className="image">
          <img className="svgImage" src="/images/contentimage.svg" alt="image" />
        </div>
      </div>
    </main>
  );
}
