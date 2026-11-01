import { CardBody, CardFooter, CardHeader, CardMedia, CardRoot } from "./CardParts";

/** Card composto: `<Card>` + `Card.Media`, `Card.Header`, `Card.Body`, `Card.Footer`. */
export const Card = Object.assign(CardRoot, {
  Media: CardMedia,
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});
