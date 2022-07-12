import { Typography, Button, Box } from "@material-ui/core"
import { BarChart } from "@material-ui/icons"



const LinkItem = ({id, createdAt, name, longURL, shortHash, numOfClicks}) => {
  return (
    <Box>
      <Box>
        <Typography>
          createdAt: {`${createdAt}`}
        </Typography>
        <Typography variant="h5">
          {name}
        </Typography>
        <Typography>
          {longURL}
        </Typography>
        <Box>
          <Typography>
             {window.location.hostname}/{shortHash}
          </Typography>
          <Button variant="outlined" size="small">Copy</Button>
        </Box>
        <Box display='flex'>
          <Typography>{numOfClicks}</Typography>
          <BarChart/>
        </Box>
        <Typography>Total Clicks</Typography>
      </Box>
    </Box>
  )
}

export default LinkItem