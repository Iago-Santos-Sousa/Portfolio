import { CardBody, CardFooter, CardHeader, CardMedia, CardRoot } from "./CardParts";

export const Card = Object.assign(CardRoot, {
  Media: CardMedia,
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});
