import React, { useRef, useState, useEffect } from "react";

export default function UseRef() {
  // eg1
  const inpuRef = useRef();

  const focusInput = () => {
    inpuRef.current.focus();
  };

  //   eg2
  const [sec, setSec] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSec((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  //   eg3
  const [newProduct, setNewProduct] = useState(true);
  const [imgURL, setImgURL] = useState("");

  const imageRef = useRef(0);
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const prview = URL.createObjectURL(file);
      setImgURL(prview);
      setNewProduct(false);
    }
  };

  return (
    <div>
      {/* eg1 */}
      <nav>
        <input type="text" ref={inpuRef} placeholder="enter name" />
        <button onClick={focusInput}>Focus btton</button>
      </nav>
      {/* eg2 */}
      <nav>
        <p>time={sec}</p>
        <button onClick={() => clearInterval(intervalRef.current)}>stop</button>
      </nav>
      {/* eg3 */}
      <nav>
        <input
          type="file"
          ref={imageRef}
          accept="image/*"
          hidden
          onChange={handleChange}
        />
        {newProduct ? (
          <div className="image" onClick={() => imageRef.current.click()}>
            uploading img
          </div>
        ) : (
          <img
            className="org-image"
            src={imgURL}
            onClick={() => imageRef.current.click()}
          />
        )}
      </nav>
    </div>
  );
}
