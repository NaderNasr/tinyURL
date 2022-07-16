import { Typography, Button, Box } from "@material-ui/core"
import { BarChart } from "@material-ui/icons"
import format from 'date-fns/format'



const LinkItem = ({ id, createdAt, name, longURL, shortHash, numOfClicks }) => {
  return (
    <Box display='flex'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Box>
          <Typography variant="overline">
            created at: {format(createdAt, 'd MMM y, HH:mm')}
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
              {window.location.hostname}/{shortHash}
            </Typography>
            <Button
              variant="outlined"
              size="small"
              style={{marginLeft:'20px', color:'blue'}}>
              Copy
            </Button>
            <Button
              variant="outlined"
              size="small"
              style={{marginLeft:'20px', color:'red'}}>
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

export default LinkItem