import { Typography, Button, Box } from "@material-ui/core"
import { BarChart } from "@material-ui/icons"
import { memo } from "react"




const LinkItem = ({ id, createdAt, name, longURL, shortHash, numOfClicks, deleteLink, handleCopyLink }) => {
  const shortURL = `${window.location.host}/${shortHash}`

  return (
    <Box display='flex'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Box>
          <Typography variant="overline">
            {String(createdAt)}
          </Typography>
          <Box my={1}>
            <Typography variant="h5">
              {name}
            </Typography>
            <Typography>
              {longURL}
            </Typography>
          </Box>
          <Box mr={5} display='flex'>
            <Typography>
              {window.location.host}/{shortHash}
            </Typography>
            <Button
              onClick={() => handleCopyLink(shortURL)}
              variant="outlined"
              size="small"
              style={{ marginLeft: '20px', color: 'blue' }}>
              Copy
            </Button>
            <Button
              onClick={() => deleteLink(id)}
              variant="outlined"
              size="small"
              style={{ marginLeft: '20px', color: 'red' }}>
              Delete
            </Button>

          </Box>
        </Box>
        <Box display='flex'>
          <Typography>{numOfClicks}</Typography>
          <BarChart />
        </Box>
        <Typography>Total Clicks</Typography>
      </Box>
    </Box>
  )
}

export default memo(LinkItem)