import React, { useState } from 'react';
import genericAvatar from '../../assets/images/generic-avatar.png';

const defaultUserData = {
  userName: '',
  fullName: '',
};

const UploadForm = () => {
  const [file, setFile] = useState();
  const [userData, setUserData] = useState(defaultUserData);
  const [userFileURL, setUserFileURL] = useState(undefined);

  React.useEffect(() => {
    console.log('file :: ', file);
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
    console.log('submitted');
    setUserData(defaultUserData);
    setUserFileURL(undefined);
  };

  const handleChange = (e) => {
    setUserData((prevState) => ({ ...prevState, [e.target.name]: e.target.value.trim() }));
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
            setFile(e.target.files[0]);
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
