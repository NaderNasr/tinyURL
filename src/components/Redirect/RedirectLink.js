import { Box } from "@material-ui/core";
import { collection, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import UseAnimations from "react-useanimations";
import { db } from "../../firebase";
import loading2 from 'react-useanimations/lib/loading2'



const RedirectLink = () => {
  const { shortHash } = useParams()
  const collectionReference = collection(db, 'users');
  const [document, setDocument] = useState([]);

  useEffect(() => {
    const getLink = async () => {
      const data = await getDocs(collectionReference);
      let users = [];
      data.docs.forEach((doc) => {
        if (doc.data().shortHash) {
          if (doc.data().shortHash === shortHash) {
            users.push({ ...doc.data(), id: doc.id });
          }
        }
      });
      setDocument(users);
    };

    getLink();
  }, []);

  console.log(document)
  console.log(document.length > 0 ? window.location.href = document[0].longURL : null)



  return (
    <div>
      {/* {JSON.stringify(shortHash, null, 2)} */}
      <Box mt={5} display='flex' justifyContent='center'>
        <UseAnimations animation={loading2} size={75} />
        <h1>Redirecting</h1>
      </Box>
      {/* {document ?
        window.location.href = document[0].longURL
        :
        console.log('none')
      } */}
    </div>
  )
}

export default RedirectLink