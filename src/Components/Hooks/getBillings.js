const getBillings = async () => {
  const res = await fetch("http://localhost:5000/api/billing-list");
  const data = res.json();
  return data;
};
export default getBillings;
