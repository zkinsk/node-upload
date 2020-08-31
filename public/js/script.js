// (() => {
document.getElementById('file-input').onchange = () => {
  const files = document.getElementById('file-input').files;
  const file = files[0];
  if (file == null) {
    return alert('No file selected.');
  }
  getSignedRequest(file);
};
// })();

async function getSignedRequest(file) {
  const queryUrl = `/api/sign-s3?file-name=${file.name}&file-type=${file.type}`;
  try {
    const response = await fetch(queryUrl, {
      method: 'GET',
    });
    const data = await response.json();
    upLoadFile(file, data.signedRequest, data.url);
  } catch (err) {
    console.log(err);
    alert('Could not get signed URL.');
  }
}

async function upLoadFile(file, signedRequest, url) {
  try {
    const response = await fetch(signedRequest, {
      method: 'PUT',
      body: file,
    });
    console.log('upload: ', response.status);
    document.getElementById('preview').src = url;
    document.getElementById('avatar-url').value = url;
  } catch (err) {
    console.log(err);
    alert('Could not upload file');
  }
}
