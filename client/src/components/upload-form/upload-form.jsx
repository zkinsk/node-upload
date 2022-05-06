import React, { useState, useEffect } from 'react';
import { getSignedRequest } from '../../utils/aws';
import genericAvatar from '../../assets/images/generic-avatar.png';

const defaultUserData = {
  userName: '',
  fullName: '',
};

const UploadForm = ({ onAddUser }) => {
  const [file, setFile] = useState();
  const [userData, setUserData] = useState(defaultUserData);
  const [userFileURL, setUserFileURL] = useState(undefined);

  useEffect(() => {
    if (file) {
      getSignedRequest(file[0]).then((res) => {
        const urlObj = new URL(res.url);
        const imageUrl = `${urlObj.origin}${urlObj.pathname}`;
        setUserFileURL(imageUrl);
      });
    }
  }, [file]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    Object.values(userData).forEach((value) => {
      if (value.trim() === '' || !value) {
        valid = false;
      }
    });
    if (!valid) return;
    onAddUser({ ...userData, imageUrl: userFileURL });
    setUserData(defaultUserData);
    setUserFileURL(undefined);
  };

  const handleChange = (e) => {
    setUserData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  return (
    <form id="new-user-form" className="user-form" onSubmit={handleFormSubmit}>
      <img src={userFileURL || genericAvatar} alt="user avatar" className="user-avatar" />
      <div className="file-upload-group">
        <label>Upload User Image</label>
        <input
          type="file"
          id="file-upload-input"
          onChange={(e) => {
            setFile(e.target.files);
          }}
        />
      </div>
      <div>
        <label>
          User Name:
          <input type="text" name="userName" value={userData?.userName} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          FullName:
          <input type="text" name="fullName" value={userData?.fullName} onChange={handleChange} />
        </label>
      </div>
      <button type="submit" form="new-user-form">
        Add User
      </button>
    </form>
  );
};

export default UploadForm;
