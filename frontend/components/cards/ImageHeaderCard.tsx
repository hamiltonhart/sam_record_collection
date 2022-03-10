import Image from "next/image";
import { Card } from "../global/styles/Containers";
import { CardHeading } from "../global/styles/Typography";

interface Props {
  imageSrc: string;
  backgroundColor?: string;
  height?: number;
  width?: number;
  cardTitle?: string;
  cardBody?: string;
  headingColor?: string;
  reverse?: boolean;
}

// The default is to have an Image followed by a Title and possibly a Body. Reverse will put the Title and Body before the Image.
export const ImageHeaderCard = (props: Props) => {
  return (
    <Card backgroundColor={props.backgroundColor || "var(--black)"}>
      {props.reverse ? (
        <>
          <div>
            {props.cardTitle && (
              <CardHeading color={props.headingColor}>
                {props.cardTitle}
              </CardHeading>
            )}
            {props.cardBody && <p>{props.cardBody || props.headingColor}</p>}
          </div>
          <Image
            src={props.imageSrc}
            width={props.width || 300}
            height={props.height || 300}
          />
        </>
      ) : (
        <>
          <Image
            src={props.imageSrc}
            width={props.width || 300}
            height={props.height || 300}
          />
          <div>
            {props.cardTitle && (
              <CardHeading color={props.headingColor}>
                {props.cardTitle}
              </CardHeading>
            )}
            {props.cardBody && <p>{props.cardBody || props.headingColor}</p>}
          </div>
        </>
      )}
    </Card>
  );
};
