import { Typography } from "@mui/material";

interface Props {
  artistName: string;
}

const ArtistHome = (props: Props) => {
  return <Typography variant="h4">{props.artistName}</Typography>;
};

export default ArtistHome;
