import 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState } from 'react';
import {storage,db} from '../firebase'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 

const ModelBox = ({open,setOpen,opo}) => {
    const [file, setfile] = useState('')
  const onCloseModal = () => setOpen(false);
  const handlefile =(e)=>{
    e.preventDefault()
    const storageRef = ref(storage,`file/${file.name}`);
    uploadBytes(storageRef,file).then(snapshot=>{
        getDownloadURL(storageRef).then(async(url)=>{
          try {
            const docRef = await addDoc(collection(db, "myfiles"), {
              timestamp: serverTimestamp(),
                filename:file.name,
                fileURL:url,
                size:snapshot.metadata.size
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        })
    })
    setfile(null)
    setOpen(false)
    opo()
  }
  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className='text-2xl text-center'>Upload File</div>
        <div className='my-8 mx-2'>
            <input type='file' onChange={e=>setfile(e.target.files[0])}/>
        </div>
        <div className='text-right'>
            <button className='px-8 py-1 rounded-md text-[#5f6368] hover:text-[#1a73e8]' onClick={onCloseModal}>Cancel</button>
            <button className='px-8 py-1 bg-[#1a73e8] rounded-md text-[#fff]' onClick={handlefile}>Submit</button>
        </div>
      </Modal>
    </div>
  );
};

export default ModelBox