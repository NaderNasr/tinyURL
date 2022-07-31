import { Box, Typography } from "@material-ui/core";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import UseAnimations from "react-useanimations";
import { db } from "../../firebase";
import loading2 from 'react-useanimations/lib/loading2'



const RedirectLink = () => {
  const [document, setDocument] = useState([]);
  const [loading, setLoading] = useState(false);

  const { shortHash } = useParams()
  const collectionReference = collection(db, 'users');

  useEffect(() => {
    const getLink = async () => {
      const data = await getDocs(collectionReference);
      let users = [];
      data.docs.forEach((doc) => {
        if (doc.data().shortHash) {
          if (doc.data().shortHash === shortHash) {
            users.push({ ...doc.data(), id: doc.id });
          }
        } else {

          return null
        }
      });
      setDocument(users);
    };
    getLink();
  }, [shortHash]);

  const link = () => {
    if (document.length > 0) {
      setLoading(false)
      return window.location.href = document[0].longURL
    }

  }

  link()

  const passed = <Box
    display='flex'
    flexDirection='column'
    alignItems='center'
    justifyContent='center'
    mt={5}>
    <UseAnimations animation={loading2} size={75} />
    <Typography>Redirecting...</Typography>
  </Box>

  return (
    <>
      {/* {JSON.stringify(shortHash, null, 2)} */}
      {!loading ? <Typography>Failed</Typography> : passed}
    </>
  )
}

export default RedirectLink