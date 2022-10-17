import {useEffect, useState} from "react"

function Message({ size, featherCount }) {
  
  const [sizeClass, setSizeClass] = useState("");
  const [featherMessage, setFeatherMessage] = useState("Oh my! Your bird is naked!");

  useEffect(() => {
    let cname = "";
    switch (size) {
      case 'm':
        cname = "medium";
        break;
      case 'l':
        cname = 'large';
        break;
      case 'xl':
        cname = 'xlarge';
        break;
      default:
        cname = 'small';
        break;
    }
    setSizeClass(cname);
  }, [size])

  useEffect(() => {
    let message = "";
    if(featherCount === 0) {
      message = "Oh my! Your bird is naked!";
    } else {
      message = `Oh my! Your bird has ${featherCount} feathers!`
    }
    setFeatherMessage(message);
  }, [featherCount])

  return (
    <div className={`message ${sizeClass}`}>
        {featherMessage}
    </div>
  );
};

export default Message;