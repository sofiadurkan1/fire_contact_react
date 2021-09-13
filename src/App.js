import Form from './components/form/Form';
import Contacts from './components/contacts/Contacts';
import { useState } from 'react';
import { addInfo, updateInfo } from './utils/functions';
import { ToastContainer } from 'react-toastify';

const initialValues = {
  username: '',
  phoneNumber: '',
  gender: 'NO INFO',
};

function App() {
  const [info, setInfo] = useState(initialValues);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    //console.log('submit', info);
    if (info.id) {
      updateInfo(info);
    } else {
      addInfo(info);
    }
    setInfo(initialValues);
  };

  const editHandler = (id, username, phoneNumber, gender) => {
    setInfo({ id, username, phoneNumber, gender });
  };
  return (
    <div className="App">
      <Form
        className="form"
        info={info}
        setInfo={setInfo}
        handleFormSubmit={handleFormSubmit}
      />
      <Contacts className="contacts" editHandler={editHandler} />
      <ToastContainer />
    </div>
  );
}

export default App;