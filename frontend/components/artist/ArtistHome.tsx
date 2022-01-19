import { Typography } from "@mui/material";

interface Props {
  artistName: string;
}

const ArtistHome = (props: Props) => {
  return <Typography variant="h2">{props.artistName}</Typography>;
};

export default ArtistHome;
