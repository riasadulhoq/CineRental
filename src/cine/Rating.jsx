import Star from "../assets/star.svg";

export default function Rating({ value }) {
  const stars = new Array(value).fill(Star);
  // console.log(stars);
  return (
    <>
      {stars.map((star, index) => (
        <img key={index} src={star} width="14" height="14" alt="Star" />
      ))}
    </>
  );
}
