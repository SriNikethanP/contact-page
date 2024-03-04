import Button from "../button/button";
import "../content/content.css";
import Input from "../input/input";
import { MdOutlineMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";

export default function Content() {
  return (
    <main>
      <div className="main">

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
              <Button
                text="VIA SUPPORT CHAT"
                icon={<MdOutlineMessage fontSize="24px" />}
              />
              <Button text="VIA CALL" icon={<MdCall fontSize="24px" />} />
            </div>
            <div className="emailBtn">
              <Button
                isOutline={true}
                text="VIA EMAIL FORM"
                icon={<MdOutlineMessage fontSize="24px" />}
              />
            </div>
          </div>
          <div className="details">
            <Input type="Name" />
            <Input type="E-Mail" />
            <Input type="TEXT" />
            <div className="submitBtn">
              <Button text="SUBMIT"/>
            </div>
          </div>
        </div>
        <div className="image">
          <img
            className="svgImage"
            src="/images/contentimage.svg"
            alt="image"
          />
        </div>
      </div>
      </div>
    </main>
  );
}
