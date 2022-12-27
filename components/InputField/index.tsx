import { useEffect, useState } from "react";
import { useAppContext } from "../../context/app";
import styles from "./styles.module.css";

type PropsField = {
  onChange: (e: any) => void;
  onEye?: (e: any) => void;
  value: string;
  typeInp?: string;
  placeholder?: string;
  eyeStatus?: boolean;
};

export const InputField = ({
  onChange,
  value,
  typeInp = "",
  placeholder,
  eyeStatus,
  onEye,
}: PropsField) => {
  const [focused, setFocused] = useState(false);
  const [type, setType] = useState("");
  const { tenant } = useAppContext();

  useEffect(() => {
    if (typeInp == "password") {
      setType(eyeStatus ? "text" : "password");
    } else {
      setType("text");
    }
  }, [typeInp, eyeStatus]);

  return (
    <div
      className={styles.container}
      style={{
        borderColor: focused ? tenant?.mainColor : "var(--gray-color-100)",
        background: focused ? "var(--white-color)" : "var(--gray-color-100)",
      }}
    >
      <input
        className={styles.input}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />

      {typeInp == "password" && (
        <div className={styles.icon} onClick={onEye}>
          {!eyeStatus && (
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8819 18.297C15.1231 19.4126 13.0826 20.0033 10.9999 20C5.60791 20 1.12191 16.12 0.180908 11C0.610938 8.67072 1.78254 6.54289 3.52091 4.934L0.391908 1.808L1.80691 0.392998L21.6059 20.193L20.1909 21.607L16.8809 18.297H16.8819ZM4.93491 6.35C3.57591 7.58559 2.62923 9.20878 2.22291 11C2.5352 12.3665 3.16217 13.6411 4.05391 14.7226C4.94565 15.804 6.07753 16.6624 7.35946 17.2293C8.64139 17.7962 10.038 18.0561 11.438 17.9881C12.838 17.9202 14.2029 17.5264 15.4239 16.838L13.3959 14.81C12.5326 15.3538 11.5101 15.5881 10.4961 15.4744C9.48218 15.3608 8.53695 14.9059 7.81548 14.1844C7.09401 13.463 6.63914 12.5177 6.52547 11.5038C6.4118 10.4898 6.64609 9.46731 7.18991 8.604L4.93491 6.35ZM11.9139 13.328L8.67191 10.086C8.49397 10.5389 8.4521 11.034 8.55141 11.5103C8.65073 11.9867 8.88693 12.4238 9.23103 12.7679C9.57513 13.112 10.0122 13.3482 10.4886 13.4475C10.965 13.5468 11.46 13.5049 11.9129 13.327L11.9139 13.328ZM19.8069 15.592L18.3759 14.162C19.0444 13.2093 19.5203 12.1352 19.7769 11C19.5051 9.80972 18.9942 8.68714 18.2751 7.70049C17.5559 6.71384 16.6437 5.88372 15.5938 5.2606C14.5439 4.63748 13.3782 4.23436 12.1676 4.07576C10.9571 3.91716 9.72691 4.00638 8.55191 4.338L6.97391 2.76C8.22091 2.27 9.57991 2 10.9999 2C16.3919 2 20.8779 5.88 21.8189 11C21.5125 12.6657 20.8238 14.2376 19.8069 15.592ZM10.7229 6.508C11.3594 6.46866 11.997 6.56506 12.5935 6.79081C13.1899 7.01657 13.7315 7.36651 14.1825 7.81745C14.6334 8.26839 14.9833 8.81002 15.2091 9.40646C15.4348 10.0029 15.5312 10.6405 15.4919 11.277L10.7219 6.508H10.7229Z"
                fill={tenant?.mainColor}
              />
            </svg>
          )}

          {eyeStatus && (
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 0C16.392 0 20.878 3.88 21.819 9C20.879 14.12 16.392 18 11 18C5.60803 18 1.12203 14.12 0.18103 9C1.12103 3.88 5.60803 0 11 0ZM11 16C13.0395 15.9996 15.0184 15.3068 16.6129 14.0352C18.2074 12.7635 19.3229 10.9883 19.777 9C19.3213 7.0133 18.205 5.24 16.6107 3.97003C15.0163 2.70005 13.0383 2.00853 11 2.00853C8.96173 2.00853 6.98372 2.70005 5.38941 3.97003C3.79509 5.24 2.6788 7.0133 2.22303 9C2.67713 10.9883 3.7927 12.7635 5.38717 14.0352C6.98164 15.3068 8.96056 15.9996 11 16ZM11 13.5C9.80656 13.5 8.66196 13.0259 7.81805 12.182C6.97414 11.3381 6.50003 10.1935 6.50003 9C6.50003 7.80653 6.97414 6.66193 7.81805 5.81802C8.66196 4.97411 9.80656 4.5 11 4.5C12.1935 4.5 13.3381 4.97411 14.182 5.81802C15.0259 6.66193 15.5 7.80653 15.5 9C15.5 10.1935 15.0259 11.3381 14.182 12.182C13.3381 13.0259 12.1935 13.5 11 13.5ZM11 11.5C11.6631 11.5 12.299 11.2366 12.7678 10.7678C13.2366 10.2989 13.5 9.66304 13.5 9C13.5 8.33696 13.2366 7.70107 12.7678 7.23223C12.299 6.76339 11.6631 6.5 11 6.5C10.337 6.5 9.7011 6.76339 9.23226 7.23223C8.76342 7.70107 8.50003 8.33696 8.50003 9C8.50003 9.66304 8.76342 10.2989 9.23226 10.7678C9.7011 11.2366 10.337 11.5 11 11.5Z"
                fill={tenant?.mainColor}
              />
            </svg>
          )}
        </div>
      )}
    </div>
  );
};
