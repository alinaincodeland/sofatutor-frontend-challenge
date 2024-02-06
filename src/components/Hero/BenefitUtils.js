import Chat from "../SVG/Chat";
import Videos from "../SVG/Videos";
import Tests from "../SVG/Tests";
import VocabularyTrainer from "../SVG/VocabularTrainer";
import Sofaheld from "../SVG/Sofaheld";
import Worksheets from "../SVG/Worksheets";
import Homework from "../SVG/Homework";

export function getBenefits(isGrey, additionalClass) {
  return [
    {
      icon: Videos,
      text: ["Lernvideos für alle", "Fächer & Klassen"],
      additionalClass: additionalClass,
    },
    {
      icon: Tests,
      text: ["Interaktive Übungen"],
      additionalClass: additionalClass,
    },
    {
      icon: Homework,
      text: ["Klassenarbeiten zum Üben"],
      additionalClass: additionalClass,
    },
    {
      icon: Sofaheld,
      text: ["Lernspiel Sofaheld", "(für die 1. bis 7. Klasse)"],
      additionalClass: additionalClass,
    },
    {
      icon: VocabularyTrainer,
      text: ["Vokabeltrainer"],
      additionalClass: additionalClass,
    },
    {
      icon: Worksheets,
      text: ["Arbeitsblätter"],
      isGrey: isGrey,
      additionalClass: additionalClass,
    },
    {
      icon: Chat,
      text: ["24h-Hilfe von Lehrer*innen"],
      isGrey: isGrey,
      additionalClass: additionalClass,
    },
  ];
}
