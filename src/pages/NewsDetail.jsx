import { useParams } from "react-router-dom";

const NewsDetail = () => {
  const { id } = useParams();
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">News Detail - {id}</h2>
      <p>یہاں پر تفصیل آئے گی...</p>
    </div>
  );
};

export default NewsDetail;
