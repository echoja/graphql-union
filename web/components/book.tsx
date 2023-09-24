interface NovelProps {
  title: string;
  author: string;
  genre: string;
}

export const Novel: React.FC<NovelProps> = ({ title, author, genre }) => {
  return (
    <div className="bg-yellow-200 rounded-lg shadow-md p-6 mb-6">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <div className="text-gray-600 mb-2">{author}</div>
      <div className="text-gray-600">{genre}</div>
    </div>
  );
};

interface ComicProps {
  title: string;
  author: string;
  illustrator: string;
}

export const Comic: React.FC<ComicProps> = ({ title, author, illustrator }) => {
  return (
    <div className="bg-blue-200 rounded-lg shadow-md p-6 mb-6">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <div className="text-gray-600 mb-2">{author}</div>
      <div className="text-gray-600">{illustrator}</div>
    </div>
  );
};

interface BiographyProps {
  title: string;
  author: string;
  subject: string;
}

export const Biography: React.FC<BiographyProps> = ({
  title,
  author,
  subject,
}) => {
  return (
    <div className="bg-gray-200 rounded-lg shadow-md p-6 mb-6">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <div className="text-gray-600 mb-2">{author}</div>
      <div className="text-gray-600">{subject}</div>
    </div>
  );
};
