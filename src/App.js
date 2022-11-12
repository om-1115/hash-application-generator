import { useState } from "react";
import "./style/app.css";
import crypto from "crypto-js";

const App = () => {
  const [plain_text, setPlainText] = useState("");
  // const [aes_hashed_text, setAesHashedText] = useState("");
  const [md5_hashed_text, setMd5HashedText] = useState("");
  const [sha512_hashed_text, setSha512HashedText] = useState("");
  const [sha256_hashed_text, setSha256HashedText] = useState("");
  const [sha3_hashed_text, setSha3HashedText] = useState("");

  // submit handler
  const onSubmit = (e) => {
    e.preventDefault();

      // md5
      setMd5HashedText(
        crypto.MD5(plain_text).toString()
    );

    // sha512
    setSha512HashedText(
        crypto.SHA512(plain_text).toString()
    );

    // sha256
    setSha256HashedText(
        crypto.SHA256(plain_text).toString()
    );

    //sha3
    setSha3HashedText(
        crypto.SHA3(plain_text).toString()
    );
  };

  return (
    <div className="App">
      <h1>Hash Application Generator</h1>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-content">
          <div className="form-group">
            <label>Sample text</label>
            <input
              type="text"
              placeholder="Enter any text"
              value={plain_text}
              onChange={(e) => setPlainText(e.target.value)}
            />
            {
    md5_hashed_text ? (
        <div className="form-group">
            <label>md5</label>
            <div className="hashed-data-content">
                <input type='text' readOnly value={md5_hashed_text} />
                {/* <button type="button" onClick={() => copyToClipboard(md5_hashed_text)}>copy</button> */}
            </div>
        </div>
    ) : null
}

{
    sha512_hashed_text ? (
        <div className="form-group">
            <label>SHA512</label>
            <div className="hashed-data-content">
                <input type='text' readOnly value={sha512_hashed_text} />
                {/* <button type="button" onClick={() => copyToClipboard(sha512_hashed_text)}>copy</button> */}
            </div>
        </div>
    ) : null
}

{
    sha256_hashed_text ? (
        <div className="form-group">
            <label>SHA256</label>
            <div className="hashed-data-content">
                <input type='text' readOnly value={sha256_hashed_text} />
                {/* <button type="button" onClick={() => copyToClipboard(sha256_hashed_text)}>copy</button> */}
            </div>
        </div>
    ) : null
}

{
    sha3_hashed_text ? (
        <div className="form-group">
            <label>SHA3</label>
            <div className="hashed-data-content">
                <input type='text' readOnly value={sha3_hashed_text} />
                {/* <button type="button" onClick={() => copyToClipboard(sha3_hashed_text)}>copy</button> */}
            </div>
        </div>
    ) : null
}
          </div>

          <div className="form-group">
            <button className="submit-btn" type="submit">
              Generate hashed
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default App;
