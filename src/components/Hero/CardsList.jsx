import VideosCharacter from "../SVG/VideosCharacter";
import TestsCharacter from "../SVG/TestsCharacter";
import WorksheetsCharacter from "../SVG/WorksheetsCharacter";
import ChatCharacter from "../SVG/ChatCharacter";

const cardsData = [
  {
    title: "Videos",
    description: "Motiviert lernen",
    image: <VideosCharacter />,
  },
  {
    title: "Übungen",
    description: "Selbständig wiederholen",
    image: <TestsCharacter />,
  },
  {
    title: "Arbeitsblätter",
    description: "Optimal vorbereiten",
    image: <WorksheetsCharacter />,
  },
  { title: "Chat", description: "Motiviert lernen", image: <ChatCharacter /> },
];

const CardsList = () => {
  return (
    <div className="p-4 flex justify-center items-center mt-10 mb-16 ">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="w-full lg:w-[16.5rem] bg-white px-4 pt-4 pb-3 rounded-lg text-center shadow-lg"
          >
            <h4 className="mb-2 font-bold">{card.title}</h4>
            <p className="text-small mb-4">{card.description}</p>
            <div className="py-2 flex items-center justify-center h-[6.25rem] mb-6">
              {card.image}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsList;
